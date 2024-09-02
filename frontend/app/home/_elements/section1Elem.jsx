import React from "react";

function Section1Elem() {
  return (
    <section className="flex flex-wrap items-center">
      <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-black w-full shadow-lg rounded-lg bg-blueGray-700">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <h4 className="text-xl font-bold text-white">Technical</h4>
            <p className="text-md font-light mt-2 text-white">
              As a creative technologist, I craft intuitive digital experiences
              using a diverse set of tools and languages.Technical As a creative
              technologist, I craft intuitive digital experiences using a
              diverse set of tools and languages.
            </p>
          </blockquote>
        </div>
      </div>
      <div className="w-full md:w-6/12 px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col mt-4">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                  <i className="fas fa-sitemap" />
                </div>
                <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                <p className="mb-4 text-blueGray-500">
                  Notus NextJS comes with a huge number of Fully Coded CSS
                  components.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                  <i className="fas fa-drafting-compass" />
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                  JavaScript Components
                </h6>
                <p className="mb-4 text-blueGray-500">
                  We also feature many dynamic components for React, NextJS, Vue
                  and Angular.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 mt-4">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                  <i className="fas fa-newspaper" />
                </div>
                <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                <p className="mb-4 text-blueGray-500">
                  This extension also comes with 3 sample pages. They are fully
                  coded so you can start working instantly.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt" />
                </div>
                <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                <p className="mb-4 text-blueGray-500">
                  Built by developers for developers. You will love how easy is
                  to to work with Notus NextJS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1Elem;
