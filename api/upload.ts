import { put } from '@vercel/blob';

export const config = {
    runtime: 'edge', // Using Edge runtime for better performance
};

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename || !request.body) {
        return new Response('Filename and body required', { status: 400 });
    }

    try {
        const blob = await put(filename, request.body, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN, // Ensure token is used explicitly if needed, but SDK usually picks it up from env
        });

        return new Response(JSON.stringify(blob), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Upload failed' }), { status: 500 });
    }
}
