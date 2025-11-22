import React from 'react';
import { useTranslation } from 'react-i18next';
import Giscus from '@giscus/react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const Discussion: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="min-h-screen pt-20 pb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 -z-10">
                <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-green-50/50 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                            <MessageSquare className="h-8 w-8 text-green-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t('nav.discussion')}</h1>
                        <p className="text-xl text-secondary-600">
                            Join the conversation, ask questions, and share your insights with the community.
                        </p>
                    </div>

                    <div className="glass rounded-2xl shadow-xl p-8 md:p-12">
                        <Giscus
                            id="comments"
                            repo="1958126580/ecobaseweb"
                            repoId="R_kgDOQa2XzQ"
                            category="General"
                            categoryId="DIC_kwDOQa2Xzc4CyFLC"
                            mapping="pathname"
                            strict="0"
                            reactionsEnabled="1"
                            emitMetadata="0"
                            inputPosition="bottom"
                            theme="light"
                            lang={i18n.language === 'zh' ? 'zh-CN' : 'en'}
                            loading="lazy"
                        />
                        <div className="mt-8 pt-6 border-t border-secondary-200 text-sm text-secondary-500 text-center">
                            <p>Powered by GitHub Discussions. Sign in with GitHub to participate.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Discussion;
