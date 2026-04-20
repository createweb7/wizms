(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/wizms/nextjs-app/src/components/ZendeskChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZendeskChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/wizms/nextjs-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ZendeskChat() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$wizms$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZendeskChat.useEffect": ()=>{
            // Check if not on mobile device
            const ua = navigator.userAgent.toLowerCase();
            const platformName = ua.match(/ip(?:ad|od|hone)/) ? "ios" : (ua.match(/(?:webos|android)/) || [
                "other"
            ])[0];
            const isMobile = /ios|android|webos/.test(platformName);
            if (!isMobile) {
                // Load Zopim chat script
                window.$zopim || ({
                    "ZendeskChat.useEffect": function(d, s) {
                        const z = window.$zopim = ({
                            "ZendeskChat.useEffect": function(c) {
                                z._.push(c);
                            }
                        })["ZendeskChat.useEffect"];
                        const $ = z.s = d.createElement(s);
                        const e = d.getElementsByTagName(s)[0];
                        z.set = ({
                            "ZendeskChat.useEffect": function(o) {
                                z.set._.push(o);
                            }
                        })["ZendeskChat.useEffect"];
                        z._ = [];
                        z.set._ = [];
                        $.async = true;
                        $.setAttribute("charset", "utf-8");
                        $.src = "https://v2.zopim.com/?5c4pgk1ZMGgtPIGy8Xf2IuNRoiaA8zIz";
                        z.t = +new Date();
                        $.type = "text/javascript";
                        e.parentNode.insertBefore($, e);
                    }
                })["ZendeskChat.useEffect"](document, "script");
            }
        }
    }["ZendeskChat.useEffect"], []);
    return null;
}
_s(ZendeskChat, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ZendeskChat;
var _c;
__turbopack_context__.k.register(_c, "ZendeskChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_wizms_nextjs-app_src_components_ZendeskChat_tsx_3f9b32ba._.js.map