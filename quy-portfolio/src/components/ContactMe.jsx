import React, { useRef, useState } from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, TriangleRight, Loader2 } from 'lucide-react';

const ContactMe = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (SERVICE_ID === undefined || TEMPLATE_ID === undefined || PUBLIC_KEY === undefined) {
            setTimeout(() => {
                setLoading(false);
                setStatus('error');
                alert("EmailJS is not configured! Please update Service ID, Template ID, and Public Key in the code.");
            }, 1000);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                setLoading(false);
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.error(error.text);
                setLoading(false);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-20 bg-linear-to-br from-white to-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-outfit font-light bg-clip-text mb-4 uppercase">
                        From ideas to <span className="text-amber-500 font-semibold">reality</span>
                        <br />
                        Let's make everything <span className='text-amber-500 font-semibold'>possible!</span>
                    </h2>
                </motion.div>

                <div className="relative flex flex-col md:flex-row gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8 w-full flex-1"
                    >
                        <div className="relative w-full flex flex-col bg-white/80 rounded-xl min-h-[300px] shadow-sm">
                            <div className="absolute top-0 left-0 w-full h-12 bg-gray-100 rounded-t-xl border-b border-gray-200  flex items-center z-10">
                                <div className='flex gap-5 items-center justify-between w-full mx-4'>
                                    <div className="flex items-center gap-2 hover:cursor-pointer">
                                        <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition-all duration-300"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:scale-110 transition-all duration-300"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition-all duration-300"></div>
                                    </div>
                                    <div className='flex items-center gap-2 text-amber-600 hover:cursor-pointer'>
                                        <Terminal className='w-4 h-4' />
                                        <span className='text-xs md:text-sm font-fira'>contact_information.json</span>
                                    </div>
                                </div>
                            </div>
                            <div className='p-6 mt-10 flex overflow-x-auto bg-white/40 border-t border-gray-100/50 flex-1 rounded-b-xl'>
                                <div className='w-10 shrink-0 text-right pr-4 text-gray-400 select-none text-sm leading-7 font-mono border-r border-gray-200'>
                                    {Array.from({ length: 11 }).map((_, i) => (
                                        <div key={i}>{i + 1}</div>
                                    ))}
                                </div>
                                <div className='pl-6 font-mono text-sm leading-7 whitespace-pre text-gray-700 w-full'>
                                    <span className="text-amber-500">{"{"}</span>
                                    <br />
                                    {'  '}<span className="text-cyan-600">"name"</span>: <span className="text-gray-800">"Lê Minh Quý"</span>,
                                    <br />
                                    {'  '}<span className="text-cyan-600">"role"</span>: <span className="text-gray-800">"Frontend Developer"</span>,
                                    <br />
                                    {'  '}<span className="text-cyan-600">"email"</span>: <span className="text-gray-800">"leminhquy737@gmail.com"</span>,
                                    <br />
                                    {'  '}<span className="text-cyan-600">"phone"</span>: <span className="text-gray-800">"+84 387 804 055"</span>,
                                    <br />
                                    {'  '}<span className="text-cyan-600">"location"</span>: <span className="text-gray-800">"Ho Chi Minh City, Viet Nam"</span>,
                                    <br />
                                    {'  '}<span className="text-cyan-600">"socials"</span>: <span className="text-amber-500">{"{"}</span>
                                    <br />
                                    {'    '}<span className="text-cyan-600">"github"</span>: <a href="https://github.com/mquy27" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline cursor-pointer">"https://github.com/mquy27"</a>,
                                    <br />
                                    {'    '}<span className="text-cyan-600">"linkedin"</span>: <a href="https://linkedin.com/in/mquy2702" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline cursor-pointer">"https://linkedin.com/in/mquy27"</a>,
                                    <br />
                                    {'  '}<span className="text-amber-500">{"}"}</span>
                                    <br />
                                    <span className="text-amber-500">{"}"}</span>
                                </div>
                            </div>
                        </div>



                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full flex-1"
                    >
                        <div className="relative w-full flex flex-col bg-white/80 rounded-xl min-h-[300px] shadow-xl">
                            <div className="absolute top-0 left-0 w-full h-12 bg-gray-100 rounded-t-xl border-b border-gray-200  flex items-center z-10">
                                <div className='flex gap-5 items-center justify-between w-full mx-4'>
                                    <div className="flex items-center gap-2 hover:cursor-pointer">
                                        <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition-all duration-300"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:scale-110 transition-all duration-300"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition-all duration-300"></div>
                                    </div>
                                    <div className='flex items-center gap-2 text-amber-600 hover:cursor-pointer'>
                                        <Terminal className='w-4 h-4' />
                                        <span className='text-xs md:text-sm font-fira'>send_message.js</span>
                                    </div>
                                </div>
                            </div>
                            <div className='p-6 mt-10 flex overflow-x-auto bg-white/40 border-t border-gray-100/50 flex-1 rounded-b-xl'>
                                <div className='w-10 shrink-0 text-right pr-4 text-gray-400 select-none text-sm leading-7 font-mono border-r border-gray-200'>
                                    {Array.from({ length: 14 }).map((_, i) => (
                                        <div key={i}>{i + 1}</div>
                                    ))}
                                </div>
                                <form ref={formRef} onSubmit={handleSubmit} className='pl-6 font-mono text-sm leading-7 whitespace-pre text-gray-700 w-full'>
                                    <span className='text-gray-400'>// Run this to send me a message</span>
                                    <br />
                                    <span className="text-amber-500"><span className='text-rose-800'>const</span> message <span className='text-slate-700'>=</span> <span className='text-rose-800'>async</span> ()<span className='text-rose-800'> {"=>"}</span> {"{"}</span>
                                    <br />
                                    {'  '}<span className="text-cyan-600"><span className='text-rose-800'>const</span> name</span> = "<input type="text" name='user_name' required placeholder='Your Name' className='outline-none bg-transparent' />";
                                    <br />
                                    {'  '}<span className="text-cyan-600"><span className='text-rose-800'>const</span> email</span> = "<input type="email" name='user_email' required placeholder='your@email.com' className='outline-none bg-transparent' />";
                                    <br />
                                    {'  '}<span className="text-amber-500"><span className='text-rose-800'>await</span> <span className='text-cyan-600'>api</span><span className='text-black'>.</span><span className='text-amber-500'>submit</span></span> <span className='text-amber-500'>{"({"}</span>
                                    <br />
                                    {'  '}<span className="text-rose-800 ml-4">name <span className='text-slate-700'>:</span> name</span>,
                                    <br />
                                    {'  '}<span className="text-rose-800 ml-4">email <span className='text-slate-700'>:</span> email</span>,
                                    <br />
                                    {'  '}<span className="text-cyan-600 ml-4"><span className='text-rose-800'>message</span> <span className='text-slate-700'>: </span><span className='text-amber-500'>{"`"}</span></span>
                                    <br />
                                    {'  '}<textarea name='message' className='ml-4 border-l-2 border-gray-500/50 w-[90%] outline-amber-800' placeholder='Type your message here...' />
                                    <br />
                                    <span className='ml-4 text-amber-500'>{'`'}</span>
                                    <br />
                                    <span className="text-amber-500">{"}"}</span>
                                    <br />
                                    <button type='submit' disabled={loading} className='text-amber-600 flex items-center gap-2 justify-center px-3 py-1 border-amber-500/70 hover:bg-amber-500/60 border rounded-md bg-amber-100/50 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300'>
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                    {/* status message */}
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center mt-2 text-green-600"
                                        >
                                            <CheckCircle size={20} />
                                            <span className="font-medium">Message sent successfully!</span>
                                        </motion.div>
                                    )}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center mt-2 text-red-600"
                                        >
                                            <AlertCircle size={20} />
                                            <span className="font-medium">Error occurred. Please try again later.</span>
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </div>
                        {/* <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-100 rounded-tr-full -ml-10 -mb-10 opacity-50 pointer-events-none"></div>

                        <form ref={formRef} onSubmit={handleSubmit} className=" relative z-10 space-y-4">
                            <h2 className="text-4xl font-mono font-bold text-amber-500">Contact Me</h2>
                            <div className="space-y-2">
                                <label htmlFor="user_name" className="text-sm font-mono font-medium text-gray-700 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-300 placeholder-gray-400"
                                    placeholder="Jason Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-mono font-medium text-gray-700 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-300 placeholder-gray-400"
                                    placeholder="email@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono font-medium text-gray-700 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-300 placeholder-gray-400 resize-none"
                                    placeholder="What do you want to say to me?..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-linear-to-r from-amber-200 to-amber-600 hover:from-amber-300 hover:to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button> */}

                        {/* Status Messages */}
                        {/* {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200"
                            >
                                <CheckCircle size={20} />
                                <span className="font-medium">Message sent successfully!</span>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200"
                            >
                                <AlertCircle size={20} />
                                <span className="font-medium">Error occurred. Please try again later.</span>
                            </motion.div>
                        )}
                    </form> */}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default ContactMe;
