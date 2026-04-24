import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import { articles, getArticleBySlug } from "../articles-data";
import type { AppPromo } from "../articles-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Quackenworth`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Quackenworth`,
      description: article.excerpt,
      images: ["/og-image.png"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function AppPromoBlock({ promo }: { promo: AppPromo }) {
  return (
    <section className="mt-16 border-t border-gray-100 pt-14">

      {/* Video */}
      {promo.videoSrc && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-700 text-center mb-3">
            See It in Action
          </h2>
          <p className="text-zinc-500 text-center mb-6 max-w-md mx-auto">
            Watch how Time to Multiply turns multiplication practice into something
            kids actually want to do.
          </p>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-xs">
              <video
                src={promo.videoSrc}
                controls
                playsInline
                className="w-full block"
                aria-label={`${promo.appName} promotional video`}
              />
            </div>
          </div>
        </div>
      )}

      {/* "To learn more" callout */}
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">

        {/* App identity */}
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={promo.appIconSrc}
            alt={promo.appIconAlt}
            width={56}
            height={56}
            className="rounded-2xl shadow-sm shrink-0"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00aeef] mb-0.5">
              To Learn More
            </p>
            <h2 className="text-2xl font-bold text-zinc-700 leading-tight">
              {promo.appName}
            </h2>
          </div>
        </div>

        <p className="text-[#00aeef] font-medium mb-3">{promo.tagline}</p>
        <p className="text-zinc-500 leading-relaxed mb-8">{promo.description}</p>

        {/* Feature images */}
        {promo.images && promo.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {promo.images.map((img) => (
              <div key={img.src} className="flex flex-col items-center gap-2">
                <div className="relative w-full aspect-9/16 rounded-xl overflow-hidden bg-white border border-gray-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Link
            href={promo.href}
            className="inline-block bg-[#00aeef] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity"
          >
            {promo.ctaLabel} →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Quackenworth", url: "https://www.quackenworth.com" },
    publisher: { "@type": "Organization", name: "Quackenworth", url: "https://www.quackenworth.com" },
    url: `https://www.quackenworth.com/articles/${article.slug}`,
    ...(article.heroImage && { image: `https://www.quackenworth.com${article.heroImage.src}` }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main>
      <Breadcrumb
        items={[
          { label: "Articles", href: "/articles" },
          { label: article.title },
        ]}
      />

      <article className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
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

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-700 leading-tight mb-4">
            {article.title}
          </h1>

          {/* Date */}
          <p className="text-sm text-zinc-400 mb-10">{formatDate(article.date)}</p>

          {/* Hero image */}
          {article.heroImage && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          )}

          {/* Body */}
          <div
            className="article-body text-zinc-500 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* App promo — video + images + CTA */}
          {article.appPromo && <AppPromoBlock promo={article.appPromo} />}

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-gray-100">
            <Link
              href="/articles"
              className="text-[#00aeef] font-semibold hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>

        </div>
      </article>
    </main>
    </>
  );
}
