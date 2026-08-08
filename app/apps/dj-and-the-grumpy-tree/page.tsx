import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import IPadMockup from "../../components/IPadMockup";

export const metadata: Metadata = {
  title: "DJ and the Grumpy Tree | Read-Aloud Story App — Quackenworth",
  description:
    "DJ and the Grumpy Tree is a heartwarming children's story app about kindness, sharing, gratitude, and caring for others — perfect for bedtime or classroom read-aloud time.",
  openGraph: {
    title: "DJ and the Grumpy Tree | Read-Aloud Story App — Quackenworth",
    description:
      "DJ and the Grumpy Tree is a heartwarming children's story app about kindness, sharing, gratitude, and caring for others — perfect for bedtime or classroom read-aloud time.",
    images: ["/djandgrumpytree/180.png"],
  },
};

const storyBeats = [
  {
    image: "/djandgrumpytree/dj-and-the-grumpy-tree-2.jpg",
    alt: "The grumpy apple tree confronts DJ after he picks its shiniest apple",
    text:
      "One day, a boy named DJ climbed to the top of the grumpy tree and picked the biggest, most shiny apple he could find. As DJ headed home, he heard a cranky voice say, “Hey, you can’t have that! Bring my beautiful apple back!”",
  },
  {
    image: "/djandgrumpytree/dj-and-the-grumpy-tree-3.jpg",
    alt: "The grumpy tree's branch reaches into a city window to bring DJ back to the park",
    text:
      "Reaching all the way to a three-story apartment building, the grumpy tree stretched his branch up the side of the building and into a small opening in a window. He then wrapped his branch around the sleeping boy and brought him back to the park.",
  },
  {
    image: "/djandgrumpytree/dj-and-the-grumpy-tree-4.jpg",
    alt: "The apple tree offers DJ its very last apple as a gift",
    text:
      "One day, as DJ played soccer with the other kids, the tree said, “I am a very old tree and can no longer make apples like I used to. I have only one apple left and would like for you to have it. Please take it and enjoy.”",
  },
];

const kidsWillEnjoy = [
  "A magical talking apple tree with a big personality",
  "A funny and memorable story about DJ and East Side Park",
  "A meaningful lesson about kindness, empathy, sharing, and gratitude",
  "A read-aloud experience for bedtime, classroom story time, or independent reading",
  "A warm story world filled with fruit trees, children, nature, and imagination",
];

const parentsWillAppreciate = [
  "A child-friendly story with a clear moral lesson",
  "Social-emotional learning themes including empathy, generosity, responsibility, and appreciation",
  "Opportunities to discuss feelings, fairness, gratitude, and caring for nature",
  "A story structure that supports comprehension, sequencing, and character development",
  "A positive message about how small acts of kindness can grow into something lasting",
];

function CheckIcon({ className = "text-[#00aeef]" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-5 h-5 shrink-0 ${className}`}
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
  name: "DJ and the Grumpy Tree",
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description:
    "DJ and the Grumpy Tree is a heartwarming children's story app about kindness, sharing, gratitude, and caring for others.",
  url: "https://www.quackenworth.com/apps/dj-and-the-grumpy-tree",
  image: "https://www.quackenworth.com/djandgrumpytree/180.png",
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

export default function DjAndTheGrumpyTree() {
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
            { label: "DJ and the Grumpy Tree" },
          ]}
        />

        {/* ── Video Hero ── */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <video
                src="/djandgrumpytree/dj-and-grumpy-tree-promo-final.mp4"
                controls
                playsInline
                className="w-full block"
                aria-label="DJ and the Grumpy Tree promotional video"
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
                  src="/djandgrumpytree/180.png"
                  alt="DJ and the Grumpy Tree app icon"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight">
                  DJ and the Grumpy Tree
                </h1>
              </div>

              <p className="text-xl text-[#00aeef] font-medium mb-5">
                A heartwarming story about kindness and sharing.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                In East Side Park, every fruit tree happily shares its fruit with the
                children — except one grumpy apple tree. When a boy named DJ picks the
                tree&apos;s shiniest apple, the tree decides to teach him a lesson. But
                as the seasons pass, DJ and the apple tree both discover something
                important: sharing can bring joy, friendship, and a legacy that grows
                for generations.
              </p>
            </div>

            {/* Hero screenshot */}
            <IPadMockup
              src="/djandgrumpytree/dj-and-the-grumpy-tree-1.jpg"
              alt="DJ and the Grumpy Tree — story title screen"
            />

          </div>
        </section>

        {/* ── Follow the Story ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
              Follow the Story
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
              Designed for young readers, families, teachers, and read-aloud time,
              this interactive story encourages children to build reading confidence
              while exploring meaningful social-emotional lessons.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {storyBeats.map((beat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm"
                >
                  <div className="relative w-full aspect-4/3">
                    <Image
                      src={beat.image}
                      alt={beat.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {beat.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kids Will Enjoy / Parents & Teachers Will Appreciate ── */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-zinc-700 mb-6 text-center md:text-left">
                Children Will Enjoy
              </h2>
              <ul className="space-y-4">
                {kidsWillEnjoy.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon className="text-[#00aeef]" />
                    <span className="text-zinc-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-700 mb-6 text-center md:text-left">
                Parents & Teachers Will Appreciate
              </h2>
              <ul className="space-y-4">
                {parentsWillAppreciate.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon className="text-[#F5A623]" />
                    <span className="text-zinc-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Why DJ and the Grumpy Tree? ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-700 mb-6">
              Why DJ and the Grumpy Tree?
            </h2>
            <div className="space-y-5 text-zinc-500 leading-relaxed text-left md:text-center">
              <p>
                DJ and the Grumpy Tree is perfect for children who enjoy storybook
                apps, read-aloud books, bedtime stories, talking animals and plants,
                nature stories, and books with meaningful life lessons.
              </p>
              <p>
                Follow DJ and the grumpy apple tree through a funny, magical, and
                touching journey that shows children why sharing matters — and how
                kindness can change even the grumpiest heart.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="relative py-20 px-6 overflow-hidden">
          <Image
            src="/djandgrumpytree/dj-and-the-grumpy-tree-5.png"
            alt="A sleeping cat rests on a fence beneath a full moon and the grumpy tree's branch"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a2f4a]/75" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coming Soon to the App Store
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              DJ and the Grumpy Tree is currently in development. Check back soon to
              bring this heartwarming story to your family or classroom.
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
