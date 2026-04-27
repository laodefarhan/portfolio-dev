'use client';

import { motion } from 'framer-motion';
import {
    Code2, Smartphone, Search, Layout, Database, Rocket, ArrowUpRight
} from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Building high-performance, responsive websites and web applications using modern frameworks like React and Next.js.',
        color: 'from-blue-500 to-cyan-400'
    },
    {
        icon: Smartphone,
        title: 'Mobile Solutions',
        description: 'Creating seamless cross-platform mobile experiences that bring your brand directly to users\' pockets.',
        color: 'from-purple-500 to-pink-400'
    },
    {
        icon: Layout,
        title: 'UI/UX Implementation',
        description: 'Translating complex designs into pixel-perfect, interactive user interfaces with focus on accessibility.',
        color: 'from-orange-500 to-yellow-400'
    },
    {
        icon: Search,
        title: 'SEO Optimization',
        description: 'Implementing strategic technical SEO and performance tuning to boost your search engine visibility.',
        color: 'from-green-500 to-emerald-400'
    },
    {
        icon: Database,
        title: 'Backend Architecture',
        description: 'Designing robust, scalable server-side logic and database structures to power complex digital solutions.',
        color: 'from-red-500 to-rose-400'
    },
    {
        icon: Rocket,
        title: 'Full Stack Delivery',
        description: 'End-to-end development from initial concept and database design to final deployment and maintenance.',
        color: 'from-blue-600 to-indigo-500'
    },
];

export function ServicesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="services" className="relative py-24 bg-[#030303] overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-3 block">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Services I Offer</h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Providing comprehensive digital solutions tailored to your specific needs, 
                        focusing on quality, performance, and user experience.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <div className="h-full bg-white/5 border border-white/10 p-8 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 flex flex-col">
                                {/* Icon Container */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="w-full h-full bg-[#0a0a0a] rounded-[calc(1rem-1px)] flex items-center justify-center">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Learn More
                                    <div className="h-[1px] w-8 bg-blue-500" />
                                </div>
                            </div>

                            {/* Subtle Glow Effect on Hover */}
                            <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] blur-xl rounded-[2.5rem] transition-opacity duration-500 -z-10`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}