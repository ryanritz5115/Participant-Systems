// components/ScrollProvider.jsx
"use client";
import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { ScrollBus } from "./EventBus/ScrollBus";
import { MouseBus } from "./EventBus/MouseBus";

export default function ScrollProvider() {
  const [lenisRef, setLenis] = useState(null);

  const mouse = useRef({ x: 0, y: 0, ax: 0, ay: 0 });
  const lerpedMouse = useRef({ x: 0, y: 0, ax: 0, ay: 0 });
  const lerpFactor = 0.1;

  useEffect(() => {
    const lenis = new Lenis({
      // lerp: 0.2,
      // wheelMultiplier: 1.5,
    });
    lenis.scrollTo(0, {
      immediate: true,
    });
    setLenis(lenis);

    let rafId;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
      mouse.current.ax = e.clientX;
      mouse.current.ay = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const raf = (time) => {
      lenis.raf(time);
      ScrollBus.emit(lenis);

      // Mouse lerp logic
      lerpedMouse.current.x +=
        (mouse.current.x - lerpedMouse.current.x) * lerpFactor;
      lerpedMouse.current.y +=
        (mouse.current.y - lerpedMouse.current.y) * lerpFactor;
      lerpedMouse.current.ax +=
        (mouse.current.ax - lerpedMouse.current.ax) * lerpFactor;
      lerpedMouse.current.ay +=
        (mouse.current.ay - lerpedMouse.current.ay) * lerpFactor;

      MouseBus.emit({
        x: mouse.current.x,
        y: mouse.current.y,
        xl: lerpedMouse.current.x,
        yl: lerpedMouse.current.y,
        ax: mouse.current.ax,
        ay: mouse.current.ay,
        axl: lerpedMouse.current.ax,
        ayl: lerpedMouse.current.ay,
      });

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
