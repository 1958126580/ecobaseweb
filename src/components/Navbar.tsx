import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Leaf } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    };

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/resources', label: t('nav.resources') },
        { path: '/news', label: t('nav.news') },
        { path: '/discussion', label: t('nav.discussion') },
        { path: '/contact', label: t('nav.contact') },
    ];

    return (
        <nav className={clsx(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "glass py-2" : "bg-transparent py-4"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="p-2 bg-primary-500 rounded-xl text-white shadow-lg shadow-primary-500/30">
                                <Leaf className="h-6 w-6" />
                            </div>
                            <span className={clsx(
                                "font-bold text-xl hidden sm:block transition-colors",
                                scrolled ? "text-secondary-900" : "text-secondary-900"
                            )}>
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
                                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200",
                                    isActive(link.path)
                                        ? "border-primary-500 text-primary-600"
                                        : "border-transparent text-secondary-600 hover:text-primary-500 hover:border-primary-200"
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-white/20 animate-in slide-in-from-top-5 duration-200">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block px-3 py-2 rounded-lg text-base font-medium transition-colors",
                                    isActive(link.path)
                                        ? "bg-primary-50 text-primary-700"
                                        : "text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900"
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
