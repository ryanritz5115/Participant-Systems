import { returnAlt } from "@/app/scripts/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsAutoGridInternal({ cells }) {
  console.log(cells);

  return (
    <div className="grid large">
      {cells.map((c, ci) => (
        <div className="gridCell" key={"gridCell" + ci + "large"}>
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
                    sizes="50vw"
                    fill
                    className="gridCellImage"
                    priority={ci < 2}
                  />
                ) : null}
              </div>
            </div>
            <div className="largeGridFlex">
              <p className="gridCellSubtitle up pl">{c.data.brand}</p>
              <p className="gridCellSubtitle up pl grey">{c.data.type}</p>
            </div>
            <h2 className="h4 gridCellTitle">{c.data.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
