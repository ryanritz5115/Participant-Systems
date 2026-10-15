"use client";

import { returnAlt } from "@/app/scripts/helpers";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useEffect } from "react";
import "../../styles/Notes/internal.css";
function formatDateToDots(input) {
  // Normalize input to a Date
  const d = new Date(input);
  if (isNaN(d)) throw new Error("Invalid date: " + input);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}
function slugify(str) {
  if (Array.isArray(str)) {
    // console.log("here");

    let ns = "";
    str[0].props?.children.forEach((c, cc) => {
      ns += c.props.children || "";
    });
    return ns
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  } else {
    return str
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
}

export default function NoteInternal({ page }) {
  console.log(page);

  useEffect(() => {
    if (page.data.images.length <= 1) return;
    const headings = Array.from(document.querySelectorAll("h2, h3")).filter(
      (h) => h.id
    );
    const links = new Map(
      Array.from(document.querySelectorAll(".singleNoteImageCtn")).map((a) => [
        a.id,
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
        if (links.get(id)) {
          links.get(id)?.classList.add("active");
        } else {
          const firstEntry = links.entries().next().value;
          links.get(firstEntry[0])?.classList.add("active");
        }
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
  return (
    <div className="nCtn">
      <div className="nTop">
        <h1 className="nTopTitle">{page.data.title}</h1>
      </div>
      <div className="nDiv">
        <div className="nLeft">
          <div className="nLeftImagesCtn">
            {page.data.images.map((i, ii) => (
              <div
                className={"singleNoteImageCtn " + (ii == 0 ? "active" : "")}
                key={"sni" + ii}
                id={slugify(i.connecting_id)}
              >
                <Image
                  src={i.image.url}
                  alt={returnAlt(i.image)}
                  sizes="50vw"
                  fill
                  className="singleNoteImage"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="nRight">
          <div className="nRightInternal">
            <p className="nRightEyebrow">
              <span>{formatDateToDots(page.data.date)}</span>
              <span>—</span>
              <span>{page.data.type}</span>
            </p>
            <PrismicRichText
              field={page.data.content}
              components={{
                heading2: ({ children }) => {
                  const id = slugify(children);
                  return <h2 id={id}>{children}</h2>;
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="noteIntCtn">
        <p className="noteInternalSubtitle">{page.data.article_subtitle}</p>
      </div>
    </div>
  );
}
