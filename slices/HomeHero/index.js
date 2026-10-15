import Hero from "@/app/components/Home/Hero";
import HeroOriginal from "@/app/components/Home/HeroOriginal";

/**
 * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
 * @type {import("react").FC<HomeHeroProps>}
 */
const HomeHero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero />
    </section>
  );
};

export default HomeHero;
