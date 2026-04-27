'use client';

import { ChevronUp, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon, TikTokIcon, GitHubIcon, Linkedin } from '@/components/icons';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: InstagramIcon, href: 'https://instagram.com/laodefarhan_', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@l.f.fadilah_', label: 'TikTok' },
    { icon: GitHubIcon, href: 'https://github.com/laodefarhan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/laode-farhan-fadilah-195a35368', label: 'Linkedin' },
];

export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="relative bg-[#030303] pt-20 pb-10 overflow-hidden border-t border-white/5">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 z-50 group"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="#home" className="inline-block text-2xl font-black tracking-tighter text-white uppercase mb-6">
                            Laode<span className="text-blue-500">Farhan</span>.
                        </Link>
                        <p className="text-gray-400 mt-2 max-w-md text-lg leading-relaxed mb-8">
                            Crafting high-performance digital experiences with precision and passion. 
                            Specializing in modern full-stack development to bring your ideas to life.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-xl border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
                                <span>DKI Jakarta, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={18} className="text-blue-500 shrink-0" />
                                <a href="mailto:fiklaodefarhanfadilah@gmail.com" className="hover:text-white transition-colors">fiklaodefarhanfadilah@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <a href="tel:+628974159938" className="hover:text-white transition-colors">+62 897 4159 938</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} <span className="text-gray-300">Laode F. Fadilah</span>. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}