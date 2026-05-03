import { Cpu, Workflow, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "Hardware fluent",
    body: "From PLCs and ROS2 nodes to embedded firmware on bare-metal MCUs — I speak the language of machines.",
  },
  {
    icon: Workflow,
    title: "Systems thinker",
    body: "I design pipelines where sensors, models, and humans meet — robust, observable, and graceful under failure.",
  },
  {
    icon: Sparkles,
    title: "Crafted interfaces",
    body: "Operator dashboards and tooling that feel like instruments. Latency, clarity, and beauty are all features.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="// 01 — About" title="Automation engineering focused on industrial control systems." />

        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-5">
            <p className="text-xl leading-relaxed text-foreground/90">
              I build the layer between physical machines and the software that
              gives them intent.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For the past six years I've designed automation systems for
              manufacturing lines, warehouse robotics, and research labs —
              shipping production code that runs 24/7 next to spinning steel.
              I care about latency budgets, thermal margins, and the small
              moments where great UX makes a tired operator's shift easier.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Currently exploring autonomous mobile robots and edge ML for
              vision-guided manipulation.
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
