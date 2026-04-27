'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'Design', 'Branding'];

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce solution with advanced filtering and payment integration.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        category: 'Web',
        link: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'Travel Mobile App',
        description: 'Trip planning and booking app with personalized recommendations.',
        image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg',
        category: 'Mobile',
        link: '#',
        github: '#',
    },
    {
        id: 3,
        title: 'Agency Website Redesign',
        description: 'Complete brand identity and website overhaul for a digital agency.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
        category: 'Design',
        link: '#',
        github: '#',
    },
    {
        id: 4,
        title: 'Finance Dashboard',
        description: 'Data visualization and analytics platform for financial insights.',
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
        category: 'Web',
        link: '#',
        github: '#',
    },
    {
        id: 5,
        title: 'Brand Identity System',
        description: 'Comprehensive branding package including logo, color system, and guidelines.',
        image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg',
        category: 'Branding',
        link: '#',
        github: '#',
    },
    {
        id: 6,
        title: 'Health & Fitness App',
        description: 'Workout tracking and nutrition planning with progress visualization.',
        image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg',
        category: 'Mobile',
        link: '#',
        github: '#',
    },
];

export function PortfolioSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of my recent projects and collaborations across
                        various domains and technologies.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((category, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800 rounded-xl overflow-hidden group"
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={`object-cover transition-transform duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'
                                        }`}
                                />
                                <div className={`absolute inset-0 bg-blue-500/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full mb-3">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}