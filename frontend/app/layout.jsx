import "../resources/styles/globals.scss";

import { Inter } from "next/font/google";
import Navbar from "../components/layout/navbar.jsx";
import Footer from "../components/layout/footer.jsx";
import { LanguageProvider } from "../context/LanguageContext.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vladimir Budaev - Full Stack Developer",
  description: "Full Stack Developer | React | Next.js | Node.js | Digital Creator",
  keywords: "developer, portfolio, react, nextjs, fullstack",
  authors: [{ name: "Vladimir Budaev" }],
  openGraph: {
    title: "Vladimir Budaev - Full Stack Developer",
    description: "Full Stack Developer | React | Next.js | Node.js | Digital Creator",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#13151a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-background text-white overflow-x-hidden`}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
