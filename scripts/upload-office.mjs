import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

async function uploadOfficeVideo() {
    const videoPath = path.resolve(__dirname, '../public/videos/gaming/OFFICE_OUT.mp4');

    if (!fs.existsSync(videoPath)) {
        console.error('Error: OFFICE_OUT.mp4 not found at:', videoPath);
        process.exit(1);
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error('Error: BLOB_READ_WRITE_TOKEN environment variable is missing.');
        process.exit(1);
    }

    try {
        console.log('Uploading OFFICE_OUT.mp4...');
        const fileBuffer = fs.readFileSync(videoPath);

        const blob = await put('OFFICE_OUT.mp4', fileBuffer, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN
        });

        console.log('✅ Upload successful!');
        console.log('URL:', blob.url);
        console.log('\nUpdate your Gaming.tsx with this URL:');
        console.log(`videoUrl: "${blob.url}"`);
    } catch (error) {
        console.error('❌ Upload failed:', error.message);
        process.exit(1);
    }
}

uploadOfficeVideo();
