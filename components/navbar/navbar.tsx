'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Target all sections that have an ID matching our nav links
        navLinks.forEach((link) => {
            const element = document.getElementById(link.href.substring(1));
            if (element) observer.observe(element);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                isScrolled
                    ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link 
                    href="#home" 
                    className="group flex items-center gap-1 text-2xl font-black tracking-tighter text-white uppercase"
                >
                    <span className="transition-transform group-hover:-translate-y-0.5">Laode</span>
                    <span className="text-blue-500 transition-transform group-hover:translate-y-0.5">Farhan</span>
                    <span className="text-blue-500">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden lg:block">
                    <Button 
                        asChild
                        className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none px-6 transition-all hover:scale-105 active:scale-95"
                    >
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="flex lg:hidden items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10 rounded-full"
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {mobileNavOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                >
                                    <X className="h-6 w-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                >
                                    <Menu className="h-6 w-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
                    >
                        <ul className="flex flex-col p-6 space-y-2">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'block px-4 py-3 rounded-xl text-lg font-medium transition-all',
                                                isActive 
                                                    ? 'bg-blue-600 text-white' 
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            )}
                                            onClick={() => setMobileNavOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="pt-4"
                            >
                                <Button 
                                    asChild
                                    className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-6 text-lg"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    <Link href="#contact">Hire Me</Link>
                                </Button>
                            </motion.li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
