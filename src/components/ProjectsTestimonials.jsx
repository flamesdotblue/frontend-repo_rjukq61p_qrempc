import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function ProjectsTestimonials() {
  return (
    <section id="projects" className="relative bg-[#0b1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Projects Showcase</h3>
            <p className="mt-2 text-white/70">A selection of recent works across cities and sectors</p>
          </div>
          <div className="hidden md:block text-sm text-white/60">Hover to view details</div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h4 className="font-bold">{p.title}</h4>
                <p className="text-sm text-white/70">{p.location}</p>
              </div>
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-xl bg-white/10 backdrop-blur p-4 text-sm ring-1 ring-white/15">
                  {p.desc}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Testimonials */}
        <section id="testimonials" className="mt-20">
          <div className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-amber-400" />
            <h3 className="text-2xl md:text-3xl font-extrabold">What Clients Say</h3>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/80">{t.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Skyline Residences",
    location: "Mumbai, India",
    desc: "Luxury high-rise with sustainable materials and smart-home integration.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Tech Park Axis",
    location: "Bengaluru, India",
    desc: "Grade-A office campus with green terraces and IoT energy management.",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Harbor Bridgeway",
    location: "Kochi, India",
    desc: "Urban infrastructure upgrade improving mobility and resilience.",
    image:
      "https://images.unsplash.com/photo-1467348733814-f93fc480bec6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Riverview Villas",
    location: "Ahmedabad, India",
    desc: "Premium villas with biophilic design and passive cooling.",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Metro Nexus",
    location: "Hyderabad, India",
    desc: "Transit-oriented mixed-use hub enhancing last-mile connectivity.",
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Capital Plaza",
    location: "New Delhi, India",
    desc: "Flagship retail and business destination with iconic facade.",
    image:
      "https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1600&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Anita Rao",
    role: "Director, Orion Properties",
    text:
      "MargiInfra exceeded expectations with their engineering precision and transparent communication.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Rahul Sharma",
    role: "Head of Infrastructure, CityWorks",
    text:
      "Their commitment to timelines and quality is unmatched. We look forward to future collaborations.",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    role: "Founder, GreenHive",
    text:
      "Design-forward and sustainable – MargiInfra delivered a landmark project for us.",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
  },
];
