import React, { useState } from 'react';
import { Calendar, DollarSign, TrendingUp, Users, Plus, Eye, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cases = [
    {
      id: 1,
      title: 'Крупный корпоративный спор',
      client: 'ООО "Инновационные решения"',
      amount: '250 млн ₽',
      result: 'Победа в суде',
      date: '2024',
      description: 'Успешная защита интересов клиента в споре о нарушении договорных обязательств',
      category: 'Корпоративное право',
      duration: '8 месяцев',
      challenges: ['Сложная доказательная база', 'Международные аспекты', 'Множественные ответчики'],
      outcome: 'Полное возмещение ущерба и процентов',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      title: 'Наследственное дело',
      client: 'Частное лицо',
      amount: '85 млн ₽',
      result: 'Мирное соглашение',
      date: '2024',
      description: 'Урегулирование сложного наследственного спора с участием 7 наследников',
      category: 'Гражданское право',
      duration: '4 месяца',
      challenges: ['Множественные наследники', 'Зарубежная недвижимость', 'Оспариваемое завещание'],
      outcome: 'Справедливое разделение наследства между всеми сторонами',
      color: 'from-amber-600 to-amber-800'
    },
    {
      id: 3,
      title: 'Банкротное производство',
      client: 'ООО "ТехСтрой"',
      amount: '180 млн ₽',
      result: 'Восстановление платежеспособности',
      date: '2023',
      description: 'Успешное проведение процедуры финансового оздоровления предприятия',
      category: 'Банкротное право',
      duration: '12 месяцев',
      challenges: ['Критическое финансовое положение', 'Множественные кредиторы', 'Сложная структура долгов'],
      outcome: 'Полное восстановление деятельности компании',
      color: 'from-slate-600 to-slate-800'
    }
  ];

  const openCaseModal = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeCaseModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-2 text-amber-800 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Наши достижения</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Портфолио
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Каждое дело - это уникальная история успеха.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div 
              key={caseItem.id}
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-slate-200 hover:border-amber-300"
              onClick={() => openCaseModal(caseItem)}
            >
              {/* 3D Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-amber-600 font-medium bg-amber-100 px-3 py-1 rounded-full">
                    {caseItem.category}
                  </span>
                  <Eye className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {caseItem.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {caseItem.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Сумма спора:</span>
                    <span className="font-semibold text-slate-900">{caseItem.amount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Результат:</span>
                    <span className="font-semibold text-green-600">{caseItem.result}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Год:</span>
                    <span className="font-semibold text-slate-900">{caseItem.date}</span>
                  </div>
                </div>

                <div className="flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                  <span>Подробнее</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Case Detail Modal */}
      {isModalOpen && selectedCase && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modal-appear">
            <div className={`bg-gradient-to-r ${selectedCase.color} p-6 rounded-t-2xl text-white`}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{selectedCase.title}</h3>
                <button 
                  onClick={closeCaseModal}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>
              <p className="text-white/90 mt-2">{selectedCase.client}</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-500 mb-1">Сумма спора</div>
                  <div className="text-xl font-bold text-slate-900">{selectedCase.amount}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-500 mb-1">Результат</div>
                  <div className="text-xl font-bold text-green-600">{selectedCase.result}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Описание дела</h4>
                <p className="text-slate-700 leading-relaxed">{selectedCase.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Основные вызовы</h4>
                <ul className="space-y-2">
                  {selectedCase.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Достигнутый результат</h4>
                <p className="text-green-700">{selectedCase.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;