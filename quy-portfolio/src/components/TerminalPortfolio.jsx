import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { Github, Linkedin, Mail, Facebook, Instagram, ArrowRight } from "lucide-react";
import ProfilePic from '../assets/profile-picture.jpeg';
import TextType from './TextType';
const TerminalPortfolio = () => {
    return (
        <div className='relative w-full h-[50vh] lg:h-[70vh] min-h-[400px] lg:w-[600px] xl:w-[680px] transition-all duration-1000 delay-1000 opacity-100 translate-y-0'>
            <section id="terminal" className='font-fira'>
                <div className='max-w-5xl mx-auto'>
                    <div className='relative w-full h-[575px] flex flex-col pt-14 pb-0 overflow-hidden bg-white rounded-xl'>
                        <div className='absolute top-0 left-0 w-full h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4 rounded-t-xl'>
                            <div className='flex items-center gap-5'>
                                <div className='hover:cursor-pointer flex gap-2'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-all'></div>
                                    <div className='w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-all'></div>
                                    <div className='w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-all'></div>
                                </div>
                                <div className='flex items-center gap-2 text-cyan-700 hover:cursor-pointer'>
                                    <Terminal className='w-4 h-4' />
                                    <p className='text-sm'>leminhquy737@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 overflow-y-auto w-full'>
                            <div className='p-8 mb-8 flex items-center justify-center w-full gap-7 border border-gray-100/50 rounded-xl' style={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.02), transparent)' }}>
                                <div className='flex flex-col md:flex-row gap-8 items-start w-full'>
                                    {/* profile image */}
                                    <div className='shrink-0 flex items-center justify-center w-full md:w-auto'>
                                        <div className='relative rounded-xl'>
                                            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-amber-500/30 rounded-xl blur-xl'></div>
                                            <div className='relative flex items-center justify-center flex-col gap-2 z-10'>
                                                <img src={ProfilePic} alt="Profile" className='w-48 h-55 rounded-xl object-cover' />
                                                <span className='text-center text-sm text-amber-700'>Lê Minh Quý</span>
                                                <div className='flex items-center gap-2'>
                                                    <Link to="https://www.facebook.com/LeeWuys" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer text-gray-500 hover:text-blue-700 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.6)] transition-all transform hover:scale-110'>
                                                        <Facebook className='w-5 h-5' />
                                                    </Link>
                                                    <Link to="https://www.instagram.com/qiys.lm/" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer text-gray-500 hover:text-pink-500 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all transform hover:scale-110'>
                                                        <Instagram className='w-5 h-5' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* profile info */}
                                    <div className='flex-1 w-full'>
                                        <div className='grid-cols-1 grid text-sm gap-2'>
                                            <div className='flex items-center gap-3 pb-2 border-b border-gray-100/50'>
                                                <span className='text-cyan-700 font-bold text-base px-3 py-0.5 rounded-lg bg-cyan-600/20 border border-cyan-600/20'>Hi</span>
                                                <span className='text-cyan-700 font-bold text-base'>Lê Minh Quý</span>
                                            </div>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-3'>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>OS</span>
                                                    <span className='text-sm text-gray-900'>Software Engineering</span>
                                                </div>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>loc</span>
                                                    <span className='text-sm text-gray-900'>HCM city, Viet Nam</span>
                                                </div>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>uptime</span>
                                                    <span className='text-sm text-amber-600'>70%</span>
                                                </div>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>shell</span>
                                                    <span className='text-sm text-gray-900'>zsh</span>
                                                </div>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>languages</span>
                                                    <span className='text-sm text-gray-900'>Eng, Vie</span>
                                                </div>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>CPU</span>
                                                </div>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>roles</span>
                                                    <span className='text-sm text-gray-900'>Frontend Developer</span>
                                                </div>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>languages</span>
                                                    <span className='text-sm text-gray-900'>Eng, Vie</span>
                                                </div>
                                                <div className='flex items-baseline md:col-span-2 gap-2'>
                                                    <span className='text-xs text-gray-500 uppercase'>Repo</span>
                                                    <Link to="https://github.com/mquy27" target="_blank" rel="noopener noreferrer" className='text-sm text-amber-600 transition-all transform'>Https://github.com/mquy27</Link>
                                                </div>
                                                <div className='flex items-baseline md:col-span-2 group'>
                                                    <div className='flex px-4 py-2 border border-gray-400/50 bg-gray-100/50 rounded-full items-center justify-between gap-2'>
                                                        <div className='relative flex items-center justify-center w-3 h-3'>
                                                            <div className='absolute inset-0 bg-green-500 rounded-full animate-ping opacity-50'></div>
                                                            <div className='relative w-2.5 h-2.5 bg-green-500 rounded-full'></div>
                                                        </div>
                                                        <span className='text-xs text-gray-500'>Available for Work</span>
                                                        <div className='w-3 h-3 -translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                                            <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                                                <g>
                                                                    <path fill="#FFFFD8" d="M24,248H8c-4.422,0-8,3.578-8,8s3.578,8,8,8h16c4.422,0,8-3.578,8-8S28.422,248,24,248z" />
                                                                    <path fill="#FFFFD8" d="M456,248H304c-0.226,0-0.449,0.015-0.67,0.034c-0.157-0.938-0.343-1.866-0.554-2.786c-1.212-5.294-3.295-10.254-6.098-14.72c-0.504-0.803-1.033-1.589-1.582-2.359c-3.104-4.352-6.913-8.161-11.265-11.265c-0.775-0.553-1.566-1.084-2.374-1.591c-4.462-2.798-9.416-4.878-14.705-6.089c-0.919-0.211-1.848-0.397-2.786-0.554c0.018-0.222,0.034-0.444,0.034-0.67V56c0-4.422-3.578-8-8-8s-8,3.578-8,8v152c0,0.226,0.015,0.449,0.034,0.67c-0.939,0.157-1.867,0.344-2.786,0.554c-5.288,1.211-10.242,3.291-14.704,6.089c-0.809,0.507-1.599,1.039-2.374,1.592c-4.352,3.104-8.161,6.913-11.265,11.265c-0.549,0.77-1.078,1.556-1.582,2.359c-2.803,4.466-4.886,9.426-6.098,14.72c-0.21,0.919-0.397,1.847-0.554,2.785c-0.222-0.018-0.444-0.034-0.67-0.034H56c-4.422,0-8,3.578-8,8s3.578,8,8,8h152c0.226,0,0.449-0.016,0.67-0.034c0.157,0.939,0.343,1.867,0.554,2.787c1.212,5.294,3.295,10.253,6.098,14.719c0.504,0.803,1.033,1.589,1.582,2.359c3.104,4.352,6.913,8.161,11.265,11.265c0.771,0.549,1.556,1.078,2.36,1.582c4.466,2.802,9.425,4.886,14.719,6.098c0.919,0.21,1.848,0.397,2.786,0.554c-0.018,0.221-0.034,0.444-0.034,0.67v152c0,4.422,3.578,8,8,8s8-3.578,8-8V304c0-0.226-0.016-0.449-0.034-0.67c0.939-0.157,1.867-0.344,2.786-0.554c5.294-1.212,10.253-3.295,14.719-6.098c0.803-0.504,1.589-1.033,2.36-1.582c4.352-3.104,8.161-6.913,11.265-11.265c0.549-0.771,1.078-1.556,1.582-2.359c2.803-4.466,4.886-9.425,6.098-14.719c0.211-0.919,0.397-1.848,0.554-2.787c0.221,0.018,0.444,0.034,0.67,0.034h152c4.422,0,8-3.578,8-8S460.422,248,456,248z" />
                                                                    <path fill="#FFFFD8" d="M504,248h-16c-4.422,0-8,3.578-8,8s3.578,8,8,8h16c4.422,0,8-3.578,8-8S508.422,248,504,248z" />
                                                                    <path fill="#FFFFD8" d="M256,480c-4.422,0-8,3.578-8,8v16c0,4.422,3.578,8,8,8s8-3.578,8-8v-16C264,483.578,260.422,480,256,480z" />
                                                                    <path fill="#FFFFD8" d="M256,32c4.422,0,8-3.578,8-8V8c0-4.422-3.578-8-8-8s-8,3.578-8,8v16C248,28.422,251.578,32,256,32z" />
                                                                    <path fill="#FFCF00" d="M228.169,216.904c-0.144-0.17-0.29-0.338-0.45-0.498L86.297,74.984c-3.125-3.125-8.188-3.125-11.313,0s-3.125,8.188,0,11.313l141.422,141.422c0.16,0.16,0.328,0.307,0.498,0.45C220.008,223.817,223.817,220.008,228.169,216.904z" />
                                                                    <path fill="#FFCF00" d="M283.831,295.096c0.144,0.17,0.29,0.338,0.45,0.498l141.422,141.422c1.563,1.563,3.609,2.344,5.656,2.344s4.094-0.781,5.656-2.344c3.125-3.125,3.125-8.188,0-11.313L295.594,284.281c-0.16-0.16-0.328-0.307-0.498-0.45C291.992,288.183,288.183,291.992,283.831,295.096z" />
                                                                    <path fill="#FFCF00" d="M216.904,283.831c-0.17,0.144-0.338,0.29-0.498,0.45L74.984,425.703c-3.125,3.125-3.125,8.188,0,11.313c1.563,1.563,3.609,2.344,5.656,2.344s4.094-0.781,5.656-2.344l141.422-141.422c0.16-0.16,0.307-0.328,0.45-0.498C223.817,291.992,220.008,288.183,216.904,283.831z" />
                                                                    <path fill="#FFCF00" d="M295.096,228.169c0.17-0.144,0.338-0.29,0.498-0.45L437.015,86.297c3.125-3.125,3.125-8.188,0-11.313s-8.188-3.125-11.313,0L284.281,216.406c-0.16,0.16-0.307,0.328-0.45,0.498C288.183,220.008,291.992,223.817,295.096,228.169z" />
                                                                    <path fill="#FF7400" d="M208.594,266.976L90.336,315.961c-4.078,1.688-6.016,6.367-4.328,10.453c1.273,3.078,4.258,4.938,7.391,4.938c1.023,0,2.063-0.195,3.063-0.609l118.258-48.984c0.208-0.086,0.407-0.185,0.604-0.286c-2.802-4.466-4.886-9.425-6.098-14.719C209.013,266.82,208.802,266.89,208.594,266.976z" />
                                                                    <path fill="#FF7400" d="M303.406,245.023l118.258-48.984c4.078-1.688,6.016-6.367,4.328-10.453c-1.688-4.078-6.391-6-10.453-4.328l-118.258,48.984c-0.208,0.086-0.407,0.185-0.603,0.286c2.803,4.466,4.886,9.426,6.098,14.72C302.987,245.181,303.198,245.11,303.406,245.023z" />
                                                                    <path fill="#FF7400" d="M297.281,281.758l118.258,48.984c1,0.414,2.039,0.609,3.063,0.609c3.133,0,6.117-1.859,7.391-4.938c1.688-4.086-0.25-8.766-4.328-10.453l-118.258-48.984c-0.208-0.086-0.419-0.156-0.63-0.224c-1.212,5.294-3.295,10.253-6.098,14.719C296.875,281.573,297.073,281.672,297.281,281.758z" />
                                                                    <path fill="#FF7400" d="M214.719,230.242L96.461,181.258c-4.063-1.672-8.766,0.242-10.453,4.328s0.25,8.766,4.328,10.453l118.258,48.984c0.208,0.086,0.419,0.157,0.63,0.225c1.212-5.294,3.295-10.254,6.098-14.72C215.125,230.427,214.927,230.328,214.719,230.242z" />
                                                                    <path fill="#FF7400" d="M245.023,208.594L196.039,90.336c-1.688-4.086-6.391-6.008-10.453-4.328c-4.078,1.688-6.016,6.367-4.328,10.453l48.984,118.258c0.086,0.209,0.199,0.397,0.301,0.594c4.462-2.798,9.416-4.878,14.704-6.089C245.18,209.013,245.109,208.802,245.023,208.594z" />
                                                                    <path fill="#FF7400" d="M266.977,303.406l48.984,118.258c1.273,3.078,4.258,4.938,7.391,4.938c1.023,0,2.063-0.195,3.063-0.609c4.078-1.688,6.016-6.367,4.328-10.453l-48.984-118.258c-0.086-0.208-0.185-0.406-0.286-0.603c-4.466,2.802-9.425,4.886-14.719,6.098C266.82,302.987,266.89,303.198,266.977,303.406z" />
                                                                    <path fill="#FF7400" d="M230.242,297.281l-48.984,118.258c-1.688,4.086,0.25,8.766,4.328,10.453c1,0.414,2.039,0.609,3.063,0.609c3.133,0,6.117-1.859,7.391-4.938l48.984-118.258c0.086-0.208,0.156-0.419,0.224-0.63c-5.294-1.212-10.253-3.295-14.719-6.098C230.427,296.874,230.328,297.073,230.242,297.281z" />
                                                                    <path fill="#FF7400" d="M281.758,214.719l48.984-118.258c1.688-4.086-0.25-8.766-4.328-10.453c-4.055-1.688-8.766,0.242-10.453,4.328l-48.984,118.258c-0.086,0.208-0.157,0.419-0.224,0.63c5.288,1.211,10.242,3.291,14.705,6.089C281.559,215.115,281.671,214.927,281.758,214.719z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:mb-10 flex flex-col gap-2'>
                                <span className='text-sm text-amber-600'>
                                    🌊 Eagerly seeking a Frontend Intern position to contribute and grow.
                                </span>
                                <div className='flex items-center gap-2 px-3 py-2 border border-gray-200/50 text-cyan-600 rounded-lg focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/50 transition-all text-sm'>
                                    <span className='font-bold'>~</span>
                                    <input
                                        type="text"
                                        className='bg-transparent outline-none border-none flex-1 text-gray-700 placeholder:text-gray-400 font-fira w-full'
                                        placeholder="Type a command..."
                                        autoComplete="off"
                                        spellCheck="false"
                                    />
                                </div>
                            </div>
                            <span className='text-xs font-light text-gray-500'>
                                ➜ guest@leminhquy:~$ hire --me
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TerminalPortfolio;
