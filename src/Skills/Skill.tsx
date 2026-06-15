import { useEffect, useRef } from "react";
import "./Skill.css";

const skills = [
  {
    icon: "🎨",
    name: "HTML / CSS",
    desc: "Layouts responsivos, animações e UI moderna",
    level: 92,
  },
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
    name: "Backend & APIs",
    desc: "Node.js, Kotlin, Java, APIs REST e banco de dados",
    level: 80,
  },
  { icon: "🐍", name: "Python", desc: "Scripts, automações e ML", level: 78 },
  { icon: "🗄️", name: "SQL", desc: "Modelagem e queries avançadas", level: 80 },
  {
    icon: "🐳",
    name: "Docker",
    desc: "Deploy, cloud e infraestrutura",
    level: 72,
  },
  {
    icon: "🌿",
    name: "Git / GitHub",
    desc: "Versionamento, colaboração e gerenciamento de código",
    level: 85,
  },
];

export function Skill() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll<HTMLElement>(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="skills-header reveal">
        <div>
          <div className="section-label">Competências</div>
          <h2 className="section-title">
            Minhas skills
            <br />
            técnicas
          </h2>
        </div>
        <p className="section-sub">
          Ferramentas e tecnologias que uso para transformar ideias em
          realidade.
        </p>
      </div>

      <div className="skills-grid" ref={gridRef}>
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.desc}</div>
            <div className="skill-level">
              <div
                className="skill-fill"
                style={
                  { "--level": `${skill.level / 100}` } as React.CSSProperties
                }
              />
            </div>
            <div className="skill-percent">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}
