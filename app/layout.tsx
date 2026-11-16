import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Faiz Fathir Ghifari — IT Enthusiast",
  description: "Profil pribadi Faiz Fathir Ghifari, mahasiswa dan IT Enthusiast yang membuat website modern dan responsif.",
  openGraph: {
    title: "Faiz Fathir Ghifari — IT Enthusiast",
    description: "Kenali karya, keahlian, dan perjalanan belajar Faiz Fathir Ghifari.",
    type: "profile",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" suppressHydrationWarning><body className={`${plusJakartaSans.variable} antialiased`}>{children}</body></html>;
}
