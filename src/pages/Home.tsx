import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Brain, Leaf, BarChart3, Network, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Brain className="h-6 w-6 text-white" />,
            title: "Mathematical Modeling",
            description: "Developing rigorous mathematical models to understand and predict ecological dynamics."
        },
        {
            icon: <Code2 className="h-6 w-6 text-white" />,
            title: "Software Development",
            description: "Creating open-source tools for ecological data analysis and visualization."
        },
        {
            icon: <Database className="h-6 w-6 text-white" />,
            title: "Data Resources",
            description: "Curating and sharing high-quality ecological datasets for research community."
        }
    ];

    const stats = [
        { value: "Global", label: "Collaboration", icon: <Network className="h-5 w-5" /> },
        { value: "Open", label: "Source Code", icon: <Code2 className="h-5 w-5" /> },
        { value: "Free", label: "Data Access", icon: <Database className="h-5 w-5" /> },
        { value: "Active", label: "Research", icon: <BarChart3 className="h-5 w-5" /> }
    ];

    const compEcoFeatures = [
        {
            icon: <Globe className="h-8 w-8 text-blue-500" />,
            title: "Spatial Ecology",
            desc: "Utilizing GIS and remote sensing data to model species distributions and habitat connectivity across landscape scales."
        },
        {
            icon: <Network className="h-8 w-8 text-purple-500" />,
            title: "Network Analysis",
            desc: "Analyzing complex ecological networks, including food webs and mutualistic interactions, to understand system stability."
        },
        {
            icon: <Cpu className="h-8 w-8 text-red-500" />,
            title: "Machine Learning",
            desc: "Applying advanced algorithms like Random Forests and Neural Networks to predict ecological patterns from big data."
        },
        {
            icon: <Leaf className="h-8 w-8 text-green-500" />,
            title: "Biodiversity Informatics",
            desc: "Processing large-scale biodiversity datasets to uncover global patterns of species richness and evolution."
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 -z-20"></div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border border-green-200">
                            <Leaf className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-secondary-700">Ecological Computing Research Platform</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6 tracking-tight">
                            <span className="text-gradient">{t('hero.title')}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-600 mb-10 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link to="/resources" className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold shadow-lg shadow-green-600/30 hover:shadow-green-600/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                {t('hero.cta')} <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link to="/about" className="px-8 py-4 bg-white text-secondary-700 rounded-xl font-semibold shadow-md hover:bg-secondary-50 hover:scale-105 transition-all duration-300 border border-secondary-200">
                                {t('nav.about')}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.title}</h3>
                                <p className="text-secondary-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Computational Ecology Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24 text-left"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">What is Computational Ecology?</h2>
                            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                                The integration of ecological theory, computer science, and advanced statistics to solve complex environmental problems.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {compEcoFeatures.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4"
                                >
                                    <div className="shrink-0 pt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary-800 mb-2">{item.title}</h3>
                                        <p className="text-secondary-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-dark rounded-3xl p-12 text-white relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2 text-green-300 opacity-80">{stat.icon}</div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                                    <div className="text-green-100/80 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Affiliation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-secondary-500 text-sm">
                            {t('footer.affiliation')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
