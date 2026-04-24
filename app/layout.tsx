import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quackenworth | Educational Apps for K–12",
    template: "%s | Quackenworth",
  },
  description:
    "Quackenworth builds educational apps and websites for K–12 teachers and parents, covering elementary, middle school, and high school students.",
  openGraph: {
    siteName: "Quackenworth",
    title: "Quackenworth | Educational Apps for K–12",
    description:
      "Quackenworth builds educational apps and websites for K–12 teachers and parents, covering elementary, middle school, and high school students.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quackenworth | Educational Apps for K–12",
    description:
      "Quackenworth builds educational apps and websites for K–12 teachers and parents, covering elementary, middle school, and high school students.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://www.quackenworth.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
