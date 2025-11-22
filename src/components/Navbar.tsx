import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Leaf } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    };

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/resources', label: t('nav.resources') },
        { path: '/discussion', label: t('nav.discussion') },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <Leaf className="h-8 w-8 text-primary-600" />
                            <span className="font-bold text-xl text-secondary-900 hidden sm:block">
                                {t('hero.title')}
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200",
                                    isActive(link.path)
                                        ? "border-primary-500 text-secondary-900"
                                        : "border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-full hover:bg-secondary-100 text-secondary-600 transition-colors"
                            aria-label="Toggle Language"
                        >
                            <Globe className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 mr-2 rounded-full hover:bg-secondary-100 text-secondary-600"
                        >
                            <Globe className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-secondary-200">
                    <div className="pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                                    isActive(link.path)
                                        ? "bg-primary-50 border-primary-500 text-primary-700"
                                        : "border-transparent text-secondary-500 hover:bg-secondary-50 hover:border-secondary-300 hover:text-secondary-700"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
