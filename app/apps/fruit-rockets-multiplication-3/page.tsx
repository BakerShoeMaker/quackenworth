import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import IPhoneMockup from "../../components/IPhoneMockup";
import AppStoreBadge from "../../components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Fruit Rockets Multiplication 3 | Math App for Kids — Quackenworth",
  description:
    "Fruit Rockets Multiplication 3 turns times table practice into a fun rocket-launching game. Kids solve multiplication problems, earn points, and unlock awards. Available now on the App Store.",
  openGraph: {
    title: "Fruit Rockets Multiplication 3 | Math App for Kids — Quackenworth",
    description:
      "Fruit Rockets Multiplication 3 turns times table practice into a fun rocket-launching game. Kids solve multiplication problems, earn points, and unlock awards. Available now on the App Store.",
    images: ["/fruit-rockets-icon.png"],
  },
};

const features = [
  {
    headline: "Fun multiplication gameplay",
    body: "Swipe to launch rockets and answer multiplication problems in an interactive way.",
    screenshot: "/IMG_0486.PNG",
    screenshotAlt: "Fruit Rockets gameplay screen showing 5 × 12 multiplication problem with fruit rockets on launch pads",
  },
  {
    headline: "Practice specific numbers",
    body: "Choose which times tables to practice, from easier facts to more challenging ones.",
    screenshot: "/IMG_0488.PNG",
    screenshotAlt: "Settings screen showing number selection for multiplication and division practice",
  },
  {
    headline: "Mixed practice mode",
    body: "Let kids review a variety of multiplication and division facts for stronger fluency.",
    screenshot: "/IMG_0023.PNG",
    screenshotAlt: "Gameplay screen showing 33 ÷ 3 division problem with fruit rockets",
  },
  {
    headline: "Points and awards",
    body: "Earn points for correct answers and unlock achievements for progress, streaks, and practice milestones.",
    screenshot: "/IMG_0489.PNG",
    screenshotAlt: "Awards screen listing achievements and point values",
  },
  {
    headline: "Kid-friendly rocket theme",
    body: "Fruit-inspired rockets and playful visuals help make math practice feel like a game.",
    screenshot: "/IMG_0487.PNG",
    screenshotAlt: "Rocket launch explosion animation during gameplay",
  },
  {
    headline: "Progress tracking",
    body: "View stats such as total problems completed, correct answers, incorrect answers, percentage correct, and total points.",
    screenshot: "/IMG_0491.PNG",
    screenshotAlt: "Stats screen showing total problems, correct answers, and total points for a user",
  },
  {
    headline: "Multiple profiles",
    body: "Create profiles so more than one child can practice on the same device.",
    screenshot: "/IMG_0490.PNG",
    screenshotAlt: "Profiles screen showing three player profiles with names and point totals",
  },
];


const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fruit Rockets Multiplication 3",
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description:
    "Fruit Rockets Multiplication 3 turns multiplication practice into a fun, colorful rocket-launching game for kids.",
  url: "https://www.quackenworth.com/apps/fruit-rockets-multiplication-3",
  image: "https://www.quackenworth.com/fruit-rockets-icon.png",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: "https://apps.apple.com/us/app/fruit-rockets-3-multiplication/id6764722296",
  },
  educationalLevel: "Elementary School",
  typicalAgeRange: "5-10",
  author: {
    "@type": "Organization",
    name: "Quackenworth",
    url: "https://www.quackenworth.com",
  },
};

export default function FruitRocketsMultiplication3() {
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
            { label: "Fruit Rockets Multiplication 3" },
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
                  Now Available
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <Image
                  src="/fruit-rockets-icon.png"
                  alt="Fruit Rockets Multiplication 3 app icon"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-sm shrink-0"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight">
                  Fruit Rockets Multiplication 3
                </h1>
              </div>

              <p className="text-xl text-[#00aeef] font-medium mb-5">
                Blast off with Fruit Rockets!
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Fruit Rockets 3 Multiplication turns multiplication practice into a fun,
                colorful rocket-launching game for kids. Instead of simple flashcards or
                worksheets, children solve multiplication problems by choosing the correct
                answer rocket and launching it toward the target.
              </p>
            </div>

            {/* Hero screenshot */}
            <IPhoneMockup
              src="/fruit-rockets-start-page.PNG"
              alt="Fruit Rockets Multiplication 3 start screen"
            />

          </div>
        </section>

        {/* ── Description ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-8">
              About the Game
            </h2>
            <div className="space-y-5 text-zinc-500 leading-relaxed">
              <p>
                Fruit Rockets 3 Multiplication turns multiplication practice into a fun,
                colorful rocket-launching game for kids.
              </p>
              <p>
                Instead of simple flashcards or worksheets, children solve multiplication
                problems by choosing the correct answer rocket and launching it toward the
                target. Each correct answer earns points, builds progress, and helps unlock
                new achievements. The game is designed to make times table practice feel
                playful, rewarding, and easy to repeat.
              </p>
              <p>
                Kids can practice specific multiplication facts or work through mixed
                problems. Whether they are just beginning with the 2s, 5s, and 10s or
                building fluency with harder facts like 6×7, 7×8, and 9×12, Fruit Rockets 3
                gives them a fun way to keep practicing.
              </p>
              <p>
                The game includes a bright fruit rocket theme, kid-friendly visuals, awards,
                stats, and profile support so multiple learners can track their own progress.
              </p>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-700 text-center mb-3">
              Features
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
              Everything kids need to build multiplication fluency through play.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col shadow-sm">
                  <div className="relative w-full aspect-9/16">
                    {feature.screenshot ? (
                      <Image
                        src={feature.screenshot}
                        alt={feature.screenshotAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-400 text-center px-4 gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10 opacity-40"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs font-medium uppercase tracking-widest">Screenshot</span>
                        <span className="text-xs opacity-60">Coming soon</span>
                      </div>
                    )}
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

        {/* ── Why Fruit Rockets 3? ── */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-700 mb-6">
              Why Fruit Rockets 3?
            </h2>
            <div className="space-y-5 text-zinc-500 leading-relaxed text-left md:text-center">
              <p>
                Multiplication fluency takes repetition, but repetition does not have to
                feel boring. Fruit Rockets 3 gives kids a reason to keep practicing by
                turning each problem into a quick game moment. Answer correctly, launch the
                rocket, earn points, and keep going.
              </p>
              <p>
                The app is designed for children learning multiplication facts, especially
                elementary students who need regular practice with times tables.
              </p>
              <p>
                Fruit Rockets 3 Multiplication helps make math practice more active, visual,
                and rewarding.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#1a2f4a] py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Available Now on the App Store
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Download Fruit Rockets Multiplication 3 and start blasting off with math practice today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
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
