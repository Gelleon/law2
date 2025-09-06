import React from 'react';
import { Scale, ArrowRight, Award, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-blue-400/10 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-amber-400/10 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/10 rounded-full animate-float-slow"></div>
      </div>

      {/* 3D Floating Documents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-document document-1">
          <div className="w-16 h-20 bg-white/20 backdrop-blur-sm rounded-lg shadow-2xl transform-3d">
            <div className="p-2">
              <div className="w-full h-1 bg-amber-400/50 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-white/30 rounded mb-1"></div>
              <div className="w-full h-1 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
        <div className="floating-document document-2">
          <div className="w-12 h-16 bg-white/15 backdrop-blur-sm rounded-lg shadow-2xl transform-3d">
            <div className="p-1.5">
              <div className="w-full h-1 bg-blue-400/50 rounded mb-1"></div>
              <div className="w-2/3 h-1 bg-white/30 rounded mb-1"></div>
              <div className="w-full h-1 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
        <div className="floating-document document-3">
          <div className="w-14 h-18 bg-white/25 backdrop-blur-sm rounded-lg shadow-2xl transform-3d">
            <div className="p-2">
              <div className="w-full h-1 bg-amber-500/60 rounded mb-1"></div>
              <div className="w-4/5 h-1 bg-white/40 rounded mb-1"></div>
              <div className="w-full h-1 bg-white/25 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Scales Animation */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className="scales-container">
          <Scale className="w-32 h-32 text-amber-400/30 animate-scales-balance" />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-amber-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>22+ года успешной практики</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Защитим Ваши
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Права и Интересы
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Профессиональная юридическая помощь с использованием инновационных технологий 
            и многолетнего опыта для достижения максимальных результатов
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
            <span>Получить консультацию</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
            Изучить портфолио
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in-up-delay-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">1000+ Клиентов</h3>
            <p className="text-blue-200 text-sm">Довольных результатом</p>
          </div>
          
          <div className="text-center animate-fade-in-up-delay-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">95% Успеха</h3>
            <p className="text-blue-200 text-sm">Выигранных дел</p>
          </div>
          
          <div className="text-center animate-fade-in-up-delay-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
              <Award className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">15+ Лет</h3>
            <p className="text-blue-200 text-sm">Практики в праве</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;