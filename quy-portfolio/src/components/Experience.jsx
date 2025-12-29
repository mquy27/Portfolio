import { useEffect, useState, useRef } from 'react';
import { db, auth } from '../firebaseConfig';
import { collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { MapPin } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { div } from 'framer-motion/client';
import FlowingLines from './FlowingLines';

const ExperienceTimeline = ({ experiences }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={ref} className="relative max-w-4xl mx-auto space-y-12 pl-8 md:pl-16">
            {/* Timeline Line Background */}
            <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[4px] bg-gray-200 rounded-full"></div>

            {/* Timeline Line Progress */}
            <motion.div
                style={{ scaleY: scaleY }}
                className="absolute left-2 md:left-4 top-0 bottom-0 w-[4px] bg-linear-to-b from-sky-300 to-rose-300 origin-top rounded-full"
            ></motion.div>

            {experiences.map((exp, index) => (
                <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                >

                    <motion.div
                        whileHover={{ y: -5, scale: 1.01 }}
                        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500 relative group"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 font-mono">{exp.role}</h3>
                                <h4 className="text-lg text-amber-600 font-semibold">{exp.company}</h4>
                            </div>
                            <span className="mt-2 md:mt-0 px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold font-mono">
                                {exp.period}
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center justify-start gap-2">
                            {Array.isArray(exp.techstacks) ? (
                                <div className="flex flex-wrap items-center justify-start gap-2">
                                    {exp.techstacks.map((tech, idx) => (
                                        <p key={idx} className="text-white text-sm font-mono bg-amber-500 px-2 py-0.5 rounded-full">
                                            {tech}
                                        </p>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-600 font-mono border-l-2 border-gray-300 pl-4">
                                    {exp.techstacks}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            {Array.isArray(exp.description) ? (
                                <ul className="list-disc list-inside text-gray-600 font-mono leading-relaxed space-y-1">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-600 font-mono leading-relaxed whitespace-pre-line">
                                    {exp.description}
                                </p>
                            )}

                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                {exp.location && (
                                    <div className="flex items-center gap-2 text-gray-600 font-mono">
                                        <MapPin size={16} className="text-amber-600" />
                                        <span>{exp.location}</span>
                                    </div>
                                )}

                                {exp.gpa && (
                                    <p className="text-gray-600 font-mono border-l-2 border-gray-300 pl-4">
                                        GPA: <span className="text-amber-600 font-bold">{exp.gpa}</span>/4.0
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
            {experiences.length === 0 && (
                <p className="text-center text-gray-500 font-mono italic pt-10">No experiences added yet.</p>
            )}
        </div>
    );
};

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        location: '',
        period: '',
        gpa: '',
        year: new Date().getFullYear(),
        description: ''
    });

    // Fetch Data Function
    const fetchExperiences = async () => {
        try {
            const q = query(collection(db, "experiences"), orderBy("year", "desc"));
            const querySnapshot = await getDocs(q);
            const expList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setExperiences(expList);
        } catch (error) {
            console.error("Error fetching experiences: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperiences();

        // Check Auth State
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Handle Form Input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const descArray = formData.description.split('\n').filter(line => line.trim() !== '');
            await addDoc(collection(db, "experiences"), {
                ...formData,
                description: descArray
            });
            alert("Experience added successfully!");
            setFormData({ role: '', company: '', location: '', period: '', gpa: '', year: new Date().getFullYear(), description: '' });
            setShowForm(false);
            fetchExperiences(); // Refresh list
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to add experience");
        }
    };

    if (loading) {
        return <div className="py-20 text-center font-mono">Loading experiences...</div>;
    }

    return (
        <section id="experience" className="py-20 bg-white relative overflow-hidden">
            <FlowingLines />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-cyan-600 tracking-wide uppercase mb-4 block">Experiences and Educations</h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 font-mono border-b border-cyan-600 pb-4">
                        My journey and milestones.
                    </p>

                    {/* Admin Add Button */}
                    {user && (
                        <div className="mt-6">
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
                            >
                                {showForm ? 'Cancel' : '+ Add New Experience'}
                            </button>
                        </div>
                    )}
                </div>

                {user && showForm && (
                    <div className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-xl shadow-xl border border-amber-200">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">New Experience</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input className="border p-2 rounded" name="role" placeholder="Role (e.g. Dev)" value={formData.role} onChange={handleChange} required />
                                <input className="border p-2 rounded" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
                                <input className="border p-2 rounded" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                                <input className="border p-2 rounded" name="period" placeholder="Period (2023-2024)" value={formData.period} onChange={handleChange} required />
                                <input type="number" className="border p-2 rounded" name="gpa" placeholder="GPA (e.g. 4.0)" value={formData.gpa} onChange={handleChange} />
                                <input type="number" className="border p-2 rounded" name="year" placeholder="Year (Sort)" value={formData.year} onChange={handleChange} />
                            </div>
                            <textarea className="w-full border p-2 rounded" rows="3" name="description" placeholder="Description..." value={formData.description} onChange={handleChange} required></textarea>
                            <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-2 rounded hover:bg-cyan-700">Save Experience</button>
                        </form>
                    </div>
                )}

                <ExperienceTimeline experiences={experiences} />
            </div>
        </section>
    );
};

export default Experience;
