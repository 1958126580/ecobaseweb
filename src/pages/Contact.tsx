import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen pt-20 pb-16 relative">
            <div className="absolute inset-0 bg-secondary-50 -z-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t('contact.title')}</h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-secondary-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-secondary-900">Email</p>
                                        <p className="text-secondary-600">math_cs@htxy.edu.cn</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-secondary-900">Location</p>
                                        <p className="text-secondary-600">Bayannur City, Inner Mongolia, China</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-secondary-900">Phone</p>
                                        <p className="text-secondary-600">+86 478 1234567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form action="https://formspree.io/f/PLACEHOLDER" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                                    {t('contact.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                                    {t('contact.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                                    {t('contact.subject')}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                {t('contact.send')}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
