import GridWrapper from "@/app/components/Home/Grid";
import ProjectsAutoGrid from "@/app/components/Projects/ProjectsAutoGrid";
import ProjectsGrid from "@/app/components/Projects/ProjectsGrid";

/**
 * @typedef {import("@prismicio/client").Content.GridSlice} GridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridSlice>} GridProps
 * @type {import("react").FC<GridProps>}
 */
const Grid = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation == "default" && (
        <GridWrapper title={slice.primary.title} cells={slice.primary.items} />
      )}
      {slice.variation == "project" && (
        <ProjectsAutoGrid
          title={slice.primary.title}
          disc={slice.primary.disc}
        />
      )}
      {slice.variation == "large" && (
        <ProjectsGrid
          title={slice.primary.title}
          disc={slice.primary.disc}
          cells={slice.primary.items}
        />
      )}
    </section>
  );
};

export default Grid;
