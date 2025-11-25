"use client";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
  }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="bg-[#e8e4d6] rounded-lg p-6 sticky top-8">
      <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-800 hover:text-gray-900 transition-colors leading-snug block"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

















