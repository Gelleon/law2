import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      company: 'ООО "ТехИнвест"',
      rating: 5,
      text: 'ЛексПро помогли нам выиграть сложный корпоративный спор на 180 млн рублей. Профессионализм команды и внимание к деталям впечатляют.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Елена Смирнова',
      position: 'Предприниматель',
      company: 'ИП Смирнова Е.В.',
      rating: 5,
      text: 'Благодаря грамотной работе юристов удалось избежать банкротства и восстановить платежеспособность компании. Рекомендую!',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Михаил Волков',
      position: 'Руководитель',
      company: 'АО "Строй-Альянс"',
      rating: 5,
      text: 'Отличная команда профессионалов! Быстро и качественно решили все наши юридические вопросы по недвижимости.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-800 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Отзывы клиентов</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Что Говорят
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
              Наши Клиенты
            </span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 hover:shadow-3xl">
            <Quote className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div className="text-left">
                <h4 className="font-semibold text-slate-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-slate-600 text-sm">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-slate-500 text-xs">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;