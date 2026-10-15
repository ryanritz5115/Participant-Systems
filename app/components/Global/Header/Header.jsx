import Link from "next/link";
import React from "react";
import HeaderNav from "./HeaderNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="tucked" role="banner">
      <div className="headerFlex">
        <Link prefetch={true} href="/" className="headerLogo">
          <span>Participant</span>
          <br />
          <span>.Systems</span>
        </Link>
        <HeaderNav />
        <MobileNav />
      </div>
    </header>
  );
}
