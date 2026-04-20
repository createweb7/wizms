(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/wizms/nextjs-app/src/lib/supabase-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllSlugs",
    ()=>getAllSlugs,
    "getConsultantPageBySlug",
    ()=>getConsultantPageBySlug,
    "getContentBySlug",
    ()=>getContentBySlug,
    "getContentByType",
    ()=>getContentByType,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://dldlsdtguqqybwdwqhzq.supabase.co") || "";
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZGxzZHRndXFxeWJ3ZHdxaHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDk4OTYsImV4cCI6MjA4MjkyNTg5Nn0.wbCRGmrNA3NzN6jL-1YQdMeSp-MtCehRvghSp9uzc1s") || "";
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function getConsultantPageBySlug(slug) {
    try {
        const { data, error } = await supabase.from("consultant_pages").select("*").eq("slug", slug).single();
        if (error) return null;
        return data;
    } catch  {
        return null;
    }
}
// Cache for content
let contentCache = {
    blogs: [],
    microblogs: []
};
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
async function getContentByType(type, limit) {
    try {
        const now = Date.now();
        const cacheKey = type === "blog" ? "lastFetchBlogs" : "lastFetchMicroblogs";
        const lastFetch = contentCache[cacheKey];
        // Check if cache is still valid for this specific type
        if (lastFetch && now - lastFetch < CACHE_DURATION) {
            const data = type === "blog" ? contentCache.blogs : contentCache.microblogs;
            return limit ? data.slice(0, limit) : data;
        }
        const tableName = type === "blog" ? "blogs" : "microblogs";
        const { data, error } = await supabase.from(tableName).select("*").eq("published", true).order("publish_date", {
            ascending: false
        });
        if (error) {
            console.error(`Error fetching ${type}s:`, error);
            return [];
        }
        const formattedData = (data || []).map((item)=>({
                ...item,
                type
            }));
        // Update cache for this specific type
        if (type === "blog") {
            contentCache.blogs = formattedData;
            contentCache.lastFetchBlogs = now;
        } else {
            contentCache.microblogs = formattedData;
            contentCache.lastFetchMicroblogs = now;
        }
        return limit ? formattedData.slice(0, limit) : formattedData;
    } catch (error) {
        console.error(`Error in getContentByType(${type}):`, error);
        return [];
    }
}
async function getContentBySlug(slug) {
    try {
        // Try blogs first
        const { data: blog, error: blogError } = await supabase.from("blogs").select("*").eq("slug", slug).eq("published", true).single();
        if (!blogError && blog) {
            return {
                ...blog,
                type: "blog"
            };
        }
        // Try microblogs
        const { data: microblog, error: microblogError } = await supabase.from("microblogs").select("*").eq("slug", slug).eq("published", true).single();
        if (!microblogError && microblog) {
            return {
                ...microblog,
                type: "microblog"
            };
        }
        return null;
    } catch (error) {
        console.error("Error fetching content by slug:", error);
        return null;
    }
}
async function getAllSlugs() {
    try {
        const blogs = await getContentByType("blog");
        const microblogs = await getContentByType("microblog");
        return [
            ...blogs,
            ...microblogs
        ].map((item)=>item.slug);
    } catch (error) {
        console.error("Error fetching all slugs:", error);
        return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsultantPagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/lib/supabase-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ConsultantPagesPage() {
    _s();
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsultantPagesPage.useEffect": ()=>{
            const fetchPages = {
                "ConsultantPagesPage.useEffect.fetchPages": async ()=>{
                    try {
                        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("consultant_pages").select("*").order("id", {
                            ascending: true
                        });
                        if (error) throw error;
                        setPages(data || []);
                    } catch (error) {
                        console.error("Error fetching consultant pages:", error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["ConsultantPagesPage.useEffect.fetchPages"];
            fetchPages();
        }
    }["ConsultantPagesPage.useEffect"], []);
    const filteredPages = pages.filter((p)=>p.page_name.toLowerCase().includes(searchTerm.toLowerCase()) || p.slug.toLowerCase().includes(searchTerm.toLowerCase()));
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Consultant Pages"
                        }, void 0, false, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Manage SEO meta for consultancy service pages"
                        }, void 0, false, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search pages...",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.target.value),
                    className: "input-search"
                }, void 0, false, {
                    fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            filteredPages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-state",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No consultant pages found"
                }, void 0, false, {
                    fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "data-table",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Page Name"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Slug"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Meta Title"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredPages.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "font-medium",
                                            children: page.page_name
                                        }, void 0, false, {
                                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-gray-600",
                                            children: page.slug
                                        }, void 0, false, {
                                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-gray-600",
                                            children: page.meta_title ? page.meta_title.length > 60 ? page.meta_title.slice(0, 60) + "…" : page.meta_title : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "actions",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/admin/consultant/${page.id}/edit`,
                                                className: "btn btn-small btn-secondary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdEdit"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 23
                                                    }, this),
                                                    " Edit"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, page.id, true, {
                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/consultant/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ConsultantPagesPage, "D9Ore+iWocxwvqsO3FelDw81NkE=");
_c = ConsultantPagesPage;
var _c;
__turbopack_context__.k.register(_c, "ConsultantPagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_wizms_nextjs-app_src_58666523._.js.map