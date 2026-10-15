import ServicesClient from "@/app/components/Home/Services";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSlice} ServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSlice>} ServicesProps
 * @type {import("react").FC<ServicesProps>}
 */
const Services = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServicesClient slice={slice} />
    </section>
  );
};

export default Services;
