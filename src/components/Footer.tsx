import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1E26] text-gray-300 pt-20 pb-10 border-t border-white/5 relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative subtle ambient backdrop glow page border */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer columns row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Brand/About block: takes 5 cols on lg screens */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              {/* K Logo badge with custom image logo */}
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md border border-white/10 shrink-0">
                <img 
                  src="https://ik.imagekit.io/72dmudtmj/fe7f05c8-e14e-45c4-9d2b-2a71c33a264d.jpg" 
                  alt="KIPTO Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-white">
                KIPTO<span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">.</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Transforming businesses through innovative software solutions. We build premium digital products that drive growth and success.
            </p>

            {/* Social channels: custom exact circles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
                title="Follow KIPTO on Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
                title="Follow KIPTO on Twitter"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://instagram.com/kipto.tech"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
                title="Follow KIPTO on Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
                title="Connect with KIPTO on LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://github.com/ameersyed1226"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
                title="Follow on GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Desktop Applications
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Billing Software
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  E-Commerce
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" onClick={(e) => handleLinkClick(e, '#team')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Support */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="text-xs text-gray-400 font-mono">
            © 2026 Kipto Innovation Private Limited. All Rights Reserved.
          </div>

          {/* Scroll back up arrow */}
          <button
            onClick={scrollToTop}
            className="bg-white/5 hover:bg-accent hover:text-[#123B4A] p-2.5 rounded-xl border border-white/5 group shadow-md transition-all duration-300"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
