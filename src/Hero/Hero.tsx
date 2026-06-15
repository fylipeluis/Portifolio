import { useEffect, useState } from "react";
import "./Hero.css";

const statuses = [
  "Conectando servidor...",
  "Carregando assets...",
  "Compilando componentes...",
  "Otimizando bundle...",
  "Pronto.",
];

const roles = [
  "Frontend Developer",
  "React Developer",
  "Modern Web Designer",
  "Interactive Interface Creator",
  "Node.js Developer",
  "Problem Solver",
  "Backend Developer",
];

export default function Hero() {
  const [pct, setPct] = useState(0);
  const [status, setStatus] = useState(statuses[0]);
  const [introGone, setIntroGone] = useState(false);
  const [heroPlay, setHeroPlay] = useState(false);
  const [time, setTime] = useState("--:--:--");
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const total = 2200;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(100, Math.floor((elapsed / total) * 100));

      setPct(progress);

      const sIdx = Math.min(
        statuses.length - 1,
        Math.floor((progress / 100) * statuses.length),
      );

      setStatus(statuses[sIdx]);

      if (progress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIntroGone(true);
          setHeroPlay(true);
        }, 380);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    tick();

    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* CORNERS */}
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>

      {/* INTRO */}
      <div id="intro" className={introGone ? "gone" : ""}>
        <div className="intro-top">Inicializando portfólio</div>

        <div className="intro-counter">
          <span>{pct}</span>

          <span
            className="filled"
            style={{
              clipPath: `inset(0 ${100 - pct}% 0 0)`,
            }}
          >
            {pct}
          </span>
        </div>

        <div className="intro-bar-wrap">
          <div className="intro-bar-fill" style={{ width: `${pct}%` }}></div>

          <div
            className="intro-bar-glow"
            style={{
              opacity: pct > 0 && pct < 100 ? 1 : 0,
            }}
          ></div>
        </div>

        <div className="intro-label">Loading assets</div>

        <div className="intro-status">{status}</div>
      </div>

      {/* HERO */}
      <div id="hero" className={heroPlay ? "play" : ""}>
        {/* TOP */}
        <div className="hud-bar">
          <div className="hud-left">
            <div className="hud-dot"></div>
            <span>Sistema online</span>
          </div>

          <span>{time}</span>

          <span>v2026.1.0</span>
        </div>

        {/* CENTER */}
        <div className="hero-center">
          <div className="orbit-wrap">
            <div className="orbit-dot"></div>
          </div>

          <div className="orbit-wrap2">
            <div className="orbit-dot2"></div>
          </div>

          <h1 className="hero-name">
            <span className="first">Luis </span>
            <span className="last">Fylipe</span>
          </h1>

          <div className="role-ticker">
            <div className="ticker-line"></div>

            <div className="ticker-word">
              <div
                className="ticker-inner"
                style={{
                  transform: `translateY(-${tickerIndex * 1.2}em)`,
                }}
              >
                {roles.map((role, index) => (
                  <div className="ticker-item" key={index}>
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div className="ticker-line"></div>
          </div>

          <p className="hero-desc">
            Desenvolvimento Full Stack com
            <br />
            foco em interfaces modernas,
            <br />
            performance e experiência do usuário.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-main">
              Ver projetos
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M4 10h12M10 4l6 6-6 6" />
              </svg>
            </a>

            <a href="#contact" className="btn-ghost">
              Contato
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="hud-bottom">
          <div className="hud-stats">
            <div className="hud-stat">
              <div className="hud-stat-n">Always</div>
              <div>Learning</div>
            </div>

            <div className="hud-stat">
              <div className="hud-stat-n">Modern</div>
              <div>Stack</div>
            </div>

            <div className="hud-stat">
              <div className="hud-stat-n">Creative</div>
              <div>Solutions</div>
            </div>
          </div>
          <div>Brasilia · BR · UTC−3</div>
        </div>
      </div>
    </>
  );
}
