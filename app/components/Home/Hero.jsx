"use client";

import { MouseBus } from "@/app/providers/EventBus/MouseBus";
import "../../styles/Home/hero.css";

import { useEffect, useRef } from "react";
import { ScrollBus } from "@/app/providers/EventBus/ScrollBus";
import Image from "next/image";

function animateRail(child, animateIn = true) {
  const children = Array.from(child.querySelectorAll(".rail"));
  const delay = 0.07;
  const timing = 1.2;

  children.forEach((child, cIndex) => {
    child.children[0].style.transition = `transform ${timing}s var(--expo) ${
      delay * cIndex
    }s`;

    child.children[0].style.transform = `translateY(${animateIn ? "0" : "100%"})`;
  });
}
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

export default function Hero() {
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
    const belowHeroText = belowHero.querySelector(".h2");
    const heroText = hero.children[0];
    const letters = splitLetters(heroText);
    const radius = 250;
    const isMobile = window.innerWidth < 1100 ? 0 : 1;

    const v = heroVideoCtn.children[0];
    const i = heroVideoCtn.children[1];

    // in case some themes inject controls:
    v.removeAttribute("controls");

    // Attempt autoplay
    Promise.resolve()
      .then(() => v.play())
      .catch(() => {
        useFallback();
      });

    function useFallback() {
      v.style.display = "none";
      i.style.display = "block";
    }
    if (isMobile) {
      animateRail(belowHeroText, true);
    }

    const onMouseover = (curmouse) => {
      if (window.scrollY > window.innerHeight) return;
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

    const xtrans = 200;
    const ytrans = 50;
    function onScroll(sc) {
      const { top, height } = heroCtn.getBoundingClientRect();
      const belowRect = belowHero.getBoundingClientRect();
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        animateRail(belowHeroText, false);
      } else {
        animateRail(belowHeroText, true);
      }

      const videoTotal = height - window.innerHeight;
      const totalHeight = height - window.innerHeight;
      if (scroll > videoTotal - window.innerHeight) {
        const scrollPercentage = 1;

        heroText.style.transform = "translate(200%, -200%) scale(3.5)";
        heroVideoCtn.style.transform = `translate(0%, 0%) scale(1)`;
      } else if (scroll == 0) {
        const scrollPercentage = 0;
        heroVideoCtn.style.transform = `translate(-40%, 14%) scale(0.05)`;
        heroText.style.transform = "translate(0%, -0%) scale(1)";
      } else {
        const scrollPercentage = scroll / (videoTotal - window.innerHeight);
        heroText.style.transform = `translate(${xtrans * scrollPercentage}%, -${
          ytrans * scrollPercentage
        }%) scale(${1 + 2.5 * scrollPercentage})`;
        heroVideoCtn.style.transform = `translate(${
          -40 + 40 * scrollPercentage
        }%, ${14 - 14 * scrollPercentage}%) scale(${
          0.05 + 0.95 * scrollPercentage
        })`;
      }
      if (scroll > videoTotal) {
        heroInner.style.transform = `translateY(-${belowRect.height}px)`;
      } else if (scroll == 0) {
        heroInner.style.transform = `translateY(0)`;
      } else {
        const totalP = scroll / totalHeight;
        heroInner.style.transform = `translateY(${-belowRect.height * totalP}px)`;
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
          {/* <div className="heroTextCtn filler"></div> */}
          <div className="belowHeroCtn" ref={belowHeroCtnRef}>
            <div className="belowHeroCtnInner">
              <div className="belowTextCenter">
                <h2 className="belowHeroText h2 railCtn noAnimate body">
                  <span className="rail">
                    <span>Participant Systems is a purpose-driven studio</span>
                  </span>
                  <br />{" "}
                  <span className="rail">
                    <span>crafting design language, creative interfaces,</span>
                  </span>
                  <br />{" "}
                  <span className="rail">
                    <span>and practical systems that empower visionary</span>
                  </span>
                  <br />{" "}
                  <span className="rail">
                    <span>brands to connect with their communities.</span>
                  </span>
                  <br />
                  <br />
                  <span className="rail">
                    <span>Together, we shape futures built on trust,</span>
                  </span>
                  <br />{" "}
                  <span className="rail">
                    <span>meaning, and possibility.</span>
                  </span>
                </h2>
                <h2 className="belowHeroTextMobile">
                  Participant Systems is a purpose-driven studio crafting design
                  language, creative interfaces, and practical systems that
                  empower visionary brands to connect with their communities.
                  <br />
                  <br />
                  Together, we shape futures built on trust, meaning, and
                  possibility.
                </h2>
              </div>

              <div className="belowHeroTextFlex blitz">
                <div className="inn">
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
            controls={false}
          ></video>
          <Image
            src="/images/herofallback.png"
            alt="Hero fallback image"
            sizes="50vw"
            fill
            className="heroFallback"
            priority
          />
        </div>
      </div>
    </div>
  );
}
