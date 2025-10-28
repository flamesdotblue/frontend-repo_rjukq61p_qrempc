import React from "react";
import { motion } from "framer-motion";
import { Shield, Hammer, Building2, Cpu } from "lucide-react";

export default function AboutServices() {
  return (
    <section id="about" className="relative bg-white text-[#0b1220]">
      {/* Top wave divider */}
      <svg aria-hidden viewBox="0 0 1440 100" className="-mt-20 block w-full text-white">
        <path fill="currentColor" d="M0,32L1440,96L1440,0L0,0Z" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">About Us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
              Elegant, trustworthy, and quality-driven since day one
            </h2>
            <p className="mt-4 text-[#0b1220]/70">
              We are a leading infrastructure and real estate development brand building iconic spaces across cities. Our promise is precision, transparency, and timeless design, delivered with cutting-edge engineering and rigorous quality assurance.
            </p>

            <ul className="mt-6 grid gap-4">
              {[
                {
                  title: "Quality Assurance",
                  desc: "Robust QA protocols across every stage of design and execution.",
                  icon: <Shield className="h-5 w-5 text-amber-500" />,
                },
                {
                  title: "Expert Engineering",
                  desc: "Veteran teams leading civil and structural engineering.",
                  icon: <Hammer className="h-5 w-5 text-amber-500" />,
                },
                {
                  title: "Sustainable Design",
                  desc: "Energy-efficient, future-ready developments.",
                  icon: <Building2 className="h-5 w-5 text-amber-500" />,
                },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-[#0b1220]/70">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-[#0b1220]/10 shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop"
              alt="Engineers planning"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1220]/70 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Services */}
        <section id="services" className="mt-20">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-extrabold">Our Services</h3>
            <p className="text-sm text-[#0b1220]/60">Civil construction, infrastructure, and intelligent buildings</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-[#0b1220]/10 bg-white p-5 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-11 w-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  {s.icon}
                </div>
                <h4 className="mt-4 text-lg font-bold">{s.title}</h4>
                <p className="mt-2 text-sm text-[#0b1220]/70">{s.desc}</p>
                <div className="mt-4 text-xs font-semibold text-amber-600">Learn more →</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Civil Construction",
    desc: "End-to-end residential, commercial, and industrial builds.",
    icon: <Hammer className="h-5 w-5" />,
  },
  {
    title: "Infrastructure Projects",
    desc: "Roads, bridges, utilities, and large-scale public works.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Smart Buildings",
    desc: "IoT-enabled automation, security, and sustainability.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Quality & Safety",
    desc: "Strict compliance and QA frameworks for every site.",
    icon: <Shield className="h-5 w-5" />,
  },
];
