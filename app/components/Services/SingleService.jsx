import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export default function SingleService({
  title,
  subtitle,
  pricing,
  disc,
  items,
  links,
  video,
  num,
  subnum,
}) {
  return (
    <div className="serviceCtn">
      <div className="serviceDiv">
        <div className="serviceLeft blitz">
          <h2 className="serviceTitle">
            {title}
            <span>™</span>
          </h2>
          <h3 className="serviceSubtitle">{subtitle}</h3>
          <div className="serviceDisc">
            <PrismicRichText field={disc} />
          </div>
          <div className="serviceItems blitz">
            {items.map((l, ll) => (
              <p className="serviceItem" key={"ServiceTopLink" + ll}>
                {l.text}
              </p>
            ))}
          </div>
          <div className="servicePricing">
            <PrismicRichText field={pricing} />
          </div>
          {/* {links.map((l, ll) => (
            <Link
              className="serviceLink"
              key={"ServiceLink" + title + ll}
              href={l?.url || ""}
            >
              {l.text}
            </Link>
          ))} */}
        </div>
        <div className="serviceRight">
          <p className="serviceRightText">
            <span>{subnum}</span>
            <span>{num}</span>
          </p>
          <video
            src={video.url}
            muted
            autoPlay
            playsInline
            loop
            className="serviceVideo"
          ></video>
        </div>
      </div>
    </div>
  );
}
