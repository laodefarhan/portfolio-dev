'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of Web Development: What to Expect in 2025',
        excerpt: 'Explore the emerging trends and technologies that will shape the future of web development, from AI integration to immersive experiences.',
        image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
        date: 'June 15, 2024',
        readTime: '5 min read',
        category: 'Development',
    },
    {
        id: 2,
        title: 'Designing for Accessibility: A Comprehensive Guide',
        excerpt: 'Learn how to create inclusive digital experiences that work for everyone, regardless of abilities or disabilities.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
        date: 'May 22, 2024',
        readTime: '7 min read',
        category: 'Design',
    },
    {
        id: 3,
        title: 'Optimizing Performance in Modern Web Applications',
        excerpt: 'Practical strategies to improve loading times, reduce bundle sizes, and enhance the overall performance of your web applications.',
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
        date: 'April 8, 2024',
        readTime: '6 min read',
        category: 'Performance',
    },
];

export function BlogSection() {
    return (
        <section id="blog" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Insights, tips, and thoughts on development, design,
                        and technology trends.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl overflow-hidden group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {post.category}
                                </div>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-400 mb-3">
                                    <div className="flex items-center mr-4">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {post.readTime}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}