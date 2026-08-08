import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import IPadMockup from "../../components/IPadMockup";

export const metadata: Metadata = {
  title: "The Witty Bitty Bunch: Read & Rhyme Series — Quackenworth",
  description:
    "Ready to Read: Rhyming Stories helps young readers build confidence through short, fun, animated rhyming stories designed for preschool, kindergarten, and first grade beginning readers.",
  openGraph: {
    title: "The Witty Bitty Bunch: Read & Rhyme Series — Quackenworth",
    description:
      "Ready to Read: Rhyming Stories helps young readers build confidence through short, fun, animated rhyming stories designed for preschool, kindergarten, and first grade beginning readers.",
    images: ["/read-and-rhyme-icon.jpg"],
  },
};

const books = [
  {
    cover: "/witty-bitty-bunch-read-and-rhyme/02 - iPad - Pete Has Big Feet - 2752x2064.png",
    title: "Pete Has Big Feet",
  },
  {
    cover: "/witty-bitty-bunch-read-and-rhyme/03 - iPad - Joe Has a Sore Toe - 2752x2064.png",
    title: "Joe Has a Sore Toe",
  },
  {
    cover: "/witty-bitty-bunch-read-and-rhyme/04 - iPad - Mike Has a Bike - 2752x2064.png",
    title: "Mike Has a Bike",
  },
  {
    cover: "/witty-bitty-bunch-read-and-rhyme/05 - iPad - Jenny Found a Penny - 2752x2064.png",
    title: "Jenny Found a Penny",
  },
  {
    cover: "/witty-bitty-bunch-read-and-rhyme/06 - iPad - Paul is Tall - 2752x2064.png",
    title: "Paul Is Tall",
  },
  {
    cover: "/witty-bitty-bunch-read-and-rhyme/07 - iPad - Kim Likes to Swim - 2752x2064.png",
    title: "Kim Likes to Swim",
  },
];

const storyPages = [
  {
    image: "/witty-bitty-bunch-read-and-rhyme/ipad - wbb - 3 - iPad 2752x2064.png",
    caption: "Pete traveled to the boat yard to visit Mr. Bernard.",
  },
  {
    image: "/witty-bitty-bunch-read-and-rhyme/ipad - wbb - 7 - iPad 2752x2064.png",
    caption: "Mike rushed away to the bay to visit Jay, the jolly jackrabbit.",
  },
  {
    image: "/witty-bitty-bunch-read-and-rhyme/ipad - wbb - 9 - iPad 2752x2064.png",
    caption: "Jenny skipped to the toy store to visit Kenny, the kind condor.",
  },
  {
    image: "/witty-bitty-bunch-read-and-rhyme/ipad - wbb - 13 - iPad 2752x2064.png",
    caption: "Kim rushed to the lake to chat with Trish the Fish.",
  },
];

const features = [
  {
    headline: "Short Rhyming Stories",
    body: "Each story is written with simple words, repeated sounds, and playful rhymes to help children recognize word patterns.",
  },
  {
    headline: "Read-Aloud Support",
    body: "Children can listen as the story is read aloud, making it easier to follow along and build fluency.",
  },
  {
    headline: "Animated Story Scenes",
    body: "Fun animated scenes help keep young learners engaged while supporting story comprehension.",
  },
  {
    headline: "Beginning Reader Friendly",
    body: "Stories are designed for early readers who are learning sight words, short vowel sounds, rhyming words, and simple sentence patterns.",
  },
  {
    headline: "Text Highlights",
    body: "Text is highlighted when the audio button is pressed, helping children follow along with each word.",
  },
  {
    headline: "Kid-Friendly Design",
    body: "Simple navigation, bright characters, and a clean layout make the app easy for young children to use.",
  },
];

const skillsSupported = [
  "Reading simple sentences",
  "Recognizing rhyming words",
  "Building sight word familiarity",
  "Improving listening comprehension",
  "Strengthening early phonics skills",
  "Developing reading confidence",
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
  name: "The Witty Bitty Bunch: Read & Rhyme Series",
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description:
    "Ready to Read: Rhyming Stories helps young readers build confidence through short, fun, animated rhyming stories designed for beginning readers.",
  url: "https://www.quackenworth.com/apps/read-and-rhyme",
  image: "https://www.quackenworth.com/read-and-rhyme-icon.jpg",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
  },
  educationalLevel: "Preschool, Kindergarten, First Grade",
  typicalAgeRange: "3-7",
  author: {
    "@type": "Organization",
    name: "Quackenworth",
    url: "https://www.quackenworth.com",
  },
};

export default function ReadAndRhyme() {
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
            { label: "The Witty Bitty Bunch: Read & Rhyme Series" },
          ]}
        />

        {/* ── Video Hero ── */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <video
                src="/witty-bitty-bunch-read-and-rhyme/wittty-bitty-bunch-promo-final.mp4"
                controls
                playsInline
                poster="/witty-bitty-bunch-read-and-rhyme/promo-first-frame.jpg"
                className="w-full block"
                aria-label="The Witty Bitty Bunch: Read & Rhyme Series promotional video"
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
                <span className="text-xs text-zinc-400">Ages 3–7</span>
                <span className="text-xs text-zinc-400">· Reading</span>
                <span className="inline-block bg-zinc-400 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <Image
                  src="/read-and-rhyme-icon.jpg"
                  alt="The Witty Bitty Bunch: Read & Rhyme Series app icon"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight">
                  The Witty Bitty Bunch: Read & Rhyme Series
                </h1>
              </div>

              <p className="text-xl text-[#00aeef] font-medium mb-5">
                Ready to Read: Rhyming Stories
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Ready to Read: Rhyming Stories helps young readers build confidence
                through short, fun, animated stories designed for beginning readers.
                Children can read along with simple rhyming stories featuring lovable
                characters like Pete, Joe, Kim, Mike, Paul, Jenny, and more — each
                using playful rhyme, repetition, and easy-to-follow language to
                support early literacy skills.
              </p>
            </div>

            {/* Hero screenshot */}
            <IPadMockup
              src="/read-and-rhyme-bookshelf.jpg"
              alt="The Witty Bitty Bunch — book selection screen showing all six rhyming stories"
            />

          </div>
        </section>

        {/* ── Meet the Books ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
              Meet the Books
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
              Designed for preschool, kindergarten, first grade, and beginning
              readers — six short, playful stories to grow reading confidence one
              rhyme at a time.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {books.map((book, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="relative w-full aspect-4/3">
                    <Image
                      src={book.cover}
                      alt={`${book.title} — story cover`}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 768px) 33vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-zinc-700">
                      {book.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── See a Story Come to Life ── */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
              See a Story Come to Life
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
              Every page pairs a playful rhyme with a colorful animated scene to
              keep young readers engaged.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {storyPages.map((page, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col shadow-sm"
                >
                  <div className="relative w-full aspect-4/3">
                    <Image
                      src={page.image}
                      alt={page.caption}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {page.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-zinc-700 mb-2">
                    {feature.headline}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Learning Skills Supported ── */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-10">
              Learning Skills Supported
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {skillsSupported.map((skill, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-zinc-500 leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Help Your Child Get Ready to Read ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-700 mb-6">
              Help Your Child Get Ready to Read
            </h2>
            <div className="space-y-5 text-zinc-500 leading-relaxed text-left md:text-center">
              <p>
                Perfect for parents, teachers, home school families, and young
                learners who want extra reading practice in a fun, story-based
                format.
              </p>
              <p>
                Ready to Read: Rhyming Stories gives children a fun first step into
                reading through rhyme, repetition, animation, and interactive word
                practice. It is a simple, cheerful way to help beginning readers
                grow their skills one story at a time.
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
              The Witty Bitty Bunch: Read & Rhyme Series is currently in
              development. Check back soon to bring these rhyming stories to your
              family or classroom.
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
