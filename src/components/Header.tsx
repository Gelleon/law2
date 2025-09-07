import React, { useState, useEffect } from 'react';
import { Scale, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Scale 
                className={`w-8 h-8 transition-all duration-500 ${
                  isScrolled ? 'text-blue-900' : 'text-white'
                }`} 
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className={`text-2xl font-bold transition-colors duration-500 ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}>
              Адвокаты Туапсе
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className={`transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              Услуги
            </a>
            <a 
              href="#portfolio" 
              className={`transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              Портфолио
            </a>
            <a 
              href="#contact" 
              className={`transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
              <span className={`${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                +7 (495) 123-45-67
              </span>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Консультация
            </button>
          </div>

          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-700 hover:text-amber-500 transition-colors">
                Услуги
              </a>
              <a href="#portfolio" className="text-slate-700 hover:text-amber-500 transition-colors">
                Портфолио
              </a>
              <a href="#contact" className="text-slate-700 hover:text-amber-500 transition-colors">
                Контакты
              </a>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-sm text-slate-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Консультация
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
