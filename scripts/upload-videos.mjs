import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local if exists
const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
    console.log('Loading environment variables from .env.local');
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, ...rest] = line.split('=');
        const value = rest.join('=');
        if (key && value) {
            process.env[key.trim()] = value.trim().replace(/^"|"$/g, '');
        }
    });
}

// Configuration
const VIDEOS_DIR = path.resolve(__dirname, '../public/videos');
const OUTPUT_FILE = path.resolve(__dirname, '../video-urls.json');

// Supported extensions
const EXTENSIONS = ['.mp4', '.mov', '.webm', '.mkv', '.avi'];

async function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    }

    return arrayOfFiles;
}

async function uploadVideos() {
    console.log('Scanning for videos in:', VIDEOS_DIR);

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error('Error: BLOB_READ_WRITE_TOKEN environment variable is missing.');
        console.error('Please run "vercel env pull .env.local" to get your environment variables,');
        console.error('or set BLOB_READ_WRITE_TOKEN manually.');
        process.exit(1);
    }

    try {
        const allFiles = await getAllFiles(VIDEOS_DIR);
        const videoFiles = allFiles.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return EXTENSIONS.includes(ext);
        });

        if (videoFiles.length === 0) {
            console.log('No video files found.');
            return;
        }

        console.log(`Found ${videoFiles.length} videos to upload.`);

        const results = {};

        for (const file of videoFiles) {
            const relativePath = path.relative(VIDEOS_DIR, file);
            // Create a clean filename for the blob (e.g., 'videos/my-video.mp4')
            // Replacing backslashes with forward slashes for URL consistency
            const blobPath = `videos/${relativePath.replace(/\\/g, '/')}`;

            console.log(`Uploading: ${relativePath} -> ${blobPath}...`);

            const fileBuffer = fs.readFileSync(file);

            try {
                const blob = await put(blobPath, fileBuffer, {
                    access: 'public',
                    token: process.env.BLOB_READ_WRITE_TOKEN
                });

                console.log(`✅ Uploaded: ${blob.url}`);
                results[relativePath] = blob.url;
            } catch (err) {
                console.error(`❌ Failed to upload ${relativePath}:`, err.message);
            }
        }

        // Save results to a JSON file
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
        console.log(`\nAll done! URL mapping saved to: ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error:', error);
    }
}

uploadVideos();
