import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
}

const PARTICLE_COLORS = ['#6366f1', '#22d3ee', '#a78bfa', '#f472b6', '#34d399'];

const BackgroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        const particles: Particle[] = [];
        const CONNECTION_DIST = 130;
        const MAX_PARTICLES = 80;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const spawnParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.6 + 0.2,
            color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
            life: 0,
            maxLife: Math.random() * 400 + 200,
        });

        for (let i = 0; i < MAX_PARTICLES; i++) {
            particles.push(spawnParticle());
        }

        const tick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life++;

                // Wrap edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const lifeRatio = p.life / p.maxLife;
                const alpha = p.opacity * Math.sin(lifeRatio * Math.PI);

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
                ctx.fill();

                if (p.life >= p.maxLife) {
                    particles.splice(i, 1);
                    particles.push(spawnParticle());
                }
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DIST) {
                        const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animId = requestAnimationFrame(tick);
        };

        tick();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-dark">
            {/* Particle canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

            {/* Overlay for content readability */}
            <div className="absolute inset-0 bg-[#07090f]/50" />

            {/* Abstract animated Blobs */}
            <motion.div
                className="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] bg-neon-blue/12 rounded-full blur-[130px] animate-blob"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] bg-neon-purple/12 rounded-full blur-[110px] animate-blob animation-delay-2000"
                style={{ y: y2, rotate }}
            />
            <motion.div
                className="absolute -bottom-1/4 left-1/3 w-[800px] h-[800px] bg-neon-cyan/6 rounded-full blur-[120px] animate-blob animation-delay-4000"
                style={{ x: y1 }}
            />

            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-8"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Horizontal scan line */}
            <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
};

export default BackgroundCanvas;
