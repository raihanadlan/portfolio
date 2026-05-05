import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./About";

const projects = [
  {
    title: "SCADA-Based Tank Filling System",
    desc: "Automated tank filling system with SCADA integration for real-time monitoring and control. Designed to improve accuracy, efficiency, and system reliability in fluid handling processes.",
    stack: ["SCADA", "PLC", "Industrial Automation", "Control System"],
    accent: "from-neon-cyan/40 to-neon-purple/40",
    glyph: "◐",
  },
  {
    title: "DC Motor Control with PID",
    desc: "Implemented speed, direction, and torque control of a 12V DC motor using PID control. Focused on system stability, response tuning, and performance optimization.",
    stack: ["PID Control", "Motor Control", "Embedded System"],
    accent: "from-neon-purple/40 to-neon-pink/40",
    glyph: "◇",
  },
  {
    title: "Automatic Heating Control System (ESP32)",
    desc: "Developed an embedded control system using ESP32 to regulate temperature automatically based on sensor feedback and control logic.",
    stack: ["ESP32", "Embedded System", "Control Logic"],
    accent: "from-neon-pink/40 to-neon-blue/40",
    glyph: "◉",
  },
  {
    title: "PWM & Motor Control Analysis",
    desc: "Implemented and analyzed SPWM, SVPWM, and Six-Step Commutation methods for motor control systems to evaluate efficiency and performance.",
    stack: ["SPWM", "SVPWM", "Power Electronics", "Motor Drive"],
    accent: "from-neon-blue/40 to-neon-cyan/40",
    glyph: "◈",
  },
  {
    title: "IHSG Prediction using Deep Learning",
    desc: "Developed a deep learning model in MATLAB to predict IHSG trends, focusing on data processing, modeling, and performance evaluation.",
    stack: ["Deep Learning", "MATLAB", "Data Analysis"],
    accent: "from-neon-cyan/40 to-neon-pink/40",
    glyph: "▣",
  },
  {
    title: "Industrial PLC & HMI System Implementation",
    desc: "Worked on PLC ladder logic programming and HMI configuration in a production environment. Involved in machine maintenance and control system optimization for industrial processes.",
    stack: ["PLC", "HMI", "Industrial Automation", "Maintenance"],
    accent: "from-neon-purple/40 to-neon-cyan/40",
    glyph: "✦",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="// 03 — Projects" title="Relevant Project in Industrial Automation" />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative glass glass-hover rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
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

              {/* Body */}
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
      </div>
    </section>
  );
};
