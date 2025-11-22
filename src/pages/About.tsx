import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Github, Twitter, Linkedin } from 'lucide-react';

const About: React.FC = () => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: <Target className="h-8 w-8 text-primary-500" />,
            title: t('about.mission'),
            content: "To provide robust tools, algorithms, and platforms that enable researchers to analyze complex spatiotemporal data with unprecedented precision and efficiency."
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
            title: t('about.vision'),
            content: "We envision a future where ecological decision-making is driven by data-driven insights, powered by a digital base that integrates multi-source data across space and time."
        },
        {
            icon: <Users className="h-8 w-8 text-blue-500" />,
            title: "Who We Are",
            content: "A multidisciplinary team of ecologists, mathematicians, and computer scientists dedicated to advancing the field of computational ecology."
        }
    ];

    const team = [
        {
            name: "Dr. Sarah Chen",
            role: "Lead Scientist",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
            bio: "Expert in spatial statistics and ecological modeling with 15+ years of experience."
        },
        {
            name: "Prof. James Wilson",
            role: "Technical Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
            bio: "Specializes in high-performance computing and big data analytics for environmental sciences."
        },
        {
            name: "Dr. Emily Zhang",
            role: "Data Architect",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
            bio: "Focuses on spatiotemporal database design and data visualization techniques."
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-secondary-50 -z-10">
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                        {t('nav.about')}
                    </h1>
                    <p className="text-xl text-secondary-600 leading-relaxed">
                        Welcome to the Spatiotemporal Digital Base. We are dedicated to advancing ecological research through the power of mathematics and computer science.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-secondary-900 mb-4">{card.title}</h3>
                            <p className="text-secondary-600 leading-relaxed">
                                {card.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">{t('about.team')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-secondary-900 mb-1">{member.name}</h3>
                                    <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                                    <p className="text-secondary-600 mb-6 text-sm">{member.bio}</p>
                                    <div className="flex justify-center gap-4">
                                        <a href="#" className="text-secondary-400 hover:text-secondary-900 transition-colors"><Github className="h-5 w-5" /></a>
                                        <a href="#" className="text-secondary-400 hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                                        <a href="#" className="text-secondary-400 hover:text-blue-700 transition-colors"><Linkedin className="h-5 w-5" /></a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
