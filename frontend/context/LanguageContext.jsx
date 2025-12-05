"use client";

import React, { createContext, useEffect, useState } from "react";

// Контекст для управления языком приложения (EN/RU)
export const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

// Все переводы интерфейса
const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      hi: "Hello, my name is",
      titleName: "Vladimir Budaev",
      subtitle: "Full Stack Developer",
    },
    footer: {
      quickLinks: "Quick Links",
      follow: "Follow",
      developer: "Full Stack Developer",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
    video: {
      unmute: "Unmute",
      mute: "Mute",
      volume: "Video volume",
      toggleFilter: "Toggle legacy video filter",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
    },
    home: {
      section1: {
        title: "Technical",
        description:
          "As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages. Technical As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages.",
        cssComponents: "CSS Components",
        cssDescription: "Notus NextJS comes with a huge number of Fully Coded CSS components.",
        jsComponents: "JavaScript Components",
        jsDescription: "We also feature many dynamic components for React, NextJS, Vue and Angular.",
        pages: "Pages",
        pagesDescription:
          "This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.",
        documentation: "Documentation",
        documentationDescription:
          "Built by developers for developers. You will love how easy is to to work with Notus NextJS.",
      },
      section2: {
        title: "Technologies I love to build with",
        description:
          "I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me.",
        viewAll: "View All",
      },
      section3: {
        title: "Javascript Components",
        description1:
          "In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users.",
        description2: "We created a set of Components that are dynamic and come to help you.",
        viewAll: "View all",
      },
      section4: {
        title: "Complex Documentation",
        description:
          "This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go.",
        feature1: "Built by Developers for Developers",
        feature2: "Carefully crafted code for Components",
        feature3: "Dynamic Javascript Components",
      },
      section5: {
        title: "Beautiful Example Pages",
        description:
          "Notus NextJS is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them.",
      },
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      skills: "Навыки",
      contact: "Контакты",
    },
    hero: {
      hi: "Привет, меня зовут",
      titleName: "Владимир Будаев",
      subtitle: "Full Stack Разработчик",
    },
    footer: {
      quickLinks: "Быстрые ссылки",
      follow: "Подписывайтесь",
      developer: "Full Stack Разработчик",
      projects: "Проекты",
      about: "Обо мне",
      contact: "Контакты",
      copyright: "Все права защищены.",
    },
    video: {
      unmute: "Включить звук",
      mute: "Отключить звук",
      volume: "Громкость видео",
      toggleFilter: "Переключить фильтр",
    },
    theme: {
      light: "Светлая тема",
      dark: "Тёмная тема",
    },
    home: {
      section1: {
        title: "Технологии",
        description:
          "Как креативный технолог, я создаю интуитивные цифровые решения, используя разнообразный набор инструментов и языков программирования. Я глубоко понимаю весь стек технологий для создания современных веб-приложений.",
        cssComponents: "CSS Компоненты",
        cssDescription: "Notus NextJS поставляется с огромным количеством полностью готовых CSS компонентов.",
        jsComponents: "JavaScript Компоненты",
        jsDescription: "Мы также предлагаем множество динамических компонентов для React, NextJS, Vue и Angular.",
        pages: "Страницы",
        pagesDescription:
          "Это расширение также включает 3 примера страниц. Они полностью закодированы, чтобы вы могли сразу начать работу.",
        documentation: "Документация",
        documentationDescription:
          "Создано разработчиками для разработчиков. Вам понравится, как легко работать с Notus NextJS.",
      },
      section2: {
        title: "Технологии, с которыми я люблю работать",
        description:
          "Я получаю огромное удовольствие от решения проблем с помощью кода. От фронтенда до бэкенда и API между ними. Для меня нет слишком сложных проектов.",
        viewAll: "Посмотреть все",
      },
      section3: {
        title: "Javascript Компоненты",
        description1:
          "Для создания отличного пользовательского опыта некоторым компонентам требуется JavaScript. Таким образом, вы можете манипулировать элементами на странице и предоставлять больше возможностей вашим пользователям.",
        description2: "Мы создали набор динамических компонентов, которые придут вам на помощь.",
        viewAll: "Посмотреть все",
      },
      section4: {
        title: "Комплексная документация",
        description:
          "Это расширение содержит множество полностью готовых примеров, которые помогут вам быстрее начать работу. Вы можете настроить цвета и язык программирования. Измените текст и изображения - и всё готово.",
        feature1: "Создано разработчиками для разработчиков",
        feature2: "Тщательно продуманный код для компонентов",
        feature3: "Динамические Javascript компоненты",
      },
      section5: {
        title: "Красивые примеры страниц",
        description:
          "Notus NextJS - это совершенно новый продукт, созданный на основе нашего предыдущего опыта в веб-шаблонах. Используйте примеры, которые мы создали для вас, и начните экспериментировать с ними.",
      },
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [isHydrated, setIsHydrated] = useState(false);

  // Загрузка сохранённого языка из localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved) setLang(saved);
    } catch (e) {}
    setIsHydrated(true);
  }, []);

  // Сохранение выбранного языка в localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [lang, isHydrated]);

  // Функция перевода: принимает путь (например "nav.about"), возвращает перевод
  function t(path) {
    const parts = path.split(".");
    let cur = translations[lang] || translations.en;
    for (const p of parts) {
      if (cur[p] == null) return path;
      cur = cur[p];
    }
    return cur;
  }

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}
