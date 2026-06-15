import "./AboutMe.css";
import  FotoPerfil  from "../assets/Foto LF.jpeg"

const chips = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Kotlin",
  "SQL",
  "Docker",
  "Git",
  "GitHub",
];

export function AboutMe() {
  return (
    <section id="about">
      <div className="about-img-wrap reveal">
        <div className="about-photo">
          <img
            src={FotoPerfil}
            alt="Luis Fylipe"
            className="about-photo-img"
          />
        </div>

        <div className="about-badge">
          <span className="big">2+</span>
          Anos de experiência
        </div>
      </div>

      <div className="about-text reveal">
        <div className="section-label">Sobre mim</div>

        <h2 className="section-title">
          Olá, eu sou
          <br />
          <span style={{ color: "var(--accent)" }}>Luis Fylipe</span>
        </h2>

        <p>
  Desenvolvedor web com experiência prática em{" "}
  <strong>React, TypeScript, HTML, CSS e Kotlin</strong>, atuando
  no desenvolvimento de sistemas corporativos e projetos freelancer.
</p>

<p>
  Participei de equipes ágeis no desenvolvimento de funcionalidades
  para o sistema <strong>e-TCU</strong> no Tribunal de Contas da União,
  contribuindo com aplicações modernas, escaláveis e voltadas à boa
  experiência do usuário.
</p>

<p>
  Tenho perfil <strong>proativo, organizado e analítico</strong>,
  com facilidade de aprendizado e foco em criar soluções eficientes,
  utilizando boas práticas de desenvolvimento, código limpo e
  interfaces intuitivas.
</p>

        <div className="about-chips">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
