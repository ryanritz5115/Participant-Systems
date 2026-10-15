"use client";

import { useEffect } from "react";

export default function NoteProvider() {
  useEffect(() => {
    // call in a client component / useEffect in Next.js
    const headings = Array.from(document.querySelectorAll("h2, h3")).filter(
      (h) => h.id
    );
    const links = new Map(
      Array.from(document.querySelectorAll("[data-toc]")).map((a) => [
        a.getAttribute("href").slice(1),
        a,
      ])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // find the entry closest to the top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];

        if (!visible) return;
        const id = visible.target.id;
        // clear + set active
        links.forEach((a) => a.classList.remove("active"));
        links.get(id)?.classList.add("active");
      },
      {
        root: null,
        // Activate when heading is 20% below top; adjust to taste
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 1],
      }
    );

    headings.forEach((h) => observer.observe(h));

    return () => {
      headings.forEach((h) => observer.unobserve(h));
    };
  }, []);
  return null;
}
