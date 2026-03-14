import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Suites', path: '/rooms' },
    { name: 'Temple Proximity', path: '/location' },
    { name: 'Sattvic Dining', path: '#' },
    { name: 'Experience', path: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-light/80 backdrop-blur-md h-16 shadow-md border-b border-primary/10' 
          : 'bg-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-4xl">temple_hindu</span>
          </div>
          <div>
            <h1 className={`text-2xl font-display font-medium leading-none tracking-tight transition-colors ${isScrolled ? 'text-background-dark' : 'text-white'}`}>
              Vrindavan Serenity
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">LUXURY PILGRIMAGE</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-slate-900' : 'text-white/90'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-primary text-background-dark px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 hover:scale-105 transition-all shadow-lg active:scale-95">
            <span>RESERVE NOW</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`h-0.5 w-6 bg-primary rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`h-0.5 w-6 bg-primary rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-6 bg-primary rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background-light border-b border-primary/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-900 py-2 border-b border-slate-100"
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full bg-primary text-background-dark py-4 rounded-xl font-bold mt-2">
                RESERVE NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
