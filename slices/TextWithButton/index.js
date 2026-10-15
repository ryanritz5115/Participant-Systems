import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import "../../app/styles/Services/twb.css";

/**
 * @typedef {import("@prismicio/client").Content.TextWithButtonSlice} TextWithButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithButtonSlice>} TextWithButtonProps
 * @type {import("react").FC<TextWithButtonProps>}
 */
const TextWithButton = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="twbCtn">
        <div className="twbDiv">
          <h2 className="twbTitle">{slice.primary.title}</h2>
          <div className="twbDisc">
            <PrismicRichText field={slice.primary.disc} />
          </div>
          <Link href={slice.primary.link.url || ""} className="twbButton">
            <span>{slice.primary.link.text}</span>
            <svg
              className="twbSvg"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_470_724)">
                <path
                  d="M12.4321 27.2418L23.2456 16.2966L0.0253906 16.526V13.4338L23.2456 13.6631L12.4321 2.71794L14.2836 0.448242L28.0254 14.8178V15.142L14.2836 29.4562L12.4321 27.2418Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_470_724">
                  <rect
                    width="28"
                    height="29"
                    fill="white"
                    transform="translate(0.0253906 0.448242)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TextWithButton;
