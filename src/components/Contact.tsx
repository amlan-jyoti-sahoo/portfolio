import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Loader2, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'success' | 'error' | null>(null);
    const [mobileError, setMobileError] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsLoading(true);
        setStatus(null);
        setMobileError(null);

        // Get form data
        const formData = new FormData(form.current);
        const userName = formData.get('user_name') as string;
        const userEmail = formData.get('user_email') as string;
        
        // Handle split mobile input
        const countryCode = formData.get('country_code') as string;
        const mobileNum = formData.get('mobile_number') as string;
        const mobile = mobileNum ? `${countryCode} ${mobileNum}` : "";

        // Form data already grabbed above


        const originalMessage = formData.get('message') as string;

        // Construct the full message with details prepended
        const fullMessage = `

--- Contact Details ---
Name: ${userName}
Email: ${userEmail}
Mobile: ${mobile || 'Not provided'}
---------------------

Message:
${originalMessage}
        `.trim();

        // Prepare template parameters
        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            message: fullMessage,
        };

        // These should be in your .env file
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id_placeholder';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id_placeholder';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                setStatus('success');
                form.current?.reset();
            }, (error) => {
                console.error("EmailJS Error:", error.text);
                setStatus('error');
            })
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative px-6">
            <div className="max-w-xl w-full relative z-10">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden"
                 >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-[50px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/10 blur-[50px] pointer-events-none" />

                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 relative z-10">
                        <Mail className="text-neon-blue animate-pulse" />
                        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                        <div className="ml-auto text-xs font-mono text-gray-500 hidden sm:block">STATUS: OPEN_FOR_WORK</div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs text-neon-blue font-mono uppercase">Name</label>
                                <input 
                                    type="text" 
                                    name="user_name"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg text-white p-3 focus:outline-none focus:border-neon-blue transition-colors font-mono placeholder-white/20"
                                    placeholder="John Doe"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs text-neon-purple font-mono uppercase">Email</label>
                                <input 
                                    type="email" 
                                    name="user_email"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg text-white p-3 focus:outline-none focus:border-neon-purple transition-colors font-mono placeholder-white/20"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-neon-cyan font-mono uppercase flex items-center gap-2">
                                <Phone size={12} /> Mobile Number <span className="text-gray-500 normal-case">(Optional)</span>
                            </label>
                            <div className="flex gap-2">
                                <input 
                                    type="tel" 
                                    name="country_code"
                                    defaultValue="+91"
                                    maxLength={5}
                                    className="w-24 bg-black/40 border border-white/10 rounded-lg text-white p-3 focus:outline-none focus:border-neon-cyan transition-colors font-mono placeholder-white/20 text-center"
                                />
                                <input 
                                    type="tel" 
                                    name="mobile_number"
                                    maxLength={10}
                                    className={`flex-1 bg-black/40 border ${mobileError ? 'border-red-500' : 'border-white/10'} rounded-lg text-white p-3 focus:outline-none focus:border-neon-cyan transition-colors font-mono placeholder-white/20`}
                                    placeholder="1234567890"
                                    onChange={(e) => {
                                        setMobileError(null);
                                        // Remove non-digit characters
                                        e.target.value = e.target.value.replace(/\D/g, '');
                                    }}
                                />
                            </div>
                            {mobileError && (
                                <span className="text-red-400 text-xs flex items-center gap-1 mt-1">
                                    <AlertCircle size={10} /> {mobileError}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-neon-pink font-mono uppercase">Message</label>
                            <textarea 
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-black/40 border border-white/10 rounded-lg text-white p-3 focus:outline-none focus:border-neon-pink transition-colors font-mono resize-none placeholder-white/20"
                                placeholder="Let's build something amazing..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full py-4 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue font-bold rounded-lg uppercase tracking-widest hover:bg-neon-blue hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    Send Message
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 flex items-center gap-2 text-sm justify-center"
                                >
                                    <CheckCircle size={16} />
                                    Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 flex items-center gap-2 text-sm justify-center"
                                >
                                    <AlertCircle size={16} />
                                    Failed to send message. Please try again or email directly.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                 </motion.div>
            </div>
        </section>
    );
};
export default Contact;
