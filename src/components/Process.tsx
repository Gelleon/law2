import React from 'react';
import { MessageSquare, FileSearch, Scale, CheckCircle, ChevronRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Консультация',
      subtitle: 'Бесплатный анализ',
      description: 'Подробно обсуждаем вашу ситуацию, анализируем документы и определяем правовые перспективы',
      features: ['Анализ документов', 'Оценка перспектив', 'Стратегическое планирование'],
      duration: '1-2 дня'
    },
    {
      icon: FileSearch,
      title: 'Исследование',
      subtitle: 'Глубокий анализ',
      description: 'Проводим детальное исследование правовых аспектов, изучаем судебную практику и готовим стратегию',
      features: ['Правовой анализ', 'Изучение практики', 'Подготовка стратегии'],
      duration: '3-5 дней'
    },
    {
      icon: Scale,
      title: 'Действия',
      subtitle: 'Активная защита',
      description: 'Реализуем выбранную стратегию, представляем ваши интересы и ведем дело до победного завершения',
      features: ['Подача документов', 'Представительство', 'Переговоры'],
      duration: 'По ситуации'
    },
    {
      icon: CheckCircle,
      title: 'Результат',
      subtitle: 'Успешное завершение',
      description: 'Достигаем поставленных целей, обеспечиваем исполнение решений и предоставляем рекомендации',
      features: ['Достижение целей', 'Исполнение решений', 'Рекомендации'],
      duration: 'Гарантированно'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-amber-300 text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            <span>Наш подход</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Как Мы
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Работаем
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Четкий, прозрачный процесс работы, который гарантирует максимальную 
            эффективность и достижение поставленных целей
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-4 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/50"
              >
                {/* 3D Step Number */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>

                {/* Animated Icon */}
                <div className="mb-6 pt-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-amber-400 text-sm font-medium">{step.subtitle}</p>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  {step.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <span className="inline-block bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
            <span>Начать работу с нами</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
