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
"[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MicroblogForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/lib/supabase-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MicroblogForm({ initialMicroblog }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadingImage, setUploadingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        slug: "",
        url: "",
        title: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        content: "",
        excerpt: "",
        published: false,
        publish_date: new Date().toISOString().split("T")[0],
        featured_image: "",
        featured_image_alt: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MicroblogForm.useEffect": ()=>{
            if (initialMicroblog) {
                setFormData({
                    ...initialMicroblog,
                    slug: initialMicroblog.slug || "",
                    url: initialMicroblog.url || "",
                    title: initialMicroblog.title || "",
                    meta_title: initialMicroblog.meta_title || "",
                    meta_description: initialMicroblog.meta_description || "",
                    meta_keywords: initialMicroblog.meta_keywords || "",
                    content: initialMicroblog.content || "",
                    excerpt: initialMicroblog.excerpt || "",
                    published: initialMicroblog.published ?? false,
                    publish_date: initialMicroblog.publish_date || new Date().toISOString().split("T")[0],
                    featured_image: initialMicroblog.featured_image || "",
                    featured_image_alt: initialMicroblog.featured_image_alt || ""
                });
            }
        }
    }["MicroblogForm.useEffect"], [
        initialMicroblog
    ]);
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const checked = e.target.checked;
        setFormData((prev)=>({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const generateSlug = (title)=>{
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    };
    const handleTitleChange = (e)=>{
        const title = e.target.value;
        setFormData((prev)=>({
                ...prev,
                title,
                slug: generateSlug(title)
            }));
    };
    const convertImageToWebp = async (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = (e)=>{
                const img = new Image();
                img.onload = ()=>{
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) {
                        reject(new Error("Failed to get canvas context"));
                        return;
                    }
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob((blob)=>{
                        if (blob) {
                            resolve(blob);
                        } else {
                            reject(new Error("Failed to convert image"));
                        }
                    }, "image/webp", 0.8);
                };
                img.onerror = ()=>reject(new Error("Failed to load image"));
                img.src = e.target?.result;
            };
            reader.onerror = ()=>reject(new Error("Failed to read file"));
            reader.readAsDataURL(file);
        });
    };
    const handleImageUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setUploadingImage(true);
        setError("");
        try {
            // Show instant preview of selected file
            const reader = new FileReader();
            reader.onload = (event)=>{
                const previewUrl = event.target?.result;
                setFormData((prev)=>({
                        ...prev,
                        featured_image: previewUrl
                    }));
            };
            reader.readAsDataURL(file);
            // Then convert and upload in background
            const webpBlob = await convertImageToWebp(file);
            console.log("Converted image to WebP, blob size:", webpBlob.size);
            // Create a unique filename
            const timestamp = Date.now();
            const fileName = `${timestamp}-${formData.slug || "image"}.webp`;
            console.log("Uploading file:", fileName);
            // Upload to Supabase Storage
            const { data, error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("microblogs").upload(fileName, webpBlob, {
                contentType: "image/webp",
                upsert: false
            });
            if (uploadError) {
                console.error("Upload error:", uploadError);
                setError(`Image upload failed: ${uploadError.message}`);
                throw uploadError;
            }
            if (!data) {
                throw new Error("No upload response from server");
            }
            console.log("Upload successful, file path:", data.path);
            // Get public URL
            const { data: publicUrlData } = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("microblogs").getPublicUrl(data.path);
            const imageUrl = publicUrlData?.publicUrl;
            console.log("Generated public URL:", imageUrl);
            if (!imageUrl) {
                throw new Error("Failed to generate public URL");
            }
            // Update form data with Supabase URL (replace client preview with server URL)
            setFormData((prev)=>{
                const updated = {
                    ...prev,
                    featured_image: imageUrl
                };
                console.log("Updated form data with server URL:", updated.featured_image);
                return updated;
            });
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : "Unknown error";
            console.error("Image upload error:", errorMsg, err);
            setError(`❌ Image upload failed: ${errorMsg}`);
        } finally{
            setUploadingImage(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            if (!formData.title || !formData.slug || !formData.content) {
                setError("Please fill in all required fields");
                setIsLoading(false);
                return;
            }
            // If image was deleted (empty string), and it was a Supabase URL, delete it from storage
            if (initialMicroblog?.featured_image && initialMicroblog.featured_image.startsWith("https://")) {
                if (!formData.featured_image || formData.featured_image === "") {
                    try {
                        // Extract filename from URL
                        const url = new URL(initialMicroblog.featured_image);
                        const pathname = url.pathname;
                        const filename = pathname.split("/").pop();
                        if (filename) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("microblogs").remove([
                                filename
                            ]);
                        }
                    } catch (err) {
                        console.error("Error deleting image from storage:", err);
                    // Continue with update even if file deletion fails
                    }
                }
            }
            if (initialMicroblog?.id) {
                // Update existing microblog
                const updateData = {
                    slug: formData.slug,
                    url: formData.url,
                    title: formData.title,
                    meta_title: formData.meta_title,
                    meta_description: formData.meta_description,
                    meta_keywords: formData.meta_keywords,
                    content: formData.content,
                    excerpt: formData.excerpt,
                    published: formData.published,
                    publish_date: formData.publish_date,
                    featured_image: formData.featured_image && formData.featured_image.trim() ? formData.featured_image : "",
                    featured_image_alt: formData.featured_image_alt && formData.featured_image_alt.trim() ? formData.featured_image_alt : ""
                };
                console.log("Updating microblog with data:", updateData);
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("microblogs").update(updateData).eq("id", initialMicroblog.id);
                if (updateError) {
                    console.error("Update error from Supabase:", updateError);
                    throw updateError;
                }
            } else {
                // Create new microblog
                const insertData = {
                    slug: formData.slug,
                    url: formData.url,
                    title: formData.title,
                    meta_title: formData.meta_title,
                    meta_description: formData.meta_description,
                    meta_keywords: formData.meta_keywords,
                    content: formData.content,
                    excerpt: formData.excerpt,
                    published: formData.published,
                    publish_date: formData.publish_date,
                    featured_image: formData.featured_image && formData.featured_image.trim() ? formData.featured_image : "",
                    featured_image_alt: formData.featured_image_alt && formData.featured_image_alt.trim() ? formData.featured_image_alt : ""
                };
                console.log("Creating microblog with data:", insertData);
                const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("microblogs").insert([
                    insertData
                ]);
                if (insertError) {
                    console.error("Insert error from Supabase:", insertError);
                    throw insertError;
                }
            }
            router.push("/admin/microblogs");
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to save microblog";
            console.error("Save error:", err);
            setError(errorMessage);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "admin-form",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert alert-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                lineNumber: 306,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Basic Information"
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "title",
                                children: "Title *"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "title",
                                name: "title",
                                value: formData.title,
                                onChange: handleTitleChange,
                                placeholder: "Enter microblog title",
                                required: true,
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "slug",
                                        children: "Slug *"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "slug",
                                        name: "slug",
                                        value: formData.slug,
                                        onChange: handleInputChange,
                                        placeholder: "microblog-title",
                                        required: true,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "url",
                                        children: "URL"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "url",
                                        name: "url",
                                        value: formData.url,
                                        onChange: handleInputChange,
                                        placeholder: "https://example.com",
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "content",
                                children: "Content *"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "content",
                                name: "content",
                                value: formData.content,
                                onChange: handleInputChange,
                                placeholder: "Enter microblog content",
                                rows: 8,
                                required: true,
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Featured Image"
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "featured_image",
                                children: "Upload Image (any format - will convert to WebP)"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                id: "featured_image",
                                accept: "image/*",
                                onChange: handleImageUpload,
                                disabled: isLoading || uploadingImage
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            uploadingImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#3b82f6",
                                    marginTop: "8px",
                                    fontWeight: "600",
                                    animation: "pulse 1.5s infinite"
                                },
                                children: "⏳ Converting and uploading image..."
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this),
                            !uploadingImage && formData.featured_image?.trim() && (formData.featured_image.startsWith("http") || formData.featured_image.startsWith("data:")) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#10b981",
                                    marginTop: "8px",
                                    fontWeight: "600"
                                },
                                children: "✅ Image uploaded successfully!"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    formData.featured_image?.trim() && (formData.featured_image.startsWith("http") || formData.featured_image.startsWith("data:")) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "12px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            margin: 0
                                        },
                                        children: "Image Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 423,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setFormData((prev)=>({
                                                    ...prev,
                                                    featured_image: "",
                                                    featured_image_alt: ""
                                                }));
                                        },
                                        style: {
                                            padding: "6px 12px",
                                            backgroundColor: "#ef4444",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "0.85rem",
                                            fontWeight: "600",
                                            transition: "all 0.3s ease"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.backgroundColor = "#dc2626";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.backgroundColor = "#ef4444";
                                        },
                                        children: "🗑️ Delete Image"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 424,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 415,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: "400px",
                                    padding: "16px",
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "8px",
                                    border: "2px solid #e2e8f0",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: formData.featured_image,
                                        alt: "Featured Preview",
                                        onError: (e)=>{
                                            console.error("Failed to load image:", formData.featured_image);
                                            e.currentTarget.style.display = "none";
                                            e.currentTarget.parentElement.innerHTML = `
                      <div style="color: #ef4444; padding: 16px; margin: 0; text-align: center;">
                        <p style="margin: 0 0 8px 0;"><strong>Failed to load image</strong></p>
                        <p style="margin: 0 0 12px 0; font-size: 0.85rem;">Your Supabase storage bucket may not be set to public.</p>
                        <p style="margin: 0; font-size: 0.8rem; color: #94a3b8;">Go to Supabase Console → Storage → Microblogs bucket → Make Public</p>
                      </div>
                    `;
                                        },
                                        onLoad: ()=>{
                                            console.log("Image loaded successfully:", formData.featured_image);
                                        },
                                        style: {
                                            maxWidth: "100%",
                                            maxHeight: "250px",
                                            borderRadius: "6px",
                                            display: "block",
                                            margin: "0 auto"
                                        }
                                    }, formData.featured_image, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.75rem",
                                            color: "#94a3b8",
                                            marginTop: "12px",
                                            wordBreak: "break-all",
                                            fontFamily: "monospace",
                                            textAlign: "left",
                                            maxHeight: "60px",
                                            overflow: "auto"
                                        },
                                        children: formData.featured_image
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 496,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 414,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "featured_image_alt",
                                children: "Image Alt Text"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "featured_image_alt",
                                name: "featured_image_alt",
                                value: formData.featured_image_alt,
                                onChange: handleInputChange,
                                placeholder: "Alt text for accessibility",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "SEO & Publishing"
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "meta_title",
                                children: "Meta Title"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "meta_title",
                                name: "meta_title",
                                value: formData.meta_title,
                                onChange: handleInputChange,
                                placeholder: "SEO title",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "meta_description",
                                children: "Meta Description"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "meta_description",
                                name: "meta_description",
                                value: formData.meta_description,
                                onChange: handleInputChange,
                                placeholder: "SEO description",
                                rows: 3,
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "meta_keywords",
                                children: "Meta Keywords"
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "meta_keywords",
                                name: "meta_keywords",
                                value: formData.meta_keywords,
                                onChange: handleInputChange,
                                placeholder: "keyword1, keyword2, keyword3",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "publish_date",
                                        children: "Publish Date"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        id: "publish_date",
                                        name: "publish_date",
                                        value: formData.publish_date,
                                        onChange: handleInputChange,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 573,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group checkbox",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "published",
                                        name: "published",
                                        checked: formData.published,
                                        onChange: handleInputChange,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 584,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "published",
                                        children: "Published"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        disabled: isLoading,
                        children: isLoading ? "Saving..." : initialMicroblog ? "Update Microblog" : "Create Microblog"
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 598,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/admin/microblogs",
                        className: "btn btn-outline",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
                lineNumber: 597,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, this);
}
_s(MicroblogForm, "q9jfRwWEZaDudffF5NTngcchCCo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MicroblogForm;
var _c;
__turbopack_context__.k.register(_c, "MicroblogForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditMicroblogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/lib/supabase-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$admin$2f$MicroblogForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/src/components/admin/MicroblogForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function EditMicroblogPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const [microblog, setMicroblog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditMicroblogPage.useEffect": ()=>{
            const fetchMicroblog = {
                "EditMicroblogPage.useEffect.fetchMicroblog": async ()=>{
                    try {
                        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$lib$2f$supabase$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("microblogs").select("*").eq("id", parseInt(id)).single();
                        if (error) throw error;
                        setMicroblog(data);
                    } catch (error) {
                        console.error("Error fetching microblog:", error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["EditMicroblogPage.useEffect.fetchMicroblog"];
            fetchMicroblog();
        }
    }["EditMicroblogPage.useEffect"], [
        id
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    if (!microblog) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600",
                children: "Microblog not found"
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Edit Microblog"
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Update your microblog"
                    }, void 0, false, {
                        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$src$2f$components$2f$admin$2f$MicroblogForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                initialMicroblog: microblog
            }, void 0, false, {
                fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/wizms/nextjs-app/src/app/admin/microblogs/[id]/edit/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(EditMicroblogPage, "v20H3aFoNPtsbxKqZBcSDoQ5SLQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = EditMicroblogPage;
var _c;
__turbopack_context__.k.register(_c, "EditMicroblogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_wizms_nextjs-app_src_2916a086._.js.map