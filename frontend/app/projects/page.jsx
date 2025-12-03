"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.jsx";
import ProjectCard from "../../components/projectCard.jsx";

function ProjectsPage() {
  const { t, lang } = useContext(LanguageContext);

  const projects = [
    {
      id: 1,
      titleEn: "CODD Automated System",
      titleRu: "Автоматизированная система ЦОДД",
      descriptionEn: "Development of automated systems and desktop interfaces for road safety monitoring. JavaScript-based tools for violation detection, video stream analysis, and reporting for Moscow Department of Transport.",
      descriptionRu: "Разработка автоматизированных систем и десктопных интерфейсов для мониторинга безопасности дорожного движения. Инструменты на JavaScript для выявления нарушений, анализа видеопотоков и формирования отчётов для Департамента транспорта Москвы.",
      technologies: ["JavaScript", "Desktop UI", "Video Processing", "Data Analysis", "Reporting"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🚦",
    },
    {
      id: 2,
      titleEn: "Leroy Merlin Employee Portal",
      titleRu: "Портал для сотрудников Леруа Мерлен",
      descriptionEn: "Full-stack development of desktop and mobile website for employees. Built with React and TypeScript, featuring product management, client service tools, and supply chain automation.",
      descriptionRu: "Full-stack разработка десктопной и мобильной версии сайта для сотрудников. Создано на React и TypeScript с функционалом управления товарами, обслуживания клиентов и автоматизации цепи поставок.",
      technologies: ["React", "TypeScript", "Mobile Development", "Supply Chain", "Automation"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🏪",
    },
    {
      id: 3,
      titleEn: "AI-Powered Automation System",
      titleRu: "AI-система автоматизации",
      descriptionEn: "Implementation of AI and computer vision for internal automation projects. Utilizing Java, Python, Node.js, and OpenCV for intelligent process optimization and automated decision-making.",
      descriptionRu: "Внедрение AI и компьютерного зрения для внутренних проектов автоматизации. Использование Java, Python, Node.js и OpenCV для интеллектуальной оптимизации процессов и автоматизированного принятия решений.",
      technologies: ["Python", "Java", "Node.js", "OpenCV", "AI/ML"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🤖",
    },
    {
      id: 4,
      titleEn: "Portfolio Website",
      titleRu: "Веб-сайт портфолио",
      descriptionEn: "Modern, responsive portfolio website with smooth animations, multi-language support (EN/RU), hero video background, and CV download functionality. Built with Next.js and React.",
      descriptionRu: "Современный адаптивный веб-сайт портфолио с плавными анимациями, поддержкой нескольких языков (EN/RU), фоновым видео и функцией скачивания резюме. Построено на Next.js и React.",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "SCSS"],
      github: "https://github.com/vladimir75vov/portfolio",
      live: "#",
      image: "🎨",
    },
    {
      id: 5,
      titleEn: "Linux Administration Tools",
      titleRu: "Инструменты администрирования Linux",
      descriptionEn: "System administration and maintenance tools for Astra Linux. Security configurations, automated scripts, and system monitoring solutions for government infrastructure.",
      descriptionRu: "Инструменты администрирования и обслуживания систем для Astra Linux. Настройки безопасности, автоматизированные скрипты и решения для мониторинга систем государственной инфраструктуры.",
      technologies: ["Linux", "Astra", "Bash", "System Administration", "Security"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🐧",
    },
    {
      id: 6,
      titleEn: "E-Commerce Backend",
      titleRu: "Backend электронной коммерции",
      descriptionEn: "Backend development for retail chain management. Database design, API development, and integration with inventory systems using Node.js, MySQL, and MS SQL.",
      descriptionRu: "Backend-разработка для управления розничной сетью. Проектирование баз данных, разработка API и интеграция с системами учёта товаров на Node.js, MySQL и MS SQL.",
      technologies: ["Node.js", "MySQL", "MS SQL", "REST API", "Backend"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🗄️",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "My Projects" : "Мои проекты"}
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            {lang === "en"
              ? "A collection of my latest projects built with modern technologies and best practices."
              : "Коллекция моих последних проектов, разработанных с использованием современных технологий и лучших практик."}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={lang === "en" ? project.titleEn : project.titleRu}
              description={lang === "en" ? project.descriptionEn : project.descriptionRu}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
