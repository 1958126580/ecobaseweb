import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Github } from 'lucide-react';

const Resources: React.FC = () => {
    const { t } = useTranslation();

    const resources = [
        {
            title: "EcoSpatial Analysis Tool v1.0",
            description: "A comprehensive tool for spatial pattern analysis in ecological datasets.",
            type: "Software",
            link: "#",
            github: "#"
        },
        {
            title: "Temporal Dynamics Model",
            description: "Python library for modeling temporal dynamics in population ecology.",
            type: "Code",
            link: "#",
            github: "#"
        },
        {
            title: "Global Vegetation Dataset 2024",
            description: "High-resolution vegetation cover data processed from satellite imagery.",
            type: "Data",
            link: "#",
            github: "#"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-secondary-900 mb-4">{t('nav.resources')}</h1>
                <p className="text-lg text-secondary-600 max-w-3xl">
                    Access our latest software, code repositories, and datasets designed for ecological research.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl border border-secondary-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium 
                ${resource.type === 'Software' ? 'bg-blue-100 text-blue-700' :
                                    resource.type === 'Code' ? 'bg-green-100 text-green-700' :
                                        'bg-purple-100 text-purple-700'}`}>
                                {resource.type}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">{resource.title}</h3>
                        <p className="text-secondary-600 mb-6 flex-grow">{resource.description}</p>
                        <div className="flex gap-4 mt-auto">
                            <a href={resource.link} className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                                <Download className="h-4 w-4 mr-1" /> Download
                            </a>
                            <a href={resource.github} className="flex items-center text-sm font-medium text-secondary-600 hover:text-secondary-900">
                                <Github className="h-4 w-4 mr-1" /> GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
