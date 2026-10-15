import { returnAlt } from "@/app/scripts/helpers";
import Image from "next/image";
import Link from "next/link";

export default function LargeGrid({ cells }) {
  return (
    <div className="grid large">
      {cells.map((c, ci) => (
        <div className="gridCell" key={"gridCell" + ci + "large"}>
          <Link href={c.link} className="gridLink" aria-label={c.title}>
            <div className="gridCellImageWrapper">
              <div className="gridCellImageCtn">
                {c.image.url ? (
                  <Image
                    src={c.image.url}
                    alt={returnAlt(c.image)}
                    sizes="50vw"
                    fill
                    className="gridCellImage"
                    priority={ci < 2}
                  />
                ) : null}
              </div>
            </div>
            <div className="largeGridFlex">
              <p className="gridCellSubtitle up pl">SKIN/SKIN</p>
              <p className="gridCellSubtitle up pl grey">WELLNESS</p>
            </div>
            <h2 className="h4 gridCellTitle">{c.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
