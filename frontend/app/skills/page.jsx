"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Skills() {
  const { lang } = useContext(LanguageContext);

  const skillCategories = lang === "en" ? [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "SQL", "MongoDB", "PostgreSQL", "REST API"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Figma", "Webpack", "Linux"]
    }
  ] : [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "SQL", "MongoDB", "PostgreSQL", "REST API"]
    },
    {
      category: "Инструменты и другое",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Figma", "Webpack", "Linux"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "My Skills" : "Мои навыки"}
          </h1>
          <p className="text-lg text-gray-300">
            {lang === "en"
              ? "A comprehensive overview of my technical expertise and tools I work with."
              : "Полный обзор моих технических навыков и инструментов, с которыми я работаю."}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">{cat.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-2 bg-white/10 border border-gray-600/50 rounded-full text-sm text-gray-200 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200"
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
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">
            {lang === "en" ? "Proficiency Levels" : "Уровни владения"}
          </h2>
          <div className="space-y-6">
            {[
              { name: lang === "en" ? "Frontend" : "Frontend", level: 95 },
              { name: lang === "en" ? "Backend" : "Backend", level: 85 },
              { name: lang === "en" ? "Database Design" : "Проектирование БД", level: 80 },
              { name: lang === "en" ? "DevOps & Deployment" : "DevOps & развертывание", level: 75 }
            ].map((prof, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">{prof.name}</span>
                  <span className="text-blue-400">{prof.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
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
