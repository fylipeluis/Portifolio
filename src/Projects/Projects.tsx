import { useState, useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    emoji: "🛍️",
    tags: ["React", "Node.js", "MySQL"],
    name: "FacilitSystem [Demo]",
    desc: "Plataforma de gestão de cobranças e pagamentos com integração via WhatsApp.",
    demo: "#",
    github: "#",
  },
  {
    emoji: "📊",
    tags: ["Next.js", "GraphQL", "Prisma"],
    name: "Analytics Dashboard",
    desc: "Dashboard de métricas com gráficos interativos, filtros dinâmicos e exportação de relatórios.",
    demo: "#",
    github: "#",
  },
  {
    emoji: "🤖",
    tags: ["Python", "FastAPI", "OpenAI"],
    name: "AI Chat Assistant",
    desc: "Assistente conversacional com processamento de linguagem natural e integração com APIs de IA.",
    demo: "#",
    github: "#",
  },
  {
    emoji: "📱",
    tags: ["React Native", "Expo", "Firebase"],
    name: "Fitness Tracker App",
    desc: "App mobile para rastreamento de treinos, metas e evolução física com notificações.",
    demo: "#",
    github: "#",
  },
  {
    emoji: "🔐",
    tags: ["Node.js", "JWT", "Redis"],
    name: "Auth Microservice",
    desc: "Serviço de autenticação robusto com OAuth2, 2FA, sessions distribuídas e rate limiting.",
    demo: "#",
    github: "#",
  },
  {
    emoji: "🌐",
    tags: ["Astro", "TailwindCSS"],
    name: "Blog & CMS",
    desc: "Blog pessoal com CMS headless, SEO otimizado, dark mode e performance 100/100 no Lighthouse.",
    demo: "#",
    github: "#",
  },
];

export function Projects() {
  const [current, setCurrent] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const nextPage = useRef(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsVisible(1);
      else if (window.innerWidth < 900) setCardsVisible(2);
      else setCardsVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(projects.length / cardsVisible);

  const goTo = (idx: number) => {
    if (phase !== "idle") return;
    const next = Math.max(0, Math.min(idx, totalPages - 1));
    if (next === current) return;

    nextPage.current = next;
    setPhase("out");

    setTimeout(() => {
      setCurrent(next);
      setPhase("in");
      setTimeout(() => setPhase("idle"), 350);
    }, 250);
  };

  const visibleProjects = projects.slice(
    current * cardsVisible,
    current * cardsVisible + cardsVisible
  );

  return (
    <section id="projects">
      <div className="section-header reveal">
        <div>
          <div className="section-label">Portfólio</div>
          <h2 className="section-title">Projetos em destaque</h2>
        </div>
        <div className="carousel-controls">
          <button
            className="ctrl-btn"
            onClick={() => goTo(current - 1)}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4L6 10l6 6" />
            </svg>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => goTo(current + 1)}
            aria-label="Próximo"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 4l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="carousel-track-wrap"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
        }}
      >
        <div
          className="carousel-track"
          style={{
            opacity: phase === "out" ? 0 : 1,
            transform: phase === "out"
              ? "translateY(12px)"
              : phase === "in"
              ? "translateY(0)"
              : "translateY(0)",
            transition: phase === "out"
              ? "opacity 0.2s ease, transform 0.2s ease"
              : "opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {visibleProjects.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-thumb">{p.emoji}</div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>

                <div className="project-links">
                  <a href={p.demo} className="proj-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Demo
                  </a>
                  <a href={p.github} className="proj-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}