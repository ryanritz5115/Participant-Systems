import AboutTopClient from "@/app/components/About/AboutTopClient";

/**
 * @typedef {import("@prismicio/client").Content.AboutTopSlice} AboutTopSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutTopSlice>} AboutTopProps
 * @type {import("react").FC<AboutTopProps>}
 */
const AboutTop = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutTopClient
        title={slice.primary.title}
        disc={slice.primary.disc}
        founder={slice.primary.founderdisc}
        team={slice.primary.teamdisc}
      />
    </section>
  );
};

export default AboutTop;
