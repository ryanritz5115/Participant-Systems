"use client";

import { MouseBus } from "@/app/providers/EventBus/MouseBus";
import "../../styles/Home/hero.css";

import { useEffect, useRef } from "react";
import { ScrollBus } from "@/app/providers/EventBus/ScrollBus";

export default function HeroOriginal() {
  const heroRef = useRef(null);
  const heroCtnRef = useRef(null);
  const heroVideoRef = useRef(null);
  const heroInnerRef = useRef(null);
  const belowHeroCtnRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const heroCtn = heroCtnRef.current;
    const heroInner = heroInnerRef.current;
    const heroVideoCtn = heroVideoRef.current;
    const hero = heroRef.current;
    const belowHero = belowHeroCtnRef.current;
    const heroText = hero.children[0];
    const letters = splitLetters(heroText);
    const radius = 250;

    const onMouseover = (curmouse) => {
      //     heroText.style.background = `radial-gradient(
      //   circle at ${curmouse.xl * 100}% ${curmouse.yl * 100}%,
      //   hsla(252, 100%, 89%, 1),
      //   hsla(125, 94%, 93%, 1),
      //   hsla(253, 75%, 33%, 1)
      // )`;
      heroCtn.children[0].style.setProperty("--xd", `${curmouse.xl * 100}%`);
      heroCtn.children[0].style.setProperty("--yd", `${curmouse.yl * 100}%`);
      heroText.style.setProperty("--x", `${curmouse.xl * 100}%`);
      heroText.style.setProperty("--y", `${curmouse.yl * 100}%`);

      letters.forEach((l, li) => {
        const dist = calculateDistanceToLetter(l, curmouse);
        const pyth = pythagoras(dist.x, dist.y);

        const w = weightFromDistanceGaussian(pyth, radius); // or weightFromDistanceSmooth(d, R)

        l.style.fontWeight = String(w);
      });
    };
    function weightFromDistanceGaussian(
      d,
      R,
      min = 300,
      max = 1000,
      falloff = 0.9
    ) {
      const sigma = R * falloff; // std dev
      const g = Math.exp(-(d * d) / (2 * sigma * sigma)); // 1 at d=0, approaches 0 at large d
      const w = min + (max - min) * g;
      return Math.round(w); // font-weight expects integers
    }

    function pythagoras(a, b) {
      return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }

    function calculateDistanceToLetter(letter, mouse) {
      const { width, height, top, left } = letter.getBoundingClientRect();

      return {
        x: mouse.axl - left - width / 2,
        y: mouse.ayl - top - height / 2,
      };
    }

    function splitLetters(text) {
      const inner = text.getAttribute("data-title");
      text.innerHTML = "";
      const letters = inner.split("");
      letters.forEach((l, li) => {
        if (l == " ") {
          const nb = document.createElement("br");
          text.appendChild(nb);
        } else {
          const nl = document.createElement("span");
          nl.innerText = l;
          text.appendChild(nl);
        }
      });

      const newArr = Array.from(text.children).filter((c) => c.innerText);
      text.style.opacity = 1;

      return newArr;
    }
    const xtrans = 200;
    const ytrans = 50;
    function onScroll(sc) {
      const { top, height } = heroCtn.getBoundingClientRect();
      const scroll = window.scrollY;

      const videoTotal = height - window.innerHeight * 2;
      const totalHeight = height - window.innerHeight;
      if (scroll > videoTotal) {
        const scrollPercentage = 1;

        heroText.style.transform = "translate(200%, -200%) scale(3.5)";
        heroVideoCtn.style.transform = `translate(0%, 0%) scale(1)`;
      } else if (scroll == 0) {
        const scrollPercentage = 0;
        heroVideoCtn.style.transform = `translate(-40%, 14%) scale(0.05)`;
        heroText.style.transform = "translate(0%, -0%) scale(1)";
      } else {
        const scrollPercentage = scroll / (height - window.innerHeight * 2);
        heroText.style.transform = `translate(${xtrans * scrollPercentage}%, -${
          ytrans * scrollPercentage
        }%) scale(${1 + 2.5 * scrollPercentage})`;
        heroVideoCtn.style.transform = `translate(${
          -40 + 40 * scrollPercentage
        }%, ${14 - 14 * scrollPercentage}%) scale(${
          0.05 + 0.95 * scrollPercentage
        })`;
      }
      if (scroll > totalHeight) {
        heroInner.style.transform = `translateY(-200vh)`;
        heroInner;
      } else if (scroll == 0) {
        heroInner.style.transform = `translateY(0)`;
      } else {
        const totalP = scroll / totalHeight;
        heroInner.style.transform = `translateY(${-200 * totalP}vh)`;
      }
    }

    ScrollBus.on(onScroll);

    MouseBus.on(onMouseover);

    return () => {
      ScrollBus.off(onScroll);
      MouseBus.off(onMouseover);
    };
  }, []);
  return (
    <div className="heroCtn" ref={heroCtnRef}>
      <div className="heroDiv">
        <div className="heroDivInner" ref={heroInnerRef}>
          <div className="heroTextCtn" ref={heroRef}>
            <h1 className="heroTitle" data-title="Participant .Systems"></h1>
          </div>
          <div className="heroTextCtn filler"></div>
          <div className="belowHeroCtn" ref={belowHeroCtnRef}>
            <div className="belowHeroCtnInner">
              <h2 className="belowHeroText h2">
                We are a purpose-driven studio crafting the design language,
                creative interfaces, and intentional objects that empower
                visionary brands and vibrant communities.
                <br />
                <br />
                Together, we shape futures built on meaning, connection, and
                possibility.
              </h2>
              <div className="belowHeroTextFlex">
                <p className="eyebrow pl">Our practice</p>
                <p className="pl">
                  Our practice lives where strategy, design, and artistic
                  expression intersect. We collaborate with teams and creators
                  to build thoughtful systems—visual, verbal, and spatial—that
                  grow with truth and humanity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="heroVideoCtn" ref={heroVideoRef}>
          <video
            src="/videos/psys_hero.mp4"
            autoPlay
            muted
            loop
            preload="auto"
            className="heroVideo"
            poster="/images/Hero_Thumb.png"
          ></video>
        </div>
      </div>
    </div>
  );
}
