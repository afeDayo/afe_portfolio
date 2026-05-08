import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  FaAngleDoubleRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaVuejs,
  FaSass,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { BsFillSendFill, BsCheckCircleFill } from "react-icons/bs";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Modal from "react-modal";
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";
import meone from "../assets/me1&2.png";
import mecoding from "../assets/allme.png";
import web7 from "../assets/Assets/Logos/web7.png";
import web2 from "../assets/Assets/Logos/des6.png";
import web5 from "../assets/Assets/Logos/pro-list.jpg";
import web3 from "../assets/Assets/Logos/mpay.png";
import phoneget from "../assets/Assets/Logos/CALLME.png";

Modal.setAppElement("#root");

const Dot = ({ className }) => (
  <div className={`w-2 h-2 rounded-full bg-accent-sky/50 ${className}`} />
);

const LandingPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const [isGetInTouchOpen, setGetInTouchOpen] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState("");

  const roles = [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    let current = "";
    let charIdx = 0;
    let deleting = false;
    let roleIndex = 0;

    const type = () => {
      const target = roles[roleIndex];
      if (!deleting) {
        current = target.slice(0, ++charIdx);
        setTypedText(current);
        if (charIdx === target.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        current = target.slice(0, --charIdx);
        setTypedText(current);
        if (charIdx === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(type, deleting ? 50 : 80);
    };

    const t = setTimeout(type, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const config = (origin, distance = "60px") => ({
      duration: 900,
      origin,
      distance,
      delay: 200,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      reset: false,
    });
    ScrollReveal().reveal(".sr-top", config("top"));
    ScrollReveal().reveal(".sr-bottom", config("bottom"));
    ScrollReveal().reveal(".sr-left", config("left"));
    ScrollReveal().reveal(".sr-right", config("right"));
    ScrollReveal().reveal(".sr-fade", {
      duration: 900,
      delay: 200,
      reset: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    if (Object.keys(e).length) {
      Object.values(e).forEach((m) => toast.error(m));
      return false;
    }
    return true;
  };

  const handleSend = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || ""}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      if (res.ok) {
        setIsMessageSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const d = await res.json();
        toast.error(d.error || "Failed to send.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1im7-k4VNngu_ZUYlLZkNDBbBz4NKzWXS/view?usp=sharing";
    link.target = "_blank";
    link.click();
  };

  const emailAddress = "afedayo@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/afe123";
  const githubUrl = "https://github.com/afeDayo";
  const whatsappUrl = "https://wa.me/+2348124374721";

  const skills = [
    { Icon: SiHtml5, label: "HTML5", color: "#e34f26", level: 95 },
    { Icon: SiCss3, label: "CSS3", color: "#264de4", level: 90 },
    { Icon: SiJavascript, label: "JavaScript", color: "#f0db4f", level: 88 },
    { Icon: SiTypescript, label: "TypeScript", color: "#3178c6", level: 75 },
    { Icon: FaReact, label: "React.js", color: "#61dafb", level: 88 },
    { Icon: FaNodeJs, label: "Node.js", color: "#68a063", level: 80 },
    { Icon: SiMongodb, label: "MongoDB", color: "#4db33d", level: 78 },
    { Icon: SiExpress, label: "Express.js", color: "#ffffff", level: 80 },
    { Icon: SiTailwindcss, label: "Tailwind", color: "#38bdf8", level: 90 },
    { Icon: FaPython, label: "Python", color: "#3572A5", level: 60 },
    { Icon: FaVuejs, label: "Vue.js", color: "#42b883", level: 55 },
    { Icon: FaSass, label: "Sass", color: "#cc6699", level: 70 },
  ];

  const projectPreviews = [
    {
      img: web7,
      title: "YOflix",
      date: "Feb 2024",
      href: "https://y-oflix.vercel.app/",
    },
    {
      img: web2,
      title: "Space Travel Web",
      date: "Mar 2024",
      href: "https://outterspace.netlify.app/",
    },
    {
      img: web3,
      title: "MPay Fintech App",
      date: "Mar 2024",
      href: "https://mpay-client.vercel.app/",
    },
    {
      img: web5,
      title: "Belle Full Deck",
      date: "Apr 2024",
      href: "https://product-list-ecommerce-fik9.vercel.app/",
    },
  ];

  return (
    <div className="relative z-0 pt-24">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1a0533",
            color: "#f0eaff",
            border: "1px solid #6d28d9",
          },
        }}
      />

      <section
        id="top"
        className="relative w-11/12 max-w-7xl mx-auto min-h-screen flex items-center"
      >
        {/* background grid */}
        <div className="absolute inset-0 grid-bg opacity-50 rounded-3xl" />

        {/* glow orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent-sky/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full py-16">
          {/* --- LEFT --- */}
          <div className="flex flex-col items-start sr-top">
            {/* status badge */}
            <div className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400 tracking-widest">
                AVAILABLE FOR WORK
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-ubuntu leading-none mb-4">
              <span className="text-primary-text">I'm </span>
              <span className="text-gradient">Afe,</span>
              <br />
              <span className="text-primary-text">Temidayo</span>
            </h1>

            <div className="flex items-center gap-3 mb-8 h-8">
              <span className="w-1 h-6 bg-accent-sky" />
              <span className="text-accent-sky font-mono text-base md:text-lg font-bold min-w-[220px]">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-primary-text/70 text-sm lg:text-base leading-relaxed max-w-lg mb-10 font-montserrat">
              A voracious learner, solution-oriented and design-minded
              full-stack developer. I build pixel-perfect, accessible and
              responsive applications that users love.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => setGetInTouchOpen(true)}
                className="btn-primary flex items-center gap-2"
              >
                Get in touch <FiMail />
              </button>
              <button
                onClick={downloadResume}
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload /> Resume
              </button>
            </div>

            <div className="flex items-center gap-5">
              {[
                { href: githubUrl, Icon: FiGithub, label: "GitHub" },
                { href: linkedinUrl, Icon: FiLinkedin, label: "LinkedIn" },
                {
                  href: `mailto:${emailAddress}`,
                  Icon: FiMail,
                  label: "Email",
                },
                { href: whatsappUrl, Icon: IoLogoWhatsapp, label: "WhatsApp" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass-card text-primary-text/70 hover:text-accent-sky hover:border-accent-sky/50 transition-all duration-200 hover:scale-110"
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative sr-bottom">
            {/* ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-accent-purple/20 animate-spin-slow" />
              <div
                className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-accent-sky/10"
                style={{ animationDuration: "20s" }}
              />
            </div>

            <div className="relative z-10 animate-float">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-purple/30 via-transparent to-accent-sky/20 rounded-full blur-2xl" />
              <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent-purple/40 glow-border">
                <img
                  src={meone}
                  alt="Afe Temidayo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-2 text-xs font-mono text-accent-sky animate-pulse">
                &lt;MERN /&gt;
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-2 text-xs font-mono text-secondary-text">
                4+ yrs exp
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent-sky" />
          <span className="text-xs font-mono text-accent-sky tracking-widest">
            SCROLL
          </span>
        </div>
      </section>

      <section
        id="section2"
        className="mt-32 lg:mt-48 w-11/12 max-w-7xl mx-auto relative"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="sr-top mb-16">
          <p className="text-xs font-mono text-accent-sky tracking-widest mb-3 line-decoration">
            ABOUT ME
          </p>
          <h2 className="section-heading text-gradient">Who I Am</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="sr-left flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-purple/20 to-accent-sky/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-accent-purple/30 w-72 md:w-96 aspect-square">
                <img
                  src={mecoding}
                  alt="coding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-gradient-gold font-ubuntu">
                  11+
                </p>
                <p className="text-xs text-primary-text/60 font-montserrat">
                  Projects
                </p>
              </div>
              <div className="absolute -top-6 -left-6 glass-card rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-gradient font-ubuntu">
                  4+
                </p>
                <p className="text-xs text-primary-text/60 font-montserrat">
                  Years Exp.
                </p>
              </div>
            </div>
          </div>

          <div className="sr-right flex flex-col gap-8">
            <p className="text-primary-text/80 text-sm lg:text-base leading-relaxed font-montserrat">
              Highly motivated Full Stack Web Developer &amp; tutor, offering a
              dynamic skill set honed through experience as a Digital
              Strategist. I have spent considerable time converting designs into{" "}
              <span className="font-bold text-accent-sky">
                pixel-perfect, accessible and responsive applications
              </span>
              .
            </p>
            <p className="text-primary-text/70 text-sm lg:text-base leading-relaxed font-montserrat">
              Currently specialising in the{" "}
              <span className="text-secondary-text font-bold">MERN stack</span>{" "}
              — MongoDB, Express, React and Node.js — with strong TypeScript
              skills and a passion for beautiful UI powered by TailwindCSS.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Years of\nExperience" },
                { value: "11+", label: "Completed\nProjects" },
                { value: "100%", label: "Client\nSatisfaction" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gradient font-ubuntu">
                    {value}
                  </p>
                  <p className="text-xs text-primary-text/50 font-montserrat whitespace-pre-line mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setGetInTouchOpen(true)}
                className="btn-primary flex items-center gap-2"
              >
                Hire Me <FiMail />
              </button>
              <button
                onClick={downloadResume}
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload /> Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section3"
        className="mt-32 lg:mt-48 w-11/12 max-w-7xl mx-auto relative"
      >
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-sky/5 rounded-full blur-3xl pointer-events-none" />

        <div className="sr-top mb-16">
          <p className="text-xs font-mono text-accent-sky tracking-widest mb-3 line-decoration">
            EXPERTISE
          </p>
          <h2 className="section-heading text-gradient">My Skills</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sr-bottom">
          {skills.map(({ Icon, label, color, level }) => (
            <div
              key={label}
              className="glass-card-hover rounded-2xl p-5 flex flex-col items-center gap-3 group"
            >
              <Icon
                className="text-4xl group-hover:scale-110 transition-transform duration-300"
                style={{ color }}
              />
              <span className="text-xs font-montserrat font-bold text-primary-text/80">
                {label}
              </span>
              <div className="w-full bg-white/5 rounded-full h-1">
                <div
                  className="skill-progress h-1 rounded-full transition-all duration-1000"
                  style={{ width: `${level}%` }}
                />
              </div>
              <span className="text-xs font-mono text-primary-text/40">
                {level}%
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 sr-fade">
          <p className="text-xs font-mono text-primary-text/40 tracking-widest text-center mb-6">
            ALSO FAMILIAR WITH
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git & GitHub",
              "REST APIs",
              "Postman",
              "Figma",
              "VS Code",
              "Vercel",
              "Netlify",
              "MySQL",
              "Render",
            ].map((t) => (
              <span
                key={t}
                className="glass-card px-4 py-1.5 rounded-full text-xs font-mono text-primary-text/60 hover:text-accent-sky hover:border-accent-sky/40 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="section4"
        className="mt-32 lg:mt-48 w-11/12 max-w-7xl mx-auto relative"
      >
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div className="sr-top">
            <p className="text-xs font-mono text-accent-sky tracking-widest mb-3 line-decoration">
              WORK
            </p>
            <h2 className="section-heading text-gradient">My Projects</h2>
          </div>
          <button
            onClick={() => navigate("/portfolio")}
            className="btn-secondary flex items-center gap-2 sr-bottom"
          >
            View All <FaAngleDoubleRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectPreviews.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card-hover rounded-3xl overflow-hidden group ${i % 2 === 0 ? "sr-left" : "sr-right"}`}
            >
              <div className="relative overflow-hidden h-52 md:h-64">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-80" />

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-montserrat font-bold text-white">
                    <FiExternalLink /> Live Preview
                  </span>
                </a>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-primary-text font-bold font-ubuntu text-lg">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-primary-text/40">
                    {project.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="section5"
        className="mt-32 lg:mt-48 w-11/12 max-w-7xl mx-auto pb-24 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none" />

        <div className="sr-top mb-16 text-center">
          <p className="text-xs font-mono text-accent-sky tracking-widest mb-3">
            CONTACT
          </p>
          <h2 className="section-heading text-gradient">Get In Touch</h2>
          <p className="text-primary-text/60 font-montserrat text-sm mt-4 max-w-md mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto sr-bottom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              {
                href: `mailto:${emailAddress}`,
                Icon: FiMail,
                label: "Email",
                color: "text-accent-sky",
              },
              {
                href: linkedinUrl,
                Icon: FiLinkedin,
                label: "LinkedIn",
                color: "text-blue-400",
              },
              {
                href: githubUrl,
                Icon: FiGithub,
                label: "GitHub",
                color: "text-primary-text",
              },
              {
                href: whatsappUrl,
                Icon: IoLogoWhatsapp,
                label: "WhatsApp",
                color: "text-green-400",
              },
            ].map(({ href, Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover rounded-2xl p-4 flex flex-col items-center gap-2 group"
              >
                <Icon
                  className={`text-2xl ${color} group-hover:scale-110 transition-transform`}
                />
                <span className="text-xs font-mono text-primary-text/50">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-accent-sky tracking-widest block mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? "border-red-500/70" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-mono text-accent-sky tracking-widest block mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "border-red-500/70" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-accent-sky tracking-widest block mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input resize-none ${errors.message ? "border-red-500/70" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 font-mono">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                onClick={handleSend}
                disabled={loading}
                className="btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message <BsFillSendFill />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isMessageSent}
        onRequestClose={() => setIsMessageSent(false)}
        className="w-[90%] max-w-sm mx-auto rounded-3xl overflow-hidden outline-none"
        overlayClassName="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
      >
        <div className="bg-gradient-to-br from-[#1a0533] to-[#0d1a2d] border border-purple-700/40 p-10 text-center flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center">
            <BsCheckCircleFill className="text-green-400 text-4xl" />
          </div>
          <h3 className="text-2xl font-bold font-ubuntu text-primary-text">
            Message Sent!
          </h3>
          <p className="text-primary-text/60 text-sm font-montserrat">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsMessageSent(false)}
            className="btn-primary px-10"
          >
            Close
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isGetInTouchOpen}
        onRequestClose={() => setGetInTouchOpen(false)}
        className="w-[90%] max-w-2xl mx-auto rounded-3xl overflow-hidden outline-none"
        overlayClassName="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
      >
        <div className="relative bg-gradient-to-br from-[#1a0533] via-[#0d1a33] to-[#0a0a1a] border border-purple-700/40 p-8 md:p-12">
          <button
            onClick={() => setGetInTouchOpen(false)}
            className="absolute right-5 top-5 text-primary-text/60 hover:text-white text-2xl transition-colors"
          >
            <MdCancel />
          </button>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/30 to-accent-sky/20 rounded-full blur-3xl" />
                <img
                  src={phoneget}
                  alt="contact"
                  className="relative w-56 drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-mono text-accent-sky tracking-widest mb-2">
                  REACH OUT
                </p>
                <h2 className="text-3xl font-bold font-ubuntu text-primary-text">
                  Let's Connect
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    href: whatsappUrl,
                    Icon: IoLogoWhatsapp,
                    label: "WhatsApp",
                    color: "text-green-400",
                  },
                  {
                    href: `mailto:${emailAddress}`,
                    Icon: FiMail,
                    label: emailAddress,
                    color: "text-accent-sky",
                  },
                  {
                    href: linkedinUrl,
                    Icon: FiLinkedin,
                    label: "LinkedIn",
                    color: "text-blue-400",
                  },
                  {
                    href: githubUrl,
                    Icon: FiGithub,
                    label: "github.com/afeDayo",
                    color: "text-white",
                  },
                ].map(({ href, Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl glass-card hover:border-accent-sky/50 transition-all group"
                  >
                    <Icon
                      className={`${color} text-2xl group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-primary-text/70 text-sm font-montserrat">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
              <button
                onClick={downloadResume}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FiDownload /> Download Resume
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
