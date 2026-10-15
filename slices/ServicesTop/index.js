import ServicesTopClient from "@/app/components/Services/ServicesTop";

/**
 * @typedef {import("@prismicio/client").Content.ServicesTopSlice} ServicesTopSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesTopSlice>} ServicesTopProps
 * @type {import("react").FC<ServicesTopProps>}
 */
const ServicesTop = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServicesTopClient
        title={slice.primary.title}
        purple={slice.primary.purple}
        disc={slice.primary.disc}
        links={slice.primary.link}
      />
    </section>
  );
};

export default ServicesTop;
