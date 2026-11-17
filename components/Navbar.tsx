"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const links = [["Home", "home"], ["About", "about"], ["Experience", "experience"], ["Portfolio", "portfolio"], ["Contact", "contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const theme = () => { const next = !light; setLight(next); document.documentElement.classList.toggle("light", next); };
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5"><nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 sm:px-7" aria-label="Navigasi utama"><a href="#home" aria-label="Kembali ke beranda" onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-[.2em]">Faiz Fathir<span className="text-accent">.</span></a><div className="hidden items-center gap-6 md:flex">{links.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs text-slate-400 transition hover:text-accent">{label}</a>)}<button onClick={theme} aria-label="Ganti tema" className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-accent">{light ? <Sun size={16} /> : <Moon size={16} />}</button></div><button onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} className="rounded-full p-2"><span className="text-slate-200">{open ? <X size={19} /> : <Menu size={19} />}</span></button></nav>{open && <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 md:hidden">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/10">{label}</a>)}<button onClick={theme} className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/10">{light ? <Sun size={16} /> : <Moon size={16} />} {light ? "Mode gelap" : "Mode terang"}</button></div>}</header>;
}
