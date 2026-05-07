import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative mx-auto max-w-7xl flex justify-center items-center">
        {/* Left: copy */}
        <div className="animate-fade-up text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse-glow" />
            INDEX · 001 — PORTFOLIO 2026
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gradient">Automation</span>
            <br />
            Engineering Student
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            I'm <span className="text-foreground font-medium">Fadhlan Raihan Fitranto</span>,
            specializing in <span className="text-foreground/90">Industrial Instrumentation
            &amp; Control Systems</span> — building reliable PLC, HMI, and SCADA solutions
            for the manufacturing industry.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-medium text-sm hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.6)] transition-all duration-500 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass glass-hover text-sm font-medium"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "3rd", l: "Year Student" },
              { v: "5+", l: "Projects Completed" },
              { v: "3", l: "Core Domains" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dashboard */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <RadialDashboard />
        </div>
      </div>
    </section>
  );
};
