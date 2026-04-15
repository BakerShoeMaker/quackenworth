import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promos | Quackenworth Educational Apps",
  description:
    "Watch Quackenworth promo videos to see our educational apps in action. Discover tools built for K–12 teachers, parents, and students.",
  openGraph: {
    title: "Promos | Quackenworth Educational Apps",
    description:
      "Watch Quackenworth promo videos to see our educational apps in action. Discover tools built for K–12 teachers, parents, and students.",
    images: ["/og-image.png"],
  },
};

export default function Promos() {
  return (
    <main>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 mb-4 text-center">
            Promos
          </h1>
          <p className="text-lg text-zinc-500 text-center mb-12 max-w-2xl mx-auto">
            See Quackenworth's educational apps in action. Our tools are designed
            to engage K–12 learners at every stage.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-zinc-700 mb-6 text-center">
            Fruit Rocket 3 — Coming Soon
          </h2>

          <div className="w-full">
            <video
              src="/fruit rocket 3 coming soon.mp4"
              controls
              playsInline
              className="w-full aspect-video object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-zinc-700 mt-16 mb-6 text-center">
            Cabbage Heads in the Lab — Time to Multiply
          </h2>

          <div className="w-full">
            <video
              src="/Cabbage Heads in the lab withTime to Multiply.mp4"
              controls
              playsInline
              className="w-full aspect-video object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-zinc-700 mt-16 mb-6 text-center">
            Let&apos;s get back to work!
          </h2>

          <div className="w-full">
            <video
              src="/Quackenworth-promo-2026-final.mp4"
              controls
              playsInline
              className="w-full aspect-video object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
