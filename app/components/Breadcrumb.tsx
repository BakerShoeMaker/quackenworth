import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200 px-6 py-3">
      <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-1 text-lg text-zinc-500">
        <li>
          <Link href="/" className="hover:text-[#00aeef] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <span aria-hidden="true" className="text-zinc-400 mx-1">›</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#00aeef] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-zinc-700 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
