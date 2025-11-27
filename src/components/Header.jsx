import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MichelFoto from "../img/MichelFoto.png";

import brFlag from "../img/br.png";
import usFlag from "../img/us.png";
import esFlag from "../img/es.png";

import { useLang } from "../context/LangContext";

export default function Header() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const text = {
    pt: {
      available: "Disponível para projetos",
      projects: "Projetos",
      tech: "Tecnologias",
      about: "Sobre mim",
    },
    en: {
      available: "Available for projects",
      projects: "Projects",
      tech: "Technologies",
      about: "About me",
    },
    es: {
      available: "Disponible para proyectos",
      projects: "Proyectos",
      tech: "Tecnologías",
      about: "Sobre mí",
    },
  };

  const options = [
    { value: "pt", label: "Português BR", flag: brFlag },
    { value: "en", label: "English US", flag: usFlag },
    { value: "es", label: "Español ES", flag: esFlag },
  ];

  const current = options.find((o) => o.value === lang);

  return (
    <header className="nav">
      <div className="container nav-inner">
        {/* BRAND */}
        <div className="brand">
          <img src={MichelFoto} alt="Michel" />
          <span style={{ fontWeight: 700 }}>Michel S. Kosvoski</span>

          {/* Sempre disponível */}
          <span
            className="pill"
            style={{
              marginLeft: 8,
              padding: "6px 10px",
              color: "#00ffa3",
            }}
          >
            {text[lang].available}
          </span>
        </div>

        {/* LINKS */}
        <nav className="nav-links">
          <a href="#projetos">{text[lang].projects}</a>
          <a href="#tecnologias">{text[lang].tech}</a>
          <a href="#sobre">{text[lang].about}</a>

          <a className="nav-icon" href="https://github.com/MichelKosvoski">
            <FaGithub />
          </a>

          <a
            className="nav-icon"
            href="https://linkedin.com/in/michel-soares-kosvoski"
          >
            <FaLinkedin />
          </a>

          {/* DROPDOWN DE IDIOMA */}
          <div
            className="lang-switch"
            onClick={() => setOpen(!open)}
            style={{ position: "relative" }}
          >
            <img src={current.flag} alt="flag" />
            <span className="lang-label">{current.label}</span>
            <span className="arrow">▾</span>

            {open && (
              <ul className="lang-dropdown">
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => {
                      setLang(opt.value);
                      setOpen(false);
                    }}
                  >
                    <img src={opt.flag} alt="" />
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
