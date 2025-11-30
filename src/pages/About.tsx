import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Mail } from 'lucide-react';

const About: React.FC = () => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: <Target className="h-8 w-8 text-green-600" />,
            title: t('about.mission'),
            content: "To develop innovative computational methods and software tools that advance ecological research, making complex data analysis accessible to the broader scientific community."
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
            title: t('about.vision'),
            content: "To build an open, collaborative platform where mathematical rigor meets ecological insight, fostering interdisciplinary research and knowledge sharing."
        },
        {
            icon: <Users className="h-8 w-8 text-purple-600" />,
            title: "Research Focus",
            content: "Our work spans ecological modeling, biodiversity analysis, spatiotemporal data processing, and the development of specialized computational tools for environmental science."
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 -z-10">
                <div className="absolute top-20 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
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
                        An interdisciplinary research initiative combining mathematical modeling, computational methods, and ecological science.
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

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl text-center max-w-2xl mx-auto"
                >
                    <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">Affiliation</h3>
                    <p className="text-secondary-600">
                        Ecological Computing Research Team<br />
                        Focusing on Computational Ecology and Environmental Data Science
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
