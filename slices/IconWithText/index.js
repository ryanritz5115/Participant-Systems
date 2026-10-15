import { PrismicRichText } from "@prismicio/react";
import "../../app/styles/About/iwt.css";

/**
 * @typedef {import("@prismicio/client").Content.IconWithTextSlice} IconWithTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IconWithTextSlice>} IconWithTextProps
 * @type {import("react").FC<IconWithTextProps>}
 */
const IconWithText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="iwtCtn">
        <div className="iwtDiv">
          <div>
            <h2 className="iwtTitle">{slice.primary.title}</h2>
            <div className="iwtDisc">
              <PrismicRichText field={slice.primary.disc} />
            </div>
          </div>
          <div className="iwtRight"></div>
        </div>
      </div>
    </section>
  );
};

export default IconWithText;
