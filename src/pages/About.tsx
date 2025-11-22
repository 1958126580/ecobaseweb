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

    // Team members provided by user
    const teamMembers = [
        { name: "Mei Bujun", name_zh: "梅步俊" },
        { name: "Wang Huihui", name_zh: "王惠惠" },
        { name: "Jin Linghua", name_zh: "靳玲花" },
        { name: "Cao Yuanqing", name_zh: "曹园青" },
        { name: "Yang Yonglin", name_zh: "杨勇林" },
        { name: "Feng Jianmin", name_zh: "冯建民" },
        { name: "Li Yinfei", name_zh: "李寅飞" },
        { name: "Song Huanlin", name_zh: "宋焕林" },
        { name: "Zhang Pengfei", name_zh: "张鹏飞" },
        { name: "Ma Zehua", name_zh: "马泽华" },
        { name: "Zhang Caizhen", name_zh: "张财振" },
        { name: "Liu Di", name_zh: "刘迪" },
        { name: "Li Caixia", name_zh: "李彩霞" },
        { name: "Zhang Haixia", name_zh: "张海霞" },
        { name: "Zhang Jing", name_zh: "张静" },
        { name: "Zhang Li", name_zh: "张力" },
        { name: "Zhang Yihan", name_zh: "张依涵" }
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

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary-900 text-center mb-4">{t('about.team')}</h2>
                    <p className="text-center text-secondary-600 mb-12 max-w-2xl mx-auto">
                        Our team consists of researchers from the Department of Mathematics and Computer Science at Hetao College, working collaboratively on ecological computing challenges.
                    </p>

                    <div className="glass p-8 rounded-3xl">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03, duration: 0.3 }}
                                    className="flex items-center gap-3 p-4 bg-white/70 rounded-xl hover:bg-white hover:shadow-md transition-all"
                                >
                                    <div className="h-10 w-10 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">
                                        {member.name_zh.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-secondary-800 text-sm truncate">{member.name_zh}</div>
                                        <div className="text-xs text-secondary-500 truncate">{member.name}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

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
                        Department of Mathematics and Computer Science<br />
                        Hetao College, Bayannur, Inner Mongolia, China
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
