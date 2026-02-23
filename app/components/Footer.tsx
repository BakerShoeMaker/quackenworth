import Link from "next/link";

const navLinks = [
  { label: "Apps", href: "/apps" },
  { label: "Teachers", href: "/teachers" },
  { label: "Parents", href: "/parents" },
  { label: "About", href: "/about" },
];

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function AppStoreBadge() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 135 40"
      className="h-10 w-auto"
      aria-hidden="true"
    >
      <rect width="135" height="40" rx="6" fill="#000" />
      <rect x=".5" y=".5" width="134" height="39" rx="5.5" fill="none" stroke="#a6a6a6" />
      {/*
        Apple logo: standard 24×24 path scaled and translated to fit the badge.
        Path spans x≈4.7–23.5, y≈2–22 in 24×24 space.
        transform: scale(0.95) then translate(4,8) → badge coords x≈8–26, y≈10–29.
      */}
      <g transform="translate(4, 8) scale(0.95)">
        <path
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
          fill="#fff"
        />
      </g>
      {/* "Download on the" */}
      <text
        x="30"
        y="16"
        fill="#fff"
        fontSize="9"
        fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
        letterSpacing="0.15"
      >
        Download on the
      </text>
      {/* "App Store" */}
      <text
        x="30"
        y="30"
        fill="#fff"
        fontSize="17"
        fontWeight="600"
        fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
      >
        App Store
      </text>
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YouTubeIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-zinc-700">
        {/* Row 1 — Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium uppercase tracking-wide">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[#00aeef] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Row 2 — Social icons + App Store badge */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#00aeef] hover:text-gray-400 transition-colors min-w-11 min-h-11 flex items-center justify-center"
            >
              <Icon />
            </a>
          ))}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="hover:opacity-80 transition-opacity min-h-11 flex items-center"
          >
            <AppStoreBadge />
          </a>
        </div>

        {/* Row 3 — Copyright + legal links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-center">
          <span>Copyright {year} Quackenworth, Inc. All rights reserved.</span>
          <Link href="/terms" className="hover:text-[#00aeef] transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-[#00aeef] transition-colors">
            Privacy Statement
          </Link>
        </div>
      </div>
    </footer>
  );
}
