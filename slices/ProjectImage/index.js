import Image from "next/image";
import "../../app/styles/Projects/banner.css";
import { returnAlt } from "@/app/scripts/helpers";

/**
 * @typedef {import("@prismicio/client").Content.ProjectImageSlice} ProjectImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageSlice>} ProjectImageProps
 * @type {import("react").FC<ProjectImageProps>}
 */
const ProjectImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={"pImgCtn " + slice.primary.size}>
        <div className="pImgDiv">
          <Image
            src={slice.primary.image.url}
            alt={returnAlt(slice.primary.image)}
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="pFlexImg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectImage;
