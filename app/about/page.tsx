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
            Quackenworth was founded by David Hollaway in October of 2004. Throughout the years the company has published hundreds of books, workbooks as well as various websites and digital products. In August of 2013 Quackenworth was selected as one of the winners of the Bill &amp; Melinda Gates Foundation Literacy Courseware Challenge. The competition included the nation's most innovative educational and technology companies, non-profits, and entrepreneurs. Quackenworth was one of a select group of companies chosen for the Minimum Viable Product (MVP) category. Today the company is focused on creating fun educational apps for mobile devices. The company currently has five apps in the Apple App Store.
          </p>
        </div>
      </section>

      {/* ── Row 3: Mission & Values ── */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
              What Drives Us
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-xl mx-auto">
              Three principles shape every product we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#00aeef]/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#00aeef]" aria-hidden="true">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-700 mb-3">Curriculum-First Design</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Every product starts with learning standards, not features. We work
                backward from what students need to know at each grade level, then
                build tools that make mastering those skills feel natural.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F5A623]" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06l-1.74-1.74A3.751 3.751 0 0 0 14.378 12H15a.75.75 0 0 0 0-1.5h-.622A3.75 3.75 0 0 0 10.5 7.5H9Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-700 mb-3">Always Free to Start</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We believe cost should never be a barrier to great learning tools.
                Our core apps are free to use, so every student — regardless of
                school budget or family income — has access to quality resources.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#00aeef]/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#00aeef]" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-700 mb-3">Trusted by Families & Schools</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We design with both teachers and parents as equal partners. Our
                products work seamlessly in classrooms and at home, keeping
                everyone aligned on a student's progress and goals.
              </p>
            </div>

          </div>
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
