import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import mylolo from "../assets/Assets/Logos/mylogggo.png";

const Footer = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const navItems = [
    { to: "top", label: "Home", onClick: goHome },
    { to: "section2", label: "About", onClick: goHome },
    { to: "section3", label: "Skills", onClick: goHome },
    { to: "section4", label: "Projects", onClick: goHome },
    { to: "section5", label: "Contact", onClick: goHome },
  ];

  const socials = [
    {
      href: "https://github.com/afeDayo",
      Icon: FiGithub,
      label: "GitHub",
      color: "hover:text-primary-text",
    },
    {
      href: "https://www.linkedin.com/in/afe123",
      Icon: FiLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: "mailto:afedayo@gmail.com",
      Icon: FiMail,
      label: "Email",
      color: "hover:text-accent-sky",
    },
    {
      href: "https://wa.me/+2348124374721",
      Icon: IoLogoWhatsapp,
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-accent-purple/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-purple/60 to-transparent" />

      <div className="w-11/12 max-w-7xl mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col gap-5">
            <Link
              to="top"
              smooth={true}
              duration={600}
              onClick={goHome}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-purple/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                <img
                  src={mylolo}
                  alt="logo"
                  className="relative w-9 h-9 z-10"
                />
              </div>
              <span className="font-ubuntu font-bold text-primary-text text-sm tracking-widest">
                AFE<span className="text-accent-sky">.</span>DEV
              </span>
            </Link>

            <p className="text-primary-text/50 text-xs font-montserrat leading-relaxed max-w-[220px]">
              Full-stack developer crafting fast, beautiful and accessible web
              experiences.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl glass-card text-primary-text/40 ${color} transition-all duration-200 hover:scale-110 hover:border-accent-sky/40`}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-mono text-accent-sky tracking-widest">
              NAVIGATION
            </p>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={item.onClick}
                    className="text-primary-text/50 text-sm font-montserrat cursor-pointer hover:text-accent-sky transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent-sky group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-mono text-accent-sky tracking-widest">
              GET IN TOUCH
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:afedayo@gmail.com"
                className="text-primary-text/50 text-sm font-montserrat hover:text-accent-sky transition-colors duration-200 flex items-center gap-2"
              >
                <FiMail className="text-accent-sky flex-shrink-0" />
                afedayo@gmail.com
              </a>
              <a
                href="https://wa.me/+2348124374721"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text/50 text-sm font-montserrat hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
              >
                <IoLogoWhatsapp className="text-green-400 flex-shrink-0" />
                +234 812 437 4721
              </a>
              <a
                href="https://www.linkedin.com/in/afe123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text/50 text-sm font-montserrat hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                <FiLinkedin className="text-blue-400 flex-shrink-0" />
                linkedin.com/in/afe123
              </a>
            </div>

            <div className="mt-2 flex items-center gap-2 glass-card rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400">
                Available for work
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-accent-purple/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-text/30 text-xs font-mono">
            &copy; {new Date().getFullYear()} Afe, Temidayo. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-primary-text/20 text-xs font-mono hover:text-primary-text/50 cursor-default transition-colors">
              Privacy Policy
            </span>
            <span className="text-primary-text/20 text-xs font-mono hover:text-primary-text/50 cursor-default transition-colors">
              Terms of Use
            </span>
            <span className="text-primary-text/20 text-xs font-mono">
              Built with <span className="text-accent-sky">React</span> +{" "}
              <span className="text-teal-400">Tailwind</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
