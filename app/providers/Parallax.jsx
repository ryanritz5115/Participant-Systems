"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollBus } from "./EventBus/ScrollBus";

export default function Parallax() {
  const pathname = usePathname();
  useEffect(() => {
    const headerRef = document.querySelector("header");
    const headerNav = headerRef.querySelector("nav");

    if (window.location.pathname != "/") {
      headerRef.classList.remove("tucked");
      headerNav.classList.remove("tucked");
    }

    if (window.innerWidth > 1100) {
      const images = Array.from(document.querySelectorAll(".parallax"));
      const imageNum = images.length;
      const scale = 1.1;

      const parallaxIntensity = 0.1;

      const divider = window.innerWidth < 1100 ? 0.0 : 0.0;

      function init() {
        for (let i = 0; i < imageNum; i++) {
          const transY =
            images[i].getBoundingClientRect().top +
            images[i].getBoundingClientRect().height / 2 -
            window.innerHeight / 2;
          const sp = images[i].getAttribute("data-speed")
            ? parseFloat(images[i].getAttribute("data-speed"))
            : 1;
          const nScale = images[i].getAttribute("data-scale")
            ? parseFloat(images[i].getAttribute("data-scale"))
            : scale;
          images[i].style.opacity = 1;
          images[i].style.transform = `translateY(${(
            transY *
            parallaxIntensity *
            -1 *
            sp
          ).toFixed(2)}px) scale(${nScale + divider})`;
        }
      }
      let lastScroll = 0;
      let scrollDown = false;
      function onScroll(e) {
        if (window.location.pathname == "/") {
          if (window.scrollY > window.innerHeight * 2) {
            headerNav.classList.remove("tucked");
            headerRef.classList.remove("tucked");
          } else {
            headerNav.classList.add("tucked");
            headerRef.classList.add("tucked");
          }
        }
        for (let i = 0; i < imageNum; i++) {
          const transY =
            images[i].getBoundingClientRect().top +
            images[i].getBoundingClientRect().height / 2 -
            window.innerHeight / 2;
          const sp = images[i].getAttribute("data-speed")
            ? parseFloat(images[i].getAttribute("data-speed"))
            : 1;
          const nScale = images[i].getAttribute("data-scale")
            ? parseFloat(images[i].getAttribute("data-scale"))
            : scale;
          images[i].style.transform = `translateY(${(
            transY *
            parallaxIntensity *
            -1 *
            sp
          ).toFixed(2)}px) scale(${nScale + divider})`;
        }
      }

      init();

      ScrollBus.on(onScroll);

      return () => {
        ScrollBus.off(onScroll);
      };
    } else {
      const images = Array.from(document.querySelectorAll(".parallax"));

      images.forEach((image) => {
        image.style.opacity = 1;
      });
      headerRef.classList.remove("tucked");
      headerNav.classList.remove("tucked");

      let lastScroll = 0;
      let scrollDown = false;
      function onScroll(e) {
        const currentWindowScroll = window.scrollY;
        if (
          currentWindowScroll > lastScroll &&
          scrollDown == false &&
          currentWindowScroll > 100
        ) {
          headerRef.classList.add("tucked");
          headerNav.classList.add("tucked");
          scrollDown = true;
        } else if (currentWindowScroll < lastScroll && scrollDown == true) {
          headerRef.classList.remove("tucked");
          headerNav.classList.remove("tucked");
          scrollDown = false;
        }
        lastScroll = currentWindowScroll;
      }

      ScrollBus.on(onScroll);

      return () => {
        ScrollBus.off(onScroll);
      };
    }
  }, []);

  return <></>;
}
