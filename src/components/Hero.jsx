import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Phone, ArrowRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#0b1220] text-white overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl" />

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/60 bg-[#0b1220]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center ring-1 ring-white/15">
              <Building2 className="h-5 w-5 text-amber-400" />
            </div>
            <span className="font-semibold tracking-wide text-white">Margi<span className="text-amber-400">Infra</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-[#0b1220] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
          >
            <Phone className="h-4 w-4" /> Consult Now
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <section id="top" className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Grid pattern */}
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative grid gap-10 md:grid-cols-2 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              Trusted Infrastructure & Real Estate Leaders
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Building the Future with
              <span className="block bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"> Precision & Passion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl text-white/70"
            >
              MargiInfra delivers world-class civil, infrastructure, and smart building solutions with uncompromising quality and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-[#0b1220] shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-colors"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value={25} label="Years" />
              <Stat value={180} label="Projects" suffix="+" />
              <Stat value={30} label="Cities" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop"
              alt="Modern architecture skyline"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm text-white/80">Iconic skylines, precision engineering, and future-ready living.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-[#0b1220] shadow-2xl shadow-amber-500/30 hover:bg-amber-400 transition-all"
      >
        Request a Quote
      </a>
    </div>
  );
}

function Stat({ value, label, suffix = "" }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-amber-400"
      >
        <AnimatedNumber value={value} />{suffix}
      </motion.div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{label}</div>
    </div>
  );
}

function AnimatedNumber({ value }) {
  const duration = 1000;
  const [display, setDisplay] = useState(0);

  React.useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const current = Math.floor(progress * value);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    const r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [value]);

  return <span>{display}</span>;
}
