"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $zopim?: any;
  }
}

export default function ZendeskChat() {
  useEffect(() => {
    // Check if not on mobile device
    const ua = navigator.userAgent.toLowerCase();
    const platformName = ua.match(/ip(?:ad|od|hone)/)
      ? "ios"
      : (ua.match(/(?:webos|android)/) || ["other"])[0];
    const isMobile = /ios|android|webos/.test(platformName);

    if (!isMobile) {
      // Load Zopim chat script
      (window as any).$zopim ||
        (function (d: any, s: any) {
          const z: any = ((window as any).$zopim = function (c: any) {
            z._.push(c);
          });
          const $ = (z.s = d.createElement(s));
          const e = d.getElementsByTagName(s)[0];
          z.set = function (o: any) {
            z.set._.push(o);
          };
          z._ = [];
          z.set._ = [];
          $.async = true;
          $.setAttribute("charset", "utf-8");
          $.src =
            "https://v2.zopim.com/?5c4pgk1ZMGgtPIGy8Xf2IuNRoiaA8zIz";
          z.t = +new Date();
          $.type = "text/javascript";
          e!.parentNode!.insertBefore($, e);
        })(document, "script");
    }
  }, []);

  return null;
}
