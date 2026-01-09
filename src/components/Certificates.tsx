import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';
import { X } from 'lucide-react';

// Import images directly to ensure they work with Vite's bundling
import googleCloudCert from '../assets/certificates/google_cloud_cert.png';
import awsCert from '../assets/certificates/aws_cert.png';
import ciscoCert from '../assets/certificates/cisco_cert.png';
import ltimindtreeCert from '../assets/certificates/ltimindtree_cert.png';

const certificates = [
    {
        id: 1,
        title: "Google Cloud Certificate",
        issuer: "Google Cloud",
        date: "2021",
        image: googleCloudCert,
        color: "from-blue-400 to-green-400"
    },
    {
        id: 2,
        title: "AWS Certified",
        issuer: "Amazon Web Services",
        date: "2021",
        image: awsCert,
        color: "from-yellow-400 to-orange-500"
    },
    {
        id: 3,
        title: "Cisco Networking",
        issuer: "Cisco",
        date: "2021",
        image: ciscoCert,
        color: "from-blue-600 to-cyan-400"
    },
    {
        id: 4,
        title: "Star Performer - Internship",
        issuer: "LTIMindtree",
        date: "2023",
        image: ltimindtreeCert,
        color: "from-blue-700 to-blue-900"
    }
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 relative z-10" id="certificates">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent">
                        Certifications & Awards
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        Professional milestones and technical competencies validated by industry leaders.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <TiltCard className="h-full bg-glass-dark border border-white/10 rounded-3xl overflow-hidden group relative hover:border-white/30 transition-all duration-500">
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Image Container */}
                                    <div 
                                        className="w-full md:w-1/2 p-6 flex items-center justify-center bg-black/20 relative overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedCert(cert)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <motion.img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-auto max-h-64 object-contain rounded-lg shadow-lg relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                                            layoutId={`cert-image-${cert.id}`}
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                           {/* Decorative Icon */}
                                           <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                               <path d="M12 15.321l-5.618 3.4 1.487-6.38L3 7.915l6.529-.567L12 1.5l2.471 5.848 6.529.567-4.869 4.426 1.487 6.38z" />
                                           </svg>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-neon-purple font-medium mb-4">{cert.issuer}</p>
                                        
                                        <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                                            <span className="text-gray-400 text-sm font-light">Issued {cert.date}</span>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setSelectedCert(cert)}
                                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            layoutId={`cert-image-${selectedCert.id}`}
                            className="relative max-w-4xl w-full bg-glass-dark border border-white/10 rounded-2xl overflow-hidden p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full h-auto rounded-xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                                <p className="text-neon-blue">{selectedCert.issuer}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
