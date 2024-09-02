"use client";

import { useEffect } from "react";
import VideoElem from "./_elements/videoElem.jsx";
import Section1Elem from "./_elements/section1Elem.jsx";
import Section2Elem from "./_elements/section2Elem.jsx";
import Section4Elem from "./_elements/section4Elem.jsx";
import Section5Elem from "./_elements/section5Elem.jsx";
import TypeWriterElem from "./_elements/typeWriterElem.jsx";
import Section3Elem from "./_elements/section3Elem.jsx";

function Home() {
  useEffect(() => {
    const videoElement = document.getElementById("video");
    videoElement.scrollIntoView();
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden w-full h-screen">
        <VideoElem />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black">
          <h1 className="text-4xl text-center mt-20 font-bold text-white">
            <section className="flex justify-center items-center text-center min-h-screen h-px">
              <div>
                <div className="animate-fadeInDown">
                  <TypeWriterElem />
                  <h1 className="uppercase font-light tracking-widest text-4xl sm:text-6xl animate-textHue bg-gradient-to-l from-red-400 to-green-400 bg-clip-text text-transparent">
                    Vladimir Budaev
                  </h1>
                </div>
                <hr className="my-5 border-none h-px bg-light-gray" />
                <h2 className="text-xl sm:text-4xl lg:text-5xl font-thin animate-fadeInUp">
                  Full Stack Developer
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
