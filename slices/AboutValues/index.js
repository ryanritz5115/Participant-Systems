import AboutValuesClient from "@/app/components/About/AboutValuesClient";

/**
 * @typedef {import("@prismicio/client").Content.AboutValuesSlice} AboutValuesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutValuesSlice>} AboutValuesProps
 * @type {import("react").FC<AboutValuesProps>}
 */
const AboutValues = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutValuesClient
        title={slice.primary.title}
        values={slice.primary.values}
      />
    </section>
  );
};

export default AboutValues;
