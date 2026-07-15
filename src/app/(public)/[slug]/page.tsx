import { Metadata } from "next";
import { notFound } from "next/navigation";
import FeaturedImage from "@/components/FeaturedImage";
import { getContentBySlug, getAllSlugs, getContentByType } from "@/lib/supabase-data";
import Link from "next/link";

export const dynamic = "force-dynamic";
import { BlogCard } from "@/components/BlogCard";

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
  const allBlogs = await getContentByType("blog", 100);

  if (!content || !content.published) {
    notFound();
  }

  // Get 5 most recent blogs (excluding current post)
  const recentBlogs = allBlogs
    .filter((blog) => blog.slug !== slug)
    .sort(
      (a, b) =>
        new Date(b.publish_date || "").getTime() -
        new Date(a.publish_date || "").getTime()
    )
    .slice(0, 5);

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <Link
              href={content.type === 'microblog' ? '/micro-blogs' : '/blog'}
              className="hover:text-gray-900 hover:underline"
            >
              {content.type === 'microblog' ? 'Micro Blogs' : 'Blog'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold line-clamp-1">{content.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Article Content */}
          <div className="lg:col-span-2">
            {/* Title and Metadata */}
            <header className="mb-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {content.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                {content.publish_date && (
                  <time dateTime={content.publish_date} className="text-sm font-medium">
                    {new Date(content.publish_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
                {content.category && (
                  <span
                    className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: "#295e8f" }}
                  >
                    {content.category}
                  </span>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {(content as any).featured_image && (
              <div className="mb-8">
                <FeaturedImage
                  src={(content as any).featured_image}
                  alt={(content as any).featured_image_alt || content.title}
                  title={content.title}
                />
              </div>
            )}

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              {content.content.includes("<") ? (
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content.content.replace(/<h1[^>]*>.*?<\/h1>/i, '') }}
                />
              ) : (
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {content.content
                    .split(/\n\n+|\n(?=\s*[A-Z])/)
                    .filter((p) => p.trim().length > 0)
                    .map((paragraph, i) => (
                      <p key={i} className="mb-6 text-justify leading-8">
                        {paragraph.trim().replace(/\n/g, " ").replace(/\s+/g, " ")}
                      </p>
                    ))}
                </div>
              )}
            </div>

            {/* Keywords */}
            {content.meta_keywords && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {content.meta_keywords.split(",").map((keyword, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-white px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#ee991a" }}
                    >
                      {keyword.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6 sticky top-6 h-fit">
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ color: "#295e8f" }}>
                Search
              </h3>
              <form action="/blog" method="GET" className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  name="q"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 text-sm"
                  style={{ "--tw-ring-color": "#295e8f" } as React.CSSProperties}
                />
                <button
                  type="submit"
                  className="px-4 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#ee991a" }}
                >
                  🔍
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ color: "#295e8f" }}>
                Recent Posts
              </h3>
              <div className="space-y-3">
                {recentBlogs.map((blog) => (
                  <Link key={blog.id || blog.slug} href={`/${blog.slug}`}>
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-2">
                        {blog.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {new Date(blog.publish_date || "").toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        {blog.category && (
                          <span
                            className="text-xs font-semibold px-2 py-1 rounded-full text-white"
                            style={{ backgroundColor: "#295e8f" }}
                          >
                            {blog.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-lg shadow-md p-6 text-center text-white" style={{ backgroundColor: "#295e8f" }}>
              <h3 className="text-lg font-bold mb-2">Need Consultancy?</h3>
              <p className="text-sm mb-4 text-blue-100">
                Get expert guidance on ISO certifications
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#ee991a", color: "white" }}
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
