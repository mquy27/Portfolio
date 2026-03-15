import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Folder from './Folder';
import Masonry from './Masonry';
import img1 from "../assets/P7133263.JPEG"
import img2 from "../assets/PB295733.JPEG"
import img3 from "../assets/PC015744.JPEG"
import img5 from "../assets/P4151471.JPEG"
import img6 from "../assets/P8194728.JPEG"
import img7 from "../assets/P8314797.JPEG"
import img8 from "../assets/P9014923.JPEG"
import img9 from "../assets/fxn 2025-12-01 175047.778.JPEG"
import img10 from "../assets/fxn 2025-12-01 180733.331.JPEG"

const Hobby = () => {
    const [fetchedPhotos, setFetchedPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                // Fetch up to 15 recent photos for the background masonry
                const q = query(collection(db, 'photos'), orderBy('createdAt', 'desc'), limit(15));
                const querySnapshot = await getDocs(q);
                const docs = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        img: data.img, // these are Cloudinary URLs
                        height: data.height || (Math.floor(Math.random() * 300) + 400),
                        width: data.width || 800,
                    };
                });
                setFetchedPhotos(docs);
            } catch (error) {
                console.error("Error fetching photos for hobby section:", error);
            }
        };

        fetchPhotos();
    }, []);

    const folderItems = [
        <Link to="/photography" className="block w-full h-full"><img src={img1} alt="Album Cover 1" className="w-full h-full object-cover rounded-md" /></Link>,
        <Link to="/photography" className="block w-full h-full"><img src={img2} alt="Album Cover 2" className="w-full h-full object-cover rounded-md" /></Link>,
        <Link to="/photography" className="block w-full h-full"><img src={img3} alt="Album Cover 3" className="w-full h-full object-cover rounded-md" /></Link>,
    ];

    // Fallback static items if database is empty or loading
    const staticMasonryItems = useMemo(() => [
        { id: 's1', img: img1, height: 400 },
        { id: 's2', img: img2, height: 300 },
        { id: 's3', img: img3, height: 500 },
        { id: 's4', img: img5, height: 450 },
        { id: 's5', img: img6, height: 300 },
        { id: 's6', img: img7, height: 400 },
        { id: 's7', img: img8, height: 350 },
        { id: 's8', img: img9, height: 500 },
        { id: 's9', img: img10, height: 400 },
        { id: 's10', img: img1, height: 350 },
        { id: 's11', img: img5, height: 400 },
    ], []);

    const masonryItems = fetchedPhotos.length > 0 ? fetchedPhotos : staticMasonryItems;

    return (
        <section id="hobby" className="relative py-20 min-h-[400px] flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Background Masonry */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Masonry items={masonryItems} />

                <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-6xl w-full text-center">
                <div className="mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-cyan-600 mb-3 tracking-tight drop-shadow-sm">Through My Lens</h2>
                    <p className="text-gray-700 text-lg font-mono font-medium">A collection of my favorite moments captured through my lens.</p>
                </div>

                <div className="flex justify-center gap-10 mt-2">
                    <Folder
                        color="#FFB300"
                        size={1.5}
                        items={folderItems}
                    />
                </div>
            </div>
        </section>

    )
}

export default Hobby