'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, GraduationCap, Briefcase, Code2, Award, FolderKanban, Calendar, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const education = [
    {
        degree: 'S1 Informatics Engineering',
        institution: 'Borobudur University',
        period: '2021 - Present',
        location: 'Jakarta Timur, Indonesia',
        description: 'Focusing on software development, algorithms, and system architecture.',
    },
    {
        degree: 'Science - Biology',
        institution: 'SMAN 1 Pangkalanbaru',
        period: '2017 - 2019',
        location: 'Bangka Tengah, Indonesia',
        description: 'High school education with a focus on natural sciences.',
    },
];

const experience = [
    {
        title: 'Junior Front-end Developer',
        company: 'Freelance',
        period: '2025 - Present',
        location: 'Remote',
        description: 'Building responsive and interactive user interfaces using modern web technologies. Focused on creating seamless user experiences and optimizing performance.',
    },
];

const skills = [
    { image: '/assets/skills/html.png', name: 'HTML' },
    { image: '/assets/skills/css.png', name: 'CSS' },
    { image: '/assets/skills/javascript.png', name: 'JavaScript' },
    { image: '/assets/skills/php.png', name: 'PHP' },
    { image: '/assets/skills/react.png', name: 'React' },
    { image: '/assets/skills/next js.png', name: 'Next JS' },
    { image: '/assets/skills/laravel.png', name: 'Laravel' },
    { image: '/assets/skills/tailwindcss.png', name: 'TailwindCSS' },
    { image: '/assets/skills/bootstrap.png', name: 'Bootstrap' },
    { image: '/assets/skills/git.png', name: 'GIT' },
    { image: '/assets/skills/mysql.png', name: 'MySQL' },
];

const projects = [
    {
        id: 1,
        title: 'Pondok Burger - High Performance Landing Page',
        description: 'A lightning-fast, SEO-optimized landing page for a food business. Built with a focus on Core Web Vitals, achieving near-perfect performance scores while maintaining a modern, appetizing aesthetic.',
        image: '/assets/projects/projects-pondok-burger-v2.jpg.jpg',
        category: 'Web Development',
        link: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'RB Trans Babel - Car Rental Solution',
        description: 'A professional car rental platform for Bangka Belitung. Features a sleek, responsive interface designed for high conversion rates and seamless user experience across all devices.',
        image: '/assets/projects/projects-rb-trans-babel.jpg',
        category: 'Web Development',
        link: 'https://rental-mobil-bangka-belitung-test.vercel.app/',
        github: '#',
    },
    {
        id: 3,
        title: 'Banana Ripeness Classification - Deep Learning',
        description: 'An advanced Artificial Intelligence solution utilizing the YOLOv8 (You Only Look Once) architecture for real-time computer vision detection and ripeness classification, revolutionizing agricultural quality control.',
        image: '/assets/projects/projects-klasifikasi-tingkat-kematangan-buah-pisang.jpg',
        category: 'Artificial Intelligence',
        link: '#',
        github: '#',
    }
];

const certificates = [
    {
        image: '/assets/certificates/Laode   Farhan Fadilah_page-0001.jpg',
        title: 'Artificial Intelligence in Work',
        issuer: 'Institut Shanti Bhuana',
        date: 'May 2023',
        description: 'Kampus Merdeka Program - The Role of Artificial Intelligence Technology in Supporting Work.',
    },
    {
        image: '/assets/certificates/frontend_developer_react certificate_page-0001.jpg',
        title: 'Frontend Developer (React)',
        issuer: 'HackerRank',
        date: 'June 2025',
        description: 'Certification for advanced React.js development skills.',
    },
    {
        image: '/assets/certificates/sertifikat_course_123_5018543_140625225600_page-0001.jpg',
        title: 'Basic Web Programming',
        issuer: 'Dicoding Indonesia',
        date: 'June 2025',
        description: 'Fundamental web development certification.',
    },
    {
        image: '/assets/certificates/Certificate-of-Completion-Introduction-to-Information-Security_page-0001.jpg',
        title: 'Information Security',
        issuer: 'Cyber Academy',
        date: 'May 2025',
        description: 'Introduction to information security concepts.',
    },
    {
        image: '/assets/certificates/Certificate-of-Completion-Classical-Cryptography-for-Beginner_page-0001.jpg',
        title: 'Classical Cryptography',
        issuer: 'Cyber Academy Indonesia',
        date: 'May 2025',
        description: 'Classical Cryptography for Beginner Course - Mastering fundamental encryption techniques.',
    },
];

export function ResumeSection() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const tabItems = [
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'skills', label: 'Skills', icon: Code2 },
        { id: 'projects', label: 'Projects', icon: FolderKanban },
        { id: 'certificate', label: 'Certificates', icon: Award },
    ];

    return (
        <section id="resume" className="relative py-24 bg-[#030303] overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-3 block">My Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Resume & Works</h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                </motion.div>

                <Tabs defaultValue="education" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-auto flex-wrap justify-center">
                            {tabItems.map((tab) => (
                                <TabsTrigger 
                                    key={tab.id} 
                                    value={tab.id}
                                    className={cn(
                                        "px-6 py-3 rounded-xl transition-all duration-300 gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                                        "text-gray-400 hover:text-white"
                                    )}
                                >
                                    <tab.icon size={18} />
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Education Tab */}
                    <TabsContent value="education" className="mt-0">
                        <div className="max-w-4xl mx-auto space-y-8">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 border-l-2 border-white/10"
                                >
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#030303]" />
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-colors group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.degree}</h3>
                                                <div className="flex items-center gap-2 text-blue-500 mt-1">
                                                    <span className="font-medium">{item.institution}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-xs font-bold border border-blue-600/20">
                                                    {item.period}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <MapPin size={12} />
                                                    {item.location}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Experience Tab */}
                    <TabsContent value="experience" className="mt-0">
                        <div className="max-w-4xl mx-auto space-y-8">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 border-l-2 border-white/10"
                                >
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030303]" />
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-colors group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                                <p className="text-blue-500 font-medium mt-1">{item.company}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-xs font-bold border border-blue-600/20">
                                                    {item.period}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <MapPin size={12} />
                                                    {item.location}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Skills Tab */}
                    <TabsContent value="skills" className="mt-0">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-blue-500/50 group-hover:-translate-y-1">
                                        <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                fill
                                                sizes="48px"
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white">{skill.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Projects Tab */}
                    <TabsContent value="projects" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-white/20"
                                    onHoverStart={() => setHoveredProject(project.id)}
                                    onHoverEnd={() => setHoveredProject(null)}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={cn(
                                                "object-cover transition-transform duration-700",
                                                hoveredProject === project.id ? "scale-110" : "scale-100"
                                            )}
                                        />
                                        <div className={cn(
                                            "absolute inset-0 bg-blue-600/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-500",
                                            hoveredProject === project.id ? "opacity-100" : "opacity-0"
                                        )}>
                                            <Button asChild size="icon" className="rounded-full bg-white text-blue-600 hover:bg-gray-100">
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink size={20} />
                                                </a>
                                            </Button>
                                            <Button asChild size="icon" className="rounded-full bg-white text-blue-600 hover:bg-gray-100">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github size={20} />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all duration-300 w-fit"
                                        >
                                            View Project
                                            <div className="h-[1px] w-12 bg-blue-600" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Certificates Tab */}
                    <TabsContent value="certificate" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">{cert.issuer}</span>
                                            <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-widest">
                                                <Calendar size={10} />
                                                {cert.date}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                                        <p className="text-sm text-gray-400 line-clamp-2 mb-6">{cert.description}</p>

                                        <Button variant="outline" className="mt-auto w-full border-white/10 hover:bg-blue-600 hover:text-white rounded-xl group/btn">
                                            <Search size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                                            View Credential
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}