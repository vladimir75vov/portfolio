import React, { useContext } from "react";
import { SiCodersrank } from "react-icons/si";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

function Section2Elem() {
  const { t, lang } = useContext(LanguageContext);
  const _stack = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REACT",
    "TYPESCRIPT",
    "NODE.JS",
    "C#",
    "PYTHON",
    "JAVA",
    ".NET CORE",
    "MYSQL",
    "MS SQL",
    "FIREBASE",
    "GIT",
    "FIGMA",
    "OOP",
    "SOLID",
    "MVVM",
    "MVC",
  ];

  return (
    <section className="flex flex-wrap items-center py-20">
      <div className="w-full md:w-5/12 px-4 md:px-6 ml-auto mr-auto mb-12 md:mb-0">
        <div className="text-white text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
          <SiCodersrank className="h-10 w-10" />
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal text-[var(--text-primary)]">
          {t("home.section2.title")}
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-[var(--text-secondary)]">
          {lang === "en" 
            ? "Full-stack developer with 4+ years of experience. Specialized in frontend development, backend systems, testing, and technical support. Focused on creating efficient, scalable, and user-friendly applications."
            : "Full-stack разработчик с опытом 4+ года. Специализируюсь на frontend-разработке, backend-системах, тестировании и технической поддержке. Ориентирован на создание эффективных, масштабируемых и удобных приложений."
          }
        </p>
        <div className="block pb-6 animate-textHue bg-gradient-to-l from-red-400 to-green-400 bg-clip-text text-transparent text-xs">
          {_stack.map((item, index) => (
            <span key={index} className="font-semibold inline-block py-1 px-2 uppercase last:mr-0 mr-2 mt-2">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href="/about"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
          >
            {lang === "en" ? "Learn More" : "Узнать больше"}
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:scale-105 transition-all duration-300"
          >
            {lang === "en" ? "Contact Me" : "Связаться"}
          </a>
        </div>
      </div>
      <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 w-full">
          <div className="w-full xl p-12 overflow-hidden">
            <img
              className="mx-auto w-full transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src="/api/v1/resources/images/macbook.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2Elem;
