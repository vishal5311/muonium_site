import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';

export default function AvatarUpload() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="p-8 max-w-md mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 text-white">
            <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Upload Your Avatar
            </h1>

            <form
                className="space-y-4"
                onSubmit={async (event) => {
                    event.preventDefault();
                    setError(null);
                    setUploading(true);

                    if (!inputFileRef.current?.files) {
                        setError("No file selected");
                        setUploading(false);
                        return;
                    }

                    const file = inputFileRef.current.files[0];

                    try {
                        const response = await fetch(
                            `/api/upload?filename=${file.name}`,
                            {
                                method: 'POST',
                                body: file,
                            },
                        );

                        if (!response.ok) {
                            throw new Error('Upload failed');
                        }

                        const newBlob = (await response.json()) as PutBlobResult;
                        setBlob(newBlob);
                    } catch (e) {
                        setError(e instanceof Error ? e.message : "Upload failed");
                    } finally {
                        setUploading(false);
                    }
                }}
            >
                <div className="relative group">
                    <input
                        name="file"
                        ref={inputFileRef}
                        type="file"
                        accept="image/jpeg, image/png, image/webp"
                        required
                        className="block w-full text-sm text-gray-400
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-500 file:text-white
              hover:file:bg-blue-600 cursor-pointer"
                    />
                </div>

                <button
                    type="submit"
                    disabled={uploading}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>

                {error && (
                    <p className="text-red-400 text-sm mt-2">{error}</p>
                )}
            </form>

            {blob && (
                <div className="mt-6 p-4 bg-black/30 rounded-lg border border-white/5 overflow-hidden">
                    <p className="text-sm text-gray-400 mb-2">Upload successful!</p>
                    <div className="mb-2">
                        <img src={blob.url} alt="Uploaded blob" className="max-w-full h-auto rounded shadow-lg border border-white/10" />
                    </div>
                    <div className="text-xs text-gray-500 break-all">
                        Link: <a href={blob.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{blob.url}</a>
                    </div>
                </div>
            )}
        </div>
    );
}
