import { NextResponse } from "next/server";
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

    if (error || !data?.value) {
      return new NextResponse("Sitemap not found", { status: 404 });
    }

    return new NextResponse(data.value, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
