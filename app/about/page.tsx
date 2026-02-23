import type { Metadata } from "next";
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
      <section className="min-h-[80vh] flex items-center justify-center bg-white px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            About Quackenworth
          </h1>
        </div>
      </section>
    </main>
  );
}
