import { returnAlt, returnGridDate } from "@/app/scripts/helpers";
import "../../../styles/Home/grid.css";
import Link from "next/link";
import Image from "next/image";

export default function OtherNotesGrid({ title, cells }) {
  return (
    <div className="gridCtn">
      <div className="gridDiv">
        {title && (
          <div className="gridTop">
            <h2 className="h3 gridTitle">{title}</h2>
          </div>
        )}

        <div className={"grid " + (cells.length < 9 ? "blitz" : "")}>
          {cells.map((c, ci) => (
            <div className="gridCell" key={"gridCell" + ci + title}>
              <Link
                href={"/notes/" + c.uid}
                className="gridLink"
                aria-label={c.title}
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
                <p className="gridCellSubtitle pm">
                  {returnGridDate(c.data.date)}––{c.data.type}
                </p>
                <h3 className="h4 gridCellTitle">{c.data.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
