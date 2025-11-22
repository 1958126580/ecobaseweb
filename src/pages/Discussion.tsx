import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare, AlertCircle, ExternalLink } from 'lucide-react';

const Discussion: React.FC = () => {
    const { t } = useTranslation();

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

                    {/* Setup Instructions */}
                    <div className="glass rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-2">Giscus Setup Required</h3>
                                <p className="text-secondary-600 mb-4">
                                    To enable discussions on this website, you need to configure Giscus with your GitHub repository. Follow these steps:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-secondary-700 mb-6">
                                    <li>Visit <a href="https://giscus.app" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">giscus.app</a></li>
                                    <li>Enter your repository: <code className="bg-secondary-100 px-2 py-1 rounded text-sm">1958126580/ecobaseweb</code></li>
                                    <li>Enable "Discussions" in your GitHub repository settings</li>
                                    <li>Copy the generated configuration values</li>
                                    <li>Update the <code className="bg-secondary-100 px-2 py-1 rounded text-sm">src/pages/Discussion.tsx</code> file with:
                                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                            <li><code className="bg-secondary-100 px-1 rounded text-xs">repoId</code></li>
                                            <li><code className="bg-secondary-100 px-1 rounded text-xs">categoryId</code></li>
                                        </ul>
                                    </li>
                                </ol>
                                <a
                                    href="https://github.com/1958126580/ecobaseweb/settings"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Open Repository Settings
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for Giscus */}
                    <div className="glass rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="text-center py-12">
                            <MessageSquare className="h-16 w-16 text-secondary-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-secondary-700 mb-2">Discussion Module</h3>
                            <p className="text-secondary-500 max-w-md mx-auto">
                                Once Giscus is configured, discussions will appear here. Users can sign in with GitHub to participate.
                            </p>
                        </div>
                    </div>

                    {/* Alternative Contact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-center"
                    >
                        <p className="text-secondary-600">
                            In the meantime, you can reach us at{' '}
                            <a href="mailto:1958126580@qq.com" className="text-green-600 hover:text-green-700 font-medium">
                                1958126580@qq.com
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Discussion;
