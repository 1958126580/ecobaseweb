import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sigma, Cpu, Users, BookOpen, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Code2 className="h-6 w-6 text-white" />,
            title: "Computer Science",
            description: "Cutting-edge curriculum in IoT, Big Data, and Software Engineering."
        },
        {
            icon: <Sigma className="h-6 w-6 text-white" />,
            title: "Applied Mathematics",
            description: "Strong foundation in mathematical theory and modeling applications."
        },
        {
            icon: <Cpu className="h-6 w-6 text-white" />,
            title: "Digital Innovation",
            description: "State-of-the-art laboratories for practical skills training."
        }
    ];

    const stats = [
        { value: "26+", label: "Faculty Members", icon: <Users className="h-5 w-5" /> },
        { value: "4", label: "Professors", icon: <Award className="h-5 w-5" /> },
        { value: "12", label: "Assoc. Professors", icon: <BookOpen className="h-5 w-5" /> },
        { value: "100%", label: "Employment Rate", icon: <GraduationCap className="h-5 w-5" /> }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-secondary-50 -z-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6 tracking-tight">
                            <span className="text-gradient">{t('hero.title')}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-600 mb-10 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link to="/about" className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                {t('hero.cta')} <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link to="/news" className="px-8 py-4 bg-white text-secondary-700 rounded-xl font-semibold shadow-md hover:bg-secondary-50 hover:scale-105 transition-all duration-300 border border-secondary-200">
                                {t('nav.news')}
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
                                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.title}</h3>
                                <p className="text-secondary-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-dark rounded-3xl p-12 text-white relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-blue-600/20"></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2 text-primary-300 opacity-80">{stat.icon}</div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                                    <div className="text-primary-100/80 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
