import FAQ from "@/app/components/Services/FAQ";
import "../../app/styles/Services/faq.css";

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @type {import("react").FC<FaqProps>}
 */
const Faq = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="faq"
    >
      <FAQ title={slice.primary.title} faqs={slice.primary.faqs} />
    </section>
  );
};

export default Faq;
