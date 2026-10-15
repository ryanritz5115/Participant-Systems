import { PrismicRichText } from "@prismicio/react";
import "../../app/styles/Projects/centerText.css";

/**
 * @typedef {import("@prismicio/client").Content.ProjectTextCenterSlice} ProjectTextCenterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectTextCenterSlice>} ProjectTextCenterProps
 * @type {import("react").FC<ProjectTextCenterProps>}
 */
const ProjectTextCenter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pTextCenter h2 fadeUp">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default ProjectTextCenter;
