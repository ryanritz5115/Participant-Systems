"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MobileNav() {
  const btnRef = useRef(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!btnRef.current) return;
    const btn = btnRef.current;
    const nav = navRef.current;
    const header = document.querySelector("header");

    function onClick() {
      btn.classList.toggle("active");
      nav.classList.toggle("active");
      header.classList.toggle("active");
    }

    btn.addEventListener("click", onClick);
    return () => {
      btn.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;
    const btn = btnRef.current;
    const header = document.querySelector("header");
    const nav = navRef.current;
    btn.classList.remove("active");
    nav.classList.remove("active");
    header.classList.remove("active");
  }, [pathname]);
  return (
    <>
      <button className="mobileNavButton" ref={btnRef}>
        <div className="mobileLine one"></div>
        <div className="mobileLine two"></div>
      </button>
      <div className="mobileNavCtn" ref={navRef}>
        <nav className="mobileNav">
          <ul className="mobileNavList">
            <li>
              <Link prefetch={true} href="/projects" className="mobileNavLink">
                Projects
              </Link>
            </li>
            <li>
              <Link prefetch={true} href="/about" className="mobileNavLink">
                About
              </Link>
            </li>
            <li>
              <Link prefetch={true} href="/services" className="mobileNavLink">
                Services
              </Link>
            </li>
            <li>
              <Link prefetch={true} href="/notes" className="mobileNavLink">
                Notes
              </Link>
            </li>
            <li>
              <Link prefetch={true} href="/notes" className="mobileNavLink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
