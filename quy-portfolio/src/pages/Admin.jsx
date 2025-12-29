import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp, getDocs, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Trash2, LogOut } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';

const Admin = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
            } else {
                fetchPhotos();
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const fetchPhotos = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, 'photos'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const photosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPhotos(photosData);
        } catch (error) {
            console.error("Error fetching photos: ", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUploadSuccess = async (url, data) => {
        // 'data' contains the full response from Cloudinary (width, height, etc.)
        try {
            await addDoc(collection(db, 'photos'), {
                img: url,
                width: data.width,
                height: data.height,
                createdAt: serverTimestamp(),
                name: data.original_filename || "Uploaded Image"
            });
            fetchPhotos(); // Refresh list
        } catch (error) {
            console.error("Error saving to Firestore:", error);
            alert("Image uploaded to Cloudinary, but failed to save to Database.");
        }
    };

    const handleDelete = async (photo) => {
        if (!window.confirm("Are you sure you want to delete this photo?")) return;
        try {
            await deleteDoc(doc(db, 'photos', photo.id));
            setPhotos(photos.filter(p => p.id !== photo.id));
        } catch (error) {
            console.error("Error deleting doc:", error);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50 font-mono px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
                        <LogOut size={20} /> Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Upload */}
                    <div className="lg:col-span-1">
                        <ImageUploader onUploadSuccess={handleUploadSuccess} />
                    </div>

                    {/* Right Column: Gallery */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-6">Manage Photos ({photos.length})</h2>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {photos.map(photo => (
                                    <div key={photo.id} className="relative group rounded-lg overflow-hidden border border-gray-200">
                                        <img src={photo.img} alt="uploaded" className="w-full h-32 object-cover" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button
                                                onClick={() => handleDelete(photo)}
                                                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] p-1 truncate">
                                            {photo.width}x{photo.height}
                                        </div>
                                    </div>
                                ))}
                                {photos.length === 0 && (
                                    <p className="text-gray-500 col-span-full text-center py-10">No photos found.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
