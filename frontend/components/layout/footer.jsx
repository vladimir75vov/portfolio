"use client";

import React, { useContext } from "react";
import Link from "next/link";
import {
  SiDiscord,
  SiGithub,
  SiTelegram,
  SiVk,
  SiWhatsapp,
} from "react-icons/si";
import LinkOpenNewTabComp from "../linkOpenNewTabComp.jsx";
import { LanguageContext } from "../../context/LanguageContext.jsx";

function Footer() {
  const { t } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background/50 to-background border-t border-gray-700/30 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-start md:items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white mb-4">
              VB
            </div>
            <p className="text-gray-400 text-sm">{t("footer.developer")}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-white font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link href="/projects" className="hover:text-blue-400 transition-colors">
                {t("footer.projects")}
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                {t("footer.about")}
              </Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                {t("footer.contact")}
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-white font-semibold mb-4">{t("footer.follow")}</h3>
            <ul className="flex justify-start md:justify-end gap-2">
              <li>
                <LinkOpenNewTabComp url="https://t.me/vladimir75vov">
                  <SiTelegram />
                </LinkOpenNewTabComp>
              </li>
              <li>
                <LinkOpenNewTabComp url="https://vk.com/vladimir75vov">
                  <SiVk />
                </LinkOpenNewTabComp>
              </li>
              <li>
                <LinkOpenNewTabComp url="https://wa.me/89037095173">
                  <SiWhatsapp />
                </LinkOpenNewTabComp>
              </li>
              <li>
                <LinkOpenNewTabComp url="https://discordapp.com/users/289114042763575296">
                  <SiDiscord />
                </LinkOpenNewTabComp>
              </li>
              <li>
                <LinkOpenNewTabComp url="https://github.com/vladimir75vov">
                  <SiGithub />
                </LinkOpenNewTabComp>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/30 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} Vladimir Budaev. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
