import WhatWeDoClient from "@/app/components/About/WhatWeDoClient";

/**
 * @typedef {import("@prismicio/client").Content.WhatWeDoSlice} WhatWeDoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatWeDoSlice>} WhatWeDoProps
 * @type {import("react").FC<WhatWeDoProps>}
 */
const WhatWeDo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <WhatWeDoClient items={slice.primary.items} />
    </section>
  );
};

export default WhatWeDo;
