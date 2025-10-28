import React from "react";
import Hero from "./components/Hero";
import AboutServices from "./components/AboutServices";
import ProjectsTestimonials from "./components/ProjectsTestimonials";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  React.useEffect(() => {
    // Smooth scroll behavior for in-page anchors
    if (typeof window !== "undefined") {
      const onClick = (e) => {
        const a = e.target.closest("a[href^='#']");
        if (!a) return;
        const id = a.getAttribute("href");
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
        }
      };
      window.addEventListener("click", onClick);
      return () => window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div className="font-inter antialiased">
      <Hero />
      <AboutServices />
      <ProjectsTestimonials />
      <ContactFooter />
    </div>
  );
}
