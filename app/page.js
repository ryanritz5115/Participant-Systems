import Animation from "./providers/Animation";
import Parallax from "./providers/Parallax";
import ScrollProvider from "./providers/SmoothScroll";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");
  return (
    <>
      <SliceZone components={components} slices={page.data.slices} />

      <Animation />
      <Parallax />
      <ScrollProvider />
    </>
  );
}
