import { returnAlt } from "@/app/scripts/helpers";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import "../../app/styles/Projects/sticky.css";

/**
 * @typedef {import("@prismicio/client").Content.ProjectStickySlice} ProjectStickySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectStickySlice>} ProjectStickyProps
 * @type {import("react").FC<ProjectStickyProps>}
 */
const ProjectSticky = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pStickyCtn">
        <div className="pStickyDiv">
          <div className="pleft">
            <div className="singleStickyLeft blitz">
              <p className="ps ebr">The challenges they had</p>
              <div className="stickyDisc">
                <PrismicRichText field={slice.primary.challenges} />
              </div>
            </div>
            <div className="singleStickyLeft blitz">
              <p className="ps ebr">The solutions we delivered</p>
              <div className="stickyDisc">
                <PrismicRichText field={slice.primary.solutions} />
              </div>
            </div>
          </div>
          <div className="pr">
            {slice.primary.images.map((img, i) => (
              <div className="singleStickyImage" key={"singleStickyImage" + i}>
                <Image
                  src={img.image.url}
                  alt={returnAlt(img.image)}
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                  className="singleStickyImg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSticky;
