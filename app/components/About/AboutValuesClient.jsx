import { PrismicRichText } from "@prismicio/react";
import "../../styles/About/avalues.css";

export default function AboutValuesClient({ title, values }) {
  return (
    <div className="aValuesCtn">
      <div className="aValuesDiv">
        <h2 className="aValuesTitle">{title}</h2>
        <div className="aValues">
          {values.map((v, vv) => (
            <div
              className="singleValue"
              key={"av" + vv}
              style={{
                top: `calc(var(--hh) + 20px + var(--ihh) * ${vv})`,
                paddingBottom: `calc(var(--hh) + 20px + var(--ihh) * ${values.length - vv - 1})`,
                marginTop: `calc(var(--ihh) * ${vv} * -1)`,
              }}
            >
              <h3>
                {v.title} <span className="valuePurple">{v.gradient}</span>
              </h3>
              <div className="singleValueDisc">
                <PrismicRichText field={v.disc} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
