import { returnAlt } from "@/app/scripts/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsGrid({ cells, title }) {
  return (
    <div className={"grid " + (cells.length < 9 ? "blitz" : "")}>
      {cells.map((c, ci) => (
        <div className="gridCell" key={"gridCell" + ci + title}>
          <Link
            href={"/projects/" + c.uid}
            className="gridLink"
            aria-label={c.data.title}
          >
            <div className="gridCellImageWrapper">
              <div className="gridCellImageCtn">
                {c.data.image.url ? (
                  <Image
                    src={c.data.image.url}
                    alt={returnAlt(c.data.image)}
                    sizes="25vw"
                    fill
                    className="gridCellImage"
                  />
                ) : null}
              </div>
            </div>
            <p className="gridCellSubtitle pm">{c.data.type}</p>
            <h3 className="h4 gridCellTitle">{c.data.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
