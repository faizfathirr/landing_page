"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const links = [["Tentang", "about"], ["Keahlian", "skills"], ["Portofolio", "portfolio"], ["Kontak", "contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4"><nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6" aria-label="Navigasi utama"><a href="#home" className="text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>MyPortfolio<span className="text-cyan-300">.</span></a><div className="hidden items-center gap-7 md:flex">{links.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm text-slate-300 transition hover:text-white">{label}</a>)}<button onClick={toggleTheme} aria-label="Ganti tema" className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">{light ? <Sun size={18} /> : <Moon size={18} />}</button></div><button className="rounded-xl p-2 md:hidden" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></nav>{open && <div className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-white/10">{label}</a>)}<button onClick={toggleTheme} aria-label="Ganti tema" className="mt-1 flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/10">{light ? <Sun size={17} /> : <Moon size={17} />} {light ? "Mode gelap" : "Mode terang"}</button></div>}</header>;
}
