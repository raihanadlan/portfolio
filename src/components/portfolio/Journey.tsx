import { SectionHeading } from "./About";

const items = [
  {
    year: "2025 — 2026",
    role: "Head of Academic Division (Riset dan Keilmuan)",
    org: "HIMATRO SV Undip",
    desc: "Coordinated and supervised research and scientific programs, planned and evaluated academic activities, and fostered a research-oriented culture among students.",
  },
  {
    year: "Jan 2026",
    role: "Production Division Intern",
    org: "PT Tirta Investama Klaten",
    desc: "Performed HMI addressing and PLC configuration, ladder logic programming for 19L AQUA filling and automatic leak-testing machines, and preventive maintenance on Filling, High Pressure Pre-Wash, and Leak Tester equipment.",
  },
  {
    year: "2024 — 2025",
    role: "Staff — Academic Division (Riset dan Keilmuan)",
    org: "HIMATRO SV Undip",
    desc: "Managed student research and academic study activities, organized seminars and scientific discussions, and assisted students in writing scientific papers.",
  },
  {
    year: "2023 — Present",
    role: "Automation Engineering Student",
    org: "Diponegoro University — Vocational School",
    desc: "Pursuing Automation Engineering with a current GPA of 3.50 / 4.00, focusing on PLC, HMI, SCADA, embedded systems, and industrial control.",
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="// 04 — Journey" title="A timeline of motion." />

        <div className="relative mt-16 pl-8 md:pl-12">
          {/* Spine */}
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-60" />

          <ol className="space-y-10">
            {items.map((it, i) => (
              <li key={it.year} className="relative">
                {/* Node */}
                <div className="absolute -left-[26px] md:-left-[34px] top-2 h-3 w-3 rounded-full bg-background border-2 border-neon-cyan glow-cyan" />
                <div
                  className="glass glass-hover rounded-2xl p-6 md:p-7 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono tracking-widest text-neon-cyan">
                      {it.year}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {String(items.length - i).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{it.role}</h3>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {it.org}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
