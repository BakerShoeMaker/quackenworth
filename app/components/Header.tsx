import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Blue accent bar */}
      <div className="h-5 w-full bg-[#00aeef]" />

      {/* Main header row — relative so the mobile dropdown can use absolute positioning */}
      <div className="relative bg-[#00aeef] px-8 py-4 flex items-center justify-between">
        {/* Logo — left */}
        <Link href="/" aria-label="Quackenworth — home">
          <Image
            src="/quackenworth-logo.png"
            alt="Quackenworth"
            width={220}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <NavMenu />
      </div>
    </header>
  );
}
