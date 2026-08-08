import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import ScreenshotCarousel from "../components/ScreenshotCarousel";
import AppStoreBadge from "../components/AppStoreBadge";
import IPhoneMockup from "../components/IPhoneMockup";
import IPadMockup from "../components/IPadMockup";

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

      {/* ── Row 2: Featured App — Remixed Fairy Tales ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <IPadMockup
              src="/remixed-fairytales/remix-series-1.jpg"
              alt="Remixed Fairy Tales start screen"
            />

            {/* App details */}
            <div className="flex-1 text-center md:text-left">

              {/* Grade level + metadata badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]">
                  Elementary
                </span>
                <span className="text-xs text-zinc-400">Ages 4–8</span>
                <span className="text-xs text-zinc-400">· Reading</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                <Image
                  src="/remixed-fairytales/180.png"
                  alt="Remixed Fairy Tales app icon"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/apps/remixed-fairy-tales"
                    className="text-3xl md:text-4xl font-bold text-zinc-700 hover:text-[#00aeef] transition-colors"
                  >
                    Remixed Fairy Tales
                  </Link>
                  <span className="inline-block bg-zinc-400 text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    Coming Soon
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#00aeef] font-medium mb-5">
                Five remixed fairy tales with fun twists!
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Five remixed fairy tales with fun twists! Kids can read or watch The Three
                Little Figs, The Gingerbread Scam, Silly Goats&apos; Bluff, Salmonella: A
                Germ-Packed Love Story, and Moldy Socks and the Three Little Hares.
              </p>

              <Link
                href="/apps/remixed-fairy-tales"
                className="text-[#00aeef] font-semibold hover:underline"
              >
                Learn more →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ── Row 3: Featured App — Learn to Read: Vowel Stories 2 ── */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <IPadMockup
              src="/vowel-stories/vowel-stories-1.jpg"
              alt="Learn to Read: Vowel Stories 2 start screen"
            />

            {/* App details */}
            <div className="flex-1 text-center md:text-left">

              {/* Grade level + metadata badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]">
                  Elementary
                </span>
                <span className="text-xs text-zinc-400">Ages 4–8</span>
                <span className="text-xs text-zinc-400">· Reading</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                <Image
                  src="/vowel-stories/180.png"
                  alt="Learn to Read: Vowel Stories 2 app icon"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/apps/vowel-stories-2"
                    className="text-3xl md:text-4xl font-bold text-zinc-700 hover:text-[#00aeef] transition-colors"
                  >
                    Learn to Read: Vowel Stories 2
                  </Link>
                  <span className="inline-block bg-zinc-400 text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    Coming Soon
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#00aeef] font-medium mb-5">
                Build early reading skills with fun vowel stories.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Build early reading skills with fun short and long vowel stories. Read,
                listen, watch, and practice phonics through engaging stories made for
                beginning readers.
              </p>

              <Link
                href="/apps/vowel-stories-2"
                className="text-[#00aeef] font-semibold hover:underline"
              >
                Learn more →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ── Row 4: Featured App — DJ and the Grumpy Tree ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <IPadMockup
              src="/djandgrumpytree/dj-and-the-grumpy-tree-1.jpg"
              alt="DJ and the Grumpy Tree start screen"
            />

            {/* App details */}
            <div className="flex-1 text-center md:text-left">

              {/* Grade level + metadata badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]">
                  Elementary
                </span>
                <span className="text-xs text-zinc-400">Ages 4–8</span>
                <span className="text-xs text-zinc-400">· Reading</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                <Image
                  src="/djandgrumpytree/180.png"
                  alt="DJ and the Grumpy Tree app icon"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/apps/dj-and-the-grumpy-tree"
                    className="text-3xl md:text-4xl font-bold text-zinc-700 hover:text-[#00aeef] transition-colors"
                  >
                    DJ and the Grumpy Tree
                  </Link>
                  <span className="inline-block bg-zinc-400 text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    Coming Soon
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#00aeef] font-medium mb-5">
                A story about sharing.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                DJ and the Grumpy Tree is a magical children&apos;s story about a boy, a
                talking apple tree, and the lesson that sharing can make the whole park
                happier.
              </p>

              <Link
                href="/apps/dj-and-the-grumpy-tree"
                className="text-[#00aeef] font-semibold hover:underline"
              >
                Learn more →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ── Row 5: Featured App — The Witty Bitty Bunch: Read & Rhyme Series ── */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <IPadMockup
              src="/read-and-rhyme-bookshelf.jpg"
              alt="The Witty Bitty Bunch: Read & Rhyme Series start screen"
            />

            {/* App details */}
            <div className="flex-1 text-center md:text-left">

              {/* Grade level + metadata badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#00aeef]">
                  Elementary
                </span>
                <span className="text-xs text-zinc-400">Ages 3–7</span>
                <span className="text-xs text-zinc-400">· Reading</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                <Image
                  src="/read-and-rhyme-icon.jpg"
                  alt="The Witty Bitty Bunch: Read & Rhyme Series app icon"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/apps/read-and-rhyme"
                    className="text-3xl md:text-4xl font-bold text-zinc-700 hover:text-[#00aeef] transition-colors"
                  >
                    The Witty Bitty Bunch: Read & Rhyme Series
                  </Link>
                  <span className="inline-block bg-zinc-400 text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    Coming Soon
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#00aeef] font-medium mb-5">
                Ready to Read: Rhyming Stories
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Ready to Read: Rhyming Stories helps young readers build confidence through
                short, fun, animated stories designed for beginning readers. Children can
                read along with simple rhyming stories featuring lovable characters like
                Pete, Joe, Kim, Mike, Paul, Jenny, and more.
              </p>

              <Link
                href="/apps/read-and-rhyme"
                className="text-[#00aeef] font-semibold hover:underline"
              >
                Learn more →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ── Row 6: Featured App — Fruit Rockets Multiplication 3 ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <IPhoneMockup
              src="/fruit-rockets-start-page.PNG"
              alt="Fruit Rockets Multiplication 3 start screen"
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
                  src="/fruit-rockets-icon.png"
                  alt="Fruit Rockets Multiplication 3 app icon"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-700">
                    Fruit Rockets Multiplication 3
                  </h2>
                  <span className="inline-block bg-[#F5A623] text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    Now Available
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#00aeef] font-medium mb-5">
                Blast off with Fruit Rockets!
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Fruit Rockets 3 turns multiplication practice into a classroom-ready game.
                Students choose the correct answer rocket and launch it toward the target —
                earning points and unlocking awards while building times table fluency.
                Supports multiple profiles so every student can track their own progress.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href="https://apps.apple.com/us/app/fruit-rockets-3-multiplication/id6764722296"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Fruit Rockets Multiplication 3 on the App Store"
                  className="inline-flex hover:opacity-80 transition-opacity"
                >
                  <AppStoreBadge />
                </a>
                <Link
                  href="/apps/fruit-rockets-multiplication-3"
                  className="text-[#00aeef] font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Row 7: Featured App — Time to Multiply ── */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
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
                    Now Available
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
                href="https://apps.apple.com/us/app/time-to-multiply/id6760323272?ppid=4c4fef66-da30-49cf-81d1-27f1e6651017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Time to Multiply on the App Store"
                className="inline-flex hover:opacity-80 transition-opacity"
              >
                <AppStoreBadge />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* ── Row 7b: Time to Multiply feature screenshots ── */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
            Features
          </h2>
          <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
            Everything students need to build multiplication fluency through play.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                screenshot: "/time-to-multiply-1.PNG",
                alt: "Time to Multiply gameplay showing 10 × 12 with a visual dot grid and three answer choices",
                headline: "Visual multiplication grids",
                body: "Every problem is backed by a dot grid so students can see the math — not just memorize it.",
              },
              {
                screenshot: "/time-to-multiply-4.PNG",
                alt: "Time to Multiply gameplay screen showing 3 × 10, labelled 1 out of 20",
                headline: "Timed or untimed practice",
                body: "Set a countdown timer or let students work at their own pace — whichever suits your lesson.",
              },
              {
                screenshot: "/time-to-multiply-5.PNG",
                alt: "Time to Multiply gameplay with fireworks celebrating a correct answer to 4 × 10",
                headline: "Instant feedback and celebration",
                body: "Fireworks and animations fire after every correct answer, keeping students motivated to keep going.",
              },
              {
                screenshot: "/time-to-multiply-3.PNG",
                alt: "Time to Multiply results screen showing correct, incorrect, total problems, and percent correct",
                headline: "Detailed results after every round",
                body: "Students and teachers see correct, incorrect, total problems, and percentage correct at a glance.",
              },
              {
                screenshot: "/time-to-multiply-2.PNG",
                alt: "Time to Multiply settings screen showing all-time stats and game configuration options",
                headline: "Customizable practice settings",
                body: "Choose which numbers to practice, set time limits, and control the number of problems per session.",
              },
              {
                screenshot: "/time-to-multiply-6.PNG",
                alt: "Time to Multiply settings screen showing language and sound options with a Play button",
                headline: "Simple setup, any device",
                body: "No login required. Students can start practicing in seconds on any iPhone.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm">
                <div className="relative w-full aspect-9/16">
                  <Image
                    src={feature.screenshot}
                    alt={feature.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-zinc-700 mb-2">
                    {feature.headline}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Row 8: Three-column feature cards ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
              Tools for the classroom 
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-xl mx-auto">
              Whether you teach kindergarteners or high schoolers, Quackenworth
              has tools built for your classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 — Elementary */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full h-48 bg-white flex items-center justify-center p-6">
                <Image
                  src="/quackenworth apps.png"
                  alt="Tablet showing the Quackenworth Time to Multiply app"
                  width={280}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00aeef] mb-2">
                  Elementary · Ages 5–10
                </span>
                <h3 className="text-xl font-bold text-zinc-700 mb-3">
                  Quackenworth Apps
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  Ours apps are built for preschool and elementary school settings.
                </p>
              </div>
            </div>

            {/* Card 2 — Middle School */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full h-48 bg-white flex items-center justify-center p-6">
                <a
                  href="https://www.donowwarmups.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit DoNow Warmups website"
                  className="w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/donow.png"
                    alt="DoNow Warmups logo"
                    width={280}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </a>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-2">
                  Middle/High School
                </span>
                <h3 className="text-xl font-bold text-zinc-700 mb-3">
                  DoNowWarmups
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  DoNoWarmups contains thousands of standards-aligned warmups for elementary, middle and high school that help you start and end
                  class with purpose. 
                </p>
              </div>
            </div>

            {/* Card 3 — High School */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full h-48 bg-white flex items-center justify-center p-6">
                <a
                  href="https://www.rewardmyclass.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit RewardMyClass website"
                  className="w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/rewardmyclass.png"
                    alt="RewardMyClass logo"
                    width={280}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </a>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                  Middle/High School
                </span>
                <h3 className="text-xl font-bold text-zinc-700 mb-3">
                  RewardMyClass
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  RewardMyClass enables teachers to motivate students with a customizable point and 
                  rewards system that encourages positive behavior and active participation in class.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
