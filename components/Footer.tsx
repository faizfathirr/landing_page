import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Instagram", href: profile.socials.instagram, icon: Instagram },
];

export default function Footer() {
  return <footer className="border-t border-white/10 px-6 py-7 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center text-xs text-slate-500 sm:flex-row sm:text-left"><p>© 2026 Faiz Fathir Ghifari.</p><div className="flex items-center gap-2"><div className="flex items-center gap-2">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Buka ${label} Faiz`} className="rounded-xl border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"><Icon size={16} /></a>)}</div><a href="#home" aria-label="Kembali ke atas" className="rounded-xl border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"><ArrowUp size={16} /></a></div></div></footer>;
}
