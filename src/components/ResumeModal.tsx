import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl h-[85vh] bg-bg-dark border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-bg-dark z-10">
                            <div className="flex items-center gap-2 text-white font-medium">
                                <FileText className="w-5 h-5 text-neon-blue" />
                                <span>Amlanjyoti_Sahoo_Resume.pdf</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <a 
                                    href="https://drive.google.com/file/d/1tuKZlol0k8xyTiktVdqXwW3IjwTR6mLF/view?usp=sharing" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-white transition-colors uppercase font-mono tracking-wider border border-white/20 px-3 py-1.5 rounded hover:bg-white/5"
                                >
                                    <Download className="w-4 h-4" />
                                    <span className="hidden md:inline">Download</span>
                                </a>
                                <button 
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer using Google Drive Embed */}
                        <div className="flex-grow bg-gray-900 relative">
                             <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono animate-pulse">
                                Loading Document...
                             </div>
                             <iframe 
                                src="https://drive.google.com/file/d/1tuKZlol0k8xyTiktVdqXwW3IjwTR6mLF/preview" 
                                className="relative z-10 w-full h-full border-none"
                                title="Resume PDF"
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
