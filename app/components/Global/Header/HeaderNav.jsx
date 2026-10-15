import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="headerNav tucked">
      <ul className="headerNavList">
        <li>
          <Link prefetch={true} href="/projects" className="headerNavLink">
            Projects
          </Link>
        </li>
        <li>
          <Link prefetch={true} href="/about" className="headerNavLink">
            About
          </Link>
        </li>
        <li>
          <Link prefetch={true} href="/services" className="headerNavLink">
            Services
          </Link>
        </li>
        <li>
          <Link prefetch={true} href="/notes" className="headerNavLink">
            Notes
          </Link>
        </li>
        <li>
          <Link prefetch={true} href="" className="headerNavLink">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
