import React, { useEffect, useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebaseConfig';
import Masonry from '../components/Masonry';
import ImageUploader from '../components/ImageUploader';

const Photography = () => {
    const navigate = useNavigate();
    const [fetchedPhotos, setFetchedPhotos] = useState([]);
    const [user, setUser] = useState(null);

    const fetchPhotos = async () => {
        try {
            const q = query(collection(db, 'photos'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const docs = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    img: data.img,
                    height: data.height || (Math.floor(Math.random() * 300) + 500),
                    width: data.width || 800,
                    title: data.name
                };
            });
            setFetchedPhotos(docs);
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };

    useEffect(() => {
        fetchPhotos();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleUploadSuccess = async (url, data) => {
        try {
            await addDoc(collection(db, 'photos'), {
                img: url,
                width: data.width,
                height: data.height,
                createdAt: serverTimestamp(),
                name: data.original_filename || "Uploaded Image"
            });
            fetchPhotos(); // Refresh list immediately
        } catch (error) {
            console.error("Error saving to Firestore:", error);
            alert("Image uploaded to Cloudinary, but failed to save to Database.");
        }
    };

    const handleDeletePhoto = async (photoId) => {
        try {
            await deleteDoc(doc(db, 'photos', photoId));
            setFetchedPhotos(prev => prev.filter(photo => photo.id !== photoId));
        } catch (error) {
            console.error("Error deleting photo:", error);
            alert("Failed to delete photo.");
        }
    };

    const masonryItems = React.useMemo(() => {
        const items = [...fetchedPhotos];
        if (user) {
            items.push({
                id: 'uploader',
                height: 700, // Approximate height of the uploader card
                width: 500, // Standard width for column calc
                node: (
                    <div className="flex items-center justify-center">
                        <div className="w-full">
                            <ImageUploader onUploadSuccess={handleUploadSuccess} />
                        </div>
                    </div>
                )
            });
        }
        return items;
    }, [fetchedPhotos, user]);

    return (
        <div className="min-h-screen bg-linear-to-b from-amber-50 via-orange-50 to-yellow-100 text-white p-8 relative">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-400 hover:text-amber-600 transition-colors group z-50 relative cursor-pointer"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-lg">Back to Home</span>
                    </button>

                    <h1 className="text-4xl font-bold font-mono bg-linear-to-r from-sky-400 via-pink-300 to-amber-600 bg-clip-text text-transparent">
                        My favorite hobby
                    </h1>
                    <div className="w-24"></div>
                </header>

                <div className="w-full h-[2000px] mt-10">
                    <Masonry
                        items={masonryItems}
                        config={{
                            columns: [1, 2, 3, 4],
                            gap: [24, 12, 12, 12],
                            media: [640, 768, 1024, 1280],
                        }}
                        onDelete={handleDeletePhoto}
                        canDelete={!!user}
                    />
                </div>
            </div>
        </div>
    );
};

export default Photography;
