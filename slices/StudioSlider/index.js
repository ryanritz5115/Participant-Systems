import StudioSliderClient from "@/app/components/Home/StudioSlider";

/**
 * @typedef {import("@prismicio/client").Content.StudioSliderSlice} StudioSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StudioSliderSlice>} StudioSliderProps
 * @type {import("react").FC<StudioSliderProps>}
 */
const StudioSlider = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StudioSliderClient slice={slice} />
    </section>
  );
};

export default StudioSlider;
