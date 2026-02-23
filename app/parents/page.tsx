import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "For Parents | Quackenworth Educational Apps for Kids",
  description:
    "Discover educational apps for kids from Quackenworth. Learning tools for home use, homework help, and educational games for elementary, middle, and high school students.",
  openGraph: {
    title: "For Parents | Quackenworth Educational Apps for Kids",
    description:
      "Discover educational apps for kids from Quackenworth. Learning tools for home use, homework help, and educational games for elementary, middle, and high school students.",
    images: ["/og-image.png"],
  },
};

export default function Parents() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Parents" }]} />
      <section className="min-h-[80vh] flex items-center justify-center bg-white px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            For Parents
          </h1>
        </div>
      </section>
    </main>
  );
}
