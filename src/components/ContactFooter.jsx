import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, Linkedin, Github } from "lucide-react";

export default function ContactFooter() {
  return (
    <section id="contact" className="relative bg-white text-[#0b1220]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#0b1220]/10 p-6 shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold">Start Your Construction Project</h3>
            <p className="mt-2 text-[#0b1220]/70">Share your requirements. Our experts will respond within 24 hours.</p>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Full Name" type="text" placeholder="Jane Doe" />
                <Input label="Company" type="text" placeholder="Acme Corp" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Email" type="email" placeholder="you@example.com" />
                <Input label="Phone" type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="City" type="text" placeholder="Mumbai" />
                <Input label="Project Type" type="text" placeholder="Residential / Commercial / Infrastructure" />
              </div>
              <div>
                <label className="text-sm font-medium">Project Details</label>
                <textarea
                  rows={5}
                  placeholder="Scope, timeline, site location, budget range"
                  className="mt-2 w-full rounded-xl border border-[#0b1220]/20 bg-white px-4 py-3 text-sm outline-none ring-amber-500/20 focus:ring-4"
                />
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-[#0b1220] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
              >
                Send Request
              </button>

              <div className="mt-3 grid gap-3 text-sm text-[#0b1220]/70 sm:grid-cols-3">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-600" /> hello@margiinfra.com</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-600" /> +91 80000 00000</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-600" /> Mumbai, India</div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-[#0b1220]/10 shadow-sm"
          >
            <iframe
              title="MargiInfra HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11608232352!2d72.74109986851106!3d19.08252231965192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d58f3d9ab%3A0x80b2c9e5dfbb22ea!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 520 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#0b1220]/10 bg-[#0b1220] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center ring-1 ring-white/15">
                <Building2 className="h-5 w-5 text-amber-400" />
              </div>
              <div className="text-lg font-semibold">Margi<span className="text-amber-400">Infra</span></div>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              A leading construction and infrastructure company building durable, modern, and sustainable spaces across India.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="LinkedIn" href="#" className="rounded-lg border border-white/10 p-2 hover:bg-white/10 transition-colors">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a aria-label="GitHub" href="#" className="rounded-lg border border-white/10 p-2 hover:bg-white/10 transition-colors">
                <Github className="h-4 w-4 text-white" />
              </a>
              <a aria-label="Email" href="mailto:hello@margiinfra.com" className="rounded-lg border border-white/10 p-2 hover:bg-white/10 transition-colors">
                <Mail className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><a href="#services" className="hover:text-white">Civil Construction</a></li>
              <li><a href="#services" className="hover:text-white">Infrastructure Projects</a></li>
              <li><a href="#services" className="hover:text-white">Smart Buildings</a></li>
              <li><a href="#services" className="hover:text-white">Quality & Safety</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#projects" className="hover:text-white">Our Projects</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-400" /> Mumbai, India</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-400" /> +91 80000 00000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-400" /> hello@margiinfra.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© {new Date().getFullYear()} MargiInfra. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-[#0b1220]/20 bg-white px-4 py-3 text-sm outline-none ring-amber-500/20 focus:ring-4"
      />
    </div>
  );
}
