import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Layers,
  Moon,
  Sun,
  Download,
  Sparkles,
  Globe,
  Zap,
  Heart,
  School,
  Target,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Space-Themed Telegram Bot",
    desc: "Personal learning project delivering space-related information, news, and satellite updates with scalable architecture.",
    tags: ["Python", "Telegram API", "SQLite", "API Integration"],
    url: "/space_news_bot.html",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=60",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "Clean, modern personal website built with component-based architecture and responsive design principles.",
    tags: ["JavaScript", "React", "TailwindCSS", "GitHub Pages"],
    url: "#",
    img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=60",
    featured: false,
  },
  {
    id: 3,
    title: "Bot Admin Tools & Templates",
    desc: "Management scripts and configuration templates for efficient bot development and testing workflows.",
    tags: ["Python", "Automation", "Cloud Deployment", "System Design"],
    url: "#",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=60",
    featured: true,
  },
];

// Brain icon
function Brain(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode, mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">

      {/* PROJECTS */}
      <section id="projects" className="py-14 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Technical Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const href = p.url;
            const isExternal = href?.startsWith("http");
            const target = isExternal ? "_blank" : undefined;

            return (
              <motion.a
                key={p.id}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group block rounded-2xl overflow-hidden shadow hover:shadow-xl bg-white dark:bg-gray-800 border ${
                  p.featured ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {p.featured && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                    Featured
                  </div>
                )}

                <div className="h-40 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    {p.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        <div className="flex items-center justify-center gap-2">
          Built with logic and <Heart size={14} className="text-red-500" />
        </div>
      </footer>
    </div>
  );
}
