import React, { useState, useEffect } from 'react';
import { Scale, Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTelegramClick = () => {
    window.open('https://t.me/your_telegram_username', '_blank');
    setShowConsultationPopup(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/74951234567', '_blank');
    setShowConsultationPopup(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+74951234567';
    setShowConsultationPopup(false);
  };

  return (
    <>
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
              <button 
                onClick={() => setShowConsultationPopup(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
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
                  <button 
                    onClick={() => setShowConsultationPopup(true)}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Консультация
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Consultation Popup */}
      {showConsultationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl animate-modal-appear">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Консультация</h3>
              <button
                onClick={() => setShowConsultationPopup(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleTelegramClick}
                className="w-full flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Написать в Telegram</span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Написать в WhatsApp</span>
              </button>
              
              <button
                onClick={handleCallClick}
                className="w-full flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Позвонить</span>
              </button>
            </div>
            
            <p className="text-center text-slate-500 text-sm mt-6">
              Выберите удобный способ связи
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
