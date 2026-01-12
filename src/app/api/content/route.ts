import { getContentByType } from "@/lib/supabase-data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") as "blog" | "microblog" | undefined;
  const limit = searchParams.get("limit")
    ? parseInt(searchParams.get("limit")!)
    : undefined;

  if (!type || !["blog", "microblog"].includes(type)) {
    return NextResponse.json(
      { error: 'Invalid type. Must be "blog" or "microblog"' },
      { status: 400 }
    );
  }

  try {
    const content = await getContentByType(type, limit);
    return NextResponse.json(content);
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}
