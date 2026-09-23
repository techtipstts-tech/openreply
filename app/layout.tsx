import type { Metadata, Viewport } from "next";
import { Huninn } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { htmlLang } from "@/lib/i18n";
import "./globals.css";

// justfont's rounded Traditional Chinese face (粉圓). It ships one weight;
// bold text is synthesized by the browser. Only the Latin slice is preloaded:
// the Chinese glyphs are split into unicode-range files the browser fetches
// on demand, so a page downloads just the characters it actually shows.
const huninn = Huninn({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-huninn",
  // next/font has no metric overrides on file for Huninn yet, so it cannot
  // build a size-adjusted fallback anyway; the build still logs a one-line
  // "Skipping generating a fallback font" note, which is expected.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "OpenReply - Open source Instagram comment-to-DM automation",
  description:
    "A free, self-hosted ManyChat alternative. Send an Instagram DM automatically when someone comments a keyword on your post or reel, using the official Meta API.",
  keywords: [
    "instagram automation",
    "comment to DM",
    "instagram private replies",
    "social commerce",
    "manychat alternative",
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "OpenReply",
    // Dark status-bar text: the app now sits on a light mint ground.
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3faf5",
  width: "device-width",
  initialScale: 1,
  // Installed on iOS the app owns the full screen, notch included; the safe
  // area insets below keep content clear of the system UI.
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang} className={`h-full dark ${huninn.variable}`}>
      <body
        className="min-h-full bg-background text-foreground font-sans antialiased"
        // Clears the home indicator when installed; 0 everywhere else.
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
