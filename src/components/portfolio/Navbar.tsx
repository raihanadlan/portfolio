import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass rounded-full px-5 py-2.5 mx-4 md:mx-auto" : ""
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg glass">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan/40 to-neon-purple/40 opacity-60 group-hover:opacity-100 transition" />
            <span className="relative font-bold text-sm text-gradient">AV</span>
          </span>
          <span className="font-semibold tracking-tight">Aris Vex</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-neon-cyan after:to-neon-purple hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full glass glass-hover"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse-glow" />
          Available for work
        </a>
      </nav>
    </header>
  );
};
