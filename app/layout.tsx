import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
export const metadata: Metadata = { title: "Faiz Fathir Ghifari — Portfolio", description: "Portfolio personal Faiz Fathir Ghifari, Junior Developer dan IT Enthusiast.", icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" }, openGraph: { title: "Faiz Fathir Ghifari — Portfolio", description: "Portfolio personal dan project digital Faiz Fathir Ghifari.", type: "profile" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body className={`${inter.variable} ${bebas.variable} antialiased`}>{children}</body></html>; }
