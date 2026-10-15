import { PrismicRichText } from "@prismicio/react";
import "../../styles/Home/textBuffer.css";
import Link from "next/link";
import Button from "../Utils/Button";

export default function TextBufferClient({ slice }) {
  return (
    <div className="textBufferCtn">
      <div className="textBufferInner">
        <h2 className="textBufferTitle h2">
          <PrismicRichText field={slice.primary.toptext} />
        </h2>
        <div className="textBufferFlex">
          <p className="eyebrow pl">{slice.primary.eyebrow}</p>
          <div>
            <p className="pl">{slice.primary.text}</p>
            {slice.primary.link.map((l, ll) => (
              <Button
                classes="plain textBufferLink"
                text={l.text || "Learn More"}
                link={l.url}
                key={"textBLink" + ll}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
