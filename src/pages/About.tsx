import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Code, Database, Brain } from 'lucide-react';

const About: React.FC = () => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: <Target className="h-8 w-8 text-primary-500" />,
            title: t('about.mission'),
            content: "To develop advanced computational tools and mathematical models that address critical ecological challenges, bridging the gap between theoretical ecology and data science."
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
            title: t('about.vision'),
            content: "To build a world-class 'Spatiotemporal Digital Base' that empowers researchers globally with open-source software, high-quality datasets, and innovative analysis methods."
        },
        {
            icon: <Brain className="h-8 w-8 text-blue-500" />,
            title: "Research Focus",
            content: "Our interdisciplinary team focuses on ecological modeling, biodiversity analysis, remote sensing data processing, and the development of specialized software for environmental monitoring."
        }
    ];

    // Team members list provided by user
    const teamMembers = [
        "Mei Bujun", "Wang Huihui", "Jin Linghua", "Cao Yuanqing",
        "Yang Yonglin", "Feng Jianmin", "Li Yinfei", "Song Huanlin",
        "Zhang Pengfei", "Ma Zehua", "Zhang Caizhen", "Liu Di",
        "Li Caixia", "Zhang Haixia", "Zhang Jing", "Zhang Li", "Zhang Yihan"
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
                        Managed by the Department of Mathematics and Computer Science at Hetao College, we are dedicated to applying mathematical rigor and computing power to ecological research.
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

                    <div className="glass p-8 rounded-3xl">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {teamMembers.map((name, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                    className="flex items-center gap-3 p-4 bg-white/50 rounded-xl hover:bg-white hover:shadow-md transition-all"
                                >
                                    <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                                        {name.charAt(0)}
                                    </div>
                                    <span className="font-medium text-secondary-800">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
