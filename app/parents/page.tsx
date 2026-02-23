import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

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
      <Breadcrumb items={[{ label: "Parents" }]} />

      {/* ── Row 1: Hero ── */}
      <section className="bg-gray-50 px-6 py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#00aeef] mb-4">
            For Parents
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight mb-6">
            Learning at Home, Made Easy
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-8">
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
      </section>

      {/* ── Row 2: Featured App — image left, description right ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left: app screenshot */}
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            {/* Replace the placeholder div below with a real screenshot when ready:
                <Image src="/time-to-multiply-screen with grid.png"
                  alt="Time to Multiply app — multiplication grid screen"
                  width={480} height={320}
                  className="rounded-2xl shadow-lg object-cover" />
            */}
            <div className="w-full max-w-sm md:max-w-md lg:w-120 aspect-video bg-gray-200 rounded-2xl shadow-lg flex flex-col items-center justify-center text-gray-400 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 opacity-40"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium uppercase tracking-widest">Website Screenshot</span>
              <span className="text-xs opacity-60">16 × 9 · PNG or WebP</span>
            </div>
          </div>

          {/* Right: description */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              Featured App
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 leading-tight mb-4">
              Time to Multiply
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              A fun, game-like multiplication practice app perfect for kids at
              home. Time to Multiply uses timed drills, colorful visual grids,
              and celebration screens to keep elementary-age children engaged
              while building real math fact fluency.
            </p>
            <ul className="text-sm text-zinc-500 space-y-2 mb-8 max-w-lg mx-auto md:mx-0 text-left">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#00aeef] font-bold">✓</span>
                Kid-friendly design that makes practice feel like a game
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#00aeef] font-bold">✓</span>
                Timed and relaxed modes to match your child's pace
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#00aeef] font-bold">✓</span>
                Instant feedback and celebrations to build confidence
              </li>
            </ul>
            <Link
              href="/apps"
              className="inline-block border-2 border-[#00aeef] text-[#00aeef] font-semibold px-7 py-3 rounded-lg text-base hover:bg-[#00aeef] hover:text-white transition-colors"
            >
              Learn More →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
