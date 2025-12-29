import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Folder from './Folder';
import LogoLoop from './LogoLoop';
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
    const folderItems = [
        <Link to="/photography" className="block w-full h-full"><img src={img1} alt="" className="w-full h-full object-cover rounded-md" /></Link>,
        <Link to="/photography" className="block w-full h-full"><img src={img2} alt="" className="w-full h-full object-cover rounded-md" /></Link>,
        <Link to="/photography" className="block w-full h-full"><img src={img3} alt="" className="w-full h-full object-cover rounded-md" /></Link>,
    ];

    const masonryItems = useMemo(() => [
        { id: 1, img: img1, height: 400 },
        { id: 2, img: img2, height: 300 },
        { id: 3, img: img3, height: 500 },
        { id: 4, img: img5, height: 450 },
        { id: 5, img: img6, height: 300 },
        { id: 6, img: img7, height: 400 },
        { id: 7, img: img8, height: 350 },
        { id: 8, img: img9, height: 500 },
        { id: 10, img: img10, height: 400 },
        { id: 11, img: img1, height: 350 },
        { id: 12, img: img5, height: 400 },
    ], []);

    return (
        <section id="hobby" className="relative py-20 min-h-[400px] flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Background Masonry */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Masonry items={masonryItems} />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
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