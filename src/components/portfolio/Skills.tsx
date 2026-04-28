import { SectionHeading } from "./About";

type Skill = { name: string; value: number };
type Group = { title: string; color: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Programming",
    color: "hsl(var(--neon-cyan))",
    skills: [
      { name: "Python", value: 0.94 },
      { name: "C++ / Embedded", value: 0.82 },
      { name: "TypeScript", value: 0.78 },
      { name: "Rust", value: 0.6 },
    ],
  },
  {
    title: "Automation",
    color: "hsl(var(--neon-purple))",
    skills: [
      { name: "PLC / Ladder", value: 0.88 },
      { name: "SCADA / HMI", value: 0.83 },
      { name: "CI/CD Pipelines", value: 0.75 },
      { name: "Industrial IoT", value: 0.81 },
    ],
  },
  {
    title: "Robotics",
    color: "hsl(var(--neon-pink))",
    skills: [
      { name: "ROS / ROS2", value: 0.9 },
      { name: "SLAM & Navigation", value: 0.78 },
      { name: "Computer Vision", value: 0.85 },
      { name: "Motion Planning", value: 0.72 },
    ],
  },
  {
    title: "Tools",
    color: "hsl(var(--neon-blue))",
    skills: [
      { name: "Docker / K8s", value: 0.82 },
      { name: "Git / DevOps", value: 0.9 },
      { name: "Figma", value: 0.7 },
      { name: "Linux", value: 0.92 },
    ],
  },
];

const Ring = ({ value, color }: { value: number; color: string }) => {
  const r = 32;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-20 w-20">
      <svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90">
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke="hsl(var(--border))"
          strokeOpacity="0.6"
          strokeWidth="5"
        />
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${c * value} ${c}`}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-sm font-bold font-mono"
        style={{ color }}
      >
        {Math.round(value * 100)}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="// 02 — Skills" title="Calibrated across the stack." />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="glass glass-hover rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: g.color, boxShadow: `0 0 10px ${g.color}` }}
                />
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Cluster
                </span>
              </div>
              <h3 className="text-xl font-semibold">{g.title}</h3>

              <ul className="mt-6 space-y-4">
                {g.skills.map((s) => (
                  <li key={s.name} className="flex items-center gap-4">
                    <Ring value={s.value} color={g.color} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{s.name}</div>
                      <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${s.value * 100}%`,
                            background: `linear-gradient(90deg, ${g.color}, transparent)`,
                          }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
