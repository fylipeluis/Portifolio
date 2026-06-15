const skills = [
  {
    icon: "⚛️",
    name: "React / Next.js",
    desc: "Interfaces modernas e performáticas",
    level: 92,
  },
  {
    icon: "🟨",
    name: "JavaScript / TS",
    desc: "Lógica robusta e tipagem forte",
    level: 90,
  },
  {
    icon: "🟢",
    name: "Node.js",
    desc: "APIs REST e serviços backend",
    level: 85,
  },
  { icon: "🐍", name: "Python", desc: "Scripts, automações e ML", level: 78 },
  {
    icon: "🐘",
    name: "PostgreSQL",
    desc: "Modelagem e queries avançadas",
    level: 80,
  },
  {
    icon: "🐳",
    name: "Docker / AWS",
    desc: "Deploy, cloud e infraestrutura",
    level: 72,
  },
];

const projects = [
  {
    emoji: "🛍️",
    tags: ["React", "Node.js", "MongoDB"],
    name: "E-commerce Platform",
    desc: "Plataforma completa com gestão de produtos, carrinho, pagamentos e painel admin em tempo real.",
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

const experiences = [
  {
    period: "2023 – Presente",
    title: "Senior Full Stack Developer",
    company: "TechStart Ltda. · Remoto",
    desc: "Liderança técnica de um produto SaaS B2B, arquitetura de microserviços, code reviews e mentoria de desenvolvedores júnior. Reduzi o tempo de carregamento em 60% com otimizações de bundle e cache estratégico.",
  },
  {
    period: "2022 – 2023",
    title: "Frontend Developer",
    company: "Agência Digital XYZ · São Paulo, SP",
    desc: "Desenvolvimento de interfaces para clientes de grande porte usando React e TypeScript. Implementei design system próprio da agência, aumentando a consistência visual em 100% dos projetos.",
  },
  {
    period: "2021 – 2022",
    title: "Desenvolvedor Júnior",
    company: "Freelancer · Remoto",
    desc: "Criação de landing pages, sistemas de gestão e integrações de APIs para pequenos e médios negócios. Mais de 20 projetos entregues dentro do prazo e orçamento.",
  },
];

/* ── SKILLS ── */
const grid = document.getElementById("skills-grid");
skills.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "skill-card reveal";
  card.style.transitionDelay = i * 80 + "ms";
  card.innerHTML = `
        <span class="skill-icon">${s.icon}</span>
        <div class="skill-name">${s.name}</div>
        <div style="font-size:.82rem;color:var(--text3);font-weight:300">${s.desc}</div>
        <div class="skill-level">
          <div class="skill-fill" style="width:${s.level}%;animation-delay:${i * 100 + 400}ms"></div>
        </div>
        <div class="skill-percent">${s.level}%</div>
      `;
  grid.appendChild(card);
});

/* ── CAROUSEL ── */
const track = document.getElementById("carousel-track");
const dotsWrap = document.getElementById("carousel-dots");
let current = 0;
let cardsVisible = 3;

function getCardsVisible() {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

projects.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
        <div class="project-thumb">${p.emoji}</div>
        <div class="project-body">
          <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
          <div class="project-name">${p.name}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">
            <a href="${p.demo}" class="proj-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
            <a href="${p.github}" class="proj-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>
      `;
  track.appendChild(card);
});

function buildDots() {
  dotsWrap.innerHTML = "";
  cardsVisible = getCardsVisible();
  const total = Math.ceil(projects.length / cardsVisible);
  for (let i = 0; i < total; i++) {
    const d = document.createElement("button");
    d.className = "dot" + (i === 0 ? " active" : "");
    d.setAttribute("aria-label", `Página ${i + 1}`);
    d.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(d);
  }
}

function updateCarousel() {
  cardsVisible = getCardsVisible();
  const cards = track.querySelectorAll(".project-card");
  const cardW = cards[0].offsetWidth + 24;
  const offset = current * cardsVisible * cardW;
  track.style.transform = `translateX(-${offset}px)`;
  dotsWrap
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === current));
}

function goTo(idx) {
  cardsVisible = getCardsVisible();
  const maxPage = Math.ceil(projects.length / cardsVisible) - 1;
  current = Math.max(0, Math.min(idx, maxPage));
  updateCarousel();
}

document
  .getElementById("prev-btn")
  .addEventListener("click", () => goTo(current - 1));
document
  .getElementById("next-btn")
  .addEventListener("click", () => goTo(current + 1));

let startX = 0;
track.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
track.addEventListener("touchend", (e) => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
});

buildDots();
window.addEventListener("resize", () => {
  buildDots();
  current = 0;
  updateCarousel();
});

/* ── TIMELINE ── */
const tl = document.getElementById("timeline");
experiences.forEach((e, i) => {
  const item = document.createElement("div");
  item.className = "timeline-item reveal";
  item.style.transitionDelay = i * 120 + "ms";
  item.innerHTML = `
        <div class="tl-period">${e.period}</div>
        <div class="tl-title">${e.title}</div>
        <div class="tl-company">${e.company}</div>
        <p class="tl-desc">${e.desc}</p>
      `;
  tl.appendChild(item);
});

/* ── COUNTER ANIMATION ── */
function animateCount(el, target) {
  const suffix = target >= 10 ? "+" : "+";
  let start = 0;
  const dur = 1400;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const p = Math.min((timestamp - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ── INTERSECTION OBSERVER ── */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        const counter = e.target.querySelector("[data-count]");
        if (counter) animateCount(counter, +counter.dataset.count);
        const counters = e.target.querySelectorAll("[data-count]");
        counters.forEach((c) => animateCount(c, +c.dataset.count));
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ── HAMBURGER ── */
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});

/* ── FORM ── */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("form-success").style.display = "block";
});

/* ── NAV SCROLL ── */
window.addEventListener("scroll", () => {
  document.getElementById("main-nav").style.padding =
    window.scrollY > 60 ? ".8rem 6vw" : "1.25rem 6vw";
});
