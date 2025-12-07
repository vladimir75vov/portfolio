import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

// Секция "Доверие организаций" с карточками работодателей
function Section3Elem() {
  const { lang } = useContext(LanguageContext);

  const companies = [
    {
      name: "CODD Moscow",
      nameRu: "ЦОДД Москва",
      logo: "🏛️",
      period: "2024 - Present",
      periodRu: "2024 - Настоящее время",
      role: "Chief Specialist",
      roleRu: "Главный специалист",
    },
    {
      name: "Leroy Merlin",
      nameRu: "Леруа Мерлен",
      logo: "🏪",
      period: "2021 - 2023",
      periodRu: "2021 - 2023",
      role: "Supply Chain Specialist",
      roleRu: "Специалист цепи поставок",
    },
    {
      name: "Russian National Guard",
      nameRu: "Росгвардия",
      logo: "🛡️",
      period: "2023 - 2024",
      periodRu: "2023 - 2024",
      role: "System Administrator",
      roleRu: "Системный администратор",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "Trusted by Organizations" : "Доверие организаций"}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            {lang === "en"
              ? "Working with leading companies and government organizations to deliver exceptional results"
              : "Работа с ведущими компаниями и государственными организациями для достижения исключительных результатов"}
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="group bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-xl p-8 text-center hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {company.logo}
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-blue-400 transition-colors break-words">
                {lang === "en" ? company.name : company.nameRu}
              </h3>
              <p className="text-blue-400 font-medium mb-2 break-words">{lang === "en" ? company.role : company.roleRu}</p>
              <p className="text-[var(--text-muted)] text-sm break-words">{lang === "en" ? company.period : company.periodRu}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3Elem;
