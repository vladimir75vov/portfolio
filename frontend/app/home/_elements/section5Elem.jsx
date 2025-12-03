import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

// Секция "Профессиональные достижения" со статистикой
function Section5Elem() {
  const { t, lang } = useContext(LanguageContext);
  
  const stats = [
    { 
      value: "4+", 
      label: lang === "en" ? "Years Experience" : "Года опыта" 
    },
    { 
      value: "50+", 
      label: lang === "en" ? "Projects Completed" : "Завершённых проектов" 
    },
    { 
      value: "3", 
      label: lang === "en" ? "Major Companies" : "Крупных компаний" 
    },
    { 
      value: "100%", 
      label: lang === "en" ? "Client Satisfaction" : "Удовлетворённость клиентов" 
    }
  ];

  return (
    <section className="justify-center text-center flex flex-wrap py-20">
      <div className="w-full px-4 md:px-6">
        <h2 className="font-semibold text-4xl text-[var(--text-primary)] mb-6">
          {lang === "en" ? "Professional Achievements" : "Профессиональные достижения"}
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-12 text-[var(--text-secondary)] max-w-3xl mx-auto">
          {lang === "en"
            ? "Delivering high-quality solutions for businesses and government organizations. Specialized in creating automated systems, user interfaces, and technical solutions."
            : "Создаю качественные решения для бизнеса и государственных организаций. Специализируюсь на автоматизированных системах, пользовательских интерфейсах и технических решениях."}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5Elem;
