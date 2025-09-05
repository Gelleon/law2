import React from 'react';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Scale className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold">ЛексПро</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Профессиональная юридическая компания с 15-летним опытом. 
              Защищаем ваши права и интересы на высочайшем уровне.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Гражданское право</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Корпоративное право</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Арбитражные споры</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Семейное право</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Недвижимость</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Информация</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">О компании</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Наша команда</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Блог</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Карьера</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p className="text-white font-medium">+7 (495) 123-45-67</p>
                  <p className="text-slate-400 text-sm">Ежедневно 9:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p className="text-white">info@lekspro.ru</p>
                  <p className="text-slate-400 text-sm">Ответим в течение 2 часов</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p className="text-white">Москва, ул. Тверская, 15</p>
                  <p className="text-slate-400 text-sm">офис 501, 5 этаж</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © {currentYear} ЛексПро. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;