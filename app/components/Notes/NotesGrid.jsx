import InternalGrid from "../Home/Grid/InternalGrid";
import "../../styles/Home/grid.css";
import TripleGrid from "../Home/Grid/TripleGrid";

export default function NotesGrid({ cells, title, disc }) {
  return (
    <div className="gridCtn">
      <div className="gridDiv">
        <div className="internalGridTop">
          <h1 className="h3 internalGridTitle">Notes</h1>
          <p className="pl internalGridDisc">
            Enter a new era of creativity. Where generative tools, shifting
            ethics, and evolving ideas of identity are reshaping how we design,
            connect, and communicate.
            <br />
            <br />
            We can’t predict the future, but we can participate in shaping it.
          </p>
        </div>
        <TripleGrid cells={cells} title={"notes"} />
      </div>
    </div>
  );
}
