import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm
      ${scrolled ? 'bg-white/80 shadow-sm py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo or Brand */}
        <div className="flex items-center space-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 100 100"
            className="text-teal-600"
            aria-hidden="true"
          >
            <path
              d="M30,20 L30,80 L50,30 L50,80 L70,80 L70,20 L50,70 L50,20 Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-teal-600 font-bold text-xl">n1colasgtz</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium py-2"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 rounded-md md:hidden text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-16 left-0 w-full max-h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-sm shadow-md overflow-y-auto"
        >
          <ul className="py-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition-colors text-base font-medium focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;