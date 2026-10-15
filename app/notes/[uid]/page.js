import InternalGrid from "@/app/components/Home/Grid/InternalGrid";
import OtherNotesGrid from "@/app/components/Home/Grid/OtherNotesGrid";
import NoteInternal from "@/app/components/Notes/NoteInternal";
import NotesGrid from "@/app/components/Notes/NotesGrid";
import Animation from "@/app/providers/Animation";
import NoteProvider from "@/app/providers/NoteProvider";
import Parallax from "@/app/providers/Parallax";
import ScrollProvider from "@/app/providers/SmoothScroll";
import { defaultMetaDisc, defaultMetaTitle } from "@/app/scripts/helpers";
import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import { notFound } from "next/navigation";

export default async function page({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("note", uid);
  const allNotes = await client.getAllByType("note");
  const allCopy = [...allNotes];
  const filteredCopy = allCopy.filter(
    (p) => p.data.type == page.data.type && p.uid != uid
  );
  if (filteredCopy.length < 4) {
    filteredCopy.push(
      ...allNotes.filter((p) => p.uid != uid).slice(0, 4 - filteredCopy.length)
    );
  }
  return (
    <>
      <NoteInternal page={page} />
      <OtherNotesGrid cells={filteredCopy} title={"Related Notes"} />
      <ScrollProvider />
      <Animation />
      <Parallax />
    </>
  );
}
export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("note", uid).catch(() => notFound());

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
  const pages = await client.getAllByType("note");

  return pages.map((page) => ({ uid: page.uid }));
}
