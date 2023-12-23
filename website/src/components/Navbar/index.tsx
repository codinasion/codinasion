import Link from "@/components/Link";
import ThemeSwitch from "./theme-switch";
import { NavbarLinksData } from "@/data";

export default function NavbarComponent() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            {NavbarLinksData.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <span className="font-extrabold text-2xl text-primary-500">
            CODINASION
          </span>
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
      </div>
    </div>
  );
}
