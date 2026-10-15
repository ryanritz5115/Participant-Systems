"use client";

import { ScrollBus } from "@/app/providers/EventBus/ScrollBus";
import { useEffect, useRef } from "react";
import "../../styles/Services/sMenu.css";
export default function ServicesMenu() {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    let active = false;

    function onScroll() {
      const rect = document.documentElement.getBoundingClientRect();
      if (
        window.scrollY > 100 &&
        !active &&
        window.scrollY < rect.height - window.innerHeight * 2
      ) {
        active = true;
        menu.classList.add("active");
        return;
      } else if (
        (window.scrollY < 100 && active) ||
        (window.scrollY > rect.height - window.innerHeight * 2 && active)
      ) {
        active = false;
        menu.classList.remove("active");
        return;
      }
    }

    ScrollBus.on(onScroll);

    return () => {
      ScrollBus.off(onScroll);
    };
  }, []);
  return (
    <div className="servicesMenu" ref={menuRef}>
      <ul className="servicesMenuList">
        <li>
          <a href="#why-this-works" className="servicesMenuLink">
            Why it works
          </a>
        </li>
        <li>
          <a href="#who-we-help" className="servicesMenuLink">
            Who we help
          </a>
        </li>
        <li>
          <a href="#faq" className="servicesMenuLink">
            FAQ
          </a>
        </li>
        <li>
          <a href="" className="servicesMenuLink">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
