"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white font-sans">
        <header className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Andrew Nelson</h1>
            <nav className="flex space-x-8">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="#" className="hover:underline">
                About Me
              </Link>{" "}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="#" className="hover:underline">
                Case Studies
              </Link>{" "}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="#" className="hover:underline">
                Articles
              </Link>{" "}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="#" className="hover:underline">
                Projects
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Andrew Nelson.</h2>{" "}
            <p className="text-lg font-medium mb-8">
              I design and build meaningful experiences.
            </p>{" "}
            <p className="text-gray-400 mb-8">
              {" "}
              I am a digital polymath - a constantly evolving digital creator
              driven by a passion for lifelong learning and the desire to leave
              a lasting impact.{" "}
            </p>
            <div className="flex justify-center space-x-4">
              {/* eslint-disable-next-line react/button-has-type */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Me
              </button>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="#" className="text-blue-500 hover:underline">
                LinkedIn
              </Link>
            </div>
          </div>
        </main>
        <footer className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-500 text-sm">&copy; 2023 Andrew Nelson</p>
        </footer>
      </div>
      <div className="bg-gray-900 text-white font-sans min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center mb-8">
            {" "}
            Featured Projects{" "}
          </h1>{" "}
          <p className="text-lg text-center mb-16">
            {" "}
            Focused on the experience, driven by the engineering.{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">My Supply Co.</h2>{" "}
              <p className="text-lg mb-6">
                {" "}
                D2C & B2B ecommerce site and blog with elegant solutions for a
                complex codebase and customer journey.{" "}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>PHP</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>MYSQL</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>JAVASCRIPT</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>JQUERY</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>WOOCOMMERCE</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>WORDPRESS</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>HTML5</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>SCSS</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>GIT(HUB)</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>GA4/GTM/EEC</span>{" "}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <span>CSS3</span>{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg font-medium">
                  {" "}
                  Explore more <span aria-hidden="true">→</span>{" "}
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="absolute -top-4 -right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="h-full bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    alt="Project Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
