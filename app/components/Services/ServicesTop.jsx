import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/Services/top.css";
import TopIcons from "./Top/TopIcons";

export default function ServicesTopClient({ title, purple, disc, links }) {
  return (
    <div className="servicesTopCtn">
      <div className="servicesTopDiv">
        <div className="servicesTopLeft">
          <h1 className="servicesTitle">Services</h1>
          <h2 className="servicesSubtitle">
            {title}
            <span>{" " + purple}</span>
          </h2>
          <div className="servicesDisc">
            <PrismicRichText field={disc} />
          </div>
          {/* {links.map((l, ll) => (
            <Link
              className="servicesTopLink"
              key={"ServiceTopLink" + ll}
              href={l.url || ""}
            >
              {l.text}
            </Link>
          ))} */}
        </div>
        <TopIcons />
        <div className="servicesTopBubble fadeUp"></div>
      </div>
    </div>
  );
}
