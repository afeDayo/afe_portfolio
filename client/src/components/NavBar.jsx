import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiPhone,
} from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logoo from "../assets/Assets/Logos/mylogggo.png";
import phoneget from "../assets/Assets/Logos/CALLME.png";

Modal.setAppElement("#root");

const NavBar = () => {
  const [isNavModalOpen, setNavModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/14lfweQ-gp-2x-KHVvlBLGTM2cXyavdpn/view?usp=sharing";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  const emailAddress = "afedayo@gmail.com";
  const linkedinProfileUrl = "https://www.linkedin.com/in/afe123";
  const githubProfileUrl = "https://github.com/afeDayo";
  const whatsap = "https://wa.me/+2348124374721";

  const navItems = [
    { to: "top", label: "Home", onClick: () => handleNav("/") },
    { to: "section2", label: "About", onClick: () => handleNav("/") },
    { to: "section3", label: "Skills", onClick: () => handleNav("/") },
    { to: "section4", label: "Projects", onClick: () => handleNav("/") },
    { to: "section5", label: "Contact", onClick: () => handleNav("/") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          className={`w-11/12 max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-[#0d0520]/90 backdrop-blur-xl border border-purple-900/50 shadow-lg shadow-purple-900/20"
              : "bg-[#0d0520]/70 backdrop-blur-md border border-purple-900/30"
          }`}
        >
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent-purple/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
              <img src={logoo} alt="logo" className="relative w-9 h-9 z-10" />
            </div>
            <span className="font-ubuntu font-bold text-primary-text text-sm tracking-widest hidden sm:block">
              AFE<span className="text-accent-sky">.</span>DEV
            </span>
          </div>

          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="text-primary-text/70 font-montserrat text-sm cursor-pointer hover:text-accent-sky transition-colors duration-200 relative group"
                  onClick={item.onClick}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent-purple to-accent-sky group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openNavModal}
              className="btn-primary text-xs py-2 px-5"
            >
              Get in touch
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary-text text-xl p-2 rounded-lg hover:bg-accent-purple/20 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden w-11/12 mx-auto mt-2 bg-[#0d0520]/95 backdrop-blur-xl rounded-2xl p-6 border border-purple-900/50 flex flex-col gap-4 animate-slide-up">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="text-primary-text/80 font-montserrat text-sm block py-3 px-4 rounded-xl hover:bg-accent-purple/15 hover:text-accent-sky transition-all cursor-pointer"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      item.onClick();
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-purple-900/40 pt-4">
              <button
                onClick={() => {
                  setNavModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="btn-primary w-full text-center text-sm py-3"
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </header>

      <Modal
        isOpen={isNavModalOpen}
        onRequestClose={() => setNavModalOpen(false)}
        contentLabel="GetInTouch"
        className="w-[90%] max-w-2xl mx-auto rounded-3xl border border-purple-700/40 overflow-hidden outline-none"
        overlayClassName="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
      >
        <div className="relative bg-gradient-to-br from-[#1a0533] via-[#0d1a33] to-[#0a0a1a] p-8 md:p-12">
          <button
            onClick={() => setNavModalOpen(false)}
            className="absolute right-5 top-5 text-primary-text/60 hover:text-white text-2xl transition-colors z-20"
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
                  className="relative w-64 drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono text-accent-sky tracking-widest mb-2">
                  REACH OUT
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-ubuntu text-primary-text">
                  Let's Connect
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={whatsap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl glass-card hover:border-accent-sky/50 transition-all group"
                >
                  <IoLogoWhatsapp className="text-green-400 text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-primary-text/80 text-sm font-montserrat">
                    WhatsApp
                  </span>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl glass-card hover:border-accent-sky/50 transition-all group"
                >
                  <FiMail className="text-accent-sky text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-primary-text/80 text-sm font-montserrat">
                    {emailAddress}
                  </span>
                </a>

                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl glass-card hover:border-accent-sky/50 transition-all group"
                >
                  <FiLinkedin className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-primary-text/80 text-sm font-montserrat">
                    LinkedIn
                  </span>
                </a>

                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl glass-card hover:border-accent-sky/50 transition-all group"
                >
                  <FiGithub className="text-primary-text text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-primary-text/80 text-sm font-montserrat">
                    GitHub
                  </span>
                </a>
              </div>

              <button
                onClick={downloadResume}
                className="flex items-center justify-center gap-2 btn-secondary py-3 text-sm"
              >
                <FiDownload /> Download Resume
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );

  function openNavModal() {
    setNavModalOpen(true);
  }
};

export default NavBar;
