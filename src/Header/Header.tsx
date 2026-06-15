import './Header.css'

export function Header() {

  return (
    <nav id="main-nav">
      <a className="nav-logo" href="#">
        LUIS FYLIPE DEV<span>.</span>
      </a>
      <ul className="nav-links" id="nav-links">
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            Contato
          </a>
        </li>
      </ul>
      <button className="hamburger" id="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
