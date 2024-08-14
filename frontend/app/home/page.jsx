"use client";

import { useEffect } from "react";
import TypeWriter from "../../components/typeWriter.jsx";

const _hats = [
  {
    suffix: "Hello, my name is                   ",
  },
  {
    suffix: "const Vladimir = ( name, passion ) =>",
  },
];

function Home() {
  useEffect(() => {
    document.getElementById("video").scrollIntoView();
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          id="video"
        >
          <source
            src="/api/v1/resources/files/video/kek.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black">
          <h1 className="text-4xl text-center mt-20 font-bold text-white">
            <section className="flex justify-center items-center text-center min-h-screen h-px">
              <div>
                <div className="animate-fadeInDown">
                  <TypeWriter appendClass="float-left" hats={_hats} />
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
      </div>
      <section className="flex justify-center mx-auto items-center w-full ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col text-left">content</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
