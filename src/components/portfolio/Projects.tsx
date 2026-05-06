import { useState } from "react";
import { ArrowUpRight, Code2, Award, Layers } from "lucide-react";
import { SectionHeading } from "./About";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  accent: string;
  glyph: string;
};

const projects: Project[] = [
  {
    title: "SCADA-Based Tank Filling System",
    desc: "Automated tank filling system with SCADA integration for real-time monitoring and control. Designed to improve accuracy, efficiency, and reliability in fluid handling processes.",
    stack: ["SCADA", "PLC", "Industrial Automation", "Control System"],
    accent: "from-neon-cyan/40 to-neon-purple/40",
    glyph: "◐",
  },
  {
    title: "Industrial PLC & HMI System Implementation",
    desc: "Internship project at PT Tirta Investama Klaten — ladder logic programming and HMI configuration for 19L AQUA filling and automatic leak-testing machines in a live production environment.",
    stack: ["PLC", "HMI", "Ladder Logic", "Maintenance"],
    accent: "from-neon-purple/40 to-neon-cyan/40",
    glyph: "✦",
  },
  {
    title: "DC Motor Control with PID",
    desc: "Implemented direction, speed, and torque control of a 12V DC motor using PID. Focused on system stability, response tuning, and steady-state performance optimization.",
    stack: ["PID Control", "Motor Control", "Embedded System"],
    accent: "from-neon-purple/40 to-neon-pink/40",
    glyph: "◇",
  },
  {
    title: "Automatic Heating Control System (ESP32)",
    desc: "Embedded control system built on ESP32 that regulates temperature automatically based on real-time sensor feedback and tuned control logic.",
    stack: ["ESP32", "Embedded System", "Control Logic"],
    accent: "from-neon-pink/40 to-neon-blue/40",
    glyph: "◉",
  },
  {
    title: "PWM & Motor Control Analysis",
    desc: "Implemented and analyzed SPWM, SVPWM, and Six-Step Commutation methods for motor drive systems to evaluate efficiency, harmonics, and dynamic response.",
    stack: ["SPWM", "SVPWM", "Power Electronics", "Motor Drive"],
    accent: "from-neon-blue/40 to-neon-cyan/40",
    glyph: "◈",
  },
  {
    title: "IHSG Prediction using Deep Learning",
    desc: "Deep learning model developed in MATLAB to predict the Indonesia Composite Index (IHSG) trend, covering data processing, model training, and performance evaluation.",
    stack: ["Deep Learning", "MATLAB", "Data Analysis"],
    accent: "from-neon-cyan/40 to-neon-pink/40",
    glyph: "▣",
  },
];

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  glyph: string;
  accent: string;
};

const certificates: Certificate[] = [
  {
    title: "LKMM Tingkat Dasar — Vocational School",
    issuer: "Diponegoro University",
    year: "2024",
    glyph: "◆",
    accent: "from-neon-cyan/30 to-neon-purple/30",
  },
  {
    title: "LKMM Pra-Dasar — HIMATRO",
    issuer: "Diponegoro University",
    year: "2023",
    glyph: "◆",
    accent: "from-neon-purple/30 to-neon-pink/30",
  },
  {
    title: "Production Internship Completion",
    issuer: "PT Tirta Investama Klaten",
    year: "2026",
    glyph: "✦",
    accent: "from-neon-pink/30 to-neon-blue/30",
  },
  {
    title: "Head of Academic Division — HIMATRO",
    issuer: "HIMATRO SV Undip",
    year: "2025",
    glyph: "◉",
    accent: "from-neon-blue/30 to-neon-cyan/30",
  },
];

type Tech = { name: string; category: string };

const techStack: Tech[] = [
  { name: "PLC", category: "Industrial Control" },
  { name: "HMI", category: "Industrial Control" },
  { name: "SCADA", category: "Industrial Control" },
  { name: "CX-Programmer", category: "Industrial Control" },
  { name: "EcoStructure", category: "Industrial Control" },
  { name: "CTRLX Works", category: "Industrial Control" },
  { name: "WebIQ", category: "Industrial Control" },
  { name: "STM32 CubeMX / IDE", category: "Embedded" },
  { name: "ESP32", category: "Embedded" },
  { name: "Arduino IDE", category: "Embedded" },
  { name: "MATLAB", category: "Engineering Tools" },
  { name: "SolidWorks", category: "Engineering Tools" },
  { name: "Proteus", category: "Engineering Tools" },
  { name: "PSIM", category: "Engineering Tools" },
  { name: "FluidSim", category: "Engineering Tools" },
  { name: "LabView", category: "Engineering Tools" },
  { name: "RoboAnalyzer", category: "Engineering Tools" },
  { name: "XAMPP", category: "Software" },
];

type TabKey = "projects" | "certificates" | "tech";

const tabs: { key: TabKey; label: string; icon: typeof Code2 }[] = [
  { key: "projects", label: "Projects", icon: Code2 },
  { key: "certificates", label: "Certificates", icon: Award },
  { key: "tech", label: "Tech Stack", icon: Layers },
];

export const Projects = () => {
  const [active, setActive] = useState<TabKey>("projects");

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="// 03 — Portfolio"
          title="Portfolio Showcase across Industrial Automation."
        />
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path in automation engineering.
        </p>

        {/* Tab switcher */}
        <div className="mt-12 flex justify-center">
          <div className="glass rounded-2xl p-1.5 inline-flex gap-1">
            {tabs.map((t) => {
              const isActive = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`relative px-5 sm:px-8 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-foreground shadow-[0_0_20px_hsl(var(--neon-cyan)/0.25)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panels */}
        <div className="mt-12 animate-fade-in" key={active}>
          {active === "projects" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group relative glass glass-hover rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${p.accent}`}
                    />
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl text-foreground/80 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                        {p.glyph}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 h-8 w-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {p.desc}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border border-border text-muted-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          )}

          {active === "certificates" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
              {certificates.map((c) => (
                <div
                  key={c.title}
                  className="group glass glass-hover rounded-2xl p-6 flex items-start gap-5"
                >
                  <div
                    className={`flex-shrink-0 h-20 w-20 rounded-xl bg-gradient-to-br ${c.accent} flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110`}
                  >
                    {c.glyph}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
                      {c.year}
                    </div>
                    <h3 className="mt-1 font-semibold leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {c.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === "tech" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((t) => (
                <div
                  key={t.name}
                  className="group glass glass-hover rounded-2xl p-5 flex flex-col items-center justify-center text-center aspect-square transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center text-xl font-bold font-mono text-gradient transition-transform duration-500 group-hover:scale-110">
                    {t.name.charAt(0)}
                  </div>
                  <div className="mt-3 text-sm font-medium leading-tight">
                    {t.name}
                  </div>
                  <div className="mt-1 text-[9px] font-mono uppercase tracking-wider text-muted-foreground">
                    {t.category}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
