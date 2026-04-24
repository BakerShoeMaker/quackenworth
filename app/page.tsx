import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroVideo from "./components/HeroVideo";

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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quackenworth",
  url: "https://www.quackenworth.com",
  logo: "https://www.quackenworth.com/logo.png",
  description:
    "Quackenworth builds educational apps and websites for K–12 teachers and parents.",
  sameAs: [
    "https://www.instagram.com/quackenworth/",
    "https://www.facebook.com/quackenworth",
    "https://www.youtube.com/@quackenworthy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@quackenworth.com",
    contactType: "customer support",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main>

      {/* ── Row 1: Main Hero ── */}
      <section className="relative min-h-[80vh] flex items-end px-6 py-16 overflow-hidden">
        {/* Background video — cycles through playlist */}
        <HeroVideo />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Text + CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Learning Tools Built for Every Stage
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
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
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:border-[#00aeef] hover:text-[#00aeef] transition-colors"
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
            <div className="relative w-full h-56">
              <Image
                src="/student working on computer.png"
                alt="Teacher helping a student at a computer in the classroom"
                fill
                className="object-cover object-center"
              />
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
            <div className="relative w-full h-56">
              <Image
                src="/children ipad app.png"
                alt="Two children happily using tablets together"
                fill
                className="object-cover object-center"
              />
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
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Background image */}
        <Image
          src="/childrens-apps-mulitplication.png"
          alt="Children using multiplication educational apps"
          fill
          className="object-cover object-center"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
            Discover Our Full App Library
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-xl mx-auto">
            From phonics to math, our growing collection of apps covers every
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
    </>
  );
}
