"use client";

import { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useDeviceTilt } from "../../components/useDeviceTilt.jsx";

// Страница "Обо мне" с опытом работы, образованием и навыками
export default function About() {
  const { lang } = useContext(LanguageContext);
  const { christmasMode, autumnMode } = useContext(ThemeContext);
  const tilt = useDeviceTilt();

  // Автоматический расчет возраста
  const calculateAge = () => {
    const birthDate = new Date(2003, 4, 9); // 09.05.2003 (месяцы с 0)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge();

  const aboutText =
    lang === "en"
      ? "Versatile specialist with experience in frontend development, technical support, and web application testing. I strive to create effective and user-friendly interfaces, ensure seamless system operation, and improve software quality. Ready to contribute to the team and solve problems of varying complexity."
      : "Многопрофильный специалист с опытом frontend-разработки, технической поддержки и тестирования веб-приложений. Стремлюсь к созданию эффективных и удобных пользовательских интерфейсов, обеспечению бесперебойной работы систем и повышению качества программных продуктов. Готов внести свой вклад в команду и решать задачи различной сложности.";

  const experiences =
    lang === "en"
      ? [
          {
            title: "Frontend Development",
            desc: "HTML5, CSS3, JavaScript, React, TypeScript, Figma. Cross-browser and responsive layout.",
            icon: "💻",
          },
          {
            title: "Backend Development",
            desc: "Node.js, C#, Java, Python, .NET Core, MySQL, MS SQL, Firebase",
            icon: "⚙️",
          },
          {
            title: "Testing & Support",
            desc: "Manual testing, UI testing, bug tracking, technical support, problem solving",
            icon: "🔧",
          },
        ]
      : [
          {
            title: "Frontend разработка",
            desc: "HTML5, CSS3, JavaScript, React, TypeScript, Figma. Кроссбраузерная и адаптивная вёрстка.",
            icon: "💻",
          },
          {
            title: "Backend разработка",
            desc: "Node.js, C#, Java, Python, .NET Core, MySQL, MS SQL, Firebase",
            icon: "⚙️",
          },
          {
            title: "Тестирование и поддержка",
            desc: "Ручное тестирование, UI-тестирование, отслеживание багов, техническая поддержка",
            icon: "🔧",
          },
        ];

  const workExperience =
    lang === "en"
      ? [
          {
            period: "Aug 2024 - Present",
            company: "GKU CODD Moscow Government",
            position: "Chief Specialist MDTO",
            description:
              "Development of automated systems, desktop interfaces (JavaScript), road safety monitoring, violation detection and reporting.",
          },
          {
            period: "Jun 2023 - Jun 2024",
            company: "National Guard of the Russian Federation",
            position: "Military Service",
            description:
              "System administration and support. Linux administration (Astra Linux). Ensuring system operability and security.",
          },
          {
            period: "Jun 2021 - Jun 2023",
            company: "Leroy Merlin (Lemana PRO)",
            position: "Supply Chain Specialist",
            description:
              "Development of desktop and mobile website for employees (React, TypeScript), AI implementation for automation (Java, Python, Node.JS, OpenCV).",
          },
        ]
      : [
          {
            period: "Август 2024 - Настоящее время",
            company: "ГКУ ЦОДД Правительства Москвы",
            position: "Главный специалист МДТО",
            description:
              "Разработка автоматизированных систем, десктопных интерфейсов (JavaScript), мониторинг дорожной обстановки, выявление нарушений и формирование отчётов.",
          },
          {
            period: "Июнь 2023 - Июнь 2024",
            company: "Федеральная служба войск национальной гвардии РФ",
            position: "Срочная служба",
            description:
              "Администрирование и поддержка систем. Администрирование Linux (Astra Linux). Обеспечение работоспособности и безопасности систем.",
          },
          {
            period: "Июнь 2021 - Июнь 2023",
            company: "Леруа Мерлен (Лемана ПРО)",
            position: "Специалист цепи поставок",
            description:
              "Разработка десктопной и мобильной версии сайта для сотрудников (React, TypeScript), внедрение AI в проект по автоматизации (Java, Python, Node.JS, OpenCV).",
          },
        ];

  const education =
    lang === "en"
      ? [
          {
            year: "2028",
            institution: "Institute of Business Career",
            degree: "Enterprise Architecture (In Progress)",
          },
          {
            year: "2024",
            institution: "Professional Development Course",
            degree: "IT Project Manager (1T Certification)",
          },
          {
            year: "2023",
            institution: "Lyubertsy Technical College named after Y.A. Gagarin",
            degree: "Programmer",
          },
        ]
      : [
          {
            year: "2028",
            institution: "Институт деловой карьеры",
            degree: "Архитектура предприятия (В процессе)",
          },
          {
            year: "2024",
            institution: "Курсы повышения квалификации",
            degree: "Менеджер IT-проектов (Сертификация 1T)",
          },
          {
            year: "2023",
            institution: "Люберецкий техникум имени Ю.А. Гагарина",
            degree: "Программист",
          },
        ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          {/* Сезонные декорации */}
          {christmasMode && (
            <>
              <Image src="/portfolio/images/Christmas tree.png" alt="Christmas tree" width={100} height={100} className="absolute -top-10 left-0 opacity-25 pointer-events-none select-none brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.6}px, ${tilt.y * 0.6}px)` }} unoptimized />
              <Image src="/portfolio/images/Christmas tree.png" alt="Christmas tree" width={80} height={80} className="absolute -top-5 right-10 opacity-20 pointer-events-none select-none brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.4}px, ${tilt.y * 0.4}px)` }} unoptimized />
            </>
          )}
          {autumnMode && (
            <>
              <span className="absolute -top-10 left-0 text-7xl opacity-25 pointer-events-none select-none transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.6}px, ${tilt.y * 0.6}px)` }}>🍂</span>
              <span className="absolute -top-5 right-10 text-6xl opacity-20 pointer-events-none select-none transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.4}px, ${tilt.y * 0.4}px)` }}>🍁</span>
            </>
          )}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "About Me" : "Обо мне"}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{aboutText}</p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[var(--text-primary)]">
            {lang === "en" ? "What I Do" : "Чем я занимаюсь"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[var(--text-primary)]">
            {lang === "en" ? "Work Experience" : "Опыт работы"}
          </h2>
          <div className="space-y-6">
            {workExperience.map((work, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-blue-400">{work.position}</h3>
                  <span className="text-sm text-[var(--text-muted)] mt-1 md:mt-0">{work.period}</span>
                </div>
                <p className="text-[var(--text-secondary)] font-medium mb-2">{work.company}</p>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[var(--text-primary)]">
            {lang === "en" ? "Education" : "Образование"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-blue-400 font-bold text-lg mb-2">{edu.year}</div>
                <h3 className="text-[var(--text-primary)] font-semibold mb-2">{edu.institution}</h3>
                <p className="text-[var(--text-muted)] text-sm">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
            {lang === "en" ? "Contact Information" : "Контактная информация"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--text-secondary)]">
            <div>
              <p className="mb-2">
                <span className="font-semibold text-blue-400">Email:</span> vladimir75vov@gmail.com
              </p>
              <p className="mb-2">
                <span className="font-semibold text-blue-400">Phone:</span> +7 (903) 709-5173
              </p>
              <p>
                <span className="font-semibold text-blue-400">Telegram:</span> @vladimir75vov
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-semibold text-blue-400">{lang === "en" ? "Location" : "Местоположение"}:</span>{" "}
                {lang === "en" ? "Moscow, Russia" : "Москва, Россия"}
              </p>
              <p className="mb-2">
                <span className="font-semibold text-blue-400">{lang === "en" ? "Age" : "Возраст"}:</span> {age}{" "}
                {lang === "en" ? "years" : age === 21 ? "год" : age >= 22 && age <= 24 ? "года" : "лет"}
              </p>
              <p>
                <span className="font-semibold text-blue-400">
                  {lang === "en" ? "Driver's License" : "Водительские права"}:
                </span>{" "}
                {lang === "en" ? "Category B, Own Car" : "Категория B, личный автомобиль"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
