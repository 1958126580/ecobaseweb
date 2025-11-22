import React from 'react';
import { useTranslation } from 'react-i18next';
import Giscus from '@giscus/react';

const Discussion: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-secondary-900 mb-8">{t('nav.discussion')}</h1>
                <div className="bg-white rounded-xl border border-secondary-200 shadow-sm p-8">
                    <Giscus
                        id="comments"
                        repo="MeiBujun/spatiotemporal-base" // Placeholder - user needs to configure this
                        repoId="R_kgDOL..." // Placeholder
                        category="General"
                        categoryId="DIC_kwDOL..." // Placeholder
                        mapping="pathname"
                        term="Welcome to @giscus/react component!"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="top"
                        theme="light"
                        lang="en"
                        loading="lazy"
                    />
                    <div className="mt-4 text-sm text-secondary-500 text-center">
                        <p>Note: Discussion feature requires GitHub repository configuration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discussion;
