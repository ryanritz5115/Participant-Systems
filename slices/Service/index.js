import SingleService from "@/app/components/Services/SingleService";

/**
 * @typedef {import("@prismicio/client").Content.ServiceSlice} ServiceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceSlice>} ServiceProps
 * @type {import("react").FC<ServiceProps>}
 */
const Service = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SingleService
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
        pricing={slice.primary.pricing}
        disc={slice.primary.disc}
        items={slice.primary.items}
        links={slice.primary.link}
        video={slice.primary.video}
        num={slice.primary.micronumber}
        subnum={slice.primary.microtitle}
      />
    </section>
  );
};

export default Service;
