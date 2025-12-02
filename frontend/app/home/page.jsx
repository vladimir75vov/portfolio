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

  useEffect(() => {
    const saveScroll = () => {
      try {
        sessionStorage.setItem("home_scroll", String(window.scrollY || 0));
      } catch (e) {}
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") saveScroll();
    };

    // Only scroll to the hero on the very first visit. Subsequent visits restore position.
    try {
      const visited = localStorage.getItem("home_visited");
      const saved = sessionStorage.getItem("home_scroll");
      const videoElement = document.getElementById("video");
      if (!visited) {
        if (videoElement) setTimeout(() => videoElement.scrollIntoView({ block: "start", behavior: "auto" }), 50);
        localStorage.setItem("home_visited", "1");
      } else if (saved) {
        // restore previous scroll position
        window.scrollTo(0, Number(saved));
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
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20" style={{ transition: 'background-color 260ms ease' }}>
          <h1 className="text-4xl text-center mt-20 font-bold text-white">
            <section className="flex justify-center items-center text-center min-h-screen h-px">
              <div>
                <div className="animate-fadeInDown">
                  <TypeWriterElem />
                  <h1 className="uppercase font-light tracking-widest text-4xl sm:text-6xl animate-textHue bg-gradient-to-l from-red-400 to-green-400 bg-clip-text text-transparent">
                    {useContext(LanguageContext).t("hero.titleName")}
                  </h1>
                </div>
                <hr className="my-5 border-none h-px bg-light-gray" />
                <h2 className="text-xl sm:text-4xl lg:text-5xl font-thin animate-fadeInUp">
                  {useContext(LanguageContext).t("hero.subtitle")}
                </h2>
              </div>
            </section>
          </h1>
        </div>
      </section>
      <section className="flex justify-center mx-auto items-center w-full ">
        <div className="flex-row justify-center items-center ">
          <div className="container mx-auto overflow-hidden pb-20">
            <Section1Elem />
            <Section2Elem />
            <Section3Elem />
            <Section4Elem />
            <Section5Elem />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
