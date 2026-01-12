import { Metadata } from "next";
import { notFound } from "next/navigation";
import FeaturedImage from "@/components/FeaturedImage";
import { getContentBySlug, getAllSlugs } from "@/lib/supabase-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: content.meta_title || content.title,
    description: content.meta_description,
    keywords: content.meta_keywords,
    openGraph: {
      title: content.meta_title || content.title,
      description: content.meta_description,
      url: `https://wizms.net${content.url}`,
      type: "article",
      publishedTime: content.publish_date,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content || !content.published) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            {content.publish_date && (
              <time dateTime={content.publish_date}>
                {new Date(content.publish_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {content.category && (
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {content.category}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {(content as any).featured_image && (
          <FeaturedImage
            src={(content as any).featured_image}
            alt={(content as any).featured_image_alt || content.title}
            title={content.title}
          />
        )}

        {/* Meta Description */}
        {content.meta_description && (
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 italic">{content.meta_description}</p>
          </div>
        )}

        {/* Main Content */}
        {content.content.includes("<") ? (
          // If content contains HTML tags, render as HTML
          <div
            className="prose prose-lg max-w-none mb-8 prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-strong:text-gray-900 prose-em:text-gray-800 prose-li:text-gray-700 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        ) : (
          // If plain text, split by multiple newlines or single newline before capital letter
          <div className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed">
            {content.content
              // Split by double newlines OR single newline followed by spaces and capital letter
              .split(/\n\n+|\n(?=\s*[A-Z])/)
              .filter((p) => p.trim().length > 0)
              .map((paragraph, i) => (
                <p key={i} className="mb-6 text-justify leading-8">
                  {paragraph.trim().replace(/\n/g, " ").replace(/\s+/g, " ")}
                </p>
              ))}
          </div>
        )}

        {/* Keywords */}
        {content.meta_keywords && (
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {content.meta_keywords.split(",").map((keyword, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded"
                >
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </footer>
        )}
      </div>
    </article>
  );
}
