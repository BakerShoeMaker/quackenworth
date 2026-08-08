import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import IPadMockup from "../../components/IPadMockup";

export const metadata: Metadata = {
  title: "Remixed Fairy Tales | The Remix Series — Quackenworth",
  description:
    "Five classic fairy tales get imaginative new twists in The Remix Series. Kids can read or watch The Three Little Figs, Salmonella, The Gingerbread Scam, Silly Goats' Bluff, and Moldy Socks and the Three Little Hares.",
  openGraph: {
    title: "Remixed Fairy Tales | The Remix Series — Quackenworth",
    description:
      "Five classic fairy tales get imaginative new twists in The Remix Series. Kids can read or watch The Three Little Figs, Salmonella, The Gingerbread Scam, Silly Goats' Bluff, and Moldy Socks and the Three Little Hares.",
    images: ["/remixed-fairytales/180.png"],
  },
};

const stories = [
  {
    cover: "/remixed-fairytales/remix-series-cover-figs.jpg",
    title: "The Three Little Figs",
    description:
      "A fresh and funny remix of The Three Little Pigs, featuring three determined little figs who must outsmart an unexpected troublemaker (the gopher!).",
  },
  {
    cover: "/remixed-fairytales/remix-series-cover-salmonella.jpg",
    title: "Salmonella: A Germ-Packed Love Story",
    description:
      "A playful remix of Cinderella that transforms the classic romance into a humorous, germ-filled adventure.",
  },
  {
    cover: "/remixed-fairytales/remix-series-cover-gingerbreadscam.jpg",
    title: "The Gingerbread Scam",
    description:
      "A mystery-inspired remix of The Gingerbread Man, in which Sheriff Ramirez investigates the suspicious disappearance of a very familiar character.",
  },
  {
    cover: "/remixed-fairytales/remix-series-cover-silly-goats-bluff.jpg",
    title: "Silly Goats' Bluff",
    description:
      "A clever remix of The Three Billy Goats Gruff, featuring three silly goats, a troublesome troll, and a battle of wits at the bridge.",
  },
  {
    cover: "/remixed-fairytales/remix-series-cover-moldy-socks.jpg",
    title: "Moldy Socks and the Three Little Hares",
    description:
      "A delightfully unusual remix of Goldilocks and the Three Bears, where a curious visitor discovers the home of three little hares.",
  },
];

const features = [
  "Five fully illustrated remixed fairy tales",
  "Read and Watch options for every story",
  "Colorful characters and child-friendly animation",
  "Familiar stories presented in fresh and surprising ways",
  "Humorous adventures designed for young audiences",
  "Simple navigation for independent exploration",
  "Entertaining stories that encourage reading and imagination",
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
  name: "Remixed Fairy Tales",
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description:
    "Five classic fairy tales get imaginative new twists in The Remix Series — a collection of illustrated stories kids can read or watch.",
  url: "https://www.quackenworth.com/apps/remixed-fairy-tales",
  image: "https://www.quackenworth.com/remixed-fairytales/180.png",
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

export default function RemixedFairyTales() {
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
            { label: "Remixed Fairy Tales" },
          ]}
        />

        {/* ── Video Hero ── */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <video
                src="/remixed-fairytales/remix-series-promo-final.mp4"
                controls
                playsInline
                className="w-full block"
                aria-label="The Remix Series promotional video"
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
                  src="/remixed-fairytales/180.png"
                  alt="Remixed Fairy Tales app icon"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight">
                  Remixed Fairy Tales
                </h1>
              </div>

              <p className="text-xl text-[#00aeef] font-medium mb-5">
                Five remixed fairy tales with fun twists!
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Classic tales get surprising new twists in The Remix Series, a collection
                of five imaginative stories created for young children. Each story
                reworks a familiar fairy tale with new characters, modern humor,
                unexpected situations, and important lessons. Children can choose to
                read the illustrated story at their own pace or watch the story come
                to life.
              </p>
            </div>

            {/* Hero screenshot */}
            <IPadMockup
              src="/remixed-fairytales/remix-series-1.jpg"
              alt="The Remix Series — story selection screen showing all five remixed fairy tales"
            />

          </div>
        </section>

        {/* ── The Collection ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
              The Collection
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
              Five familiar fairy tales, completely remixed — every story has a Read
              and a Watch option.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm"
                >
                  <div className="relative w-full aspect-4/3">
                    <Image
                      src={story.cover}
                      alt={`${story.title} — story cover`}
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
        <section className="bg-white py-16 px-6 border-b border-gray-100">
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

        {/* ── Why The Remix Series? ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-700 mb-6">
              Why The Remix Series?
            </h2>
            <div className="space-y-5 text-zinc-500 leading-relaxed text-left md:text-center">
              <p>
                These stories are great for bedtime, reading time, or reading to
                relax. Rediscover familiar tales in a completely new way with The
                Remix Series — where every story has been mixed, remade, and filled
                with surprises.
              </p>
              <p>
                Appropriate for children ages 4 to 8, The Remix Series brings
                families and classrooms together around stories everyone already
                loves — with a twist nobody saw coming.
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
              Remixed Fairy Tales is currently in development. Check back soon to
              bring these five reimagined tales to your family or classroom.
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
