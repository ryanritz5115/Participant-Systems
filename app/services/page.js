import ScrollProvider from "../providers/SmoothScroll";
import Animation from "../providers/Animation";
import Parallax from "../providers/Parallax";
import "../styles/Services/service.css";

import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import ServicesMenu from "../components/Services/ServicesMenu";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { defaultMetaDisc, defaultMetaTitle } from "../scripts/helpers";

export default async function page() {
  const client = createClient();

  const page = await client.getSingle("services");
  return (
    <>
      <ServicesMenu />
      <SliceZone components={components} slices={page.data.slices} />
      <ScrollProvider />
      <Animation />
      <Parallax />
    </>
  );
}
export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("services").catch(() => notFound());

  return {
    title: page.data.meta_title || defaultMetaTitle,
    description: page.data.meta_description || defaultMetaDisc,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
