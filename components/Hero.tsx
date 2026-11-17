"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const roles = profile.roles;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => { const target = roles[index]; const timer = window.setTimeout(() => { if (!deleting && text === target) return setDeleting(true); if (deleting && text === "") { setDeleting(false); return setIndex(value => (value + 1) % roles.length); } setText(target.slice(0, deleting ? text.length - 1 : text.length + 1)); }, text === target && !deleting ? 1400 : deleting ? 45 : 90); return () => window.clearTimeout(timer); }, [deleting, index, text]);
  return <section id="home" className="hero-landscape relative isolate flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-32 lg:px-10"><Image src="/awal.jpeg" alt="Faiz menikmati pemandangan alam di tepi danau" fill priority sizes="100vw" className="hero-landscape-image -z-30 object-cover object-center" /><div className="absolute inset-0 -z-20 bg-[#08090d]/15" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#08090d]/70 via-[#08090d]/20 to-transparent" /><div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#08090d]/80 via-transparent to-[#08090d]/5" /><div className="relative z-10 mx-auto w-full max-w-7xl"><Reveal><div className="max-w-2xl"><p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-violet-300"><span className="h-px w-8 bg-violet-400" /> Welcome to my portfolio</p><h1 className="max-w-3xl text-5xl font-bold leading-[.92] tracking-[-.06em] text-white sm:text-7xl lg:text-[7rem]">Membangun <span className="accent-gradient">pengalaman</span> digital.</h1><div className="mt-8 flex items-center gap-3 text-lg text-slate-200"><span className="text-violet-300">/</span>{text}<span className="h-5 w-px animate-pulse bg-violet-300" /></div><p className="mt-6 max-w-md text-sm leading-7 text-slate-300">{profile.summary}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:-translate-y-1">Explore portfolio <ArrowUpRight size={15} /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-violet-300/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-violet-500/15">Hubungi saya <ArrowUpRight size={15} /></a></div></div></Reveal><div className="mt-16 flex items-end justify-between border-t border-white/20 pt-4 text-[10px] uppercase tracking-[.2em] text-white/60"><span>Personal portfolio / 2026</span><span className="hidden sm:block">Scroll to explore ↓</span></div></div><a href="#about" aria-label="Scroll ke About" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-violet-300 sm:hidden"><ArrowDown /></a></section>;
}
