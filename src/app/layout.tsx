import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://allmoneycard.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AllMoneyCard — Virtual Card for global online payments",
  description:
    "Open a virtual Mastercard in minutes, top up your balance and pay online with USD, EUR and GEL. Apple Pay & Google Pay ready. Available on Telegram, iOS and Android.",
  keywords: [
    "virtual card",
    "online payments",
    "Mastercard",
    "Apple Pay",
    "Google Pay",
    "USDT top up",
    "AllMoneyCard",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AllMoneyCard — Virtual Card for global online payments",
    description:
      "Open a virtual Mastercard in minutes and pay online with USD, EUR and GEL.",
    url: SITE_URL,
    siteName: "AllMoneyCard",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AllMoneyCard — Virtual Card for global online payments",
    description:
      "Open a virtual Mastercard in minutes and pay online with USD, EUR and GEL.",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface text-ink antialiased" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
