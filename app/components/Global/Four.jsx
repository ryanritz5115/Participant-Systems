"use client";
import { MouseBus } from "@/app/providers/EventBus/MouseBus";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

export default function Four() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;

    const heroText = hero.children[0];
    const letters = splitLetters(heroText);
    const radius = 250;

    const onMouseover = (curmouse) => {
      letters.forEach((l, li) => {
        const dist = calculateDistanceToLetter(l, curmouse);
        const pyth = pythagoras(dist.x, dist.y);

        const w = weightFromDistanceGaussian(pyth, radius); // or weightFromDistanceSmooth(d, R)

        l.style.fontWeight = String(w);
      });
    };

    MouseBus.on(onMouseover);

    return () => {
      MouseBus.off(onMouseover);
    };
  }, []);
  return (
    <>
      <style>
        {`
        .fourCtn {
            margin-top: var(--hh);
            height: calc(100vh - var(--hh));
        }

        .fourDiv {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .four {
            font-size: 20vw;
            margin-bottom: 20px;
            cursor: default;
            font-weight: 900;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        `}
      </style>
      <div className="fourCtn">
        <div className="fourDiv" ref={heroRef}>
          <h1 className="four" data-title="404"></h1>
          <p className="ps">
            Please try another page, or{" "}
            <Link href="/" prefetch={true}>
              return home.
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
