import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Github, Code2, Database, Package, FileCode, Table, Map } from 'lucide-react';

const Resources: React.FC = () => {
    const { t } = useTranslation();

    const resources = [
        {
            title: "EcoModelR",
            description: "R package for ecological modeling and simulation. Includes functions for population dynamics, species interactions, and community assembly.",
            type: "Software",
            icon: <Package className="h-6 w-6 text-blue-600" />,
            color: "bg-blue-100 text-blue-700",
            link: "#",
            github: "#"
        },
        {
            title: "SpatialEcoTools",
            description: "Python toolkit for spatial ecological analysis. Features point pattern analysis, spatial autocorrelation, and landscape metrics calculation.",
            type: "Software",
            icon: <Map className="h-6 w-6 text-green-600" />,
            color: "bg-green-100 text-green-700",
            link: "#",
            github: "#"
        },
        {
            title: "BiodiversityDB",
            description: "Curated database of biodiversity records from the Hetao region. Includes species occurrence data, environmental variables, and metadata.",
            type: "Data",
            icon: <Database className="h-6 w-6 text-purple-600" />,
            color: "bg-purple-100 text-purple-700",
            link: "#",
            github: "#"
        },
        {
            title: "TimeSeriesEco",
            description: "Time series analysis tools specifically designed for ecological data. Supports trend detection, seasonality analysis, and forecasting.",
            type: "Code",
            icon: <FileCode className="h-6 w-6 text-orange-600" />,
            color: "bg-orange-100 text-orange-700",
            link: "#",
            github: "#"
        },
        {
            title: "EcoDataProcessor",
            description: "High-performance data processing pipeline for large-scale ecological datasets. Built with C++ for speed and efficiency.",
            type: "Software",
            icon: <Code2 className="h-6 w-6 text-red-600" />,
            color: "bg-red-100 text-red-700",
            link: "#",
            github: "#"
        },
        {
            title: "FieldSurveyData",
            description: "Standardized field survey data templates and processing scripts. Facilitates data collection, validation, and integration.",
            type: "Data",
            icon: <Table className="h-6 w-6 text-teal-600" />,
            color: "bg-teal-100 text-teal-700",
            link: "#",
            github: "#"
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 -z-10">
                <div className="absolute top-40 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
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
                        Open-source software, code libraries, and datasets developed by our research team. All resources are freely available for academic and research purposes.
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

                            <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                                {resource.title}
                            </h3>
                            <p className="text-secondary-600 mb-8 flex-grow leading-relaxed text-sm">
                                {resource.description}
                            </p>

                            <div className="flex gap-3 mt-auto pt-6 border-t border-secondary-100">
                                <a
                                    href={resource.link}
                                    className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors text-sm"
                                >
                                    <Download className="h-4 w-4 mr-2" /> Download
                                </a>
                                <a
                                    href={resource.github}
                                    className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-secondary-100 text-secondary-700 font-medium hover:bg-secondary-200 transition-colors text-sm"
                                >
                                    <Github className="h-4 w-4 mr-2" /> GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note about resources */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 glass p-6 rounded-2xl text-center max-w-3xl mx-auto"
                >
                    <p className="text-secondary-600">
                        <strong>Note:</strong> These are placeholder resources. Please replace with actual software, code, and data developed by your team. Update the download links and GitHub repositories accordingly.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Resources;
