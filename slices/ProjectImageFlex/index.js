import { returnAlt } from "@/app/scripts/helpers";
import "../../app/styles/Projects/split.css";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.ProjectImageFlexSlice} ProjectImageFlexSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageFlexSlice>} ProjectImageFlexProps
 * @type {import("react").FC<ProjectImageFlexProps>}
 */
const ProjectImageFlex = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={"pFlexCtn " + slice.primary.size}
        style={{
          "--split": slice.primary.splitpercentage
            ? slice.primary.splitpercentage + "%"
            : "50%",
        }}
      >
        <div className="pFlexDiv">
          <div className="left">
            <Image
              src={slice.primary.imageone.url}
              alt={returnAlt(slice.primary.imageone)}
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
              className="pFlexImg"
            />
          </div>
          <div className="right">
            <Image
              src={slice.primary.imagetwo.url}
              alt={returnAlt(slice.primary.imagetwo)}
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
              className="pFlexImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectImageFlex;
