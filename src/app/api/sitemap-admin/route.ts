import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "sitemap")
      .single();

    if (error || !data) {
      return NextResponse.json({ content: "" });
    }

    return NextResponse.json({ content: data.value });
  } catch {
    return NextResponse.json({ error: "Failed to read sitemap" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }

    if (!content.includes("<urlset") || !content.includes("</urlset>")) {
      return NextResponse.json({ error: "Invalid XML: missing <urlset> root element" }, { status: 400 });
    }

    const { error } = await supabase
      .from("site_settings")
      .upsert({ key: "sitemap", value: content, updated_at: new Date().toISOString() });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to save sitemap";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
