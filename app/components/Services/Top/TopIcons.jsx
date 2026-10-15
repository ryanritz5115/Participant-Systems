"use client";

import { MouseBus } from "@/app/providers/EventBus/MouseBus";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TopIcons() {
  const iconsRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1200);
  }, []);

  useEffect(() => {
    if (
      !iconsRef.current ||
      !ready ||
      window.scrollY > window.innerHeight ||
      window.innerWidth < 1100
    )
      return;
    const iconsCtn = iconsRef.current;
    const icons = Array.from(iconsCtn.children);
    const amp = {
      x: 10,
      y: 5,
    };
    const iconTransform = icons.map((i) => ({ x: 0, y: 0 }));
    icons.forEach((i, ii) => {
      i.style.transition = "none";
    });
    function onMouseover(curmouse) {
      const xn = 2 * curmouse.x - 1;
      const yn = 2 * curmouse.y + 1;
      icons.forEach((i, ii) => {
        iconTransform[ii].x += (xn - iconTransform[ii].x) * 0.1;
        iconTransform[ii].y += (yn - iconTransform[ii].y) * 0.1;
        i.style.transform = `translate(${iconTransform[ii].x * amp.x}%, ${iconTransform[ii].y * amp.y}%)`;
      });
    }
    MouseBus.on(onMouseover);

    return () => {
      MouseBus.off(onMouseover);
    };
  }, [ready]);
  return (
    <div
      className="servicesTopRight blitz "
      data-ease="cubic-bezier(0.27, 1.61, 0.35, 0.89)"
      ref={iconsRef}
    >
      <div className="serviceTopImageCtn one">
        <Image
          src="/images/Brand.png"
          alt="Clover"
          sizes="40vw"
          fill
          priority
          className="servicesTopImage "
          data-speed=".5"
          data-scale="1"
        />
      </div>
      <div className="serviceTopImageCtn two">
        <Image
          src="/images/Launch.png"
          alt="bang"
          sizes="40vw"
          fill
          priority
          className="servicesTopImage "
          data-speed=".6"
          data-scale="1"
        />
      </div>
      <div className="serviceTopImageCtn three">
        <Image
          src="/images/Partner.png"
          alt="stack"
          sizes="40vw"
          fill
          priority
          className="servicesTopImage "
          data-speed=".8"
          data-scale="1"
        />
      </div>
      <div className="serviceTopImageCtn four">
        <Image
          src="/images/Content.png"
          alt="Star"
          sizes="40vw"
          fill
          priority
          className="servicesTopImage "
          data-speed="1.2"
          data-scale="1"
        />
      </div>
    </div>
  );
}
