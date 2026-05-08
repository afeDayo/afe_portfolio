import React, { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import ScrollReveal from "scrollreveal";
import project1 from "../assets/Assets/Logos/des2.jpg";
import project2 from "../assets/Assets/Logos/web7.png";
import project3 from "../assets/Assets/Logos/des6.png";
import project4 from "../assets/Assets/Logos/mpay.png";
import project5 from "../assets/Assets/Logos/pro-list.jpg";

const TAGS_COLORS = {
  HTML: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  CSS: "bg-blue-500/15   text-blue-400   border-blue-500/30",
  JS: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  React: "bg-cyan-500/15   text-cyan-400   border-cyan-500/30",
  Node: "bg-green-500/15  text-green-400  border-green-500/30",
  MongoDB: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  API: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  TypeScript: "bg-sky-500/15    text-sky-400    border-sky-500/30",
  Tailwind: "bg-teal-500/15   text-teal-400   border-teal-500/30",
};

const projects = [
  {
    id: 1,
    img: project1,
    title: "Sunnyside Agency Landing Page",
    desc: "A meticulously crafted single-page creative agency site built with React.js. Fully responsive for mobile and desktop with a sleek modern design and a mobile-friendly hamburger dropdown menu.",
    tech: ["HTML", "CSS", "JS", "React"],
    live: "https://sonnie-sidee.netlify.app/",
    code: "https://github.com/afeDayo/Sunnyside",
    number: "01",
  },
  {
    id: 2,
    img: project2,
    title: "TechFlix — Full-Stack Movie App",
    desc: "Full-stack movie web app with React and Node.js. Features include sign-up, login, browse movies & TV series, and bookmark favourites. Complete streaming experience with JWT auth.",
    tech: ["React", "Node", "MongoDB", "API"],
    live: "https://y-oflix.vercel.app/",
    code: "https://github.com/afeDayo/YOflix.git",
    number: "02",
  },
  {
    id: 3,
    img: project3,
    title: "Space Travel Web",
    desc: "An immersive space exploration website providing detailed information about planets and space missions. Built with a multi-page layout, smooth transitions and a third-party Space API integration.",
    tech: ["HTML", "CSS", "JS", "API"],
    live: "https://outterspace.netlify.app/",
    code: "https://github.com/afeDayo/Spaceweb.git",
    number: "03",
  },
  {
    id: 4,
    img: project4,
    title: "MPay — Fintech Web App",
    desc: "Cutting-edge fintech web app with secure sign-in/sign-out, internal dashboard and comprehensive financial management tools. Designed with a focus on UX clarity and trust.",
    tech: ["React", "Node", "MongoDB", "API"],
    live: "https://mpay-client.vercel.app/",
    code: "https://github.com/afeDayo/Mpay-client",
    number: "04",
  },
  {
    id: 5,
    img: project5,
    title: "Belle Full Deck — E-commerce",
    desc: "Responsive e-commerce site with a dynamic cart, modal order confirmations and full keyboard accessibility. Built with HTML, CSS, JavaScript and a local JSON API for product data.",
    tech: ["HTML", "CSS", "JS", "API"],
    live: "https://product-list-ecommerce-fik9.vercel.app/",
    code: "https://github.com/afeDayo/Product-list-ecommerce",
    number: "05",
  },
];

const PortfolioPage = () => {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const cfg = (origin) => ({
      duration: 900,
      origin,
      distance: "60px",
      delay: 150,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      reset: false,
    });
    ScrollReveal().reveal(".sr-top", cfg("top"));
    ScrollReveal().reveal(".sr-bottom", cfg("bottom"));
    ScrollReveal().reveal(".sr-left", cfg("left"));
    ScrollReveal().reveal(".sr-right", cfg("right"));
    ScrollReveal().reveal(".sr-fade", {
      duration: 900,
      delay: 150,
      reset: false,
    });
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-24">
      <div className="fixed top-20 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-0 w-72 h-72 bg-accent-sky/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="sr-top mb-20">
          <p className="text-xs font-mono text-accent-sky tracking-widest mb-4 line-decoration">
            PORTFOLIO
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-ubuntu leading-none">
            <span className="text-gradient">My</span>{" "}
            <span className="text-primary-text">Projects</span>
          </h1>
          <p className="text-primary-text/50 font-montserrat text-sm mt-6 max-w-lg">
            A curated selection of projects that showcase my skills in
            full-stack development, UI design, and problem solving.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className={`sr-fade group relative`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

              <div
                className={`
                  grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 px-2
                  transition-all duration-500
                  ${hovered === project.id ? "lg:px-6" : ""}
                `}
              >
                <div className="hidden lg:flex items-center col-span-1">
                  <span className="font-mono text-5xl font-bold text-primary-text/5 group-hover:text-accent-purple/20 transition-colors duration-500 select-none">
                    {project.number}
                  </span>
                </div>

                <div
                  className={`
                    col-span-1 lg:col-span-5
                    ${idx % 2 !== 0 ? "lg:order-last" : ""}
                    sr-${idx % 2 === 0 ? "left" : "right"}
                  `}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-video group/img">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-purple/50 via-accent-sky/20 to-accent-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={project.img}
                      alt={project.title}
                      className="relative w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700"
                    />

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                    >
                      <span className="flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-montserrat font-bold text-white hover:border-accent-sky/60 transition-colors">
                        <FiExternalLink /> Live Preview
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className={`
                    col-span-1 lg:col-span-6 flex flex-col justify-center gap-5
                    ${idx % 2 !== 0 ? "lg:order-first" : ""}
                    sr-${idx % 2 === 0 ? "right" : "left"}
                  `}
                >
                  <span className="font-mono text-xs text-accent-sky/60 lg:hidden">
                    {project.number}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold font-ubuntu text-primary-text group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h2>

                  <p className="text-primary-text/60 text-sm leading-relaxed font-montserrat">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${TAGS_COLORS[t] ?? "bg-white/5 text-white/50 border-white/10"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-1">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-primary text-xs py-2.5 px-6 flex items-center gap-2">
                        <FiExternalLink /> Live Preview
                      </button>
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-secondary text-xs py-2.5 px-6 flex items-center gap-2">
                        <IoLogoGithub className="text-base" /> View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
        </div>

        <div className="mt-24 sr-bottom">
          <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-accent-purple/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs font-mono text-accent-sky tracking-widest mb-4">
                TECH STACK
              </p>
              <h3 className="text-3xl md:text-4xl font-bold font-ubuntu text-primary-text mb-6">
                Built with the <span className="text-gradient">MERN Stack</span>
              </h3>

              <div className="flex justify-center gap-8 flex-wrap mb-8">
                {[
                  { Icon: SiMongodb, label: "MongoDB", color: "#4db33d" },
                  { Icon: SiExpress, label: "Express", color: "#ffffff" },
                  { Icon: FaReact, label: "React", color: "#61dafb" },
                  { Icon: FaNodeJs, label: "Node.js", color: "#68a063" },
                ].map(({ Icon, label, color }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Icon style={{ color }} className="text-3xl" />
                    </div>
                    <span className="text-xs font-mono text-primary-text/50">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-primary-text/50 font-montserrat text-sm max-w-lg mx-auto">
                Every project is built end-to-end — from database schema design
                to pixel-perfect UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
