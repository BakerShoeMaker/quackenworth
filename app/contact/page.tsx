import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Quackenworth",
  description:
    "Have a question about our educational apps or need support? Contact the Quackenworth team and we'll get back to you as soon as possible.",
  openGraph: {
    title: "Contact Us | Quackenworth",
    description:
      "Have a question about our educational apps or need support? Contact the Quackenworth team and we'll get back to you as soon as possible.",
    images: ["/og-image.png"],
  },
};

export default function Contact() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: mascot */}
          <div className="shrink-0 flex justify-center lg:justify-start">
            <Image
              src="/cabbage-head.png"
              alt="Quackenworth mascot"
              width={280}
              height={340}
              className="w-48 md:w-64 lg:w-72 h-auto"
            />
          </div>

          {/* Right: heading + form */}
          <div className="flex-1 w-full">
            <div className="text-center lg:text-left mb-10">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#00aeef] mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Have a question about our apps or need support? Send us a message
                and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>
      </section>
    </main>
  );
}
