import { PrismicRichText } from "@prismicio/react";
import "../../styles/Home/grid.css";
import { createClient } from "@/prismicio";
import ProjectsAutoGridInternal from "../Home/Grid/ProjectsAutoGridInternal";

export default async function ProjectsAutoGrid({ title, disc }) {
  const client = createClient();
  const projects = await client.getAllByType("project");
  return (
    <div className="gridCtn">
      <div className="gridDiv">
        <div className="internalGridTop proj blitz">
          <h1 className="h3 internalGridTitle">{title}</h1>
          <p className="pl internalGridDisc">{disc}</p>
        </div>
        <ProjectsAutoGridInternal cells={projects} />
      </div>
    </div>
  );
}
