import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubStats = () => {
    // Cấu hình màu sắc cho các ô đóng góp (tuỳ chỉnh theo ý thích)
    const theme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#26a641', '#39d353', '#4df36d'],
    };

    return (
        <section className="py-10 bg-white relative z-10">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto p-8 bg-[#0d0d0d] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-outfit">
                                <span className="text-green-500">●</span> My GitHub Contributions
                            </h3>
                            <p className="text-gray-400 text-sm mt-1 font-outfit">Tracking my daily coding activity and open-source journey</p>
                        </div>
                        <a
                            href="https://github.com/mquy27"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-all text-sm font-medium"
                        >
                            View Profile
                        </a>
                    </div>

                    {/* Bản đồ Contributions */}
                    <div className="flex justify-center overflow-x-auto pb-4 custom-scrollbar">
                        <GitHubCalendar
                            username="mquy27" // Đảm bảo đây là username chính xác của bạn
                            blockSize={12}
                            blockMargin={5}
                            fontSize={14}
                            theme={theme}
                            colorScheme="light"
                        />
                    </div>

                    {/* Thống kê bổ sung */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-8">
                        <div className="text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total</p>
                            <p className="text-xl font-bold text-white font-outfit">200+ Contributions</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Current Streak</p>
                            <p className="text-xl font-bold text-green-500 font-outfit">Active</p>
                        </div>
                        <div className="text-center md:col-span-2 text-gray-400 text-xs italic flex items-end justify-center md:justify-end">
                            * Data fetched via GitHub API
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubStats;
