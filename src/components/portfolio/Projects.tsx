import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./About";

const projects = [
  {
    title: "Helix · Vision-Guided Pick Cell",
    desc: "ROS2 + ML pipeline that picks unsorted parts from bins at 1200 cycles/hour with sub-mm placement.",
    stack: ["ROS2", "Python", "OpenCV", "ONNX"],
    accent: "from-neon-cyan/40 to-neon-purple/40",
    glyph: "◐",
  },
  {
    title: "Forge · Industrial Telemetry",
    desc: "Real-time SCADA replacement with edge buffering and a glass-cockpit operator UI for foundries.",
    stack: ["TypeScript", "Rust", "TimescaleDB"],
    accent: "from-neon-purple/40 to-neon-pink/40",
    glyph: "◇",
  },
  {
    title: "Drift · Autonomous Floor Bot",
    desc: "SLAM-based mobile robot for warehouse line-replenishment with dynamic obstacle re-planning.",
    stack: ["C++", "ROS2", "LiDAR", "Nav2"],
    accent: "from-neon-pink/40 to-neon-blue/40",
    glyph: "◉",
  },
  {
    title: "Pulse · Predictive Maintenance",
    desc: "Vibration & thermal anomaly detection on 400+ motors, deployed to edge gateways across 3 plants.",
    stack: ["Python", "PyTorch", "MQTT", "Grafana"],
    accent: "from-neon-blue/40 to-neon-cyan/40",
    glyph: "◈",
  },
  {
    title: "Atlas · Operator HMI Kit",
    desc: "Design system + React component library for industrial touchscreens. Glove-friendly, sun-readable.",
    stack: ["React", "Tailwind", "Figma"],
    accent: "from-neon-cyan/40 to-neon-pink/40",
    glyph: "▣",
  },
  {
    title: "Echo · Lab Automation Suite",
    desc: "Liquid-handling robot orchestration with experiment versioning for a synthetic biology lab.",
    stack: ["Python", "FastAPI", "Postgres"],
    accent: "from-neon-purple/40 to-neon-cyan/40",
    glyph: "✦",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="// 03 — Projects" title="Selected systems, shipped." />

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
