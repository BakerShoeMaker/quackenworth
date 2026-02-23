import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Apps | Quackenworth Educational Apps for K–12 Students",
  description:
    "Browse Quackenworth's educational apps for K-12 students. Filter by grade level — elementary, middle school, or high school — and find the right learning tool for every subject.",
  openGraph: {
    title: "Apps | Quackenworth Educational Apps for K–12 Students",
    description:
      "Browse Quackenworth's educational apps for K-12 students. Filter by grade level — elementary, middle school, or high school — and find the right learning tool for every subject.",
    images: ["/og-image.png"],
  },
};

export default function Apps() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Apps" }]} />
      <section className="min-h-[80vh] flex items-center justify-center bg-white px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our Apps
          </h1>
        </div>
      </section>
    </main>
  );
}
