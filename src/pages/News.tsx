import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News: React.FC = () => {
    const { t } = useTranslation();

    const newsItems = [
        {
            id: 1,
            title: "New Software Release: EcoModelR v2.0",
            date: "2025-01-15",
            category: "Software",
            summary: "We are excited to announce the release of EcoModelR version 2.0, featuring improved performance and new modeling capabilities for community ecology.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            placeholder: true
        },
        {
            id: 2,
            title: "Publication: Spatiotemporal Analysis of Biodiversity Patterns",
            date: "2024-12-20",
            category: "Publication",
            summary: "Our latest research on biodiversity patterns in the Hetao region has been published, utilizing novel computational methods for spatial analysis.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
            placeholder: true
        },
        {
            id: 3,
            title: "Dataset Release: Hetao Ecological Survey 2024",
            date: "2024-11-10",
            category: "Data",
            summary: "Comprehensive ecological survey data from the Hetao region is now publicly available, including species occurrence and environmental variables.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            placeholder: true
        },
        {
            id: 4,
            title: "Workshop: Mathematical Modeling in Ecology",
            date: "2024-10-05",
            category: "Event",
            summary: "Our team organized a successful workshop on mathematical modeling techniques for ecological research, attended by researchers from multiple institutions.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
            placeholder: true
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 -z-10">
                <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t('news.title')}</h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        {t('news.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                            <div className="h-48 overflow-hidden relative bg-gradient-to-br from-green-100 to-blue-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 opacity-80"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-1">
                                        <Tag className="h-3 w-3" /> {item.category}
                                    </span>
                                </div>
                                {item.placeholder && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-2 py-1 bg-yellow-500/90 backdrop-blur-sm rounded text-xs font-bold text-white">
                                            Placeholder
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-secondary-500 text-sm mb-3">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {item.date}
                                </div>

                                <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-secondary-600 mb-4 line-clamp-3 flex-grow">
                                    {item.summary}
                                </p>

                                <button className="text-green-600 font-medium inline-flex items-center hover:text-green-700 transition-colors mt-auto group">
                                    Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note about content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl text-center max-w-3xl mx-auto"
                >
                    <p className="text-secondary-600">
                        <strong>Note:</strong> These are placeholder news items with stock images. Please replace with actual research updates, publications, software releases, and team activities. Add real photos from your department and research work.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default News;
