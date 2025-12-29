import React from 'react';
import { motion } from 'framer-motion';

const FlowingLines = () => {
    // Tạo 15 đường cong với các tham số khác nhau để tạo vẻ tự nhiên
    const lines = Array.from({ length: 15 }).map((_, i) => {
        const startY = 10 + i * 5; // Điểm bắt đầu rải đều theo trục Y bên trái
        const endY = 40 + i * 4;   // Điểm kết thúc rải đều bên phải

        // Tính toán các điểm điều khiển (Control Points) cho đường cong Bezier
        // Tạo đường cong chữ S mềm mại hoặc đường vòng cung nhẹ
        const cp1x = 30 + i * 2;
        const cp1y = startY - 20;
        const cp2x = 70 - i * 2;
        const cp2y = endY + 20;

        return {
            id: i,
            // Path SVG: M (Move to) -> C (Cubic Bezier to)
            // Vẽ từ trái (-10) sang phải (110) để phủ kín màn hình
            d: `M -10 ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, 110 ${endY}`,
            width: 0.5 + Math.random() * 0.5, // Độ dày ngẫu nhiên (mảnh)
            opacity: 0.3 + Math.random() * 0.3, // Độ mờ ngẫu nhiên
            duration: 4 + Math.random() * 3, // Thời gian animation
            delay: i * 0.2,
            gradientId: i % 3 // Chọn màu gradient (0, 1, 2)
        };
    });

    // Định nghĩa bộ màu Gradient phù hợp với theme (Cyan, Amber, Violet)
    const gradients = [
        { id: 0, from: "#06b6d4", to: "#3b82f6" }, // Cyan -> Blue (cho Tech)
        { id: 1, from: "#8b5cf6", to: "#ec4899" }, // Violet -> Pink (cho Creative)
        { id: 2, from: "#f59e0b", to: "#d97706" }  // Amber (cho Highlight)
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-60">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="grad-single" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                        <stop offset="10%" stopColor="#a78bfa" stopOpacity="1" />
                        <stop offset="90%" stopColor="#22d3ee" stopOpacity="1" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {lines.map((line) => (
                    <motion.path
                        key={line.id}
                        d={line.d}
                        fill="none"
                        stroke="url(#grad-single)"
                        strokeWidth="0.1"
                        strokeOpacity="1"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, pathOffset: 0 }}
                        animate={{
                            pathLength: [0.02, 0.05, 0.02], // Very short trails
                            pathOffset: [0, 1] // Move from start to end
                        }}
                        transition={{
                            duration: line.duration,
                            delay: line.delay,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: Math.random() // Random pause
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default FlowingLines;
