import { PrismicRichText } from "@prismicio/react";
import "../../styles/About/wwd.css";
import Button from "../Utils/Button";

export default function WhatWeDoClient({ items }) {
  return (
    <div className="wwdCtn">
      <div className="wwdDiv">
        <div className="wwdTop">
          <h2 className="wwdTitle">What we do</h2>
          <Button
            text="See All Services"
            link="/services"
            classes="plain wwdButton"
          />
        </div>
        <div className="wwdFlex blitz">
          {items.map((item, index) => (
            <div className="wwd" key={"wwd" + index}>
              <div>
                <div className="dot"></div>
                <h3 className="wwdSubtitle">{item.title}</h3>
              </div>
              <div className="wwdText">
                <PrismicRichText field={item.disc} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
