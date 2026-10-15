"use client";

import Image from "next/image";

import "../../styles/Home/clientTests.css";
import { useEffect, useRef } from "react";
import { PrismicRichText } from "@prismicio/react";

export default function ClientTestimonials({ slice }) {
  const clientInnerRef = useRef(null);
  const clientButtonsRef = useRef(null);

  useEffect(() => {
    if (!clientInnerRef.current) return;
    const clientInner = clientInnerRef.current;
    const clientChildren = Array.from(clientInner.children);
    const clientButtonsCtn = clientButtonsRef.current;
    const clientButtons = Array.from(clientButtonsCtn.children);

    function onLoad() {
      const firstChild = clientChildren[0];
      const { height } = firstChild.getBoundingClientRect();

      clientInner.style.height = height + "px";
    }

    onLoad();

    function onClick(e) {
      const button = e.currentTarget;
      const ind = button.getAttribute("data-index");
      const height = toggleTests(ind);
      clientInner.style.height = height + "px";
    }

    function toggleTests(index) {
      let height = 0;
      clientChildren.forEach((child, ci) => {
        if (ci == index) {
          height = child.getBoundingClientRect().height;
          child.classList.add("active");
          clientButtons[ci].classList.add("active");
        } else {
          child.classList.remove("active");
          clientButtons[ci].classList.remove("active");
        }
      });
      return height;
    }
    function findActive() {
      clientChildren.forEach((child, ci) => {
        if (child.classList.contains("active")) {
          return ci;
        }
      });
    }
    function resize() {
      const ind = findActive();
      const height = clientChildren[ind].getBoundingClientRect().height;
      clientInner.style.height = height + "px";
    }

    clientButtons.forEach((button, b) => {
      button.addEventListener("click", onClick);
    });

    return () => {
      clientButtons.forEach((button, b) => {
        button.removeEventListener("click", onClick);
      });
    };
  }, []);
  return (
    <div className="clientsCtn">
      <div className="clientsDiv">
        <p className="eyebrow">Clients say:</p>
        <div className="clientsFlex">
          <div className="clientInner" ref={clientInnerRef}>
            {slice.primary.testimonials.map((d, di) => (
              <div
                key={"singleHomeClientTest" + di}
                className={"clientTest " + (di == 0 ? "active" : "")}
              >
                <div className="clientTestText h3">
                  <PrismicRichText field={d.text} />
                </div>
                <p className="clientAuthor">
                  <span>{d.author}</span>
                  <br />
                  <span>{d.role}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="clientsAbsolute" ref={clientButtonsRef}>
            {slice.primary.testimonials.map((d, di) => (
              <button
                className={"singleClientButton " + (di == 0 ? "active" : "")}
                data-index={di}
                key={"clientButton" + di}
              >
                <Image
                  src={d.image.url}
                  alt="Alt"
                  sizes="10vw"
                  fill
                  className="singleClientImage"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
