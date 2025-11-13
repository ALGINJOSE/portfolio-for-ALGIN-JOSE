"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Phone, MessageCircle, Download, Mail, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, Award, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const phone = "+919585796835";
  const whatsappLink = `https://wa.me/919585796835`;
  const telLink = `tel:${phone}`;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "INOESIS Technologies Pvt Ltd",
      role: "Frontend Developer",
      period: "Aug 2025 - Present",
      projects: [
        {
          name: "QuickAns.ai",
          tech: "HTML5, CSS3, Next.js, Tailwind CSS",
          achievements: [
            "Developed responsive landing pages to enhance user engagement and drive conversions",
            "Leveraged Next.js and Tailwind CSS for high-performance web pages",
            "Collaborated with design teams ensuring alignment with project goals and branding"
          ]
        },
        {
          name: "ORFARM-GREEN E-Commerce",
          tech: "HTML5, CSS3, Next.js, Tailwind CSS",
          achievements: [
            "Developed dynamic API-driven product listings and promotions",
            "Built cart and Wishlist features with efficient state management",
            "Created product details page with filters, sorting, and comprehensive data"
          ]
        }
      ]
    },
    {
      company: "JM-ORIGIN Technosoft Pvt Ltd",
      role: "React Developer",
      period: "Oct 2023 - Dec 2024",
      projects: [
        {
          name: "ERP Software Development",
          tech: "React.js",
          achievements: [
            "Developed and maintained ERP web applications with scalable frontend architecture",
            "Built reusable and modular components improving development speed",
            "Designed responsive UIs optimized for all devices (desktop, tablet, mobile)"
          ]
        }
      ]
    }
  ];

  const projects = [
    {
      title: "Dee Car Rentals",
      desc: "Car rental website with responsive design optimized for all devices",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Git"],
      period: "Dec 2024 - Present",
      url: "www.deecarrentals.com",
      highlights: [
        "Built responsive static website with reusable components",
        "Designed and deployed on Vercel",
        "Optimized for mobile, tablet, and desktop"
      ]
    },
    {
      title: "ORFARM-GREEN",
      desc: "Full-featured E-Commerce platform with cart, wishlist, and product management",
      tech: ["Next.js", "Tailwind CSS", "API Integration"],
      highlights: [
        "Dynamic product listings with API integration",
        "Cart and Wishlist with state management",
        "Advanced filtering and sorting capabilities"
      ]
    },
    {
      title: "QuickAns.ai",
      desc: "Chatbot-based platform with modern landing pages",
      tech: ["Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      highlights: [
        "Responsive landing pages",
        "Reusable UI components",
        "High-performance design"
      ]
    },
    {
      title: "Booking Mate",
      desc: "Booking platform interface for accommodations",
      tech: ["Next.js", "React", "Tailwind CSS"],
      highlights: [
        "Search and filter components",
        "Booking functionality",
        "User-friendly interface"
      ]
    }
  ];

  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
    "Styling": ["Tailwind CSS", "Bootstrap", "Responsive Design"],
    "Backend": ["Python (Basic)", "MySQL"],
    "Tools": ["Git", "Vercel", "API Integration", "Agile Methodologies"]
  };

  const education = [
    {
      degree: "B.Sc. Mathematics",
      institution: "Scott Christian College, Nagercoil",
      period: "Jul 2018 - Apr 2021",
      grade: "CGPA 7.3"
    },
    {
      degree: "Diploma in Financial Accounts & Tally ERP 9",
      institution: "College of Career Studies, Marthandam",
      period: "Jul 2022 - jan 2023",
      grade: "95.75%"
    },
    {
      degree: "Full Stack with Python Training",
      institution: "Besant Technologies, Chennai",
      period: "jan 2023 - sep 2023",
      grade: "Completed"
    },
    {
      degree: "H.S.C",
      institution: "Abraham Memorial HSS",
      period: "Jun 2017 - Mar 2018",
      grade: "CGPA 7.4"
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-950/20 via-black to-teal-950/20" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Available for opportunities</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="block text-white/90">Hi, I'm</span>
              <span className="block mt-2 bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
                Algin Jose C
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-4">
              Frontend Developer
            </p>
            <p className="text-lg text-white/40 mb-12">
              Next.js • React • TypeScript • Tailwind CSS
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="Algin Jose C-resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium shadow-lg shadow-emerald-500/25"
              >
                <Download className="w-5 h-5" /> Download Resume
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-white/30" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-teal-400 mb-12" />

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-white/70 leading-relaxed">
                  With 2+ years of IT experience in frontend development, I specialize in building responsive, high-performance web applications that deliver exceptional user experiences.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  I'm proficient in modern web technologies including HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, ReactJS, and Next.js. My expertise extends to seamlessly integrating API endpoints with intuitive UIs.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  I thrive in Agile environments and am well-versed with version control systems, particularly Git, ensuring efficient collaboration and code management.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                  <MapPin className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-white/60">Kuzhithurai, Kanniyakumari District</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                  <Award className="w-8 h-8 text-teal-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                  <p className="text-white/60">Python Full Stack Development</p>
                  <p className="text-white/40 text-sm mt-1">Besant Technologies</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                  <Code className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Languages</h3>
                  <p className="text-white/60">English, Tamil, Malayalam (spoken)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="w-10 h-10 text-emerald-400" />
              <h2 className="text-5xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-8 border-l-2 border-emerald-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500" />
                  
                  <div className="p-8 rounded-2xl bg-linear-to-br from-white/[0.07] to-white/2 backdrop-blur border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                        <p className="text-emerald-400 font-medium">{exp.role}</p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 text-sm border border-emerald-500/20">
                        {exp.period}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {exp.projects.map((project, pIdx) => (
                        <div key={pIdx} className="space-y-4">
                          <div className="flex items-start gap-3">
                            <ExternalLink className="w-5 h-5 text-teal-400 mt-1 shrink-0" />
                            <div>
                              <h4 className="text-xl font-semibold text-white mb-2">{project.name}</h4>
                              <p className="text-white/40 text-sm mb-4">{project.tech}</p>
                              <ul className="space-y-2">
                                {project.achievements.map((achievement, aIdx) => (
                                  <li key={aIdx} className="flex items-start gap-3 text-white/60">
                                    <span className="text-emerald-400 mt-1">▹</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-teal-400 mb-12" />

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 rounded-3xl bg-linear-to-br from-white/8 to-white/2 backdrop-blur border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Code className="w-10 h-10 text-emerald-400" />
                      {project.url && (
                        <a 
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/40 hover:text-emerald-400 transition"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    {project.period && (
                      <p className="text-emerald-400 text-sm mb-4">{project.period}</p>
                    )}
                    <p className="text-white/60 mb-6 leading-relaxed">{project.desc}</p>

                    <div className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-sm text-white/50">
                          <span className="text-teal-400">•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="w-10 h-10 text-emerald-400" />
              <h2 className="text-5xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                Education
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-linear-to-br from-white/[0.07] to-white/2 backdrop-blur border border-white/10 hover:border-emerald-500/30 transition-all"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-emerald-400 mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/40">{edu.period}</span>
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Technical Skills
            </h2>
            <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-teal-400 mb-12" />

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-linear-to-br from-white/[0.07] to-white/2 backdrop-blur border border-white/10"
                >
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + sIdx * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 text-white/80 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-xl text-white/60 mb-12">
              I'm always open to discussing new projects and opportunities
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.a
                href={telLink}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-linear-to-br from-white/8 to-white/2 backdrop-blur border border-white/10 hover:border-emerald-500/30 transition-all group"
              >
                <Phone className="w-10 h-10 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-white/60 text-sm">{phone}</p>
              </motion.a>

              <motion.a
                href="mailto:alginjose7@gmail.com"
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-linear-to-br from-white/8 to-white/2 backdrop-blur border border-white/10 hover:border-teal-500/30 transition-all group"
              >
                <Mail className="w-10 h-10 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/60 text-sm break-all">alginjose7@gmail.com</p>
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-linear-to-br from-white/8 to-white/2 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <MessageCircle className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-white/60 text-sm">Chat with me</p>
              </motion.a>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-linear-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
            >
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-white/80">Kuzhithurai, Kanniyakumari District, Tamil Nadu</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-linear-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/25"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
        <motion.a
          href={telLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur border border-white/20 shadow-lg"
        >
          <Phone className="w-7 h-7" />
        </motion.a>
      </div>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10 bg-black/50 backdrop-blur">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Algin Jose C • Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}