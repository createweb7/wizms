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
"[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ISO50001Page,
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
    const page = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConsultantPageBySlug"])('iso-50001-certification-consultants-uae');
    return {
        title: page?.meta_title || undefined,
        description: page?.meta_description || undefined,
        keywords: page?.meta_keywords || undefined
    };
}
function ISO50001Page() {
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
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-semibold",
                                        children: "EnMS ISO 50001 Certification Consultants in UAE"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                        lineNumber: 37,
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-4xl font-bold text-gray-900 mb-6",
                                                    children: "ISO 50001 Certification Consultant in Dubai, UAE"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4 leading-relaxed",
                                                        children: "ISO 50001 is the International standard that specifies the requirements of Energy Management System (EMS). ISO 50001 consultants indicates the prerequisites for establishing, implementing, maintaining and improving an energy management system."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: "The main purpose of implementing ISO 50001 is to empower an organization to follow a precise methodology in achieving continual improvement of energy performance, including energy security, energy efficiency, energy use and consumption. The ISO 50001 mainly helps the organizations to reduce the usage of energy. Therefore, cost of energy and greenhouse gas emissions are reduced automatically."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "Energy Management System(EnMS) Consultants in UAE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4 leading-relaxed",
                                                        children: [
                                                            "An energy management system(EnMS) integrates the existing business system with energy management to reduce the usage of energy and to improve the energy performance. Governments are currently executing various approaches to accelerate the industry to obtain these systems, such as promoting compliance with the ISO 50001 energy management standard. ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/benefits-of-iso-50001-enms-certification-in-dubai",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "EnMS ISO 50001 benefits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 370
                                                            }, this),
                                                            " the organization and increases the profit of the company."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: [
                                                            "By adopting the ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/best-energy-management-practices-for-iso-50001-certification",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "EnMS ISO 50001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 37
                                                            }, this),
                                                            " standards, the company will be profited on expanding the potential and execute changes on the everyday operational methods. Commonly, the Energy Management Systems combines the best practices on energy monitoring, project management, and energy awareness. The approach will profit the organization on empowering noteworthy energy savings that must be continually monitored to determine the energy waste and reduce the irregularities."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "ISO 50001 Certification in Dubai, UAE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4 leading-relaxed",
                                                        children: [
                                                            "ISO 50001 Certification in Dubai, UAE has a High-Level Structure (HLS) and depends on the quality standard of ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/iso-9001-certification-consultants-uae",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "ISO 9001 certification in UAE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 131
                                                            }, this),
                                                            " and ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/iso-14001-certification-consultants-uae",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "ISO 14001 certification in Dubai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 271
                                                            }, this),
                                                            " environmental standards. ISO 50001 Certification in Dubai, UAE gives guidance of usage, and get ISO 50001 certificate from leading ISO certification consultant in Dubai, UAE. ISO 50001 certification in Dubai, UAE is advantages for companies engaged in manufacturing and services all around the world. ISO 50001 Certification UAE, Dubai will set up a framework for industrial plants, institutional, commercial and governmental facilities and whole associations to manage energy."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: [
                                                            "Wizms, best ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/iso-certification-in-uae",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "ISO certification consultant in Dubai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 33
                                                            }, this),
                                                            " has listed down the factors that empowers organizations to change their current energy and environmental management systems into a methodical environmental management system:"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 92,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Developing or updating the company policies that helps to use the energy efficiently."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 93,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Determining the characteristic values."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 97,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Perform data analysis of energy consumption in all significant zones."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 104,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Estimation of results."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Monitor the measures."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "ISO 50001: 2018 Energy Management Systems in Dubai, UAE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4 leading-relaxed",
                                                        children: "ISO 50001:2018 is a new standard created in 2011 for the consistent improvement of the organization similar to ISO 9001 and ISO 14001. The ISO 50001 certification insists the organization to implement ISO 50001 energy management system that includes energy policy and energy requirements. Energy related issues can be figured out using ISO 50001 energy standard. ISO 50001 certification must meet all the energy requirements of the organization."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: [
                                                            "ISO 50001 Certification can be implemented independently, or it can be integrated with ISO 9001, ISO 14001, ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/iso-45001-certification-consultants-uae",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "ISO 45001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 129
                                                            }, this),
                                                            ", ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/iso-18001-certification-consultants-uae",
                                                                className: "text-blue-600 hover:text-blue-800",
                                                                children: "OHSAS 18001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 247
                                                            }, this),
                                                            ". ISO 50001 Certification in Dubai can be applied to all elements affecting energy performance which might be checked by the organization."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "Reason to choose Wizms ISO 50001 Certification Consultants in Dubai, UAE, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: "Wizms, ISO 50001 Certification Consultants will keep up the ISO 50001 certification process hassle-free. ISO 50001 Certification can be implemented within 4 to 6 weeks depending upon the size of the organization."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Reduces the time to get ISO 50001 Certification in Dubai."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 134,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Reduces the ISO 50001 Certification cost"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "Manage your EnMS 50001 related documents."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "24*7 support is provided in order to help the organization to implement ISO 50001 energy management system"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                        className: "text-amber-600 shrink-0 mt-1 text-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700",
                                                                        children: "ISO 50001 certification process is implemented faster and simpler"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-4",
                                                        children: "Gain from our ISO 50001 Certification Consultants in Dubai, UAE, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "Our ISO 50001 certification consultants have adequate knowledge and hand full of experience in implementing ISO 50001 certification in Dubai, UAE. Wizms, best ISO certification consultant can offer all types of services to get EnMS ISO 50001. Apart from ISO 50001, we are ready to certify ISO 9001, ISO 14001, ISO 45001, OHSAS 18001 and their combinations. By achieving ISO 50001 certification, organization can build trust among the customers, suppliers, clients. Organizations reputation is increased when compared to other companies in Dubai, UAE."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mb-6",
                                                        children: "FAQ ISO 50001 Certification in Dubai, UAE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                                                children: faqStyle
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What is the value of ISO 50001 Certification? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 171,
                                                                                columnNumber: 71
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "In the business world, a famous status is that you cannot manage what you do not measure. This guideline applies to the universe of energy management like a zone of developing interest and concern to endeavours because of its capability to help the control costs, support energy productivity, improve environmental quality and upgrade competitiveness."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "For what reason should my organization care about ISO 50001:2018? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 180,
                                                                                columnNumber: 91
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: [
                                                                            "Energy is a crucial piece of an association's cycle and can be one of the biggest manageable expenses, depending upon the activities. Associations amplify the use of their energy sources, and energy related resources dependent on improved energy performance. ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "/iso-50001-certification-consultants-uae",
                                                                                className: "text-blue-600 hover:text-blue-800",
                                                                                children: "ISO 50001:2018 certification in Dubai"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 183,
                                                                                columnNumber: 284
                                                                            }, this),
                                                                            " gives a model to associations to have constructive outcome towards reducing exhaustion of energy resources."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What components will impact the use of ISO 50001? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 189,
                                                                                columnNumber: 75
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "ISO 50001 certification in UAE is relies upon elements such as, the development of corporate maintainability programs and the spread of energy management principles along with the manufacturing flexibly chain. ISO 50001 consultancy in UAE helps the organizations may likewise discover the energy and carbon reduction attainable through ISO 50001 standard progressively significant."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What sort of impacts will ISO 50001 have? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 198,
                                                                                columnNumber: 67
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "ISO 50001 is intended to be used by modern offices, structures, and different organizations. It could impact up to 60% of the world's energy used across numerous economic areas."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "Does my organization should be certified to ISO 50001:2018 to improve our energy management? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 207,
                                                                                columnNumber: 118
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "No. Organizations can find a way to begin better energy management without getting guaranteed. By the by, accreditation to ISO 50001:2018 gives a coordinated methodology that fuses energy management and nonstop upgrades in energy performance over the long haul."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What sorts of experts can help my association to implement ISO 50001? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 216,
                                                                                columnNumber: 95
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: [
                                                                            "Wizms, leading ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "/iso-50001-certification-consultants-uae",
                                                                                className: "text-blue-600 hover:text-blue-800",
                                                                                children: "ISO 50001 Certification Consultants in UAE"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 219,
                                                                                columnNumber: 40
                                                                            }, this),
                                                                            " are experts in ISO 50001:2015 certification, training and implementation in Dubai. We offer ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "/",
                                                                                className: "text-blue-600 hover:text-blue-800",
                                                                                children: "ISO consulting service in Dubai"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 219,
                                                                                columnNumber: 282
                                                                            }, this),
                                                                            " to organizations all over the UAE in the implementation of the ISO 50001 energy management system within any organization. Among the list of iso certification companies in uae, WIZMS offers ISO 50001 consulting services in and around Dubai."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "Would an organization be able to be certified to ISO 50001:2018 without having ISO 14001:2015 certification? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 225,
                                                                                columnNumber: 134
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "Indeed ISO 50001:2018 has been created as an independent management system. If energy is your association's most significant area that affects the environment, then it may be more seize to take an ISO 50001:2018 as an initial step while in transit to greater environmental responsibility to your partners."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                                className: "border border-gray-200 rounded-lg p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                        className: "font-semibold text-gray-900 cursor-pointer flex items-center justify-between",
                                                                        children: [
                                                                            "What are ISO 50001 internal audit checklist? ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdKeyboardArrowDown"], {
                                                                                className: "text-amber-600 text-xl faq-icon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 70
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 mt-4",
                                                                        children: "ISO 50001 internal audit checklist contains:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "space-y-2 mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "flex gap-3 items-start",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                                        className: "text-amber-600 shrink-0 text-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 241,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-700",
                                                                                        children: "Commitment and Policy"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 242,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 240,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "flex gap-3 items-start",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                                        className: "text-amber-600 shrink-0 text-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 245,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-700",
                                                                                        children: "Planning"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 246,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 244,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "flex gap-3 items-start",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                                        className: "text-amber-600 shrink-0 text-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 249,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-700",
                                                                                        children: "Implementation"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 250,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 248,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "flex gap-3 items-start",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                                        className: "text-amber-600 shrink-0 text-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 253,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-700",
                                                                                        children: "Checking or Auditing"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 254,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 252,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "flex gap-3 items-start",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                                                                                        className: "text-amber-600 shrink-0 text-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 257,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-700",
                                                                                        children: "Review the Energy Management System"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                        lineNumber: 258,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                                lineNumber: 256,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                    lineNumber: 51,
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
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 270,
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
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Quality Management"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 272,
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
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Environmental Management"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/iso-45001-certification-consultants-uae",
                                                        className: "block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-900",
                                                                children: "ISO 45001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Health & Safety"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/iso-18001-certification-consultants-uae",
                                                        className: "block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-900",
                                                                children: "ISO 18001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "OHSAS Occupational Health & Safety"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 p-6 bg-linear-to-r from-amber-500 to-amber-600 rounded-lg text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold mb-2",
                                                        children: "Need Help?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm mb-4",
                                                        children: "Get your ISO 50001 Energy Management certification in 4-6 weeks."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+971552774123",
                                                        className: "block text-center bg-white text-amber-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2",
                                                        children: "Call Now: +971 55 277 4123"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:mahendran@wizms.net",
                                                        className: "block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-amber-600 transition",
                                                        children: "Email: mahendran@wizms.net"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$EnquiryForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                serviceType: "ISO 50001 - Energy Management System",
                bgColor: "from-amber-600 to-amber-700"
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                children: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline: 'ISO 50001 Certification Consultants in Dubai, UAE | Energy Management System | Wizms',
                    description: 'ISO 50001 Certification Consultants in Dubai, UAE. Professional Energy Management System consultancy and certification services in Dubai, Sharjah, Abu Dhabi and other UAE Emirates.',
                    author: {
                        '@type': 'Organization',
                        name: 'Wizms',
                        url: 'https://wizms.net'
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'Wizms',
                        url: 'https://wizms.net'
                    }
                })
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/app/(public)/iso-50001-certification-consultants-uae/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c1c8d531._.js.map