import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");

export async function GET() {
  try {
    const content = await fs.readFile(SITEMAP_PATH, "utf-8");
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: "Failed to read sitemap.xml" }, { status: 500 });
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

    await fs.writeFile(SITEMAP_PATH, content, "utf-8");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to write sitemap.xml" }, { status: 500 });
  }
}
