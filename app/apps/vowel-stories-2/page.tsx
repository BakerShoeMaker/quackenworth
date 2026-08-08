import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import IPadMockup from "../../components/IPadMockup";

export const metadata: Metadata = {
  title: "Learn to Read: Vowel Stories 2 | Phonics App — Quackenworth",
  description:
    "Learn to Read: Vowel Stories 2 helps beginning readers practice short and long vowel sounds through 10 fun stories. Read, watch, and practice phonics with colorful characters.",
  openGraph: {
    title: "Learn to Read: Vowel Stories 2 | Phonics App — Quackenworth",
    description:
      "Learn to Read: Vowel Stories 2 helps beginning readers practice short and long vowel sounds through 10 fun stories. Read, watch, and practice phonics with colorful characters.",
    images: ["/vowel-stories/180.png"],
  },
};

const shortVowels = ["Short A", "Short E", "Short I", "Short O", "Short U"];
const longVowels = ["Long A", "Long E", "Long I", "Long O", "Long U"];

const spotlightStories = [
  {
    image: "/vowel-stories/vowel-stories-4.jpg",
    title: "Long A: Kate and Jane are Mates",
    description: "44 words · 9 sentences · 9 pages",
  },
  {
    image: "/vowel-stories/vowel-stories-7.jpg",
    title: "Short E: Ben and Bess",
    description: "39 words · 7 sentences · 6 pages",
  },
  {
    image: "/vowel-stories/vowel-stories-8.jpg",
    title: "Short U: A Day with Gus",
    description: "42 words · 8 sentences · 8 pages",
  },
  {
    image: "/vowel-stories/vowel-stories-9.jpg",
    title: "Long U: Sue and Lou",
    description: "49 words · 8 sentences · 7 pages",
  },
  {
    image: "/vowel-stories/vowel-stories-10.jpg",
    title: "Word & Phonics Practice",
    description:
      "Kids match rhyming word families — like cold, old, and hole — to reinforce the vowel sound in each story.",
  },
];

const features = [
  "10 stories covering short and long vowels",
  "Short A, E, I, O, and U practice",
  "Long A, E, I, O, and U practice",
  "Read-along learning",
  "Story videos",
  "Word and phonics practice",
  "Colorful, child-friendly characters",
  "Designed for beginning readers",
  "Encourages reading confidence and fluency",
  "Kid-friendly navigation",
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-[#00aeef] shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Learn to Read: Vowel Stories 2",
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description:
    "Learn to Read: Vowel Stories 2 helps beginning readers practice short and long vowel sounds through 10 stories that combine phonics practice with reading, watching, and word activities.",
  url: "https://www.quackenworth.com/apps/vowel-stories-2",
  image: "https://www.quackenworth.com/vowel-stories/180.png",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
  },
  educationalLevel: "Elementary School",
  typicalAgeRange: "4-8",
  author: {
    "@type": "Organization",
    name: "Quackenworth",
    url: "https://www.quackenworth.com",
  },
};

export default function VowelStories2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <main>
        <Breadcrumb
          items={[
            { label: "Apps", href: "/apps" },
            { label: "Learn to Read: Vowel Stories 2" },
          ]}
        />

        {/* ── Video Hero ── */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <video
                src="/vowel-stories/vowel-stories-promo-final.mp4"
                controls
                playsInline
                className="w-full block"
                aria-label="Learn to Read: Vowel Stories 2 promotional video"
              />
            </div>
          </div>
        </section>

        {/* ── Hero ── */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]">
                  Elementary
                </span>
                <span className="text-xs text-zinc-400">Ages 4–8</span>
                <span className="text-xs text-zinc-400">· Reading</span>
                <span className="inline-block bg-zinc-400 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <Image
                  src="/vowel-stories/180.png"
                  alt="Learn to Read: Vowel Stories 2 app icon"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight">
                  Learn to Read: Vowel Stories 2
                </h1>
              </div>

              <p className="text-xl text-[#00aeef] font-medium mb-5">
                Learning to read is more fun with a good story!
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Vowel Stories 2 is an upgraded collection of engaging stories created
                to help beginning readers practice short and long vowel sounds while
                building confidence, fluency, and early reading skills. Instead of
                practicing vowel sounds only through isolated words, children
                encounter them naturally within memorable stories.
              </p>
            </div>

            {/* Hero screenshot */}
            <IPadMockup
              src="/vowel-stories/vowel-stories-1.jpg"
              alt="Learn to Read: Vowel Stories 2 — home screen with Short Vowels and Long Vowels"
            />

          </div>
        </section>

        {/* ── Explore 10 Vowel Stories ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
              Explore 10 Vowel Stories
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
              Practice all five short and long vowel sounds — each story gives
              children another opportunity to recognize vowel sounds, read familiar
              words, and develop stronger reading fluency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src="/vowel-stories/vowel-stories-2.jpg"
                    alt="Short Vowels story menu — Short A, E, I, O, and U"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-700 mb-3">
                    Short Vowels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {shortVowels.map((vowel) => (
                      <span
                        key={vowel}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]"
                      >
                        {vowel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src="/vowel-stories/vowel-stories-3.jpg"
                    alt="Long Vowels story menu — Long A, E, I, O, and U"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-700 mb-3">
                    Long Vowels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {longVowels.map((vowel) => (
                      <span
                        key={vowel}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#F5A623]"
                      >
                        {vowel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── See It in Action ── */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
              See It in Action
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
              Every story pairs colorful characters with playful vowel practice —
              here&apos;s a peek inside a few of the ten.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spotlightStories.map((story, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col shadow-sm"
                >
                  <div className="relative w-full aspect-4/3">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-zinc-700 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-10">
              Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-zinc-500 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why Vowel Stories 2? ── */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-700 mb-6">
              Why Vowel Stories 2?
            </h2>
            <div className="space-y-5 text-zinc-500 leading-relaxed text-left md:text-center">
              <p>
                Learn to Read: Vowel Stories 2 is designed especially for children
                developing foundational reading and phonics skills. Simple
                storytelling, engaging illustrations, and a clear focus on vowel
                sounds help keep young readers interested without overwhelming them.
                Children can experience each story in multiple ways, helping them
                become familiar with the words, characters, and vowel sounds before
                practicing reading independently.
              </p>
              <p>
                This new edition builds upon the original Vowel Stories experience
                with an updated presentation designed to make learning to read even
                more engaging. Turn phonics practice into story time with Learn to
                Read: Vowel Stories 2.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#1a2f4a] py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coming Soon to the App Store
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Learn to Read: Vowel Stories 2 is currently in development. Check back
              soon to bring these 10 vowel stories to your family or classroom.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
    </>
  );
}
