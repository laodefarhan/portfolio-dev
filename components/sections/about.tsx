'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar, Code2, GraduationCap } from 'lucide-react';

const personalInfo = [
    { icon: User, label: 'Name', value: 'Laode Farhan Fadilah' },
    { icon: Mail, label: 'Email', value: 'fiklaodefarhanfadilah@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'DKI Jakarta, Indonesia' },
    { icon: Calendar, label: 'Experience', value: '2+ Years' },
    { icon: GraduationCap, label: 'Education', value: 'Computer Science' },
    { icon: Code2, label: 'Specialty', value: 'Full Stack Dev' },
];

const stats = [
    { label: 'Completed Projects', value: '15+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Tools Mastered', value: '12+' },
];

export function AboutSection() {
    return (
        <section id="about" className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#030303]">
            {/* Background Accents */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-3 block">Who Am I?</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">About Me</h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A passionate developer dedicated to building high-quality web applications that solve real-world problems.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-[450px] mx-auto group">
                            {/* Stylish Frame */}
                            <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10" />
                            <div className="absolute inset-0 bg-blue-600/10 rounded-[2rem] blur-2xl group-hover:bg-blue-600/20 transition-colors" />

                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-2 border-white/10 bg-gray-900 shadow-2xl">
                                <Image
                                    src="/assets/about-profile-laode-farhan-fadilah.jpg"
                                    alt="Laode Farhan Fadilah"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                                <div className="grid grid-cols-3 gap-8">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                                            <div className="text-[10px] text-gray-500 uppercase tracking-tighter whitespace-nowrap">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Fullstack Developer & <span className="text-blue-500">Problem Solver</span>
                        </h3>

                        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                            I have over 2 years of experience in developing various types of websites, from interactive 
                            web applications to mobile solutions. My journey in tech is driven by a curiosity for 
                            how things work and a desire to create seamless user experiences.
                        </p>

                        {/* Personal Details Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {personalInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <info.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                                        <p className="text-sm font-medium text-gray-200">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-blue-600">
                            <p className="text-gray-300 italic leading-relaxed">
                                &quot;I believe that great software is built at the intersection of powerful 
                                technology and thoughtful design. My goal is to bridge that gap in every 
                                project I undertake.&quot;
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}