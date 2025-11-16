import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Code,
  Cpu,
  Layers,
} from "lucide-react";

// Modern single-file portfolio React component using TailwindCSS + Framer Motion
// Instructions: place this file in your React app (e.g. src/Portfolio.jsx).
// Make sure your project has Tailwind configured and install framer-motion + lucide-react:
// npm install framer-motion lucide-react

const projects = [
  {
    id: 1,
    title: "Orbital — Space News Bot",
    desc: "Telegram bot that aggregates space news, launches, and visualizes satellite passes.",
    tags: ["Python", "Telegram", "APIs"],
    url: "#",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 2,
    title: "Polaris — Personal Website",
    desc: "A fast, accessible website with clean design and blog support.",
    tags: ["React", "Tailwind", "SEO"],
    url: "#",
    img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 3,
    title: "Quanta — Learning Tool",
    desc: "Interactive learning app for introductory quantum concepts.",
    tags: ["TypeScript", "D3", "Education"],
    url: "#",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=60",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 antialiased">
      <header className="max-w-5xl mx-auto p-6 md:p-12">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg">EZ</div>
            <div>
              <h1 className="text-lg font-semibold">Ermo Zama</h1>
              <p className="text-xs text-gray-500">Engineer • Dev • Learner</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#projects" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Projects</a>
            <a href="#about" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">About</a>
            <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:brightness-110">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-indigo-600 font-medium mb-3 flex items-center gap-2">
              <Briefcase size={14} /> Software & Systems
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">I build focused, reliable tools for learning and space exploration.</h2>
            <p className="mt-4 text-gray-600">I'm a developer and lifelong learner. I design accessible web apps, bots, and small systems that solve real problems while staying maintainable and fast.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:brightness-105">
                <Code size={16} /> View projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Mail size={16} /> Get in touch
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Github size={16} /> <a href="#" className="underline">github.com/username</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} /> <a href="#" className="underline">linkedin.com/in/username</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=60" alt="hero" className="object-cover w-full h-64 md:h-80" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-4 bg-white rounded-xl shadow"> 
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-lg font-medium mt-1">3+ years</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow"> 
                <p className="text-xs text-gray-500">Focus</p>
                <p className="text-lg font-medium mt-1">Web & Bots</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-8 md:py-14">
          <h3 className="text-2xl font-bold">Selected projects</h3>
          <p className="text-gray-600 mt-2">A handful of projects that show my approach: small scope, clear API, good docs.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.url}
                className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg bg-white"
                whileHover={{ y: -6 }}
              >
                <div className="h-40 md:h-36 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* About + Skills */}
        <section id="about" className="py-8 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">About me</h3>
            <p className="mt-3 text-gray-600">I’m a developer from Addis Ababa (based on your context) focusing on web apps, automation, and small systems that make research and learning easier. I like simple, testable designs and care about accessibility and performance.</p>

            <h4 className="mt-6 font-semibold">Approach</h4>
            <ul className="mt-3 list-inside list-disc text-gray-600">
              <li>Build small, testable features end-to-end.</li>
              <li>Prefer readable code and clear docs over cleverness.</li>
              <li>Invest in automation where it saves developer time.</li>
            </ul>
          </div>

          <aside className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold">Skills</h4>
            <div className="mt-4 grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cpu size={18} /> <span>JavaScript / React</span>
                </div>
                <span className="text-xs text-gray-500">Advanced</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Layers size={18} /> <span>Python / Bots</span>
                </div>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code size={18} /> <span>Problem Solving</span>
                </div>
                <span className="text-xs text-gray-500">Strong</span>
              </div>
            </div>
          </aside>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8 md:py-14">
          <div className="bg-white p-6 rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">Let’s build something</h3>
              <p className="mt-2 text-gray-600">Interested in collaborating or have a project? Send a quick note — I’ll reply.</p>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3"><Mail size={16} /> <span>ermo@example.com</span></div>
                <div className="flex items-center gap-3"><Github size={16} /> <a href="#" className="underline">github.com/username</a></div>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg"> <Github size={14} /> Github</a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg"> <Linkedin size={14} /> LinkedIn</a>
              </div>
            </div>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm">Your name</label>
              <input className="w-full px-4 py-2 border rounded-md" placeholder="Jane Doe" />

              <label className="block text-sm">Email</label>
              <input className="w-full px-4 py-2 border rounded-md" placeholder="jane@company.com" />

              <label className="block text-sm">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-md" rows={4} placeholder="Short message..." />

              <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md">Send message</button>
            </form>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Ermo Zama — Built with clarity and curiosity.</footer>
      </main>
    </div>
  );
}
