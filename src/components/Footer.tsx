import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-secondary-50 border-t border-secondary-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-base text-secondary-500">
                    {t('footer.copyright')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
