"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../context/LanguageContext.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";

// Компонент навигации с мобильным меню, переключателями темы и языка
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Состояние мобильного меню
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/10 to-background/6 backdrop-blur-sm border-b border-gray-700/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
            VB
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hidden sm:inline">
            {t("hero.titleName")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/about"
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/projects"
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            {t("nav.projects")}
          </Link>
          <Link
            href="/skills"
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            {t("nav.skills")}
          </Link>
          <Link
            href="/contact"
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            {t("nav.contact")}
          </Link>
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
          <div className="ml-1">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 hover:opacity-70 transition-opacity"
        >
          <span className={`h-1 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-1 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-1 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-primary)]/95 border-t border-[var(--border-color)]">
          <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-blue-400 transition-colors py-2 font-medium"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-blue-400 transition-colors py-2 font-medium"
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="/skills"
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-blue-400 transition-colors py-2 font-medium"
            >
              {t("nav.skills")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-blue-400 transition-colors py-2 font-medium"
            >
              {t("nav.contact")}
            </Link>
            <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-4">
              <ThemeSwitcher theme={theme} setTheme={setTheme} />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Компонент переключения темы (светлая/тёмная)
function ThemeSwitcher({ theme, setTheme }) {
  const { t } = useContext(LanguageContext);
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-400/50 transition-all duration-200"
      aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
      title={theme === "dark" ? t("theme.light") : t("theme.dark")}
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

// Компонент переключения языка (EN/RU)
function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <div className="flex items-center gap-1 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-1">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
          lang === "en" ? "bg-blue-500 text-white" : "text-[var(--text-secondary)] hover:text-blue-400"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ru")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
          lang === "ru" ? "bg-blue-500 text-white" : "text-[var(--text-secondary)] hover:text-blue-400"
        }`}
        aria-label="Русский"
      >
        RU
      </button>
    </div>
  );
}

export default Navbar;
