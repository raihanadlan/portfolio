import { Linkedin, Send, Mail, Youtube, Loader2 } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./About";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    tooltip: "Buka profil LinkedIn",
    href: "https://www.linkedin.com/in/fadhlan-raihan-fitranto-5a5a63256",
  },
  {
    icon: Youtube,
    label: "YouTube",
    tooltip: "Buka channel YouTube",
    href: "https://youtube.com/@fadhlanraihanfitranto7005?si=P-vUqtsEwYyiZw4O",
  },
  {
    icon: Mail,
    label: "Email",
    tooltip: "Kirim email langsung",
    href: "mailto:fadhlanfitranto@gmail.com",
  },
];

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Signal received", {
        description: "I'll get back to you within 48 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="// 05 — Contact" title="Let's build something precise." />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-3xl p-8 sm:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@studio.com"
              />
            </div>
            <Field label="Subject" name="subject" placeholder="Project enquiry" />
            <div>
              <label className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the system you're building…"
                className="mt-2 w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-medium text-sm hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.6)] transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Transmitting…" : "Send message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Side panel */}
          <div className="lg:col-span-2 space-y-5">
            <div className="glass rounded-3xl p-8">
              <div className="text-xs font-mono tracking-widest uppercase text-neon-cyan">
                Direct
              </div>
              <a
                href="mailto:fadhlanfitranto@gmail.com"
                className="block mt-3 text-2xl font-semibold text-gradient hover:opacity-80 transition break-all"
              >
                fadhlanfitranto@gmail.com
              </a>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Based in Semarang, Central Java · Open to internship and
                collaboration in industrial automation.
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-5">
                Channels
              </div>
              <TooltipProvider delayDuration={150}>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((s) => (
                    <SocialButton key={s.label} {...s} />
                  ))}
                </div>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <span>© 2026 Fadhlan Raihan Fitranto · All systems operational</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse-glow" />
            SEMARANG · 6.99° S
          </span>
        </footer>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
      {label}
    </label>
    <input
      required
      name={name}
      type={type}
      placeholder={placeholder}
      className="mt-2 w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition"
    />
  </div>
);
