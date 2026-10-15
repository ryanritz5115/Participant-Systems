import React from "react";
import Parallax from "./providers/Parallax";
import ScrollProvider from "./providers/SmoothScroll";
import Four from "./components/Global/Four";

export default function four() {
  return (
    <>
      <Four />
      <ScrollProvider />
      <Parallax />
    </>
  );
}
