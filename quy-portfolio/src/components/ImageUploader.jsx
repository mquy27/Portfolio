import React, { useState } from 'react';
import axios from 'axios';
import { Loader2, Copy, Check, UploadCloud } from 'lucide-react';

const ImageUploader = ({ onUploadSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const handleFileChange = async (e) => {
        const image = e.target.files[0];
        if (!image) return;

        setLoading(true);
        setError("");
        setUploadedUrl("");

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", UPLOAD_PRESET);
        // formData.append("folder", "portfolio"); // Optional: Organize in a folder

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                formData
            );

            const url = response.data.secure_url;
            setUploadedUrl(url);

            // If a callback is provided (e.g. to save to database), call it
            if (onUploadSuccess) {
                onUploadSuccess(url, response.data);
            }

        } catch (err) {
            console.error("Upload error:", err);
            setError("Failed to upload image. Please check your Cloud Name and Upload Preset.");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(uploadedUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-md max-h mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-cyan-500" />
                Upload to Cloudinary
            </h3>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
                <input
                    type="file"
                    onClick={(e) => e.stopPropagation()}
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-cyan-50 file:text-cyan-700
                        hover:file:bg-cyan-100
                        cursor-pointer"
                    disabled={loading}
                />

                {loading && (
                    <div className="mt-4 flex items-center justify-center text-cyan-600">
                        <Loader2 className="animate-spin mr-2" />
                        <span>Uploading...</span>
                    </div>
                )}
            </div>

            {error && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}

            {uploadedUrl && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 animate-in fade-in duration-300">
                    <p className="text-sm text-green-800 font-medium mb-2">Upload Successful!</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            readOnly
                            value={uploadedUrl}
                            className="flex-1 p-2 text-xs border rounded bg-white text-gray-600 focus:outline-none"
                        />
                        <button
                            onClick={copyToClipboard}
                            className="p-2 hover:bg-green-200 rounded-md transition-colors text-green-700"
                            title="Copy URL"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </div>
                    <img src={uploadedUrl} alt="Preview" className="mt-3 h-32 object-contain rounded-md border border-green-200 bg-white" />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;