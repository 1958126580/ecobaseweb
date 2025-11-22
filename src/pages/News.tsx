import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News: React.FC = () => {
    const { t } = useTranslation();

    const newsItems = [
        {
            id: 1,
            title: "Student Team Wins Prize in Cross-Strait Youth Science Forum",
            date: "2024-07-04",
            category: "Awards",
            summary: "A team of students from our department received the Outstanding Paper Award at the inaugural Cross-Strait Youth Science and Technology Forum.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Academic Lecture: Beidou Positioning Technology",
            date: "2024-05-09",
            category: "Lecture",
            summary: "Professor invited to give a special lecture on the principles and applications of the Beidou Navigation Satellite System.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "School-Enterprise Cooperation with BOE Technology",
            date: "2024-04-05",
            category: "Cooperation",
            summary: "Department leaders visited BOE Technology Group to discuss internship opportunities and joint talent cultivation programs.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Success in National Undergraduate Mathematical Modeling Contest",
            date: "2023-12-13",
            category: "Competition",
            summary: "Our students achieved excellent results in the 2023 competition, winning multiple national and regional awards.",
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 relative">
            <div className="absolute inset-0 bg-secondary-50 -z-10">
                <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary-600 uppercase tracking-wider flex items-center gap-1">
                                        <Tag className="h-3 w-3" /> {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-secondary-500 text-sm mb-4">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {item.date}
                                </div>

                                <h3 className="text-2xl font-bold text-secondary-900 mb-4 line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-secondary-600 mb-6 line-clamp-3 flex-grow text-lg">
                                    {item.summary}
                                </p>

                                <button className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 transition-colors mt-auto group">
                                    Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
