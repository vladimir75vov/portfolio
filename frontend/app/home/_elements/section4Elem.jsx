import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

// Секция "Почему выбирают меня" с 6 преимуществами работы
function Section4Elem() {
  const { lang } = useContext(LanguageContext);
  
  const benefits = [
    {
      icon: "⚡",
      titleEn: "High Performance",
      titleRu: "Высокая производительность",
      descEn: "Optimized code and efficient architecture for fast, scalable applications",
      descRu: "Оптимизированный код и эффективная архитектура для быстрых масштабируемых приложений"
    },
    {
      icon: "🎯",
      titleEn: "Quality Focused",
      titleRu: "Фокус на качестве",
      descEn: "Comprehensive testing, code reviews, and best practices implementation",
      descRu: "Комплексное тестирование, ревью кода и внедрение лучших практик"
    },
    {
      icon: "🔒",
      titleEn: "Security First",
      titleRu: "Безопасность прежде всего",
      descEn: "Secure coding practices and data protection in every project",
      descRu: "Безопасная разработка и защита данных в каждом проекте"
    },
    {
      icon: "📱",
      titleEn: "Responsive Design",
      titleRu: "Адаптивный дизайн",
      descEn: "Beautiful interfaces that work seamlessly across all devices",
      descRu: "Красивые интерфейсы, идеально работающие на всех устройствах"
    },
    {
      icon: "🔄",
      titleEn: "Continuous Support",
      titleRu: "Постоянная поддержка",
      descEn: "Ongoing maintenance, updates, and technical assistance",
      descRu: "Постоянное обслуживание, обновления и техническая помощь"
    },
    {
      icon: "💡",
      titleEn: "Innovation Driven",
      titleRu: "Инновационный подход",
      descEn: "Implementing cutting-edge technologies and modern solutions",
      descRu: "Внедрение передовых технологий и современных решений"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "Why Choose Me" : "Почему выбирают меня"}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            {lang === "en"
              ? "Commitment to excellence, proven track record, and dedication to delivering exceptional results"
              : "Стремление к совершенству, проверенный опыт и преданность достижению исключительных результатов"}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-blue-400 transition-colors">
                  {lang === "en" ? benefit.titleEn : benefit.titleRu}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {lang === "en" ? benefit.descEn : benefit.descRu}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section4Elem;
