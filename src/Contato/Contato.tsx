import "./Contato.css";

export function Contato() {
  return (
<section id="contact">
  <div className="contact-info reveal">
    <div className="section-label">Contato</div>

    <h2 className="section-title">
      Vamos construir
      <br />
      algo incrível
      <span style={{ color: "var(--accent)" }}>.</span>
    </h2>

    <p className="section-sub">
      Estou disponível para novos projetos, freelances e oportunidades em
      tempo integral. Vamos conversar!
    </p>

    <div className="contact-methods">
      <a
        href="mailto:luisfylipedesousa@gmail.com"
        className="contact-method"
      >
        <div className="cm-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 8l10 6 10-6" />
          </svg>
        </div>

        <div>
          <div className="cm-label">Email</div>
          <div className="cm-value">luisfylipedesousa@gmail.com</div>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/luisfylipedev"
        target="_blank"
        rel="noreferrer"
        className="contact-method"
      >
        <div className="cm-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>

        <div>
          <div className="cm-label">LinkedIn</div>
          <div className="cm-value">
            www.linkedin.com/in/luisfylipedev
          </div>
        </div>
      </a>

      <a
        href="https://github.com/fylipeluis"
        target="_blank"
        rel="noreferrer"
        className="contact-method"
      >
        <div className="cm-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
          </svg>
        </div>

        <div>
          <div className="cm-label">GitHub</div>
          <div className="cm-value">
           https://github.com/fylipeluis
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
  )
}