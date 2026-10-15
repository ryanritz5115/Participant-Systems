import { PrismicRichText } from "@prismicio/react";
import "../../app/styles/Projects/intro.css";

/**
 * @typedef {import("@prismicio/client").Content.ProjectIntroSlice} ProjectIntroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectIntroSlice>} ProjectIntroProps
 * @type {import("react").FC<ProjectIntroProps>}
 */
const ProjectIntro = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pIntroCtn">
        <h1 className="h1 pIntroTitle fadeUp">{slice.primary.title}</h1>
        <div className="pIntroFlex blitz">
          <div className="pIntroFlexCtn">
            <p className="ps introCellTitle">Client</p>
            <p className="ps">{slice.primary.client}</p>
          </div>
          <div className="pIntroFlexCtn">
            <p className="ps introCellTitle">Year</p>
            <p className="ps">{slice.primary.year}</p>
          </div>
          <div className="pIntroFlexCtn">
            <p className="ps introCellTitle">Services</p>
            <div className="ps">
              <PrismicRichText field={slice.primary.services} />
            </div>
          </div>
          <div className="pIntroFlexCtn">
            <p className="ps introCellTitle">Overview</p>
            <div className="ps">
              <PrismicRichText field={slice.primary.overview} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
