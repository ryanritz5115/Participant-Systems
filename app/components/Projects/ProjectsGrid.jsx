import { PrismicRichText } from "@prismicio/react";
import "../../styles/Home/grid.css";
import LargeGrid from "../Home/Grid/LargeGrid";

export default function ProjectsGrid({ title, disc, cells }) {
  return (
    <div className="gridCtn">
      <div className="gridDiv">
        <div className="internalGridTop blitz">
          <h1 className="h3 internalGridTitle">{title}</h1>
          <div className="pxl internalGridDisc">
            <PrismicRichText field={disc} />
          </div>
        </div>
        <LargeGrid cells={cells} />
      </div>
    </div>
  );
}
