import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Globe2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Globe2 className="h-8 w-8 text-primary-500" />,
            title: "Spatiotemporal Analysis",
            description: "Advanced algorithms for processing complex ecological data across space and time."
        },
        {
            icon: <Database className="h-8 w-8 text-primary-500" />,
            title: "Digital Base",
            description: "A robust foundation for storing, managing, and visualizing massive environmental datasets."
        },
        {
            icon: <Cpu className="h-8 w-8 text-primary-500" />,
            title: "Computational Ecology",
            description: "Leveraging high-performance computing to solve fundamental problems in ecology."
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-secondary-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 to-secondary-900"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-300 mb-10 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/resources"
                                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary-900 bg-primary-400 hover:bg-primary-500 transition-colors"
                            >
                                {t('hero.cta')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center px-8 py-3 border border-secondary-600 text-base font-medium rounded-md text-white hover:bg-secondary-800 transition-colors"
                            >
                                {t('nav.about')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="p-8 rounded-2xl bg-secondary-50 border border-secondary-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-4">{feature.title}</h3>
                                <p className="text-secondary-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
