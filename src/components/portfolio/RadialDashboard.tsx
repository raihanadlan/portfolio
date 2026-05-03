/**
 * Animated multi-ring radial dashboard for the hero section.
 * Pure SVG + CSS so it's lightweight and crisp on retina.
 */
export const RadialDashboard = () => {
  const ringData = [
    { r: 140, value: 0.92, color: "hsl(var(--neon-cyan))", label: "Automation" },
    { r: 115, value: 0.84, color: "hsl(var(--neon-purple))", label: "Robotics" },
    { r: 90, value: 0.78, color: "hsl(var(--neon-pink))", label: "Code" },
  ];

  return (
    <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] mx-auto">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 blur-3xl animate-pulse-glow" />

      {/* Outer rotating ticks */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-spin-slow"
      >
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i / 60) * Math.PI * 2;
          const x1 = 200 + Math.cos(angle) * 188;
          const y1 = 200 + Math.sin(angle) * 188;
          const x2 = 200 + Math.cos(angle) * (i % 5 === 0 ? 172 : 180);
          const y2 = 200 + Math.sin(angle) * (i % 5 === 0 ? 172 : 180);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--neon-cyan))"
              strokeOpacity={i % 5 === 0 ? 0.7 : 0.25}
              strokeWidth={i % 5 === 0 ? 2 : 1}
            />
          );
        })}
      </svg>

      {/* Reverse rotating dashed ring */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-spin-reverse"
      >
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="hsl(var(--neon-purple))"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="2 14"
        />
      </svg>

      {/* Progress rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full -rotate-90">
        {ringData.map((ring, i) => {
          const circ = 2 * Math.PI * ring.r;
          return (
            <g key={i}>
              <circle
                cx="200"
                cy="200"
                r={ring.r}
                fill="none"
                stroke="hsl(var(--border))"
                strokeOpacity="0.5"
                strokeWidth="6"
              />
              <circle
                cx="200"
                cy="200"
                r={ring.r}
                fill="none"
                stroke={ring.color}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${circ * ring.value} ${circ}`}
                style={{
                  filter: `drop-shadow(0 0 8px ${ring.color})`,
                  transition: "stroke-dasharray 1.6s cubic-bezier(.22,1,.36,1)",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full glass flex flex-col items-center justify-center text-center px-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10" />
          <span className="relative text-[10px] tracking-[0.3em] text-neon-cyan/80 font-mono uppercase">
            Focus
          </span>
          <span className="relative text-xl sm:text-2xl font-bold text-gradient mt-2 leading-tight">
            AUTOMATION
            <br />
            ENGINEERING
          </span>
          <span className="relative text-[10px] text-muted-foreground mt-2 font-mono">
            EST · 2026
          </span>
        </div>
      </div>

      {/* Floating data labels */}
      <div className="absolute top-4 right-2 sm:top-6 sm:right-0 glass rounded-lg px-3 py-2 text-xs animate-float">
        <div className="text-neon-cyan font-mono">92%</div>
        <div className="text-muted-foreground text-[10px]">Automation</div>
      </div>
      <div
        className="absolute bottom-8 left-0 sm:left-2 glass rounded-lg px-3 py-2 text-xs animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="text-neon-purple font-mono">84%</div>
        <div className="text-muted-foreground text-[10px]">Robotics</div>
      </div>
      <div
        className="absolute top-1/2 -right-2 sm:-right-4 glass rounded-lg px-3 py-2 text-xs animate-float"
        style={{ animationDelay: "3s" }}
      >
        <div className="text-neon-pink font-mono">78%</div>
        <div className="text-muted-foreground text-[10px]">Code</div>
      </div>
    </div>
  );
};
