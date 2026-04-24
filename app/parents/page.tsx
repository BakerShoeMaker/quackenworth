import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import ScreenshotCarousel from "../components/ScreenshotCarousel";
import AppStoreBadge from "../components/AppStoreBadge";

export const metadata: Metadata = {
  title: "For Parents | Quackenworth Educational Apps for Kids",
  description:
    "Discover educational apps for kids from Quackenworth. Learning tools for home use, homework help, and educational games for elementary, middle, and high school students.",
  openGraph: {
    title: "For Parents | Quackenworth Educational Apps for Kids",
    description:
      "Discover educational apps for kids from Quackenworth. Learning tools for home use, homework help, and educational games for elementary, middle, and high school students.",
    images: ["/og-image.png"],
  },
};

export default function Parents() {
  return (
    <main>
      {/* ── Row 1: Hero ── */}
      <section className="relative min-h-125 overflow-hidden border-b border-gray-100">
        <Breadcrumb items={[{ label: "Parents" }]} transparent />
        {/* Background image */}
        <Image
          src="/parents with child.png"
          alt="Parent and child using an educational app together at home"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 px-6 pt-72 pb-24 md:pt-80 md:pb-32">
          <div className="max-w-5xl mx-auto text-center">
        
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Helping Parents Invest in Education!
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-8">
              Quackenworth builds educational apps and websites that make learning
              fun and effective at home — for kids ages 5 through 18, across every
              subject and grade level.
            </p>
            <Link
              href="/apps"
              className="inline-block bg-[#00aeef] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              Browse All Apps
            </Link>
          </div>
        </div>
      </section>

      {/* ── Row 2: Featured App — Time to Multiply ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <ScreenshotCarousel
              screenshots={[
                {
                  src: "/time-to-multiply-screen with grid.png",
                  alt: "Time to Multiply — multiplication grid gameplay screen showing 11 × 11",
                },
                {
                  src: "/time-to-multiply-screen with time number.png",
                  alt: "Time to Multiply — timed gameplay screen showing 4 × 5",
                },
                {
                  src: "/time-to-multiply-celebration.png",
                  alt: "Time to Multiply — gameplay screen showing 9 × 6",
                },
                {
                  src: "/time-to-multiply-results.png",
                  alt: "Time to Multiply — results screen showing score summary",
                },
                {
                  src: "/time-to-multiply-setup screen.png",
                  alt: "Time to Multiply — settings screen for selecting game options",
                },
              ]}
            />

            {/* App details */}
            <div className="flex-1 text-center md:text-left">

              {/* Grade level + metadata badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]">
                  Elementary
                </span>
                <span className="text-xs text-zinc-400">Ages 5–10</span>
                <span className="text-xs text-zinc-400">· Math</span>
              </div>

              {/* App icon + name */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                <Image
                  src="/time-to-multiply.png"
                  alt="Time to Multiply app icon"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-700">
                    Time to Multiply
                  </h2>
                  <span className="inline-block bg-[#F5A623] text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    Now Available
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#00aeef] font-medium mb-5">
                Build multiplication fact fluency — fast.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                A fun, game-like multiplication practice app perfect for kids at
                home. Time to Multiply uses timed drills, colorful visual grids,
                and celebration screens to keep elementary-age children engaged
                while building real math fact fluency.
              </p>

              <a
                href="https://apps.apple.com/us/app/time-to-multiply/id6760323272?ppid=d33a67f0-80b3-4fa9-88e9-470a07b34d38"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Time to Multiply on the App Store"
                className="inline-flex hover:opacity-80 transition-opacity"
              >
                <AppStoreBadge />
              </a>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
