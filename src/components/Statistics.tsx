import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, DollarSign } from 'lucide-react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'Довольных клиентов',
      description: 'Успешно решенных задач',
      color: 'from-blue-600 to-blue-800',
      delay: '0'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Успешных дел',
      description: 'Выигранных судебных процессов',
      color: 'from-green-600 to-green-800',
      delay: '200'
    },
    {
      icon: DollarSign,
      value: '5 млрд ₽',
      label: 'Сохраненных средств',
      description: 'Для наших клиентов',
      color: 'from-amber-600 to-amber-800',
      delay: '400'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Лет опыта',
      description: 'Профессиональной практики',
      color: 'from-purple-600 to-purple-800',
      delay: '600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-amber-300 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Наши достижения</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Цифры, Которые
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Говорят Сами За Себя
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Результаты нашей работы подтверждены годами успешной практики 
            и доверием тысяч клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/20 hover:border-amber-500/50 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              {/* 3D Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg mb-6 group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {stat.description}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-6 bg-white/10 rounded-full h-1 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{ transitionDelay: `${parseInt(stat.delay) + 500}ms` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;