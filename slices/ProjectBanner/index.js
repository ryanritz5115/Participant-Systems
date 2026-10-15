import { returnAlt } from "@/app/scripts/helpers";
import "../../app/styles/Projects/fullBanner.css";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.ProjectBannerSlice} ProjectBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectBannerSlice>} ProjectBannerProps
 * @type {import("react").FC<ProjectBannerProps>}
 */
const ProjectBanner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pBannerCtn">
        <Image
          src={slice.primary.image.url}
          alt={returnAlt(slice.primary.image)}
          sizes="100vw"
          fill
          style={{ objectFit: "cover" }}
          className="pBannerImg parallax"
          priority
        />
      </div>
    </section>
  );
};

export default ProjectBanner;
