import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent-sky/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 flex flex-col items-center gap-6 animate-slide-up">
        <div className="relative select-none">
          <span className="text-[120px] md:text-[180px] lg:text-[220px] font-bold font-ubuntu leading-none text-gradient opacity-20">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-card rounded-3xl px-8 py-4 border-accent-purple/40">
              <span className="text-4xl md:text-6xl font-bold font-ubuntu text-gradient">
                404
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 glass-card rounded-full px-5 py-2">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-red-400 tracking-widest">
            PAGE NOT FOUND
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-ubuntu text-primary-text mt-2">
          Oops! Wrong turn.
        </h1>

        <p className="text-primary-text/50 font-montserrat text-sm max-w-md leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to safety.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary flex items-center gap-2"
          >
            <FiArrowLeft /> Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn-primary flex items-center gap-2"
          >
            <FiHome /> Go Home
          </button>
        </div>

        <div className="mt-8 glass-card rounded-2xl px-8 py-4 font-mono text-xs text-left">
          <span className="text-primary-text/30">// what happened?</span>
          <br />
          <span className="text-accent-sky">const</span>{" "}
          <span className="text-primary-text">page</span>{" "}
          <span className="text-accent-pink">=</span>{" "}
          <span className="text-yellow-400">window.location.href</span>
          <span className="text-primary-text">;</span>
          <br />
          <span className="text-accent-sky">if</span>{" "}
          <span className="text-primary-text">(!</span>
          <span className="text-secondary-text">routes</span>
          <span className="text-primary-text">.</span>
          <span className="text-accent-sky">includes</span>
          <span className="text-primary-text">(page)) {`{`}</span>
          <br />
          <span className="text-primary-text/50">
            &nbsp;&nbsp;throw new Error(
          </span>
          <span className="text-green-400">"404 Not Found"</span>
          <span className="text-primary-text/50">);</span>
          <br />
          <span className="text-primary-text">{`}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Error;
