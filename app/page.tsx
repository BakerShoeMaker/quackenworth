import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quackenworth | Educational Apps for K–12 Teachers & Parents",
  description:
    "Quackenworth creates engaging educational apps and websites for K–12 students. Empowering teachers and parents with tools for elementary, middle, and high school learners.",
  openGraph: {
    title: "Quackenworth | Educational Apps for K–12 Teachers & Parents",
    description:
      "Quackenworth creates engaging educational apps and websites for K–12 students. Empowering teachers and parents with tools for elementary, middle, and high school learners.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main>

      {/* ── Row 1: Main Hero ── */}
      <section className="min-h-[80vh] flex items-center bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left: iPhone mockup — swap placeholder for real media when ready */}
          <div className="shrink-0 flex justify-center w-full lg:w-auto">
            <div className="relative w-65 h-135 bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />

              {/* ── PLACEHOLDER: replace this div with <video> or <Image> ── */}
              <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-400 text-center px-6 gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 opacity-40" aria-hidden="true">
                  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                </svg>
                <span className="text-xs font-medium uppercase tracking-widest">Video / App Screenshot</span>
                <span className="text-xs opacity-60">1080 × 1920 · MP4 or PNG</span>
              </div>

              {/*
                When media is ready, remove the placeholder div above and uncomment:

                Video:
                <video autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full object-cover">
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                Static image:
                <Image src="/hero-screenshot.png" alt="App screenshot"
                  fill className="object-cover" />
              */}
            </div>
          </div>

          {/* Right: Text + CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-700 leading-tight mb-6">
              Learning Tools Built for Every Stage
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Quackenworth creates educational apps and websites designed for
              elementary, middle school, and high school students — trusted by
              teachers and parents nationwide.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/apps"
                className="bg-[#00aeef] text-white font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
              >
                Browse Our Apps
              </Link>
              <Link
                href="/about"
                className="border-2 border-zinc-300 text-zinc-700 font-semibold px-8 py-4 rounded-lg text-lg hover:border-[#00aeef] hover:text-[#00aeef] transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Row 2: Two Feature Sections ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card — Teachers */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            {/* Image placeholder */}
            <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium tracking-wide uppercase">
              Image Placeholder
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-zinc-700 mb-3">
                Built for the Classroom
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 flex-1">
                Give your students the edge they need. Quackenworth's classroom
                tools are designed around real curriculum goals for elementary,
                middle, and high school educators.
              </p>
              <Link
                href="/teachers"
                className="text-[#00aeef] font-semibold hover:underline"
              >
                Explore teacher resources →
              </Link>
            </div>
          </div>

          {/* Card — Parents */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            {/* Image placeholder */}
            <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium tracking-wide uppercase">
              Image Placeholder
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-zinc-700 mb-3">
                Learning at Home, Made Easy
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 flex-1">
                Support your child's education beyond school hours. Our apps
                make homework help, skill-building, and educational play
                engaging for every age group.
              </p>
              <Link
                href="/parents"
                className="text-[#00aeef] font-semibold hover:underline"
              >
                Explore parent resources →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Row 3: Secondary Hero ── */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
            Discover Our Full App Library
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-xl mx-auto">
            From phonics to algebra, our growing collection of apps covers every
            subject and grade level — filterable by age group so you always find
            the right fit.
          </p>
          <Link
            href="/apps"
            className="inline-block bg-[#F5A623] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity"
          >
            See All Apps
          </Link>
        </div>
      </section>

    </main>
  );
}
