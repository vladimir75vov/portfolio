"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function About() {
  const { lang } = useContext(LanguageContext);

  const aboutText =
    lang === "en"
      ? "I am a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications."
      : "Я страстный full-stack разработчик с опытом в современных веб-технологиях. Я люблю создавать красивые, функциональные и удобные приложения.";

  const experiences = lang === "en" ? [
    { title: "Frontend Development", desc: "React, Next.js, Tailwind CSS" },
    { title: "Backend Development", desc: "Node.js, Express, Databases" },
    { title: "UI/UX Design", desc: "Modern interfaces with focus on user experience" },
  ] : [
    { title: "Frontend разработка", desc: "React, Next.js, Tailwind CSS" },
    { title: "Backend разработка", desc: "Node.js, Express, Базы данных" },
    { title: "UI/UX дизайн", desc: "Современные интерфейсы с фокусом на UX" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "About Me" : "Обо мне"}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">{aboutText}</p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">
            {lang === "en" ? "What I Do" : "Чем я занимаюсь"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-gray-400">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {lang === "en" ? "Let's Connect" : "Давайте свяжемся"}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {lang === "en"
              ? "I'm always interested in hearing about new projects and opportunities. Feel free to reach out and let's create something amazing together!"
              : "Я всегда заинтересован в новых проектах и возможностях. Не стесняйтесь обращаться, и давайте создадим что-то потрясающее вместе!"}
          </p>
        </div>
      </div>
    </main>
  );
}
