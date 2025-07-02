import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "UNLIMITED SAMGYUPSAL - Authentic Samgyupsal in the Manila Philippines",
  description:
    "Experience the best Korean BBQ samgyupsal in the Philippines. Fresh marinated pork belly, unlimited banchan, and family-friendly atmosphere.",
  openGraph: {
    title:
      "UNLIMITED SAMGYUPSAL - Authentic Samgyupsal in the Manila Philippines",
    description:
      "Experience the best Korean BBQ samgyupsal in the Philippines. Fresh marinated pork belly, unlimited banchan, and family-friendly atmosphere.", // Reuse the same description
    images: [
      {
        url: "/samgyupsal-classic.jpg",
        alt: "A delicious unlimited samgyupsal with side dishes in Manila Philippines",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
