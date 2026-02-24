import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Quackenworth | Educational Technology Company",
  description:
    "Learn about Quackenworth, an educational technology company building K-12 learning solutions for teachers and parents across elementary, middle, and high school.",
  openGraph: {
    title: "About Quackenworth | Educational Technology Company",
    description:
      "Learn about Quackenworth, an educational technology company building K-12 learning solutions for teachers and parents across elementary, middle, and high school.",
    images: ["/og-image.png"],
  },
};

export default function About() {
  return (
    <main>
      <Breadcrumb items={[{ label: "About" }]} />

      {/* ── Row 1: Hero — image left, description right ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left: company mascots */}
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <img
              src="/quackenworth-cabbage-heads.png"
              alt="Quackenworth cabbage head mascots"
              className="w-full max-w-sm md:w-120 h-auto"
            />
          </div>

          {/* Right: description */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#00aeef] mb-4">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight mb-6">
              Helping You Invest in Your Child's Education
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-5 max-w-xl mx-auto md:mx-0">
              Quackenworth specializes in mobile games and educational web products. Our mission is to develop fun products that teachers and parents can use to educate and enrich the lives of children and young adults. We are highly-skilled developers with years of experience in primary and secondary education.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto md:mx-0">
              Quackenworth apps are designed to educate and entertain both children and adults alike and are used in classrooms and homes around the world. We highly value your child's education and are honored to be a part of their educational journey!
            </p>
          </div>

        </div>
      </section>

      {/* ── Row 2: History ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-6">
            History of Quackenworth
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Quackenworth was founded by David Hollaway in October of 2004. Throughout the years the company has published hundreds of books, workbooks as well as various websites and digital products. In August of 2013 Quackenworth was selected as one of the winners of the Bill &amp; Melinda Gates Foundation Literacy Courseware Challenge. The competition included the nation's most innovative educational and technology companies, non-profits, and entrepreneurs. Quackenworth was one of a select group of companies chosen for the Minimum Viable Product (MVP) category. Today the company is focused on creating fun educational apps for mobile devices. The company currently has apps in the Apple App Store and educational websites.
          </p>
        </div>
      </section>

      {/* ── Row 3: Who We Serve ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
              Who We Serve
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-xl mx-auto">
              From kindergarten to senior year, our tools are built for every
              stage of the K–12 journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="py-8 px-6 rounded-2xl border border-gray-100 bg-gray-50">
              <p className="text-4xl font-bold text-[#00aeef] mb-2">K–5</p>
              <p className="font-semibold text-zinc-700 mb-1">Elementary School</p>
              <p className="text-sm text-zinc-500">Ages 5–10 · Reading, math foundations, and early STEM</p>
            </div>
            <div className="py-8 px-6 rounded-2xl border border-gray-100 bg-gray-50">
              <p className="text-4xl font-bold text-[#F5A623] mb-2">6–8</p>
              <p className="font-semibold text-zinc-700 mb-1">Middle School</p>
              <p className="text-sm text-zinc-500">Ages 11–13 · Critical thinking, science, and language arts</p>
            </div>
            <div className="py-8 px-6 rounded-2xl border border-gray-100 bg-gray-50">
              <p className="text-4xl font-bold text-zinc-400 mb-2">9–12</p>
              <p className="font-semibold text-zinc-700 mb-1">High School</p>
              <p className="text-sm text-zinc-500">Ages 14–18 · STEM, test prep, and college readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Row 4: CTAs ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
            See What We've Built
          </h2>
          <p className="text-zinc-500 leading-relaxed mb-8 max-w-xl mx-auto">
            Explore our full app library or find resources tailored specifically
            for teachers or parents.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/apps"
              className="bg-[#00aeef] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              Browse Our Apps
            </Link>
            <Link
              href="/teachers"
              className="border-2 border-zinc-300 text-zinc-700 font-semibold px-8 py-3 rounded-lg text-base hover:border-[#00aeef] hover:text-[#00aeef] transition-colors"
            >
              For Teachers
            </Link>
            <Link
              href="/parents"
              className="border-2 border-zinc-300 text-zinc-700 font-semibold px-8 py-3 rounded-lg text-base hover:border-[#00aeef] hover:text-[#00aeef] transition-colors"
            >
              For Parents
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
