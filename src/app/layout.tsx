"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./grid.css";
import "./globals.css";
import "../icon/fontawesome/css/all.min.css";
import { Providers } from "@/lib/Providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Lấy pathname thay vì useRouter
  const isAdminPage = pathname?.startsWith("/admin");
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!isAdminPage && <Header />}
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
