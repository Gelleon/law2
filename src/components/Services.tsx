import React from 'react';
import { Scale, Shield, Briefcase, Building, Users, FileText, Gavel, Heart, MapPin, TrendingDown, UserCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: 'Защита по уголовным делам',
      description: 'Профессиональная защита прав и интересов в уголовном процессе на всех стадиях',
      features: ['Предварительное следствие и дознание', 'Судебное разбирательство во всех инстанциях', 'Обжалование действий и бездействий', 'Защита потерпевших'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Heart,
      title: 'Защита по семейным делам',
      description: 'Деликатное решение семейных споров с учетом интересов всех сторон',
      features: ['Развод и раздел имущества', 'Алименты и содержание', 'Опека и усыновление', 'Брачные договоры'],
      color: 'from-amber-600 to-amber-800'
    },
    {
      icon: MapPin,
      title: 'Земельные споры',
      description: 'Защита прав на земельные участки и разрешение земельных конфликтов',
      features: ['Споры о границах участков', 'Право собственности на землю', 'Земельная аренда', 'Изъятие для гос. нужд'],
      color: 'from-slate-600 to-slate-800'
    },
    {
      icon: TrendingDown,
      title: 'Дела по банкротству',
      description: 'Комплексное сопровождение процедур банкротства физических и юридических лиц',
      features: ['Банкротство граждан', 'Корпоративное банкротство', 'Финансовое оздоровление', 'Защита от банкротства'],
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Scale,
      title: 'Арбитражные дела',
      description: 'Профессиональное представительство в арбитражных судах всех инстанций',
      features: ['Экономические споры', 'Корпоративные конфликты', 'Налоговые споры', 'Исполнительное производство'],
      color: 'from-purple-600 to-purple-800'
    },
    {
      icon: UserCheck,
      title: 'Трудовые споры',
      description: 'Защита трудовых прав работников и работодателей в различных спорных ситуациях',
      features: ['Незаконное увольнение', 'Невыплата заработной платы', 'Трудовые договоры', 'Дисциплинарные взыскания'],
      color: 'from-green-600 to-green-800'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-800 text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            <span>Наши специализации</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Профессиональные
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
              Юридические Услуги
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Предоставляем комплексные правовые решения с использованием передовых методологий 
            и глубокой экспертизы в различных отраслях права
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              {/* 3D Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Animated Icon */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:rotate-3 group-hover:scale-110`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white py-2 rounded-lg font-semibold text-sm transition-all duration-300 group-hover:shadow-lg">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;