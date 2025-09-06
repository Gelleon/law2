import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-800 text-sm font-medium mb-6">
            <Phone className="w-4 h-4" />
            <span>Свяжитесь с нами</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Получите
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                  Консультацию
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Обсудим вашу ситуацию и предложим оптимальные пути решения. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Телефон</h3>
                  <p className="text-slate-600">+7 (495) 123-45-67</p>
                  <p className="text-slate-500 text-sm">Звоните ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">info@lekspro.ru</p>
                  <p className="text-slate-500 text-sm">Ответим в течение 2 часов</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Адрес</h3>
                  <p className="text-slate-600">Москва, ул. Тверская, 15, офис 501</p>
                  <p className="text-slate-500 text-sm">Центр города, удобная транспортная доступность</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Режим работы</h3>
                  <p className="text-slate-600">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-slate-600">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messenger Buttons */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Свяжитесь с нами в мессенджерах
              </h3>
              <p className="text-slate-600">
                Выберите удобный способ связи для быстрой консультации
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://t.me/lekspro_law"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Написать в Telegram</span>
              </a>

              <a
                href="https://wa.me/79251234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Написать в WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 text-sm text-center">
                <strong>Быстрый ответ:</strong> Мы отвечаем в мессенджерах в течение 15 минут в рабочее время
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;