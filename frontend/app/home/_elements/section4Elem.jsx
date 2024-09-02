import React from "react";

function Section4Elem() {
  return (
    <section className="container mx-auto px-4 pb-32 pt-48">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
          <div className="md:pr-12">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-file-alt text-xl" />
            </div>
            <h3 className="text-3xl font-semibold">Complex Documentation</h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              This extension comes a lot of fully coded examples that help you
              get started faster. You can adjust the colors and also the
              programming language. You can change the text and images and
              you're good to go.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                      <i className="fas fa-fingerprint" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Built by Developers for Developers
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                      <i className="fab fa-html5" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Carefully crafted code for Components
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                      <i className="far fa-paper-plane" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Dynamic Javascript Components
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
          <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
            <div className="w-full xl p-12 overflow-hidden">
              <img
                className="mx-auto w-full transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                src="/api/v1/resources/images/macbook.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4Elem;
