import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", "sitemap")
    .maybeSingle();

  if (error) {
    return new NextResponse(`Supabase error: ${error.message}`, { status: 500 });
  }

  if (!data?.value) {
    return new NextResponse("Sitemap not found — upload one via Admin > Sitemap", { status: 404 });
  }

  return new NextResponse(data.value, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
