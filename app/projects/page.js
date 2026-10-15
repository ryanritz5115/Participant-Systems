import React from "react";
import Parallax from "../providers/Parallax";
import ScrollProvider from "../providers/SmoothScroll";
import Animation from "../providers/Animation";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function page() {
  const client = createClient();
  const page = await client.getSingle("projects");
  return (
    <>
      <SliceZone components={components} slices={page.data.slices} />

      <Parallax />
      <ScrollProvider />
      <Animation />
    </>
  );
}
