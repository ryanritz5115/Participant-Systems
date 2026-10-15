"use client";

import Link from "next/link";

import Button from "../Utils/Button";

import "../../styles/Home/services.css";
import { useEffect, useRef } from "react";
import { MouseBus } from "@/app/providers/EventBus/MouseBus";

const dt = [
  "Brand Identity",
  "Brand Identity",
  "Brand Identity",
  "Brand Identity",
  "Brand Identity",
  "Brand Identity",
  "Brand Identity",
  "Brand Identity",
];

export default function ServicesClient({ slice }) {
  const bubbleOne = useRef(null);
  const bubbleTwo = useRef(null);

  useEffect(() => {
    if (!bubbleOne.current) return;
    const amp = {
      x: 10,
      y: 5,
    };
    const bubOne = bubbleOne.current;
    const bubTwo = bubbleTwo.current;

    function onMouseover(mouse) {
      const xn = mouse.xl * 2 - 1;
      const yn = mouse.yl * 2 + 1;
      bubOne.style.transform = `translate(${xn * amp.x}%, ${-50 + yn * amp.y}%)`;
      bubTwo.style.transform = `translate(${xn * amp.x}%, ${-50 + yn * amp.y}%)`;
    }

    MouseBus.on(onMouseover);

    return () => {
      MouseBus.off(onMouseover);
    };
  }, []);
  return (
    <div className="servicesCtn">
      <div className="servicesFlex">
        <p className="eyebrow">Services</p>
        <div className="servicesRows">
          <div className="servicesRowsCtn blitz">
            {slice.primary.services.map((d, di) => (
              <p key={"serviceRow" + di} className="servicesRow">
                {d.title}
              </p>
            ))}
          </div>
          <Button
            classes="plain servicesButton"
            text="Explore service packages"
            link="/services"
          />
        </div>
      </div>
      <div className="serviceHomeBubble blue" ref={bubbleOne}></div>
      <div className="serviceHomeBubble grey" ref={bubbleTwo}></div>
    </div>
  );
}
