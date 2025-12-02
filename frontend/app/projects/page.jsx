"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.jsx";
import ProjectCard from "../../components/projectCard.jsx";

function ProjectsPage() {
  const { t, lang } = useContext(LanguageContext);

  const projects = [
    {
      id: 1,
      titleEn: "E-Commerce Platform",
      titleRu: "Платформа электронной коммерции",
      descriptionEn: "Full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include product catalog, shopping cart, payment integration, and order management.",
      descriptionRu: "Полнофункциональная платформа электронной коммерции с React, Node.js и PostgreSQL. Включает каталог товаров, корзину, интеграцию платежей и управление заказами.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🛒",
    },
    {
      id: 2,
      titleEn: "Task Management App",
      titleRu: "Приложение для управления задачами",
      descriptionEn: "Collaborative task management application with real-time updates, user authentication, and team workspaces. Built with React and Firebase.",
      descriptionRu: "Приложение для совместного управления задачами с обновлениями в реальном времени, аутентификацией пользователей и рабочими пространствами команды. Построено с React и Firebase.",
      technologies: ["React", "Firebase", "Redux", "Tailwind CSS", "Socket.io"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "✓",
    },
    {
      id: 3,
      titleEn: "Portfolio Website",
      titleRu: "Веб-сайт портфолио",
      descriptionEn: "Modern, responsive portfolio website with smooth animations, multi-language support (EN/RU), and hero video background.",
      descriptionRu: "Современный адаптивный веб-сайт портфолио с плавными анимациями, поддержкой нескольких языков (EN/RU) и фоновым видео на главной.",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "SCSS"],
      github: "https://github.com/vladimir75vov/portfolio",
      live: "#",
      image: "🎨",
    },
    {
      id: 4,
      titleEn: "Weather Dashboard",
      titleRu: "Панель управления погодой",
      descriptionEn: "Real-time weather application with location search, forecast data, and weather visualizations using OpenWeather API.",
      descriptionRu: "Приложение для отслеживания погоды в реальном времени с поиском по местоположению, данными прогноза и визуализацией погоды с использованием OpenWeather API.",
      technologies: ["React", "OpenWeather API", "Axios", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🌤️",
    },
    {
      id: 5,
      titleEn: "Video Streaming Platform",
      titleRu: "Платформа потоковой передачи видео",
      descriptionEn: "Video streaming platform with user authentication, video upload, comments, and recommendations engine.",
      descriptionRu: "Платформа потоковой передачи видео с аутентификацией пользователя, загрузкой видео, комментариями и механизмом рекомендаций.",
      technologies: ["Node.js", "Express", "MongoDB", "FFmpeg", "AWS S3", "React"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "🎥",
    },
    {
      id: 6,
      titleEn: "Chat Application",
      titleRu: "Приложение чата",
      descriptionEn: "Real-time chat application with WebSocket support, user authentication, direct messages, and group conversations.",
      descriptionRu: "Приложение для чата в реальном времени с поддержкой WebSocket, аутентификацией пользователя, прямыми сообщениями и групповыми беседами.",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB", "JWT", "Redis"],
      github: "https://github.com/vladimir75vov",
      live: "#",
      image: "💬",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {lang === "en" ? "My Projects" : "Мои проекты"}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {lang === "en"
              ? "A collection of my latest projects built with modern technologies and best practices."
              : "Коллекция моих последних проектов, разработанных с использованием современных технологий и лучших практик."}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
