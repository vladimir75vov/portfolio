"use client";

import React from "react";
import {
  SiDiscord,
  SiGithub,
  SiTelegram,
  SiVk,
  SiWhatsapp,
} from "react-icons/si";
import LinkOpenNewTabComp from "../linkOpenNewTabComp.jsx";

function Footer() {
  return (
    <footer className="flex items-center justify-center py-4">
      <div className="text-center">
        <span className="block text-sm text-center text-gray-500">
          vladimir75vov © 2024 All rights reserved.
        </span>

        <ul className="flex justify-center mt-5 space-x-5">
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
    </footer>
  );
}

export default Footer;
