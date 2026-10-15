import ClientTestimonials from "@/app/components/Home/ClientTestimonials";
import ServicesTestimonials from "@/app/components/Services/ServiceTestimonials";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @type {import("react").FC<TestimonialsProps>}
 */
const Testimonials = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation == "default" ? (
        <ClientTestimonials slice={slice} />
      ) : (
        <ServicesTestimonials slice={slice} />
      )}
    </section>
  );
};

export default Testimonials;
