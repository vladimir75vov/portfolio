import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "../../../context/LanguageContext.jsx";
import { ThemeContext } from "../../../context/ThemeContext.jsx";

// Секция "Что я предлагаю" с 4 основными направлениями работы
function Section1Elem() {
  const { lang } = useContext(LanguageContext);
  const { christmasMode, autumnMode } = useContext(ThemeContext);

  const features = [
    {
      icon: "💻",
      titleEn: "Frontend Development",
      titleRu: "Frontend разработка",
      descEn: "Creating modern, responsive interfaces with React, TypeScript, and cutting-edge technologies",
      descRu: "Создание современных, адаптивных интерфейсов на React, TypeScript и передовых технологиях",
    },
    {
      icon: "⚙️",
      titleEn: "Backend Systems",
      titleRu: "Backend системы",
      descEn: "Building robust server-side applications with Node.js, C#, Python, and efficient databases",
      descRu: "Построение надёжных серверных приложений на Node.js, C#, Python и эффективных базах данных",
    },
    {
      icon: "🧪",
      titleEn: "Testing & QA",
      titleRu: "Тестирование и QA",
      descEn: "Ensuring quality through comprehensive testing, bug tracking, and continuous improvement",
      descRu: "Обеспечение качества через комплексное тестирование, отслеживание багов и постоянное улучшение",
    },
    {
      icon: "🚀",
      titleEn: "Automation",
      titleRu: "Автоматизация",
      descEn: "Implementing AI-powered automation, desktop tools, and process optimization solutions",
      descRu: "Внедрение AI-автоматизации, десктопных инструментов и решений для оптимизации процессов",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Сезонные декорации */}
          {christmasMode && (
            <>
              <Image src="/portfolio/images/Christmas tree.png" alt="Christmas tree" width={100} height={100} className="absolute -top-10 left-[5%] opacity-25 pointer-events-none select-none brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" unoptimized />
              <Image src="/portfolio/images/Christmas tree.png" alt="Christmas tree" width={80} height={80} className="absolute -top-5 right-[10%] opacity-20 pointer-events-none select-none brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" unoptimized />
            </>
          )}
          {autumnMode && (
            <>
              <span className="absolute -top-10 left-[5%] text-7xl opacity-25 pointer-events-none select-none">🍂</span>
              <span className="absolute -top-5 right-[10%] text-6xl opacity-20 pointer-events-none select-none">🍁</span>
            </>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "What I Offer" : "Что я предлагаю"}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            {lang === "en"
              ? "Professional full-stack development services with focus on quality, performance, and user experience"
              : "Профессиональные услуги full-stack разработки с фокусом на качество, производительность и пользовательский опыт"}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-blue-400 transition-colors">
                {lang === "en" ? feature.titleEn : feature.titleRu}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {lang === "en" ? feature.descEn : feature.descRu}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section1Elem;
