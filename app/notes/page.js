import React from "react";
import Animation from "../providers/Animation";
import ScrollProvider from "../providers/SmoothScroll";
import Parallax from "../providers/Parallax";
import GridWrapper from "../components/Home/Grid";
import { createClient } from "@/prismicio";
import NotesGrid from "../components/Notes/NotesGrid";

export default async function page() {
  const client = createClient();
  const notes = await client.getAllByType("note");
  return (
    <>
      <NotesGrid cells={notes} />
      <Animation />
      <ScrollProvider />
      <Parallax />
    </>
  );
}
