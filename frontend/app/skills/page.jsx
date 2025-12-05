"use client";

import { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useDeviceTilt } from "../../components/useDeviceTilt.jsx";

// Страница навыков с категориями технологий и индикаторами прогресса
export default function Skills() {
  const { lang } = useContext(LanguageContext);
  const { christmasMode, autumnMode } = useContext(ThemeContext);
  const tilt = useDeviceTilt();

  const skillCategories =
    lang === "en"
      ? [
          {
            category: "Frontend",
            skills: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "TypeScript",
              "Figma",
              "XML",
              "XAML",
              "JSON",
              "Tailwind CSS",
              "Cross-browser Layout",
              "Responsive Design",
            ],
          },
          {
            category: "Backend",
            skills: [
              "Node.js",
              "C#",
              "Java",
              "Python",
              ".NET Core",
              ".NET Framework",
              "MySQL",
              "MS SQL",
              "Firebase",
              "REST API",
            ],
          },
          {
            category: "Tools & Architecture",
            skills: [
              "Git",
              "Profiler",
              "OOP",
              "SOLID",
              "OSI",
              "MVVM",
              "MVC",
              "Microservices",
              "Windows",
              "Linux (Kali/Manjaro)",
              "Astra Linux Admin",
              "Manual Testing",
              "UI Testing",
              "Technical Support",
            ],
          },
        ]
      : [
          {
            category: "Frontend",
            skills: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "TypeScript",
              "Figma",
              "XML",
              "XAML",
              "JSON",
              "Tailwind CSS",
              "Кроссбраузерная вёрстка",
              "Адаптивная вёрстка",
            ],
          },
          {
            category: "Backend",
            skills: [
              "Node.js",
              "C#",
              "Java",
              "Python",
              ".NET Core",
              ".NET Framework",
              "MySQL",
              "MS SQL",
              "Firebase",
              "REST API",
            ],
          },
          {
            category: "Инструменты и архитектура",
            skills: [
              "Git",
              "Profiler",
              "ООП",
              "SOLID",
              "OSI",
              "MVVM",
              "MVC",
              "Микросервисы",
              "Windows",
              "Linux (Kali/Manjaro)",
              "Astra Linux Admin",
              "Ручное тестирование",
              "UI тестирование",
              "Техподдержка",
            ],
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
              <Image src="/portfolio/images/Christmas tree.png" alt="Christmas tree" width={120} height={120} className="absolute -top-10 left-0 opacity-30 pointer-events-none select-none brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.5}px, ${tilt.y * 0.5}px)` }} unoptimized />
              <Image src="/portfolio/images/Christmas tree.png" alt="Christmas tree" width={100} height={100} className="absolute -top-5 right-5 opacity-25 pointer-events-none select-none brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.7}px, ${tilt.y * 0.7}px)` }} unoptimized />
              <Image src="/portfolio/images/Christmas tree.png" alt="Christmas tree" width={80} height={80} className="absolute top-20 left-1/4 opacity-20 pointer-events-none select-none brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.3}px, ${tilt.y * 0.3}px)` }} unoptimized />
            </>
          )}
          {autumnMode && (
            <>
              <span className="absolute -top-10 left-0 text-8xl opacity-30 pointer-events-none select-none transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.5}px, ${tilt.y * 0.5}px)` }}>🍂</span>
              <span className="absolute -top-5 right-5 text-7xl opacity-25 pointer-events-none select-none transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.7}px, ${tilt.y * 0.7}px)` }}>🍁</span>
              <span className="absolute top-20 left-1/4 text-6xl opacity-20 pointer-events-none select-none transition-transform duration-300" style={{ transform: `translate(${tilt.x * 0.3}px, ${tilt.y * 0.3}px)` }}>🍂</span>
            </>
          )}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "My Skills" : "Мои навыки"}
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            {lang === "en"
              ? "A comprehensive overview of my technical expertise and tools I work with. 4+ years of experience in development, testing, and technical support."
              : "Полный обзор моих технических навыков и инструментов, с которыми я работаю. Более 4 лет опыта в разработке, тестировании и технической поддержке."}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-6">{cat.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-full text-sm text-[var(--text-secondary)] hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Levels */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[var(--text-primary)]">
            {lang === "en" ? "Proficiency Levels" : "Уровни владения"}
          </h2>
          <div className="space-y-6">
            {[
              { name: lang === "en" ? "Frontend Development" : "Frontend разработка", level: 90 },
              { name: lang === "en" ? "Backend Development" : "Backend разработка", level: 85 },
              { name: lang === "en" ? "Database Design" : "Проектирование БД", level: 80 },
              { name: lang === "en" ? "Testing & QA" : "Тестирование и QA", level: 85 },
              { name: lang === "en" ? "Technical Support" : "Техническая поддержка", level: 90 },
            ].map((prof, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[var(--text-secondary)]">{prof.name}</span>
                  <span className="text-blue-400">{prof.level}%</span>
                </div>
                <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${prof.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
