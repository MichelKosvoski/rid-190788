import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaFolderOpen } from "react-icons/fa";
import MichelFoto from "../img/MichelFoto.png";
import CV from "../docs/Curriculo.pdf";

import { useLang } from "../context/LangContext";

// 🔥 TEXTOS EM 3 IDIOMAS
const text = {
  pt: {
    role: "ENGENHEIRO DE SOFTWARE • FULL-STACK",
    description:
      "Desenvolvo sites e sistemas completos — do simples ao altamente estruturado — sempre com foco em segurança, desempenho e escalabilidade real. Transformo qualquer necessidade em um software sólido, moderno e otimizado, pronto para uso profissional.",
    skills: [
      "Java & Node.js",
      "React & Interfaces modernas",
      "APIs & Bancos de Dados",
      "Performance & Acessibilidade",
    ],
    viewProjects: "Ver Projetos",
    downloadCV: "Baixar CV",
  },

  en: {
    role: "SOFTWARE ENGINEER • FULL-STACK",
    description:
      "I develop complete websites and systems — from simple interfaces to highly structured applications — always focused on security, performance, and true scalability. I turn any business need into solid, modern, and optimized software, ready for professional use.",
    skills: [
      "Java & Node.js",
      "React & Modern Interfaces",
      "APIs & Databases",
      "Performance & Accessibility",
    ],
    viewProjects: "View Projects",
    downloadCV: "Download CV",
  },

  es: {
    role: "INGENIERO DE SOFTWARE • FULL-STACK",
    description:
      "Desarrollo sitios web y sistemas completos — desde interfaces simples hasta aplicaciones altamente estructuradas — siempre enfocado en seguridad, rendimiento y escalabilidad real. Convierto cualquier necesidad en un software sólido, moderno y optimizado, listo para uso profesional.",
    skills: [
      "Java & Node.js",
      "React & Interfaces modernas",
      "APIs & Bases de Datos",
      "Rendimiento & Accesibilidad",
    ],
    viewProjects: "Ver Proyectos",
    downloadCV: "Descargar CV",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = text[lang]; // idioma atual

  return (
    <section className="hero">
      {/* === Texto Principal === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="kicker">{t.role}</div>

        <h1 className="title">
          Michel Soares
          <br />
          Kosvoski
        </h1>

        <p className="lead">{t.description}</p>

        {/* === Habilidades principais === */}
        <div className="pill-row">
          {t.skills.map((s, i) => (
            <span key={i} className="pill">
              {s}
            </span>
          ))}
        </div>

        {/* === Botões === */}
        <div className="cta">
          <a className="btn" href="#projetos">
            <FaFolderOpen style={{ marginRight: "8px" }} />
            {t.viewProjects}
          </a>

          <a className="btn ghost" href={CV} target="_blank" rel="noreferrer">
            <FaFileDownload style={{ marginRight: "8px" }} />
            {t.downloadCV}
          </a>
        </div>
      </motion.div>

      {/* === Foto com efeito glow === */}
      <motion.div
        className="portrait-wrap"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="portrait">
          <img src={MichelFoto} alt="Michel Kosvoski" />

          {/* glow dinâmico */}
          <motion.div
            className="portrait-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
