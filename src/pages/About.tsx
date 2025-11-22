import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: <Target className="h-8 w-8 text-primary-500" />,
            title: "Our Mission",
            content: "To provide robust tools, algorithms, and platforms that enable researchers to analyze complex spatiotemporal data with unprecedented precision and efficiency."
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
            title: "Our Vision",
            content: "We envision a future where ecological decision-making is driven by data-driven insights, powered by a digital base that integrates multi-source data across space and time."
        },
        {
            icon: <Users className="h-8 w-8 text-blue-500" />,
            title: "Who We Are",
            content: "A multidisciplinary team of ecologists, mathematicians, and computer scientists dedicated to advancing the field of computational ecology."
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>
        </div>
    );
};

export default About;
