import ScrollProvider from "../providers/SmoothScroll";
import Parallax from "../providers/Parallax";
import Animation from "../providers/Animation";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default async function page() {
  const client = createClient();
  const page = await client.getSingle("about");
  return (
    <>
      <SliceZone components={components} slices={page.data.slices} />
      <ScrollProvider />
      <Parallax />
      <Animation />
    </>
  );
}
