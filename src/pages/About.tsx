import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-secondary-900 mb-8">{t('nav.about')}</h1>
                <div className="prose prose-lg prose-primary text-secondary-600">
                    <p>
                        Welcome to the Spatiotemporal Digital Base. We are dedicated to advancing ecological research through the power of mathematics and computer science.
                    </p>
                    <p>
                        Our mission is to provide robust tools, algorithms, and platforms that enable researchers to analyze complex spatiotemporal data with unprecedented precision and efficiency.
                    </p>
                    <h2>Our Vision</h2>
                    <p>
                        We envision a future where ecological decision-making is driven by data-driven insights, powered by a digital base that integrates multi-source data across space and time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
