import Animation from "@/app/providers/Animation";
import Parallax from "@/app/providers/Parallax";
import ScrollProvider from "@/app/providers/SmoothScroll";

import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import GridWrapper from "@/app/components/Home/Grid";
import { defaultMetaDisc, defaultMetaTitle } from "@/app/scripts/helpers";
import { Suspense } from "react";

export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("project", uid).catch(() => notFound());
  const allProjects = await client.getAllByType("project");
  const allCopy = [...allProjects];
  const filteredCopy = allCopy.filter(
    (p) => p.data.type == page.data.type && p.uid != uid
  );
  if (filteredCopy.length < 4) {
    filteredCopy.push(
      ...allProjects
        .filter((p) => p.uid != uid)
        .slice(0, 4 - filteredCopy.length)
    );
  }

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      {allProjects && filteredCopy && (
        <GridWrapper cells={filteredCopy} title={"Related Projects"} related />
      )}
      <Animation />
      <ScrollProvider />
      <Parallax />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("project", uid).catch(() => notFound());

  return {
    title: page.data.meta_title || defaultMetaTitle,
    description: page.data.meta_description || defaultMetaDisc,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project");

  return pages.map((page) => ({ uid: page.uid }));
}
