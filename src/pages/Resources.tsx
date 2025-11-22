import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Book, Code, Database, Monitor, FileText, Video } from 'lucide-react';

const Resources: React.FC = () => {
    const { t } = useTranslation();

    const resources = [
        {
            title: "Mathematical Modeling Training",
            description: "Comprehensive training materials for the National Undergraduate Mathematical Modeling Contest, including past papers and solution guides.",
            type: "Training",
            icon: <Book className="h-6 w-6 text-blue-600" />,
            color: "bg-blue-100 text-blue-700",
            link: "#"
        },
        {
            title: "IoT Laboratory Access",
            description: "Schedule and guidelines for accessing the Internet of Things Engineering Laboratory for student projects and research.",
            type: "Facility",
            icon: <Monitor className="h-6 w-6 text-green-600" />,
            color: "bg-green-100 text-green-700",
            link: "#"
        },
        {
            title: "Data Analysis Datasets",
            description: "Curated datasets for teaching and research in statistics and big data analysis, including local economic and ecological data.",
            type: "Data",
            icon: <Database className="h-6 w-6 text-purple-600" />,
            color: "bg-purple-100 text-purple-700",
            link: "#"
        },
        {
            title: "Python for Data Science",
            description: "Lecture notes and code examples for the 'Python Data Analysis' course, covering Pandas, NumPy, and Matplotlib.",
            type: "Courseware",
            icon: <Code className="h-6 w-6 text-yellow-600" />,
            color: "bg-yellow-100 text-yellow-700",
            link: "#"
        },
        {
            title: "Research Paper Template",
            description: "Standard LaTeX and Word templates for undergraduate thesis and academic paper submissions.",
            type: "Template",
            icon: <FileText className="h-6 w-6 text-red-600" />,
            color: "bg-red-100 text-red-700",
            link: "#"
        },
        {
            title: "Academic Lectures Archive",
            description: "Video recordings of past academic lectures, including the recent 'Beidou Positioning Technology' seminar.",
            type: "Video",
            icon: <Video className="h-6 w-6 text-indigo-600" />,
            color: "bg-indigo-100 text-indigo-700",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-secondary-50 -z-10">
                <div className="absolute top-40 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t('nav.resources')}</h1>
                    <p className="text-xl text-secondary-600 max-w-3xl">
                        Access teaching materials, research tools, and laboratory resources for students and faculty.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass rounded-2xl p-6 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className={`p-3 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    {resource.icon}
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${resource.color}`}>
                                    {resource.type}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {resource.title}
                            </h3>
                            <p className="text-secondary-600 mb-8 flex-grow leading-relaxed">
                                {resource.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-secondary-100">
                                <a
                                    href={resource.link}
                                    className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary-50 text-primary-700 font-medium hover:bg-primary-100 transition-colors"
                                >
                                    <Download className="h-4 w-4 mr-2" /> Access Resource
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
