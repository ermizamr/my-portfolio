import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Code,
  Cpu,
  Layers,
  Moon,
  Sun,
  Download,
  Sparkles,
  Globe,
  Zap,
  Heart,
  Database,
  Bot,
  School,
  Target,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Space-Themed Telegram Bot",
    desc: "Personal learning project delivering space-related information, news, and satellite updates with scalable architecture.",
    tags: ["Python", "Telegram API", "SQLite", "API Integration"],
    url: "#",
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

// Brain icon component
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

  // Initialize after component mounts
  useEffect(() => {
    setMounted(true);
    
    // Check if dark mode is preferred or previously selected
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  // Update dark mode class and localStorage
  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }
  }, [darkMode, mounted]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <header className="w-full max-w-7xl mx-auto p-6 md:p-12">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg"
            >
              EZ
            </motion.div>
            <div>
              <h1 className="text-lg font-semibold">Ermi Zamr</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Technology Enthusiast • Problem Solver</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#projects" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Projects</a>
            <a href="#about" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</a>
            <a href="#vision" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Vision</a>
            <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white shadow hover:brightness-110 transition-all">Contact</a>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <header className="w-full max-w-7xl mx-auto p-6 md:p-12">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3 flex items-center gap-2">
              <Sparkles size={14} /> Self-Taught Developer
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Building systems with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                computational thinking
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Technology enthusiast focused on software development, computational thinking, and modern engineering principles. 
              I approach problems by breaking ideas into components, analyzing constraints, and designing practical solutions.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:brightness-105 transition-all">
                <Code size={16} /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Mail size={16} /> Get in touch
              </a>
              <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Download size={16} /> Download CV
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-6 text-sm">
              <div>
                <div className="font-semibold text-lg">3+</div>
                <div className="text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div>
                <div className="font-semibold text-lg">1+</div>
                <div className="text-gray-500 dark:text-gray-400">Year Learning</div>
              </div>
              <div>
                <div className="font-semibold text-lg">100%</div>
                <div className="text-gray-500 dark:text-gray-400">Curiosity</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60" 
                alt="Ermi Zamr - Technology Enthusiast" 
                className="object-cover w-full h-64 md:h-80" 
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <Zap className="text-yellow-500" size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* Technical Skills */}
        <section className="py-8 md:py-14">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Code size={18} className="text-blue-500" />
                Programming & Development
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { skill: "Python", level: "Intermediate" },
                  { skill: "JavaScript", level: "Beginner" },
                  { skill: "HTML/CSS", level: "Intermediate" },
                  { skill: "SQL", level: "Beginner" },
                  { skill: "Git", level: "Intermediate" },
                  { skill: "TailwindCSS", level: "Learning" },
                ].map((item) => (
                  <div key={item.skill} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span>{item.skill}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.level === 'Intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      item.level === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Layers size={18} className="text-green-500" />
                Tools & Platforms
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { skill: "Telegram Bot API", level: "Intermediate" },
                  { skill: "PostgreSQL", level: "Basic" },
                  { skill: "SQLite", level: "Intermediate" },
                  { skill: "VS Code", level: "Advanced" },
                  { skill: "GitHub Pages", level: "Intermediate" },
                  { skill: "Render.com", level: "Intermediate" },
                ].map((item) => (
                  <div key={item.skill} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span>{item.skill}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.level === 'Intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      item.level === 'Advanced' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-8 md:py-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">Technical Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Real projects building practical skills</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group block rounded-2xl overflow-hidden shadow hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
                  p.featured ? 'ring-2 ring-blue-500' : ''
                }`}
                whileHover={{ y: -8 }}
              >
                {p.featured && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                    Featured
                  </div>
                )}
                <div className="h-40 md:h-36 overflow-hidden relative">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{p.desc}</p>
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-8 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4">Technical Approach & Mindset</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am a self-taught technology enthusiast with a growing focus on software development, 
              computational thinking, and modern engineering principles. I enjoy approaching problems 
              the way experienced engineers do—breaking ideas into components, analyzing constraints, 
              and designing practical solutions.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Over the past year, I've actively built projects that strengthen my technical foundation, 
              including Telegram bots, small web applications, and experiments involving databases, 
              cloud platforms, and automation. I value clean systems, clear logic, and continuous learning.
            </p>

            <h4 className="font-semibold mt-6 mb-3">Learning Philosophy</h4>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li className="flex items-start gap-2">
                <Zap size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Build solutions, not just features - focus on practical implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <Target size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Break complex problems into manageable system components</span>
              </li>
              <li className="flex items-start gap-2">
                <School size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                <span>Continuous learning through hands-on project development</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Brain size={18} className="text-purple-500" />
                Personal Skills
              </h4>
              <div className="space-y-3 text-sm">
                {['Strong analytical thinking', 'Fast self-learner', 'System thinking', 'Independent problem-solving', 'Growth mindset'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Globe size={18} className="text-cyan-500" />
                Interests
              </h4>
              <div className="space-y-3 text-sm">
                {['Quantum Computing', 'Computational Thinking', 'System Architecture', 'Scientific Computing', 'Algorithm Design'].map((interest) => (
                  <div key={interest} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Goals */}
        <section id="vision" className="py-8 md:py-14">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Vision & Learning Path</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                  <Target className="text-blue-500" size={20} />
                  Long-term Goals
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  My long-term goal is to become an engineer who can design, analyze, and build systems 
                  at different levels—from software to scientific ideas.
                </p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  {[
                    "Strong foundations in software development",
                    "Advanced mathematical reasoning",
                    "Quantum science and computation",
                    "Engineering problem-solving",
                    "Real-world system building"
                  ].map((goal, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                  <School className="text-green-500" size={20} />
                  Education & Self-Study
                </h4>
                <div className="mb-4">
                  <div className="font-medium">Grade 12 Leaving Certificate (2025)</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Mathematics, Natural Sciences, Technology</div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ongoing self-studies in software development, algorithms, quantum principles, 
                  and problem-solving methods used by experienced engineers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8 md:py-14">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold">Let's Discuss Technology</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Interested in computational thinking, system design, or technology learning paths? 
                I'm always open to discussing ideas and opportunities.
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>ermizamr197@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github size={16} />
                  <a href="https://github.com/ermizamr" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    github.com/ermizamr
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="https://github.com/ermizamr" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Github size={14} /> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Formspree Form - Replace YOUR_FORM_ID_HERE with your actual Formspree ID */}
            <form 
              action="https://formspree.io/f/xzzyjvvv" 
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Your name</label>
                <input 
                  type="text"
                  id="name"
                  name="name" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="Jane Doe" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input 
                  type="email"
                  id="email"
                  name="email" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="jane@company.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  rows={4} 
                  placeholder="Let's discuss technology and systems..." 
                  required 
                />
              </div>

              <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Mail size={16} />
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <span>Built with analytical thinking and</span>
            <Heart size={14} className="text-red-500" />
          </div>
          <div className="mt-2">© {new Date().getFullYear()} Ermi Zamr — Focused on continuous learning and system thinking</div>
        </footer>
      </main>
    </div>
  );
}
