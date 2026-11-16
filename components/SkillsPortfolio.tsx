import Image from "next/image";
import { Code2, Figma, Layers, Smartphone, Wrench } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const groupIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={18} />,
  Backend: <Wrench size={18} />,
  Mobile: <Smartphone size={18} />,
  Desain: <Figma size={18} />,
};

export default function SkillsPortfolio() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">02 — Keahlian & karya</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Tools untuk mewujudkan <span className="gradient-text">ide.</span></h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(profile.skills).map(([group, skills], index) => (
            <Reveal key={group} delay={index * .08}>
              <div className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-purple-300/30">
                <div className="mb-5 flex items-center gap-3 text-purple-300">{groupIcons[group]}<h3 className="font-semibold text-white">{group}</h3></div>
                <div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">{skill}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="portfolio" className="mt-24 scroll-mt-24">
          <Reveal>
            <div className="mb-7 flex items-end justify-between gap-4">
              <div><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">Portofolio</p><h3 className="text-2xl font-bold text-white sm:text-3xl">Beberapa hal yang saya kerjakan.</h3></div>
              <Layers className="hidden text-purple-300 sm:block" size={32} />
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {profile.portfolio.map((item, index) => (
              <Reveal key={item.title} delay={index * .1}>
                <article className="group glass flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                  <div className="relative h-52 overflow-hidden bg-slate-900/70">
                    <Image src={item.image} alt={`Screenshot ${item.title}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200">{item.type}</span>
                    <h4 className="mt-5 text-xl font-bold text-white">{item.title}</h4>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
