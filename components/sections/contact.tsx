'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, MapPin, Phone, Send, MessageSquare, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { InstagramIcon, TikTokIcon, GitHubIcon, Linkedin } from '@/components/icons';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const contactDetails = [
    {
        icon: MapPin,
        title: 'Location',
        value: 'DKI Jakarta, Indonesia',
        link: 'https://maps.google.com/?q=Jakarta,Indonesia',
    },
    {
        icon: Mail,
        title: 'Email',
        value: 'fiklaodefarhanfadilah@gmail.com',
        link: 'mailto:fiklaodefarhanfadilah@gmail.com',
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+62 (897) 4159-938',
        link: 'tel:+628974159938',
    },
];

const socialLinks = [
    { icon: InstagramIcon, href: 'https://instagram.com/laodefarhan_', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@l.f.fadilah_', label: 'TikTok' },
    { icon: GitHubIcon, href: 'https://github.com/laodefarhan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/laode-farhan-fadilah-195a35368', label: 'Linkedin' },
];

export function ContactSection() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    function onSubmit(values: FormValues) {
        console.log(values);
        toast.success('Message sent! I will get back to you soon.');
        form.reset();
    }

    return (
        <section id="contact" className="relative py-24 bg-[#030303] overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-3 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Contact Me</h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Ready to start your next project or just want to say hi? 
                        Drop me a message and let&apos;s create something amazing together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="grid gap-6">
                            {contactDetails.map((detail, index) => (
                                <a 
                                    key={index}
                                    href={detail.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center p-6 bg-white/5 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-white/[0.08] hover:border-blue-500/30"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mr-6">
                                        <detail.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{detail.title}</h4>
                                        <p className="text-gray-200 font-medium group-hover:text-blue-400 transition-colors">{detail.value}</p>
                                    </div>
                                    <ExternalLink size={16} className="text-gray-700 group-hover:text-blue-500 transition-colors" />
                                </a>
                            ))}
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-blue-600"></span>
                                Follow My Journey
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/5 hover:bg-blue-600 rounded-2xl border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <MessageSquare size={120} />
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-400">Full Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Laode F. Fadilah"
                                                        className="h-14 bg-[#0a0a0a] border-white/10 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-400">Email Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="fiklaodefarhanfadilah@gmail.com"
                                                        className="h-14 bg-[#0a0a0a] border-white/10 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-400">Subject</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Project Inquiry"
                                                    className="h-14 bg-[#0a0a0a] border-white/10 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-400">Your Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell me about your project..."
                                                    className="bg-[#0a0a0a] border-white/10 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl min-h-[160px] resize-none py-4"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <Send className="mr-2 h-5 w-5" /> 
                                    Send Message
                                </Button>
                            </form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}