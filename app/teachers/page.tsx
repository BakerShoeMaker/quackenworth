import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import AppStoreBadge from "../components/AppStoreBadge";
import ScreenshotCarousel from "../components/ScreenshotCarousel";

export const metadata: Metadata = {
  title: "For Teachers | Quackenworth Classroom Tools & Resources",
  description:
    "Quackenworth offers classroom apps and K-12 teaching tools for educators. Explore lesson planning resources and grade-level apps for elementary, middle, and high school.",
  openGraph: {
    title: "For Teachers | Quackenworth Classroom Tools & Resources",
    description:
      "Quackenworth offers classroom apps and K-12 teaching tools for educators. Explore lesson planning resources and grade-level apps for elementary, middle, and high school.",
    images: ["/og-image.png"],
  },
};

export default function Teachers() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Teachers" }]} />

      {/* ── Row 1: Hero ── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-0">

          {/* Left: text content */}
          <div className="flex-1 px-6 py-16 lg:py-24 text-center md:text-left">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#00aeef] mb-4">
              For Educators
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight mb-6">
              Classroom Tools for Teachers
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
              Quackenworth builds classroom-ready apps and websites designed
              around real curriculum goals — for elementary, middle school, and
              high school educators.
            </p>
            <Link
              href="/apps"
              className="inline-block bg-[#00aeef] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              Browse All Apps
            </Link>
          </div>

          {/* Right: hero image */}
          <div className="w-full md:w-1/2 lg:w-130 shrink-0 self-stretch min-h-64">
            <div className="relative w-full h-full min-h-64 md:min-h-full">
              <Image
                src="/teacher with students.png"
                alt="A smiling teacher standing at a chalkboard as students raise their hands in a classroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
                priority
              />
            </div>
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
                    New
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#00aeef] font-medium mb-5">
                Build multiplication fact fluency — fast.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                A classroom-proven multiplication practice tool built for
                elementary students. Time to Multiply uses timed drills, visual
                grids, and instant feedback to help students build fact fluency
                at their own pace — perfect for both in-class practice and
                homework assignments.
              </p>

              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Time to Multiply on the App Store"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <AppStoreBadge />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Row 3: Three-column feature cards ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
              Designed for Every Grade Level
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-xl mx-auto">
              Whether you teach kindergarteners or high schoolers, Quackenworth
              has tools built for your classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 — Elementary */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              {/* Image — replace placeholder with real asset when ready */}
              <div className="w-full h-48 bg-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 opacity-40"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-medium uppercase tracking-widest">Image Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00aeef] mb-2">
                  Elementary · Ages 5–10
                </span>
                <h3 className="text-xl font-bold text-zinc-700 mb-3">
                  Building Strong Foundations
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  Engaging, game-like apps that teach core reading, writing,
                  and math skills. Designed to capture young learners'
                  attention while meeting curriculum standards.
                </p>
              </div>
            </div>

            {/* Card 2 — Middle School */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full h-48 bg-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 opacity-40"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-medium uppercase tracking-widest">Image Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-2">
                  Middle School · Ages 11–13
                </span>
                <h3 className="text-xl font-bold text-zinc-700 mb-3">
                  Deepening Critical Thinking
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  Tools that challenge growing minds with problem-solving,
                  science exploration, and language arts — bridging the gap
                  between elementary and high school rigor.
                </p>
              </div>
            </div>

            {/* Card 3 — High School */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full h-48 bg-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 opacity-40"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-medium uppercase tracking-widest">Image Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                  High School · Ages 14–18
                </span>
                <h3 className="text-xl font-bold text-zinc-700 mb-3">
                  Preparing for What's Next
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  Advanced tools aligned with college-prep and career-readiness
                  standards. Help students master STEM, writing, and test
                  preparation with confidence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
