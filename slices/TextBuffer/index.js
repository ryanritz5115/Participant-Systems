import TextBufferClient from "@/app/components/Home/TextBuffer";

/**
 * @typedef {import("@prismicio/client").Content.TextBufferSlice} TextBufferSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBufferSlice>} TextBufferProps
 * @type {import("react").FC<TextBufferProps>}
 */
const TextBuffer = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TextBufferClient slice={slice} />
    </section>
  );
};

export default TextBuffer;
