"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../context/LanguageContext.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/10 to-background/6 backdrop-blur-sm border-b border-gray-700/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
            VB
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hidden sm:inline">
            {useContext(LanguageContext).t("hero.titleName")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">
            {useContext(LanguageContext).t("nav.about")}
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">
            {useContext(LanguageContext).t("nav.projects")}
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">
            {useContext(LanguageContext).t("nav.skills")}
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">
            {useContext(LanguageContext).t("nav.contact")}
          </Link>
          <div className="ml-3">
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
          <span className={`h-1 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 border-t border-gray-700/30">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors py-2 font-medium">
              {useContext(LanguageContext).t("nav.about")}
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors py-2 font-medium">
              {useContext(LanguageContext).t("nav.projects")}
            </Link>
            <Link href="/skills" className="text-gray-300 hover:text-blue-400 transition-colors py-2 font-medium">
              {useContext(LanguageContext).t("nav.skills")}
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors py-2 font-medium">
              {useContext(LanguageContext).t("nav.contact")}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded ${lang === "en" ? "bg-white bg-opacity-20 text-white" : "text-gray-300"}`}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ru")}
        className={`px-2 py-1 rounded ${lang === "ru" ? "bg-white bg-opacity-20 text-white" : "text-gray-300"}`}
        aria-label="Русский"
      >
        RU
      </button>
    </div>
  );
}

export default Navbar;
