import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quackenworth | Educational Apps for K–12 Teachers & Parents",
  description:
    "Quackenworth creates engaging educational apps and websites for K–12 students. Empowering teachers and parents with tools for elementary, middle, and high school learners.",
};

export default function Home() {
  return (
    <main>
      {/* Hero section — placeholder, content TBD */}
      <section className="min-h-[80vh] flex items-center justify-center bg-white px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Learning Tools Built for Every Stage
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Quackenworth creates educational apps and websites designed for
            elementary, middle school, and high school students — trusted by
            teachers and parents nationwide.
          </p>
        </div>
      </section>
    </main>
  );
}
