import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

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
      <section className="min-h-[80vh] flex items-center justify-center bg-white px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            For Teachers
          </h1>
        </div>
      </section>
    </main>
  );
}
