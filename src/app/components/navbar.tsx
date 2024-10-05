import Link from "next/link";

export interface NavLink {
  label: string;
  anchor: string;
}

export default function Navbar({navLinks} : { navLinks: NavLink[] }) {

  return (
    <div className="flex flex-row w-full bg-red-700 opacity-80 px-8 py-4 justify-between sticky top-0 left-0">
      {navLinks.map(navLink => 
        <Link href={`#${navLink.anchor}`} key={navLink.label}>{navLink.label}</Link>
      )}
    </div>
  );
}

