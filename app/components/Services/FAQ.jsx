"use client";

import { PrismicRichText } from "@prismicio/react";

export default function FAQ({ title, faqs }) {
  function onClick(e) {
    const button = e.currentTarget;
    const ctn = button.parentElement;
    const answer = button.nextSibling;
    button.classList.toggle("active");
    ctn.classList.toggle("active");
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingBottom = 0 + "px";
    } else {
      answer.style.maxHeight = answer.scrollHeight + 40 + "px";
      answer.style.paddingBottom = 40 + "px";
    }
  }
  return (
    <div className="faqCtn">
      <div className="faqDiv">
        <h2 className="faqTitle">{title}</h2>
        <div className="faqsCtn">
          {faqs.map((f, ff) => (
            <div className="singleFaq" key={"singleFAQ" + ff}>
              <button className="faqButton" onClick={onClick}>
                <span>{f.question}</span>
                <svg
                  className="singleFaqSvg"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.1348 57.7188L29.1348 -0.000162231"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M0.273438 28.8579L57.9923 28.8579"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <div className="singleFaqAnswer">
                <PrismicRichText field={f.answer} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
