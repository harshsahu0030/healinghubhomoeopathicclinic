import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: siteConfig?.name,
  description: siteConfig?.desc,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen w-full">{children}</body>
    </html>
  );
}
