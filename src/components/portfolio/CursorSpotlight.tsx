import { useEffect, useState } from "react";

export const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] mix-blend-screen"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, hsl(var(--neon-cyan) / 0.08), transparent 60%)`,
        transition: "background 80ms linear",
      }}
    />
  );
};
