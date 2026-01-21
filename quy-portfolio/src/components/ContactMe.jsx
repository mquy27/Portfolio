import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
                    <h2 className="text-4xl md:text-5xl font-mono font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-amber-600 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 text-lg font-mono max-w-2xl mx-auto">
                        Leave a message if you want to collaborate or just say hi!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
                            <h3 className="text-2xl font-semibold mb-6 font-mono text-amber-500">Contact Info</h3>
                            <div className="space-y-6">
                                <a href="mailto:leminhquy737@gmail.com" className="flex items-center space-x-4 text-gray-600 hover:text-red-600 duration-300 transition-all">
                                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium font-mono text-gray-500">Email</p>
                                        <p className="text-lg font-semibold font-mono">leminhquy737@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+84387804055" className="flex items-center space-x-4 text-gray-600 hover:text-green-600 duration-300 transition-all">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium font-mono text-gray-500">Phone</p>
                                        <p className="text-lg font-semibold font-mono">+84 387 804 055</p>
                                    </div>
                                </a>

                                <div className="flex items-center space-x-4 text-gray-600 hover:text-sky-600 duration-300 transition-all">
                                    <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium font-mono text-gray-500">Address</p>
                                        <p className="text-lg font-semibold font-mono">Ho Chi Minh City, Vietnam</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="h-48 w-full rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.085180888645!2d106.70841557480536!3d10.804787889345759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291729f7a5e1%3A0x3f59724de8e119a2!2zNDA1LzQ3IFjDtCBWaeG6v3QgTmdo4buHIFTEqW5oLCBQaMaw4budbmcgMTQsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1765948023065!5m2!1svi!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white/80 backdrop-blur-md shadow-xl border border-white/20"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
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
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
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
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
