import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { articles } from "./articles-data";

export const metadata: Metadata = {
  title: "Articles | Quackenworth — EdTech Insights for Teachers & Parents",
  description:
    "Browse articles from Quackenworth on educational technology, K-12 learning strategies, classroom tools, and tips for parents supporting learning at home.",
  openGraph: {
    title: "Articles | Quackenworth — EdTech Insights for Teachers & Parents",
    description:
      "Browse articles from Quackenworth on educational technology, K-12 learning strategies, classroom tools, and tips for parents supporting learning at home.",
    images: ["/og-image.png"],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlesPage() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Articles" }]} />

      {/* ── Hero ── */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#00aeef] mb-4">
            From Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight mb-4">
            Articles
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Insights on educational technology, K–12 learning, and how to get
            the most out of Quackenworth tools — for teachers and parents alike.
          </p>
        </div>
      </section>

      {/* ── Article List ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {articles.length === 0 ? (
            <p className="text-center text-zinc-500 py-16">
              No articles yet — check back soon.
            </p>
          ) : (
            articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-3"
              >
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-wide text-[#00aeef] bg-blue-50 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-2xl font-bold text-zinc-700 leading-snug">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="hover:text-[#00aeef] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-zinc-400">{formatDate(article.date)}</p>
                <p className="text-zinc-500 leading-relaxed">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-[#00aeef] font-semibold hover:underline self-start mt-1"
                >
                  Read article →
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
