"use client";

import Link from "next/link";
import NavLink from "../components/navLink";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-background via-gray-900 to-background flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-center animate-fadeInDown">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 hover:bg-blue-500/20 transition-colors duration-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm text-blue-300">Welcome to my portfolio</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Vladimir</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Full Stack Developer & Digital Creator
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I design and build meaningful digital experiences. Passionate about creating elegant solutions to complex problems with React, Next.js, Node.js, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                type="button"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
              >
                View My Work
              </button>
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 font-bold py-3 px-8 border border-blue-400 rounded-lg transition-all duration-200 hover:bg-blue-400/10 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-8 animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50 border-t border-b border-gray-700/30">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">
              Focused on experience, driven by engineering
            </p>
          </div>

          {/* Main Project */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    My Supply Co.
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    D2C & B2B ecommerce platform with elegant solutions for complex workflows and customer journeys. Built with modern web technologies and optimized for performance.
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <p className="text-sm text-gray-400 mb-3 font-semibold">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "PHP",
                        "MySQL",
                        "JavaScript",
                        "jQuery",
                        "WooCommerce",
                        "WordPress",
                        "HTML5",
                        "SCSS",
                        "Git",
                        "GA4",
                        "CSS3",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700/50 hover:bg-blue-500/20 border border-gray-600/50 hover:border-blue-500/50 text-gray-300 hover:text-blue-300 text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer group/link font-medium">
                    <span>Explore Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover/link:translate-x-1 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-gray-700/50 rounded-xl p-8 flex items-center justify-center min-h-96 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-purple-500/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400 group-hover:text-blue-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 font-medium">Project Screenshot</p>
              </div>
            </div>
          </div>

          {/* More Projects Button */}
          <div className="text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/50 text-gray-300 hover:text-blue-400 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to work together?
            </h2>
            <p className="text-xl text-gray-400">
              Let's create something amazing. Feel free to reach out!
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
