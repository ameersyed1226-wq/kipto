/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ContactSubmission } from './types';

// Safe localStorage wrapper to prevent fatal SecurityError crashes in sandboxed iframes or restricted environments
const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch (e) {
      console.warn('localStorage reading blocked or disabled by browser sandbox:', e);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {
      console.warn('localStorage writing blocked or disabled by browser sandbox:', e);
    }
  }
};

export default function App() {
  // Dark mode initialized from localStorage or client system theme preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = safeStorage.getItem('kipto-theme');
        if (saved !== null) {
          return saved === 'dark';
        }
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemPrefersDark;
      } catch (err) {
        console.warn('Failed to detect system color scheme preferences gracefully:', err);
        return false;
      }
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [leadsList, setLeadsList] = useState<ContactSubmission[]>(() => {
    try {
      const savedLeads = safeStorage.getItem('kipto-leads');
      return savedLeads ? JSON.parse(savedLeads) : [];
    } catch (err) {
      console.error('Failed to parse saved leads safely', err);
      return [];
    }
  });

  // Dark mode effect toggler
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      safeStorage.setItem('kipto-theme', 'dark');
    } else {
      root.classList.remove('dark');
      safeStorage.setItem('kipto-theme', 'light');
    }
  }, [darkMode]);

  // Lead submissions persistence effect
  useEffect(() => {
    try {
      safeStorage.setItem('kipto-leads', JSON.stringify(leadsList));
    } catch (err) {
      console.error('Failed to stringify and store leads safely', err);
    }
  }, [leadsList]);

  // Handle addition of a new lead representation
  const handleAddLead = (lead: ContactSubmission) => {
    setLeadsList((prev) => [lead, ...prev]);
  };

  // Clear lead submissions
  const handleClearLeads = () => {
    setLeadsList([]);
  };

  // Intersection Observer implementation to track active navbar section items on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'team', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when item occupies center screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1E26] text-brand-charcoal dark:text-gray-200 transition-colors duration-305 selection:bg-accent selection:text-secondary">
      
      {/* Dynamic Header navbar bar */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      {/* Main Container block */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact
          onAddLead={handleAddLead}
          leadsList={leadsList}
          onClearLeads={handleClearLeads}
        />
      </main>

      {/* Detailed footer element */}
      <Footer />
    </div>
  );
}
