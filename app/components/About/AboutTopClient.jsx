import { PrismicRichText } from "@prismicio/react";
import "../../styles/About/atop.css";
export default function AboutTopClient({ title, disc, founder, team }) {
  return (
    <div className="aTopCtn">
      <div className="aTopDiv">
        <h1 className="aTopTitle">About</h1>
        <h2 className="aTopSubtitle">{title}</h2>
        <div className="aTopDisc">
          <PrismicRichText field={disc} />
        </div>
        <div className="aTopDiscSection">
          <p className="eyebrow">The Founder</p>
          <div className="aTopDisc">
            <PrismicRichText field={founder} />
          </div>
        </div>
        <div className="aTopDiscSection">
          <p className="eyebrow">The Team</p>
          <div className="aTopDisc">
            <PrismicRichText field={team} />
          </div>
        </div>
      </div>
      <div className="aTopBubble green"></div>
      <div className="aTopBubble blue"></div>
    </div>
  );
}
