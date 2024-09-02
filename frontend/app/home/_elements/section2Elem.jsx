import React from "react";
import { SiCodersrank } from "react-icons/si";

function Section2Elem() {
  const _stack = [
    "JAVASCRIPT",
    "NODEJS",
    "REACT",
    "NEXTJS",
    "JQUERY",
    "PHP",
    "WORDPRESS",
    "WOOCOMMERCE",
    "GA4/GTM",
    "HTML5",
    "CSS3",
    "SASS",
    "GIT",
    "MYSQL",
    "MONGODB",
  ];

  return (
    <section className="flex flex-wrap items-center">
      <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div className="text-blueGray-500  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <SiCodersrank className="text-black h-10 w-10" />
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Technologies I love to build with
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          I deeply enjoy solving problems through code. From the front end all
          the way to the back end and the APIs in-between. No project is too
          challenging for me.
        </p>
        <div className="block pb-6 animate-textHue bg-gradient-to-l from-red-400 to-green-400 bg-clip-text text-transparent text-xs">
          {_stack.map((item) => (
            <span className="font-semibold inline-block py-1 px-2 uppercase last:mr-0 mr-2 mt-2">
              {item}
            </span>
          ))}
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
          target="_blank"
          className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
        >
          View All{" "}
          <i className="fa fa-angle-double-right ml-1 leading-relaxed" />
        </a>
      </div>
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
        <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
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
