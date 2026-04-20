module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/projects/wizms/nextjs-app/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/projects/wizms/nextjs-app/src/app/(public)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/app/(public)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/projects/wizms/nextjs-app/src/lib/supabase-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://dldlsdtguqqybwdwqhzq.supabase.co") || "";
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZGxzZHRndXFxeWJ3ZHdxaHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDk4OTYsImV4cCI6MjA4MjkyNTg5Nn0.wbCRGmrNA3NzN6jL-1YQdMeSp-MtCehRvghSp9uzc1s") || "";
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
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
}),
"[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx <module evaluation>", "default");
}),
"[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx", "default");
}),
"[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$EnquiryForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$EnquiryForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$EnquiryForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ISO22000Page,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/lib/supabase-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/react-icons/md/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$EnquiryForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/components/EnquiryForm.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const faqStyle = `
  details > summary::-webkit-details-marker {
    display: none;
  }
  details > summary {
    list-style: none;
  }
  details[open] > summary .faq-icon {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
  details > summary .faq-icon {
    transition: transform 0.3s ease;
  }
`;
async function generateMetadata() {
    const page = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConsultantPageBySlug"])('iso-22000-certification-consultants-uae');
    return {
        title: page?.meta_title || undefined,
        description: page?.meta_description || undefined,
        keywords: page?.meta_keywords || undefined
    };
}
function ISO22000Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center gap-2 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "hover:text-gray-900 hover:underline",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-semibold",
                                        children: "FSMS ISO 22000 Certification Consultants in UAE"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-sm p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-bold text-gray-900 mb-4",
                                                children: "ISO 22000 & HACCP Certification in Dubai, UAE"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-gray-700 leading-relaxed mb-4",
                                                children: [
                                                    "ISO 22000 Certification in Dubai, UAE can be obtained in 4 - 6 weeks with one of the UAE's most trusted and largest ISO certification consultants in Dubai,",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/iso-consultant-in-abudhabi",
                                                        className: "text-blue-600 hover:text-blue-800",
                                                        children: "Abu Dhabi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this),
                                                    ",",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/iso-certification-sharjah",
                                                        className: "text-blue-600 hover:text-blue-800",
                                                        children: "Sharjah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this),
                                                    ", Ras al-Khaimah, Ajman, Al Ain and Fujairah."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 mb-8",
                                                children: "ISO 22000 Food Safety Management System Certificate is proposed for companies looking to set up a more focused, intelligent, coordinated FSMS than is regularly needed by law. The standard requires meeting any relevant food safety related to statutory and administrative criteria into its food safety framework."
                                            }, void 0, false, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "ISO 22000 Certification in Dubai:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "ISO 22000 Certification in Dubai, UAE and HACCP training in Dubai sets up food safety management system. Our ISO 22000 consulting and certification services ISO 22000 in the UAE can be obtained fastest and simplest way."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "ISO 22000 and FSMS 22000 are Food Safety Management Systems Certification plans that confirm the customers that the industry has implemented an effective plan of food safety management system."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "ISO 22000 certification is recognized globally and is developing in popularity. The number of ISO 22000 certifications has increased every year. ISO food safety certification helps to prevent disease and expensive, harming reviews of products. Food safety management system certificate will help to improve the popularity of the brand name across worldwide."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "ISO 22000 standards:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "ISO 22000 is an International Standard which defines the obligations for food safety management systems. Apply ISO 22000 food safety standards to all organizations that engage with the food chain, to guarantee the food safety system. Becoming certified to ISO 22000 provides an organization to prove to its customers that they have a food safety management system in place. That gives the customer trust in the product. This is becoming stronger and more valuable as customers request safe food and food processors require that ingredients got from their suppliers to be safe."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "The International Organization for Standardization (ISO) formed the Food Safety Management System Certification ISO 22000. ISO and its member countries utilized the Quality Management System strategy and custom-fitted it to apply to Food Safety, incorporating the generally used and demonstrated HACCP standards and Good Manufacturing Standards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "The ISO 22000 standard has responsibilities for Food Safety Management Systems procedures, processes, and requirements that the company implements prerequisite programs and HACCP."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "Unique to some of the other Food Safety Management Systems Certification programs such as FSSC 22000 and SQF, the ISO 22000 standards do not have explicit requirements for prerequisite programs however requires that the company classifies and implements the appropriate programs. This makes it more adaptable, and food organizations of any kind can implement and get ISO 22000 certification."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "ISO 22000 is not a Worldwide Food Safety Initiative (GFSI) benchmarked standard. This indicates that if a specific customer base or market is seeking for a GFSI Recognized standard you should seem at FSSC 22000, which is the most related to ISO 22000 or one of the other GFSI approved certification systems."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "ISO 22000:2005 Standards"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "ISO 22000:2005 sets out the prerequisites for a food safety management system. It maps out what the industry needs to do, to exhibit its ability to control food safety risks to make sure that food is safe. It is suitable for industries required in food chains such as food farmers, producers, retailers, storage operators, and restaurants. It is also beneficial to organizations associated with other food-related products, for example, ingredients, packaging, cleaning specialists."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "ISO 22000:2018 standards"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "ISO 22000:2018 is the recently amended International Food Safety standard, intended to harmonize on a worldwide scale the requirements for food safety management for businesses within the food chain."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "ISO 22000 connects and enhancements the core elements of ISO 9001 and HACCP to provide a successful framework for the development, implementation, assessing for regular improvement to document the Food Safety Management System inside the context of the association's overall business hazards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "ISO 22000 certification cost in Dubai"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "ISO 22000 certification cost in Dubai depends upon the organization, number of employees, annual turnover. Wizms will provide the ISO 22000 food safety certification at an affordable price and quick services."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "Who needs ISO 22000 Certification in Dubai?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "ISO 22000 certification is for all those involved in the food supply chain. This includes farmers, transporters, manufacturers, retailers, and restaurants."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "The ISO 22000:2005 sets out the requirements for a food safety management system. It maps out what an organization needs to do, to demonstrate its ability to control food safety hazards to make sure that food is safe. It is suitable for industries involved in the food chain such as animal feed producers, food producers, transport and storage operators, hotels, restaurants, etc. It is also beneficial to companies involved in other food-related products such as additives, ingredients, packaging, cleaning agents, etc."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "Why ISO 22000 Certification?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "By getting ISO 22000 certified, it declares to potential customers and trading partners that the organization is capable enough to meet the highest global standards of food hygiene and safety."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10 bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "HACCP Certification in UAE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: [
                                                            "HACCP Certification in Dubai, UAE requires legal authorization and assurance on the safety of products. FSMS is an important concern for the organization as it may affect human health. The",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/haccp-certification-in-uae",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "HACCP certification in UAE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this),
                                                            ' ',
                                                            "offers 100% assurance on the safety of the product. HACCP certification in Dubai is based on Identification, Control and Elimination of the Hazards and Risk Factors that adversely affect the products. Our",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/haccp-consultant-in-uae",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "HACCP Consultant in UAE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, this),
                                                            ' ',
                                                            "will provide in-depth analysis in HACCP certification and assist your organization in establishing the international standard of hygiene."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-gray-900 mb-3",
                                                        children: "Benefits to Organisation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 text-gray-700 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Introduction of internationally recognized"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 140,
                                                                                columnNumber: 123
                                                                            }, this),
                                                                            " processes to the organization activities."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Give suppliers, stakeholders, and customer's confidence in the ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "hazard control measures"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 141,
                                                                                columnNumber: 191
                                                                            }, this),
                                                                            " in the organization."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Follow ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "hazard controls"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 142,
                                                                                columnNumber: 130
                                                                            }, this),
                                                                            " in place across your ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "supply chain"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 142,
                                                                                columnNumber: 184
                                                                            }, this),
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Introduce ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "transparency"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 143,
                                                                                columnNumber: 133
                                                                            }, this),
                                                                            " around accountability and responsibilities."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Continually improve and update"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 144,
                                                                                columnNumber: 123
                                                                            }, this),
                                                                            " your systems."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Increase in ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "company profits"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 145,
                                                                                columnNumber: 135
                                                                            }, this),
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-gray-900 mb-3",
                                                        children: "Benefits to Customer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 text-gray-700 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Capable enough to provide ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "consistent food products"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 150,
                                                                                columnNumber: 149
                                                                            }, this),
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Reduces the occurrence of ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "food-borne disease"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 151,
                                                                                columnNumber: 149
                                                                            }, this),
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-cyan-600 shrink-0 mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 60
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Assurance"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 152,
                                                                                columnNumber: 123
                                                                            }, this),
                                                                            " of quality in food products."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 117
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-gray-900 mb-3",
                                                        children: "Benefits to Employees"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 text-gray-700 mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex gap-2 items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                    className: "text-cyan-600 shrink-0 mt-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 60
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "Improves the quality and safety"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                            lineNumber: 157,
                                                                            columnNumber: 123
                                                                        }, this),
                                                                        " of jobs in the food industry."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 117
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "As ISO 22000 consultants, we have vast knowledge and experience in the food industry. We will frame various comprehensive strategies to inculcate your organization to comply with Food Safety Management System standards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-6",
                                                        children: "FAQ ISO 22000 Certification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                                                children: faqStyle
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                open: true,
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What is ISO 22000 Certification? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 170,
                                                                                columnNumber: 154
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "ISO 22000 Certification is an international standard which is used to indicate the requirements of Food Safety Management System (FSMS) whereas companies involved in food safety need to show its capacity to control the food safety hazards, so as to guarantee that food is secure at the time of human utilization."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "For what reason do large organizations uphold FSSC 22000? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 174,
                                                                                columnNumber: 179
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "Since FSSC 22000 is ISO 17021 based, FSSC ISO 22000 consultant in Dubai permits provision for site examining, thusly all the sites need not to be reviewed. This considers cost savings to huge multi-site organization."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "Why ISO 22000:2005 is required? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 178,
                                                                                columnNumber: 153
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "In recent days, more food organizations need Food Safety Management System. ISO 22000 standard in UAE is a fundamental one to get into new business sectors."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "Do I need an ISO 22000 certification consultant in Dubai? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 182,
                                                                                columnNumber: 179
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "You can get advice from autonomous ISO 22000 consultant in Dubai to implement your quality Management System, yet this can be costly. Wizms is the best ISO 22000 consultant in Dubai helps to sort those issues and provides a fine understanding and control over the system and gives a decent beginning stage to your business."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "Would you be able to guarantee that we will achieve certification quickly? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 186,
                                                                                columnNumber: 196
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "ISO 22000 consultant in UAE can guarantee that an organization can be certified successfully. However, you should have all the necessary system set up and if some other records are considered important to set up quality control. Do not worry, best ISO 22000 consultant in Dubai helps the organization until you accomplish ISO 22000 certification."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "Which associations can implement ISO 22000:2005 certification? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 190,
                                                                                columnNumber: 184
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "Associations which can implement ISO 22000:2005 are as follows:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc list-inside text-gray-700 mt-2 space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Food producing and fixing industry"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 193,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Food added substances"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 194,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Food transportation"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 195,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Packing food materials"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 196,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Selling of food (retail or discount)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Serving arranged food (general stores)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 198,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Creating food related Applications"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 199,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What are the requirements of ISO 22000? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 161
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "ISO 22000 certification requires you to assemble a Food Safety Management System."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc list-inside text-gray-700 mt-2 space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "To ensure a clean food environment."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 206,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "A Hazard Analysis and Critical Control Plan created to recognize, prevent and dispose of food hazards."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 207,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Set up Food Safety Management System to manage food safety all throughout your association."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 208,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Following the HACCP standards."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 209,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "How much does ISO 22000 Certification cost? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 213,
                                                                                columnNumber: 165
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "Organizations who implement the system with the best ISO 22000 consultant in Dubai might have the option to get certified easier at low cost. Feel free to contact us."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What is ISO 22000 internal audit checklist? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 217,
                                                                                columnNumber: 165
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "Organizations may take 3 to 9 months or more than that to finish their internal audit. When the system is set up and being utilized as a part of everyday business, an ISO 22000 consultant can perform the Certification Audit. If the reviewer finds that the system is consistent with the norm and is being followed all throughout the organization, they will suggest for ISO 22000 certification."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What is HACCP? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 221,
                                                                                columnNumber: 136
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "HACCP stands for Hazard Analysis and Critical Control Point. HACCP is a universally perceived system for diminishing the risk of safety hazards in food."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What are the requirements of HACCP? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 225,
                                                                                columnNumber: 157
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "HACCP System requires that the hazards are recognized and controlled to an extent. This incorporates chemical, biological or actual hazards. Any organization associated with the assembling, preparing or treatment of food items can utilize HACCP to limit or dispose of safety hazards in their item."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 226,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "Why use HACCP? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 136
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "Awareness towards food-borne sickness is increasing nowadays and hence the industries are driving towards the utilization of HACCP and HACCP based certification programs."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What are the 7 principles of HACCP? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 233,
                                                                                columnNumber: 157
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc list-inside text-gray-700 mt-4 space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Hazard Analysis."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 235,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Recognize the Critical Control Points."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 236,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Build up Critical Limits."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 237,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Build up Monitoring Procedures."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 238,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Build up Corrective Actions."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 239,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Build up Record Keeping Procedures."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 240,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Build up Verification Procedures."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 241,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "How long will it take to get ISO 22000 certification in UAE? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 245,
                                                                                columnNumber: 182
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "To get ISO 22000 certification in UAE, it will take nearly 3 to 15 days to finish the process."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What are the critical components of ISO 22000? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 249,
                                                                                columnNumber: 168
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc list-inside text-gray-700 mt-4 space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Involvement of the management team."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 251,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "Correspondence."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 252,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "The HACCP (Hazard Analysis and Critical Control Point) standards."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "System management."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 254,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 250,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "How does ISO 22000 integrate with a current HACCP training program in Dubai? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-cyan-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 258,
                                                                                columnNumber: 198
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: [
                                                                            "When you have HACCP certification in Dubai obtained from reputed HACCP consultant in Dubai, UAE, you may meet the ISO 22000 standard requirements for safety of foods explicitly, Clause 7, Planning and acknowledgment of safe items. The following conditions for ISO 22000 certification in Dubai needs Quality Management System components (Consistent with",
                                                                            ' ',
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "/iso-9001-certification-consultants-uae",
                                                                                className: "text-blue-600 hover:text-blue-800",
                                                                                children: "ISO 9001:2000 certification"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 261,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            ") and include:"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc list-inside text-gray-700 mt-2 space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "A correspondence plan."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 265,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "A management survey."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 266,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "A technique for nonstop improvement."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 267,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: "A technique for report and record control."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-sm p-6 sticky top-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900 mb-6",
                                                children: "Related Certifications"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/iso-9001-certification-consultants-uae",
                                                        className: "block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-900",
                                                                children: "ISO 9001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Quality Management"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/iso-14001-certification-consultants-uae",
                                                        className: "block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-900",
                                                                children: "ISO 14001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Environmental Management"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 p-6 bg-linear-to-r from-cyan-500 to-cyan-600 rounded-lg text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold mb-2",
                                                        children: "Need Help?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm mb-4",
                                                        children: "Get ISO 22000 Food Safety certification in 4-8 weeks."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+971552774123",
                                                        className: "block text-center bg-white text-cyan-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2",
                                                        children: "Call Now: +971 55 277 4123"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:mahendran@wizms.net",
                                                        className: "block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-cyan-600 transition",
                                                        children: "Email: mahendran@wizms.net"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$EnquiryForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                serviceType: "ISO 22000 - Food Safety Management System & HACCP",
                bgColor: "from-cyan-600 to-cyan-700"
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                children: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline: 'ISO 22000 Certification in Dubai, UAE | Food Safety Management | Wizms',
                    author: {
                        '@type': 'Organization',
                        name: 'Wizms',
                        url: 'https://wizms.net'
                    }
                })
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/app/(public)/iso-22000-certification-consultants-uae/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1536dd3e._.js.map