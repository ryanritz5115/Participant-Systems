import { returnAlt } from "@/app/scripts/helpers";
import { PrismicRichText } from "@prismicio/react";
import "../../app/styles/Projects/test.css";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.ProjectTestSlice} ProjectTestSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectTestSlice>} ProjectTestProps
 * @type {import("react").FC<ProjectTestProps>}
 */
const ProjectTest = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pTestCtn">
        <div className="pTestDiv">
          <div className="pTest h2">
            <PrismicRichText field={slice.primary.test} />
          </div>
          <div className="pTestImageCtn fadeUp">
            <Image
              src={slice.primary.image.url}
              alt={returnAlt(slice.primary.image)}
              sizes="5vw"
              fill
              className="pTestImage"
            />
          </div>
          <p className="testAuthor ">{slice.primary.name}</p>
          <p className="testRole ">{slice.primary.role}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectTest;
