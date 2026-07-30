import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundCanvas = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-dark">
            {/* Overlay for content readability */}
            <div className="absolute inset-0 bg-[#07090f]/60 backdrop-blur-[2px]" />

            {/* Abstract animated Blobs */}
            <motion.div
                className="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] bg-neon-blue/15 rounded-full blur-[130px] animate-blob"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] bg-neon-purple/15 rounded-full blur-[110px] animate-blob animation-delay-2000"
                style={{ y: y2, rotate }}
            />
            <motion.div
                className="absolute -bottom-1/4 left-1/3 w-[800px] h-[800px] bg-neon-cyan/8 rounded-full blur-[120px] animate-blob animation-delay-4000"
                style={{ x: y1 }}
            />

            {/* Grid Pattern with fade */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.4) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};

export default BackgroundCanvas;
