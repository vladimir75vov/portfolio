"use client";

import { useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.jsx";
import VideoElem from "./_elements/videoElem.jsx";
import Section1Elem from "./_elements/section1Elem.jsx";
import Section2Elem from "./_elements/section2Elem.jsx";
import Section4Elem from "./_elements/section4Elem.jsx";
import Section5Elem from "./_elements/section5Elem.jsx";
import TypeWriterElem from "./_elements/typeWriterElem.jsx";
import Section3Elem from "./_elements/section3Elem.jsx";

function Home() {
  const heroRef = useRef(null);
  const { lang } = useContext(LanguageContext);

  const handleDownloadCV = () => {
    const cvFile = lang === "en" ? "cvEn.html" : "cvRu.html";
    const cvUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cv/${cvFile}`;
    // Открываем CV в новой вкладке вместо скачивания
    window.open(cvUrl, '_blank');
  };

  useEffect(() => {
    const saveScroll = () => {
      try {
        sessionStorage.setItem("home_scroll", String(window.scrollY || 0));
      } catch (e) {}
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") saveScroll();
    };

    // Прокрутка к hero только при самом первом посещении. При последующих посещениях восстанавливается позиция.
    try {
      const visited = localStorage.getItem("home_visited");
      const saved = sessionStorage.getItem("home_scroll");
      const videoElement = document.getElementById("video");
      
      // Валидация: visited должен быть "1" или null
      if (!visited || visited !== "1") {
        if (videoElement) setTimeout(() => videoElement.scrollIntoView({ block: "start", behavior: "auto" }), 50);
        localStorage.setItem("home_visited", "1");
      } else if (saved) {
        // Валидация: saved должен быть корректным числом
        const parsedScroll = Number(saved);
        if (!isNaN(parsedScroll) && parsedScroll >= 0) {
          // восстановление предыдущей позиции прокрутки
          window.scrollTo(0, parsedScroll);
        } else {
          // Некорректное значение - удаляем
          sessionStorage.removeItem("home_scroll");
        }
      }
    } catch (e) {}

    window.addEventListener("beforeunload", saveScroll);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("beforeunload", saveScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div>
      <section ref={heroRef} className="relative overflow-hidden w-full h-screen">
        <VideoElem />
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/20 to-black/40"
          style={{ transition: "background-color 260ms ease" }}
        >
          <div className="flex justify-center items-center text-center min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 max-w-5xl w-full">
              <div className="animate-fadeInDown flex flex-col items-center gap-2 sm:gap-4">
                <TypeWriterElem />
                <h1 className="uppercase font-light tracking-wider sm:tracking-widest text-3xl sm:text-5xl lg:text-7xl animate-textHue bg-gradient-to-r from-red-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  {useContext(LanguageContext).t("hero.titleName")}
                </h1>
              </div>
              <div className="relative my-6 sm:my-8 lg:my-10">
                <hr className="border-none h-0.5 bg-gradient-to-r from-transparent via-white to-transparent max-w-md mx-auto" />
              </div>
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-light animate-fadeInUp text-white mb-6 sm:mb-8 leading-relaxed px-2">
                {useContext(LanguageContext).t("hero.subtitle")}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp mt-12">
                <button
                  onClick={handleDownloadCV}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:animate-bounce"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {lang === "en" ? "View CV" : "Посмотреть резюме"}
                </button>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects`}
                  className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                >
                  {lang === "en" ? "View Projects" : "Мои проекты"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container mx-auto px-4 py-20">
          <Section1Elem />
          <Section2Elem />
          <Section3Elem />
          <Section4Elem />
          <Section5Elem />
        </div>
      </section>
    </div>
  );
}

export default Home;
