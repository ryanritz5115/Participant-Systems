import "../../styles/Home/grid.css";
import InternalGrid from "./Grid/InternalGrid";
import ProjectsGrid from "./Grid/ProjectsGrid";

export default function GridWrapper({ cells = [], title, related = false }) {
  return (
    <div className="gridCtn">
      <div className="gridDiv">
        {title && (
          <div className="gridTop">
            <h2 className="h3 gridTitle">{title}</h2>
          </div>
        )}
        {related ? (
          <ProjectsGrid cells={cells} title={title} />
        ) : (
          <InternalGrid cells={cells} title={title} />
        )}
      </div>
    </div>
  );
}
