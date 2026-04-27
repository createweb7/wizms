import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ZendeskChat from "@/components/ZendeskChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WIZ Management Solutions | ISO Certification Consultants",
  description:
    "Expert ISO certification consulting services in Dubai, UAE. Quality Management Systems, Environmental Management, Occupational Health & Safety, and Information Security.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical CDN origins */}
        <link rel="preconnect" href="https://www.wizms.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />

        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
        <ZendeskChat />
      </body>
    </html>
  );
}
