import ServiceTextClient from "@/app/components/Services/ServiceText";

/**
 * @typedef {import("@prismicio/client").Content.ServiceTextSlice} ServiceTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceTextSlice>} ServiceTextProps
 * @type {import("react").FC<ServiceTextProps>}
 */

function slugify(str) {
  return str
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const ServiceText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slugify(slice.primary.title + " " + slice.primary.purple)}
    >
      <ServiceTextClient
        title={slice.primary.title}
        purple={slice.primary.purple}
        disc={slice.primary.disc}
        links={slice.primary.link}
      />
    </section>
  );
};

export default ServiceText;
