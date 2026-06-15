import "./Experience.css";

const experiences = [
  {
    period: "2025 – Presente",
    title: "Desenvolvedor Full Stack Freelancer",
    company: "Autônomo · Remoto",
    desc: "Criação de aplicações web, interfaces modernas e automações para pequenos projetos e clientes.",
  },
  {
    period: "2023 – 2025",
    title: "Estagiario em Desenvolvimento Web",
    company: "Tribunal de Contas Da União - TCU · Brasilia, DF",
    desc: "Atuei no suporte e desenvolvimento de sistemas corporativos como o E-TCU (Sistema de Gerenciamento), realizando atendimento a usuários, manutenção e implementação de novas funcionalidades utilizando React, Kotlin e TypeScript. Também participei de equipes ágeis, contribuindo com testes, documentação técnica e versionamento de código com Git, garantindo qualidade, organização e eficiência nas entregas.",
  },
];

export function Experience() {
  return (
    <section id="experience">
      <div className="reveal">
        <div className="section-label">Trajetória</div>
        <h2 className="section-title">
          Experiência
          <br />
          profissional
        </h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item reveal" key={i} style={{ transitionDelay: `${i * 120}ms` }}>
            <div className="tl-period">{exp.period}</div>
            <div className="tl-title">{exp.title}</div>
            <div className="tl-company">{exp.company}</div>
            <p className="tl-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}