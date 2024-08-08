"use client";

function Home() {
  return (
    <div>
      <section className="flex justify-center items-center text-center min-h-screen h-px">
        <div>
          <div className="animate-fadeInDown">
            <h1 className="uppercase font-light tracking-widest text-4xl sm:text-6xl animate-textHue bg-gradient-to-l from-red-400 to-green-400 bg-clip-text text-transparent">
              vladimir75vov
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
          <div className="flex flex-col text-left">
            <p>
              I currently work as a Senior Full Stack Developer at{" "}
              <a
                href="https://www.getunleash.io/"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Unleash
              </a>
              .
            </p>
            <p>
              Unleash is a{" "}
              <a
                href="https://docs.getunleash.io/topics/feature-flags/feature-flag-best-practices"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                feature flag
              </a>{" "}
              management solution built with large enterprises in mind.
            </p>
            <p>
              It is{" "}
              <a
                href="https://github.com/unleash/unleash"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                open source
              </a>
              , private, secure, scalable, and trusted by developers all over
              the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
