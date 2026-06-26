import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
}

export default function Header({ darkMode, setDarkMode, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="kipto-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0A1E26]/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-primary/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:grid md:grid-cols-3">
          
          {/* Logo with clean SVG path & premium design */}
          <div className="flex justify-start">
            <a href="#home" className="flex items-center space-x-2.5 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 border border-gray-250 dark:border-white/10 shrink-0">
                <img 
                  src="https://ik.imagekit.io/72dmudtmj/fe7f05c8-e14e-45c4-9d2b-2a71c33a264d.jpg" 
                  alt="KIPTO Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-wider text-secondary dark:text-white flex items-center">
                  KIPTO
                  <span className="text-accent text-3xl leading-none ml-0.5">.</span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-primary dark:text-accent font-bold uppercase -mt-1">
                  INNOVATION PVT LTD
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`font-display text-sm font-medium tracking-wide transition-colors duration-200 relative py-2 ${
                        isActive
                          ? 'text-primary dark:text-accent'
                          : 'text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick CTA */}
          <div className="hidden md:flex justify-end items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary hover:bg-secondary text-white dark:bg-accent dark:hover:bg-orange-500 dark:text-secondary font-display font-medium text-xs px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Consultation
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Sidebar toggle */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl bg-gray-100 dark:bg-primary/20 text-secondary dark:text-white hover:text-accent"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0A1E26] shadow-xl border-b border-gray-200 dark:border-primary/20"
          >
            <nav className="px-4 pt-2 pb-6 space-y-2">
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-4 py-3 rounded-xl font-display text-base font-semibold transition-all ${
                          isActive
                            ? 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-primary/10'
                        }`}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full text-center bg-primary dark:bg-accent text-white dark:text-secondary font-display font-semibold py-3 rounded-xl transition-all shadow-md"
                >
                  Get a Free Consultation
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
