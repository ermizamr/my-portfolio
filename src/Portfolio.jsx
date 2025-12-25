import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Bot,
  School,
  Target,
  X,
  ExternalLink,
} from "lucide-react";

/*
  Redesigned Portfolio - "Glow Up"
  - Hero with gradient name and animated accents
  - Project cards with overlay, tags and action buttons
  - Project modal preview (image + description)
  - Floating socials rail
  - Keeps existing Bot embed page and Space-for-ET project link
*/

/* -------- Projects data (add/edit as you like) -------- */
const projects = [
  {
    id: 1,
    title: "Space-Themed Telegram Bot",
    desc:
      "Personal learning project delivering space-related information, news, and satellite updates with scalable architecture.",
    tags: ["Python", "Telegram API", "SQLite", "API Integration"],
    url: "#bot-page",
    img:
      "https://i.ibb.co/qLyg9YhC/Gemini-Generated-Image-76vjgk76vjgk76vj-4.png",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc:
      "This very portfolio — a clean, modern personal site with component-driven layout and responsive design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    url: "#",
    img:
      "https://contentsnare.com/wp-content/uploads/2021/12/Looking-to-create-a-website-1.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Bot Admin Tools & Templates",
    desc:
      "Management scripts and configuration templates for efficient bot development, testing and deployment.",
    tags: ["Python", "Automation", "DevOps"],
    url: "#",
    img:
      "https://cdn2.umnico.com/production/landing/en-article26-58ddec5a2835ce17e9c971c4ca9fe287.png",
    featured: true,
  },
  {
    id: 4,
    title: "Space for ET",
    desc:
      "Space-themed frontend project deployed on Vercel. Live: space-for-et.vercel.app — UI experiments and space content.",
    tags: ["Next.js", "Vercel", "Frontend"],
    url: "https://space-for-et.vercel.app",
    img:
      "https://www.freepik.com/free-psd/celestial-bodies-stunning-visualization-planets-sun_409868020.htm#fromView=keyword&page=2&position=11&uuid=a96dfe59-1b1e-4eb2-aa2d-db583908807f&query=Space",
    featured: false,
  },
];

/* -------- Small helper components -------- */
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

/* -------- Bot embedded page (keeps your iframe view) -------- */
const BotPageView = ({ onBack }) => (
  <div id="bot-page" className="w-full max-w-7xl mx-auto p-6 md:p-12">
    <button
      onClick={onBack}
      className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-200"
    >
      &larr; Back to Portfolio
    </button>

    <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-500 dark:border-indigo-700">
      <iframe
        src="/space_news_bot.html"
        title="Space News Bot Content"
        className="w-full h-[90vh] bg-white dark:bg-gray-900"
        style={{ border: "none" }}
      />
    </div>
  </div>
);

/* -------- Project Modal for quick preview -------- */
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ y: 30, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div className="relative">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/70 dark:bg-gray-900/70 rounded-full p-2 hover:scale-105 transition"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {project.url && project.url.startsWith("http") ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:brightness-105 transition"
                >
                  <ExternalLink size={14} /> Visit Live
                </a>
              ) : project.url === "#bot-page" ? (
                <button
                  onClick={() => {
                    // we'll close modal; parent can navigate to bot view
                    onClose(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition"
                >
                  Open Bot Page
                </button>
              ) : null}

              <a
                href="mailto:ermizamr197@gmail.com?subject=Project%20Feedback"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <Mail size={14} /> Contact
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* -------- Floating socials rail -------- */
function FloatingSocials() {
  return (
    <div className="fixed right-6 bottom-12 z-40 hidden md:flex flex-col gap-3">
      <a
        href="mailto:ermizamr197@gmail.com"
        className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow hover:scale-105 transition"
        aria-label="Email"
      >
        <Mail size={16} />
      </a>
      <a
        href="https://github.com/ermizamr"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow hover:scale-105 transition"
        aria-label="GitHub"
      >
        <Github size={16} />
      </a>
      <a
        href="#contact"
        className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow hover:scale-105 transition"
        aria-label="Contact"
      >
        <Sparkles size={16} />
      </a>
    </div>
  );
}

/* -------- Main Portfolio component (redesigned) -------- */
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentView, setCurrentView] = useState("portfolio");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        if (href === "#bot-page") {
          e.preventDefault();
          setCurrentView("bot");
          return;
        }
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((l) => l.addEventListener("click", handleAnchorClick));
    return () =>
      anchorLinks.forEach((l) =>
        l.removeEventListener("click", handleAnchorClick)
      );
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 antialiased">
      {/* subtle animated background stars */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-transparent to-cyan-50 dark:from-indigo-900/20 dark:via-transparent"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {currentView === "bot" ? (
        <BotPageView onBack={() => setCurrentView("portfolio")} />
      ) : (
        <>
          <FloatingSocials />

          <header className="max-w-6xl mx-auto px-6 pt-10">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.02 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-xl"
                >
                  EZ
                </motion.div>
                <div>
                  <h1 className="text-lg font-semibold">Ermi Zamr</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Systems-minded builder & lifelong learner
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#projects"
                  className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-sm px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:brightness-105 transition"
                >
                  Contact
                </a>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </nav>
          </header>

          {/* HERO */}
          <main className="max-w-6xl mx-auto px-6 py-12">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  <Sparkles size={14} /> Self-taught · Systems thinking
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                  Ermi Zamr —{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-400">
                    building practical systems
                  </span>
                </h2>

                <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
                  I design small systems and tools with clarity and curiosity — from Telegram bots
                  to front-end experiments. I value clear architecture, incremental learning,
                  and code that helps others understand the idea.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
                  >
                    <Code size={16} /> View Projects
                  </a>

                  <button
                    onClick={() => setCurrentView("bot")}
                    className="inline-flex items-center gap-2 px-4 py-3 border border-indigo-200 dark:border-indigo-600 text-indigo-700 dark:text-indigo-200 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
                  >
                    <Bot size={16} /> Launch Bot Page
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Mail size={16} /> Get in touch
                  </a>
                </div>

                <div className="mt-8 flex gap-6">
                  <div>
                    <div className="text-2xl font-semibold">3+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">1+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Year learning</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">100%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Curiosity</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                  <img
                    src="https://i.ibb.co/NgyM9t13/5913428015746583538-121.jpg" alt="5913428015746583538-121"
                    alt="Ermi Zamr"
                    className="object-cover w-full h-80"
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <Zap className="text-yellow-500" size={18} />
                </motion.div>
              </motion.div>
            </section>

            {/* SKILLS */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow">
                <h4 className="font-semibold flex items-center gap-2">
                  <Code size={18} className="text-indigo-500" /> Programming
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  {[
                    { skill: "Python", level: "Intermediate" },
                    { skill: "JavaScript", level: "Beginner" },
                    { skill: "HTML/CSS", level: "Intermediate" },
                    { skill: "SQL", level: "Beginner" },
                  ].map((it) => (
                    <div key={it.skill} className="flex justify-between items-center">
                      <span>{it.skill}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">
                        {it.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow">
                <h4 className="font-semibold flex items-center gap-2">
                  <Layers size={18} className="text-green-500" /> Tools & Platforms
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  {[
                    { skill: "Telegram Bot API", level: "Intermediate" },
                    { skill: "SQLite", level: "Intermediate" },
                    { skill: "Git", level: "Intermediate" },
                    { skill: "Tailwind", level: "Learning" },
                  ].map((it) => (
                    <div key={it.skill} className="flex justify-between items-center">
                      <span>{it.skill}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">
                        {it.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow">
                <h4 className="font-semibold flex items-center gap-2">
                  <Brain className="text-purple-500" /> Personal Skills
                </h4>
                <ul className="mt-4 text-sm space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Strong analytical thinking</li>
                  <li>Fast self-learner</li>
                  <li>System & architecture thinking</li>
                </ul>
              </div>
            </section>

            {/* PROJECTS GALLERY */}
            <section id="projects" className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Projects</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Selected work and experiments</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800`}
                  >
                    <div className="relative h-44">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                      {p.featured && (
                        <div className="absolute top-3 left-3 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h4 className="font-semibold text-lg">{p.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                        {p.desc}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          {p.url && p.url.startsWith("http") ? (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:brightness-105 transition"
                              aria-label={`Open ${p.title} live`}
                            >
                              <ExternalLink size={14} /> Live
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                // open Bot page or no-op
                                if (p.url === "#bot-page") {
                                  setCurrentView("bot");
                                }
                              }}
                              className="inline-flex items-center gap-1 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm hover:bg-indigo-100 transition"
                            >
                              Open
                            </button>
                          )}

                          <button
                            onClick={() => setSelectedProject(p)}
                            className="inline-flex items-center gap-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                            aria-label={`Preview ${p.title}`}
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow">
                <h3 className="text-xl font-bold mb-4">Technical Approach & Mindset</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I approach engineering with a systems mindset — break problems down, validate assumptions,
                  and iterate. I focus on practical, well-documented projects that teach me something useful.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Learning Philosophy</h4>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Build small, usable systems</li>
                      <li>Keep architecture simple & explicit</li>
                      <li>Document decisions & reasoning</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Grade 12 Leaving Certificate (2025). Ongoing self-study in software,
                      algorithms, and computational thinking.
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow">
                  <h4 className="font-semibold mb-3">Personal Skills</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Analytical thinking</li>
                    <li>Fast self-learner</li>
                    <li>Independent problem-solving</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow">
                  <h4 className="font-semibold mb-3">Interests</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Quantum computing</li>
                    <li>System architecture</li>
                    <li>Scientific computing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold">Let's Discuss Technology</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Interested in computational thinking, system design, or collaboration? Reach out.
                    </p>

                    <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-3">
                        <Mail size={16} />
                        <span>ermizamr197@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github size={16} />
                        <a
                          href="https://github.com/ermizamr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-indigo-600"
                        >
                          github.com/ermizamr
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a
                        href="https://github.com/ermizamr"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <Github size={14} /> GitHub
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <Linkedin size={14} /> LinkedIn
                      </a>
                    </div>
                  </div>

                  <form
                    action="https://formspree.io/f/xzzyjvvv"
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-transparent focus:ring-2 focus:ring-indigo-500"
                        placeholder="Jane Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-transparent focus:ring-2 focus:ring-indigo-500"
                        placeholder="jane@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-transparent focus:ring-2 focus:ring-indigo-500"
                        rows={4}
                        placeholder="Let's discuss technology and systems..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-indigo-600 text-white rounded-md hover:brightness-105 transition flex items-center justify-center gap-2"
                    >
                      <Mail size={16} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>

            <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 py-10">
              <div className="flex items-center justify-center gap-2">
                <span>Built with clarity and</span>
                <Heart size={14} className="text-red-500" />
              </div>
              <div className="mt-2">© {new Date().getFullYear()} Ermi Zamr</div>
            </footer>
          </main>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={(openBot = false) => {
                  setSelectedProject(null);
                  if (openBot) setCurrentView("bot");
                }}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
