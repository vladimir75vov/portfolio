"use client";

import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

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
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved) setLang(saved);
    } catch (e) {}
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [lang, isHydrated]);

  function t(path) {
    const parts = path.split(".");
    let cur = translations[lang] || translations.en;
    for (const p of parts) {
      if (cur[p] == null) return path;
      cur = cur[p];
    }
    return cur;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
