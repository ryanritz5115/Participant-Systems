"use client";
import { MouseBus } from "@/app/providers/EventBus/MouseBus";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
export default function Footer() {
  const footerRef = useRef(null);
  const yr = new Date().getFullYear();
  const pathname = usePathname();

  useEffect(() => {
    const footerText = footerRef.current;
    const doc = document.documentElement.getBoundingClientRect();
    const letters = splitLetters(footerText);
    const radius = 250;

    const onMouseover = (curmouse) => {
      if (window.scrollY < doc.height - window.innerHeight * 2) return;

      footerText.style.setProperty("--x", `${curmouse.xl * 100}%`);
      footerText.style.setProperty("--y", `${curmouse.yl * 100}%`);

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
  }, [pathname]);
  return (
    <footer>
      <div className="footerDiv">
        <div className="footerTop">
          <h2 className="hidden">Participant Systems</h2>
          <div className="footerTopLeft blitz">
            <div className="footerCell blitz">
              <h3>Be in touch</h3>
              <a href="" className="footerLink underline">
                Start the Fit Check
              </a>
              <a href="" className="footerLink underline">
                Book a 20 minute discovery call
              </a>
              <a href="" className="footerLink underline">
                Send us a message
              </a>
            </div>
            <div className="footerCell blitz">
              <h3>Menu</h3>
              <Link prefetch={true} href="" className="footerLink">
                Projects
              </Link>
              <Link prefetch={true} href="" className="footerLink">
                About
              </Link>
              <Link prefetch={true} href="" className="footerLink">
                Services
              </Link>
              <Link prefetch={true} href="" className="footerLink">
                Notes
              </Link>
              <Link prefetch={true} href="" className="footerLink">
                Contact
              </Link>
            </div>
            <div className="footerCell blitz">
              <h3>Follow us</h3>
              <Link prefetch={true} href="" className="footerLink underline">
                LinkedIn
              </Link>
              <Link prefetch={true} href="" className="footerLink underline">
                Instagram
              </Link>
            </div>
          </div>
          <p
            className="psysHover"
            data-title="Participant .Systems"
            ref={footerRef}
          >
            Participant
            <br />
            .Systems
          </p>
        </div>
        <div className="footerBottom">
          <p>
            <span id="year">{yr}</span> Participant Systems
          </p>
          <a
            style={{ color: "hsla(221, 12%, 60%, 1)" }}
            href=""
            className="footerLink"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="footerBubble fadeIn"></div>
    </footer>
  );
}
