import Link from "next/link";
import "../../styles/Services/serviceText.css";
import { PrismicRichText } from "@prismicio/react";

export default function ServiceTextClient({ title, purple, disc, links }) {
  return (
    <div className="serviceTextCtn">
      <div className="serviceTextDiv blitz">
        <h2 className="serviceTextTitle">
          {title}
          <span>{" " + purple}</span>
        </h2>
        <div className="serviceTextDisc">
          <PrismicRichText field={disc} />
        </div>
        {/* {links.map((l, ll) => (
          <Link
            className="serviceLink smaller"
            key={"ServiceTextLink" + title + ll}
            href={l.url || ""}
          >
            {l.text}
          </Link>
        ))} */}
      </div>
    </div>
  );
}
