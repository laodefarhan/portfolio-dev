'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { InstagramIcon, TikTokIcon, GitHubIcon, Linkedin } from '@/components/icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { icon: InstagramIcon, href: 'https://instagram.com/laodefarhan_', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@l.f.fadilah_', label: 'TikTok' },
    { icon: GitHubIcon, href: 'https://github.com/laodefarhan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/laode-farhan-fadilah-195a35368', label: 'Linkedin' },
];

export function HeroSection() {
    const [typedText, setTypedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const words = useMemo(() => ['Full Stack Developer', 'Creative Freelancer', 'Problem Solver'], []);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    // Set mounted flag on client side only
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const handleTyping = () => {
            const currentWord = words[currentWordIndex];

            if (isDeleting) {
                setTypedText(currentWord.substring(0, typedText.length - 1));
            } else {
                setTypedText(currentWord.substring(0, typedText.length + 1));
            }

            if (!isDeleting && typedText === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((currentWordIndex + 1) % words.length);
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [typedText, currentWordIndex, isDeleting, words, isMounted]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#030303]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
                    {/* Content Left */}
                    <motion.div
                        className="lg:w-3/5 text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Available for new projects
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                            Hi, I&apos;m <span className="text-white">Laode F. Fadilah</span> <br />
                            <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                                {typedText}
                            </span>
                            <span className="text-blue-500 animate-pulse">|</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            A results-driven <span className="text-gray-200">Junior Full Stack Developer</span> based in Jakarta, specializing in building high-performance 
                            web applications and modern mobile solutions. I transform complex ideas into 
                            <span className="text-gray-200"> SEO-friendly, scalable, and visually stunning digital experiences</span> using 
                            Next.js, React, and Laravel.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
                            <Button asChild className="group rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">
                                <Link href="#projects">
                                    View My Work
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95">
                                <Download className="mr-2 h-5 w-5" />
                                Download CV
                            </Button>
                        </div>

                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">Follow Me</span>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-blue-600 rounded-2xl border border-white/5 transition-all duration-300"
                                        aria-label={social.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Right */}
                    <motion.div
                        className="lg:w-2/5 relative"
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                        <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto group">
                            {/* Decorative Rings */}
                            <div className="absolute inset-[-20px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />
                            
                            {/* Image Container */}
                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-2 border-white/10 bg-gray-900 shadow-2xl transform transition-transform group-hover:scale-[1.02] duration-500">
                                <Image
                                    src="/assets/hero-profile-laode-farhan-fadilah.jpg"
                                    alt="Laode Farhan Fadilah"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                    className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Stats or Badges */}
                            <motion.div 
                                className="absolute -right-2 md:-right-4 top-1/4 bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-10"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-base md:text-xl">🚀</div>
                                    <div>
                                        <div className="text-[10px] md:text-xs text-gray-400">Experience</div>
                                        <div className="text-xs md:text-sm font-bold text-white whitespace-nowrap">Entry Level</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">Scroll</span>
                <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1.5">
                    <motion.div 
                        className="w-1 h-2 bg-blue-500 rounded-full"
                        animate={{ 
                            y: [0, 12, 0],
                            opacity: [1, 0, 1]
                        }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
