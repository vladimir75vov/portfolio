"use client";

import TypeWriter from "../../components/singles/typeWriter.jsx";

const _hats = [
  {
    suffix: "Hello, my name is                   ",
  },
  {
    suffix: "const Vladimir = ( name, passion ) =>",
  },
];

function Home() {
  return (
    <div>
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
      <section className="flex justify-center mx-auto items-center w-full px-10 md:px-24 my-40 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col text-left" />
          <h1 />
        </div>
      </section>
    </div>
  );
}

export default Home;
