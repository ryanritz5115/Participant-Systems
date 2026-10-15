import Link from "next/link";
import Image from "next/image";
import { returnAlt, returnGridDate } from "@/app/scripts/helpers";
export default function InternalGrid({ cells, title }) {
  return (
    <div className={"grid " + (cells.length < 9 ? "blitz" : "")}>
      {cells.map((c, ci) => (
        <div className="gridCell" key={"gridCell" + ci + title}>
          <Link href={c.link || ""} className="gridLink" aria-label={c.title}>
            <div className="gridCellImageWrapper">
              <div className="gridCellImageCtn">
                {c.image.url ? (
                  <Image
                    src={c.image.url}
                    alt={returnAlt(c.image)}
                    sizes="25vw"
                    fill
                    className="gridCellImage"
                  />
                ) : null}
              </div>
            </div>
            <p className="gridCellSubtitle pm grey">
              {returnGridDate(c.date)}––{c.type}
            </p>
            <h3 className="h4 gridCellTitle">{c.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
