import { returnAlt, returnGridDate } from "@/app/scripts/helpers";
import Image from "next/image";
import Link from "next/link";

export default function TripleGrid({ cells }) {
  return (
    <div className={"grid triple "}>
      {cells.map((c, ci) => (
        <div className="gridCell" key={"gridCell" + ci + c.data.title}>
          <Link
            href={"/notes/" + c.uid || ""}
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
                    priority={ci < 4}
                  />
                ) : null}
              </div>
            </div>
            <p className="gridCellSubtitle pm grey">
              {returnGridDate(c.data.date)}––{c.data.type}
            </p>
            <h3 className="h4 gridCellTitle">{c.data.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
