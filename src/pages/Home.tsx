import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Globe2, Cpu, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Globe2 className="h-6 w-6 text-white" />,
            color: "bg-blue-500",
            title: "Spatiotemporal Analysis",
            description: "Advanced algorithms for processing complex ecological data across space and time."
        },
        {
            icon: <Database className="h-6 w-6 text-white" />,
            color: "bg-green-500",
            title: "Digital Base",
            description: "A robust foundation for storing, managing, and visualizing massive environmental datasets."
        },
        {
            icon: <Cpu className="h-6 w-6 text-white" />,
            color: "bg-purple-500",
            title: "Computational Ecology",
            description: "Leveraging high-performance computing to solve fundamental problems in ecology."
        }
    ];

    const stats = [
        { label: "Data Points", value: "10B+", icon: <Activity className="h-5 w-5" /> },
        { label: "Algorithms", value: "50+", icon: <Cpu className="h-5 w-5" /> },
        { label: "Models", value: "100+", icon: <Layers className="h-5 w-5" /> },
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-secondary-50">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-float">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-sm font-medium text-secondary-600">v2.0 Now Available</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-secondary-900">
                            <span className="text-gradient">{t('hero.title')}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-secondary-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/resources"
                                className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-full overflow-hidden transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30"
                            >
                                <span className="relative z-10 flex items-center">
                                    {t('hero.cta')}
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center px-8 py-4 text-lg font-medium text-secondary-700 bg-white border border-secondary-200 rounded-full hover:bg-secondary-50 hover:border-secondary-300 transition-all"
                            >
                                {t('nav.about')}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-20"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="glass p-6 rounded-2xl flex items-center justify-center gap-4">
                                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                    {stat.icon}
                                </div>
                                <div className="text-left">
                                    <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                                    <div className="text-sm text-secondary-500">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Core Capabilities</h2>
                        <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                            Empowering researchers with state-of-the-art tools for ecological data analysis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group p-8 rounded-3xl bg-secondary-50 border border-secondary-100 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`mb-6 p-4 ${feature.color} rounded-2xl w-fit shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{feature.title}</h3>
                                <p className="text-secondary-600 leading-relaxed text-lg">
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
