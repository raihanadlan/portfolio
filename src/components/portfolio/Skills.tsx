import { SectionHeading } from "./About";

type Skill = { name: string; value: number };
type Group = { title: string; color: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Industrial Control",
    color: "hsl(var(--neon-cyan))",
    skills: [
      { name: "PLC Programming", value: 0.85 },
      { name: "HMI Configuration", value: 0.8 },
      { name: "SCADA Systems", value: 0.8 },
    ],
  },
  {
    title: "Embedded & Control",
    color: "hsl(var(--neon-purple))",
    skills: [
      { name: "ESP32 / STM32", value: 0.75 },
      { name: "PID Control", value: 0.8 },
      { name: "Motor Control (PWM)", value: 0.75 },
    ],
  },
  {
    title: "Engineering Tools",
    color: "hsl(var(--neon-pink))",
    skills: [
      { name: "MATLAB", value: 0.8 },
      { name: "CX-Programmer", value: 0.85 },
      { name: "SolidWorks", value: 0.75 },
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
        <SectionHeading kicker="// 02 — Skills" title="Core Competencies in Control Systems." />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
