import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import AppStoreBadge from "../../components/AppStoreBadge";
import ScreenshotCarousel from "../../components/ScreenshotCarousel";

export const metadata: Metadata = {
  title: "Time to Multiply | Multiplication App for Kids — Quackenworth",
  description:
    "Time to Multiply helps elementary students build multiplication fact fluency with timed drills, visual grids, and instant feedback. Available now on the App Store.",
  openGraph: {
    title: "Time to Multiply | Multiplication App for Kids — Quackenworth",
    description:
      "Time to Multiply helps elementary students build multiplication fact fluency with timed drills, visual grids, and instant feedback. Available now on the App Store.",
    images: ["/time-to-multiply.png"],
  },
};

const screenshots = [
  { src: "/time-to-multiply-screen with grid.png",       alt: "Time to Multiply — multiplication grid gameplay screen showing 11 × 11" },
  { src: "/time-to-multiply-screen with time number.png", alt: "Time to Multiply — timed gameplay screen showing 4 × 5" },
  { src: "/time-to-multiply-celebration.png",             alt: "Time to Multiply — celebration screen after completing a round" },
  { src: "/time-to-multiply-results.png",                 alt: "Time to Multiply — results screen showing score summary" },
  { src: "/time-to-multiply-setup screen.png",            alt: "Time to Multiply — settings screen for selecting game options" },
];

const promos = [
  {
    image: "/time-to-multiply-1.jpg",
    alt: "Student practicing multiplication with Time to Multiply",
    headline: "Practice Makes Perfect",
    body: "Daily drills that adapt to each student's pace — short, focused sessions that build confidence and speed over time.",
  },
  {
    image: "/time-to-multiply-2.jpg",
    alt: "Multiplication grid view in Time to Multiply",
    headline: "Visual Grid Learning",
    body: "Color-coded multiplication grids give students a visual anchor for understanding how numbers relate — not just memorization.",
  },
  {
    image: "/time-to-multiply-3.jpg",
    alt: "Timed challenge mode in Time to Multiply",
    headline: "Timed Challenge Mode",
    body: "Ready to race the clock? Timed rounds push students to sharpen recall and build the automatic fluency they need in the classroom.",
  },
  {
    image: "/time-to-multiply-4.jpg",
    alt: "Instant feedback shown after answering in Time to Multiply",
    headline: "Instant Feedback",
    body: "Right or wrong, students know immediately — and see the correct answer displayed so every mistake becomes a learning moment.",
  },
  {
    image: "/time-to-multiply-5.jpg",
    alt: "Progress and results tracking in Time to Multiply",
    headline: "Track Your Progress",
    body: "Results screens show scores and streaks after every session, giving students — and parents — a clear view of improvement over time.",
  },
];

export default function TimeToMultiply() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Apps", href: "/apps" },
          { label: "Time to Multiply" },
        ]}
      />

      {/* ── Hero ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]">
                Elementary
              </span>
              <span className="text-xs text-zinc-400">Ages 5–10</span>
              <span className="text-xs text-zinc-400">· Math</span>
              <span className="inline-block bg-[#F5A623] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                New
              </span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <Image
                src="/time-to-multiply.png"
                alt="Time to Multiply app icon"
                width={72}
                height={72}
                className="rounded-2xl shadow-sm shrink-0"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight">
                Time to Multiply
              </h1>
            </div>

            <p className="text-xl text-[#00aeef] font-medium mb-5">
              Build multiplication fact fluency — fast.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              A classroom-proven multiplication practice tool built for elementary
              students. Time to Multiply uses timed drills, visual grids, and instant
              feedback to help students build fact fluency at their own pace — perfect
              for both in-class practice and homework assignments.
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

          {/* Hero carousel */}
          <div className="shrink-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm">
            <ScreenshotCarousel screenshots={screenshots} />
          </div>

        </div>
      </section>

      {/* ── Promo Video ── */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
            See It in Action
          </h2>
          <p className="text-zinc-500 text-center mb-8 max-w-xl mx-auto">
            Watch how Time to Multiply makes multiplication practice engaging and
            effective for elementary students.
          </p>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-sm">
              <video
                src="/promo-time-to-multiply-video.mp4"
                controls
                playsInline
                className="w-full block"
                aria-label="Time to Multiply promotional video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Feature Promos ── */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
            Everything a Student Needs
          </h2>
          <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
            Five key features that make Time to Multiply the go-to multiplication
            app for elementary classrooms and homes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promos.map((promo, i) => (
              <div
                key={i}
                className="bg-white flex flex-col"
              >
                <div className="relative w-full aspect-9/16">
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-zinc-700 mb-2">
                    {promo.headline}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                    {promo.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the App ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-700 mb-6">
            Why Time to Multiply?
          </h2>
          <div className="space-y-5 text-zinc-500 leading-relaxed text-left md:text-center">
            <p>
              Multiplication fluency is one of the most critical skills a student builds
              in elementary school — and one of the hardest to practice in a way that
              actually sticks. Flashcards get lost. Worksheets feel like punishment.
              Time to Multiply changes that.
            </p>
            <p>
              Designed hand-in-hand with classroom teachers, the app turns fact practice
              into a game students actually want to play. Visual grids help learners see
              the patterns behind the numbers, timed modes build automatic recall, and
              clear results screens keep students motivated to beat their own best.
            </p>
            <p>
              Whether it&apos;s used as a five-minute warm-up before class, a homework
              assignment, or independent practice at home, Time to Multiply fits
              seamlessly into any learning routine — and the results show up in the
              classroom.
            </p>
          </div>
        </div>
      </section>

{/* ── Bottom CTA ── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <Image
          src="/childrens-apps-mulitplication.png"
          alt="Children using multiplication educational apps"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a2f4a]/75" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Fact Fluency?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Download Time to Multiply today and give your students the practice
            tool they need to master multiplication for good.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Time to Multiply on the App Store"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <AppStoreBadge />
            </a>
            <Link
              href="/apps"
              className="border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:border-[#00aeef] hover:text-[#00aeef] transition-colors"
            >
              ← Back to All Apps
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
