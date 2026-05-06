import { CircuitBoard, MonitorCog, Cpu } from "lucide-react";

const cards = [
  {
    icon: CircuitBoard,
    title: "PLC Programming",
    body: "Ladder logic development and industrial control system implementation.",
  },
  {
    icon: MonitorCog,
    title: "HMI & SCADA",
    body: "System configuration and real-time monitoring integration.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    body: "ESP32-based control and motor system development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="// 01 — About" title="Industrial Instrumentation & Control Systems." />

        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-5">
            <p className="text-xl leading-relaxed text-foreground/90">
              Automation Engineering student at Diponegoro University
              (GPA 3.50 / 4.00), focused on PLC programming, HMI configuration,
              SCADA, and instrumentation for the process industry.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Recently completed a production internship at PT Tirta Investama
              Klaten — handling HMI addressing, ladder logic for 19L AQUA filling
              and automatic leak-testing machines, and preventive maintenance on
              filling, high-pressure pre-wash, and leak tester equipment.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Currently serving as Head of Academic Division (Riset dan Keilmuan)
              at HIMATRO SV Undip, with strong leadership, analytical, and
              quick-adaptability skills.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-1 gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className="glass glass-hover rounded-2xl p-6 flex gap-5 items-start"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-xl glass flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeading = ({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) => (
  <div className="max-w-3xl">
    <div className="font-mono text-xs tracking-[0.3em] text-neon-cyan uppercase">
      {kicker}
    </div>
    <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
      {title.split(" ").map((w, i, arr) =>
        i === arr.length - 2 || i === arr.length - 1 ? (
          <span key={i} className="text-gradient">
            {w}{" "}
          </span>
        ) : (
          <span key={i}>{w} </span>
        )
      )}
    </h2>
  </div>
);
