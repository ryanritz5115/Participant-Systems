"use client";
import React, { useEffect } from "react";

export default function Animation() {
  useEffect(() => {
    let blitzThreshold = 0.45;
    if (window.innerWidth < 1100) {
      blitzThreshold = 0.15;
    }

    // Blitz Observer
    const blitzObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const blitzChildren = entry.target.children;
            const ease = entry.target.getAttribute("data-ease") || "";
            animateBlitz(blitzChildren, ease);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: blitzThreshold }
    );

    function animateBlitz(children, ease) {
      const delay = 0.1;
      const length = 1.0;
      const es = ease ? ease : "var(--expo)";
      console.log(es);

      Array.from(children).forEach((child, index) => {
        if (!child.classList.contains("notBlitz")) {
          child.style.transition = `transform ${length}s ${es} ${
            index * delay
          }s, opacity ${length}s ease ${index * delay}s`;
          child.style.transform = "translate(0, 0)";
          child.style.opacity = "1";
        }
      });
    }

    function initBlitz() {
      document.querySelectorAll(".blitz").forEach((el) => {
        blitzObserver.observe(el);
      });
    }

    initBlitz();

    // Rail Observer
    const railObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heroChild = entry.target;
            animateRail(heroChild);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 1 }
    );

    function animateRail(child) {
      const children = Array.from(child.querySelectorAll(".rail"));
      const delay = 0.07;
      const timing = 0.7;

      children.forEach((child, cIndex) => {
        child.children[0].style.transition = `transform ${timing}s var(--expo) ${
          delay * cIndex
        }s`;
        child.children[0].style.transform = "translateY(0)";
      });
    }

    function initRailObserver() {
      document.querySelectorAll(".railCtn:not(.noAnimate)").forEach((el) => {
        railObserver.observe(el);
      });
    }
    function initRails() {
      const rails = Array.from(
        document.querySelectorAll(".railCtn:not(.noAnimate)")
      );
      rails.forEach((h, hIndex) => {
        const inner = h.innerText;
        const words = inner.split(" ");

        h.innerHTML = "";
        words.forEach((word, wIndex) => {
          const span = document.createElement("span");
          span.classList.add("rail");

          const ns = document.createElement("span");
          ns.innerHTML = word;
          span.appendChild(ns);
          h.appendChild(span);
          if (wIndex !== words.length - 1) {
            h.appendChild(document.createTextNode(" "));
          }
        });
        h.style.opacity = 1;
      });
    }

    initRails();

    initRailObserver();

    // Fade Observer
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heroChild = entry.target;
            animateFades(heroChild);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.75 }
    );

    function animateFades(child) {
      child.style.transform = "translateY(0)";
      child.style.opacity = "1";
    }

    function initFades() {
      document.querySelectorAll(".fadeUp").forEach((el) => {
        fadeObserver.observe(el);
      });
    }

    initFades();
    // Fade Observer
    const fadeInObs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heroChild = entry.target;
            animateFadeIns(heroChild);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.75 }
    );

    function animateFadeIns(child) {
      child.style.opacity = "1";
    }

    function initFadeIns() {
      document.querySelectorAll(".fadeIn").forEach((el) => {
        fadeInObs.observe(el);
      });
    }

    initFadeIns();
  }, []);
  return <></>;
}
