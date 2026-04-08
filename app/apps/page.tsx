import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import ScreenshotCarousel from "../components/ScreenshotCarousel";
import AppStoreBadge from "../components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Apps | Quackenworth Educational Apps for K–12 Students",
  description:
    "Browse Quackenworth's educational apps for K-12 students. Filter by grade level — elementary, middle school, or high school — and find the right learning tool for every subject.",
  openGraph: {
    title: "Apps | Quackenworth Educational Apps for K–12 Students",
    description:
      "Browse Quackenworth's educational apps for K-12 students. Filter by grade level — elementary, middle school, or high school — and find the right learning tool for every subject.",
    images: ["/og-image.png"],
  },
};

// ── App data — add one object per app ────────────────────────────────────────
// screenshots: portrait mockup PNGs (640 × 1136 recommended)
// logoImage:   App Store icon (1024 × 1024 PNG)
// Set either to null to fall back to placeholder UI
const apps = [
  {
    id: 1,
    name: "Time to Multiply",
    tagline: "Build multiplication fact fluency — fast.",
    description:
      "A classroom-proven multiplication practice tool built for elementary students. Time to Multiply uses timed drills, visual grids, and instant feedback to help students build fact fluency at their own pace — perfect for both in-class practice and homework assignments.",
    gradeLevel: "Elementary",
    ageRange: "Ages 5–10",
    subject: "Math",
    isNew: true,
    appStoreUrl: "https://apps.apple.com/us/app/time-to-multiply/id6760323272",
    detailUrl: "/apps/time-to-multiply",
    logoImage: "/time-to-multiply.png" as string | null,
    screenshots: [
      { src: "/time-to-multiply-screen with grid.png",     alt: "Time to Multiply — multiplication grid gameplay screen showing 11 × 11" },
      { src: "/time-to-multiply-screen with time number.png", alt: "Time to Multiply — timed gameplay screen showing 4 × 5" },
      { src: "/time-to-multiply-celebration.png",          alt: "Time to Multiply — gameplay screen showing 9 × 6" },
      { src: "/time-to-multiply-results.png",              alt: "Time to Multiply — results screen showing score summary" },
      { src: "/time-to-multiply-setup screen.png",         alt: "Time to Multiply — settings screen for selecting game options" },
    ] as { src: string; alt: string }[] | null,
  },
];

const gradeBadgeStyle: Record<string, string> = {
  Elementary:    "bg-[#00aeef]/10 text-[#00aeef]",
  "Middle School": "bg-[#F5A623]/10 text-[#F5A623]",
  "High School": "bg-zinc-100 text-zinc-600",
};

// Shared placeholder icon — reused inside banner + logo slots
function ImagePlaceholderIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`opacity-40 ${className}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Apps() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative border-b border-gray-100 overflow-hidden">
        <Breadcrumb items={[{ label: "Apps" }]} transparent />
        {/* Background image */}
        <Image
          src="/child on iPad.png"
          alt="Child happily using an educational app on a tablet"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        {/* Overlay — ensures text contrast */}
        <div className="absolute inset-0 bg-[#1a2f4a]/65" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 px-6 py-28 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow">
              Our Apps
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto drop-shadow">
              Explore our growing library of educational apps for elementary school students.
              Each app is built make learning fun and interactive — available for
              preschool and elementary school students.
            </p>
          </div>
        </div>
      </section>

      {/* ── App listings ── */}
      {apps.map((app, index) => (
        <section
          key={app.id}
          className={`py-16 px-6 border-b border-gray-100 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-5xl mx-auto">

            {/* ── Two-column layout ── */}
            <div
              className={`flex flex-col items-center gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* Screenshot — carousel if assets exist, placeholder otherwise */}
              {app.screenshots ? (
                <ScreenshotCarousel screenshots={app.screenshots} />
              ) : (
                <div className="shrink-0 flex justify-center">
                  <div className="w-50 aspect-9/16 bg-gray-200 rounded-2xl shadow-md flex flex-col items-center justify-center text-gray-400 text-center px-4 gap-3">
                    <ImagePlaceholderIcon className="w-10 h-10" />
                    <span className="text-xs font-medium uppercase tracking-widest">
                      Screenshot
                    </span>
                    <span className="text-xs opacity-60">640 × 1136 · PNG</span>
                  </div>
                </div>
              )}

              {/* App details */}
              <div className="flex-1 text-center md:text-left">

                {/* Grade level + metadata badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      gradeBadgeStyle[app.gradeLevel] ?? "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {app.gradeLevel}
                  </span>
                  <span className="text-xs text-zinc-400">{app.ageRange}</span>
                  <span className="text-xs text-zinc-400">· {app.subject}</span>
                </div>

                {/* App icon + name */}
                <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                  {app.logoImage ? (
                    <Image
                      src={app.logoImage}
                      alt={`${app.name} app icon`}
                      width={64}
                      height={64}
                      className="rounded-2xl shadow-sm shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gray-200 shrink-0 flex items-center justify-center text-gray-400 shadow-sm">
                      <ImagePlaceholderIcon className="w-7 h-7" />
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    {"detailUrl" in app && app.detailUrl ? (
                      <Link
                        href={app.detailUrl as string}
                        className="text-3xl md:text-4xl font-bold text-zinc-700 hover:text-[#00aeef] transition-colors"
                      >
                        {app.name}
                      </Link>
                    ) : (
                      <h2 className="text-3xl md:text-4xl font-bold text-zinc-700">
                        {app.name}
                      </h2>
                    )}
                    {app.isNew && (
                      <span className="inline-block bg-[#F5A623] text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                        Now Available
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-lg text-[#00aeef] font-medium mb-5">
                  {app.tagline}
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                  {app.description}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  {"detailUrl" in app && app.detailUrl && (
                    <Link
                      href={app.detailUrl as string}
                      className="text-[#00aeef] font-semibold hover:underline"
                    >
                      Learn more →
                    </Link>
                  )}
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${app.name} on the App Store`}
                      className="inline-flex hover:opacity-80 transition-opacity"
                    >
                      <AppStoreBadge />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
