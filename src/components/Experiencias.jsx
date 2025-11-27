import React from "react";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

import raizenLogo from "../img/raizenoficial_logo.png";
import unigranLogo from "../img/unigran.png";
import nextechLogo from "../img/nextech.png";

import { useLang } from "../context/LangContext";

// TEXTOS GERAIS
const text = {
  pt: {
    title: "Experiências Profissionais",
    subtitle:
      "Empresas e projetos que fazem parte da minha trajetória profissional e formação como desenvolvedor.",
  },
  en: {
    title: "Professional Experience",
    subtitle:
      "Companies and projects that are part of my professional journey and developer formation.",
  },
  es: {
    title: "Experiencias Profesionales",
    subtitle:
      "Empresas y proyectos que forman parte de mi trayectoria profesional y formación como desarrollador.",
  },
};

// EXPERIÊNCIAS POR IDIOMA
const experiencesByLang = {
  pt: [
    {
      company: "Raízen",
      period: "Setembro 2025 — Atualmente",
      role: "Jovem Aprendiz — Automação Industrial",
      desc: "Atuação no setor de automação, auxiliando em processos de controle e manutenção de sistemas automatizados. Desenvolvimento de habilidades técnicas e experiência prática no ambiente industrial.",
      tech: "Automação • CLP • Controle de processos • Manutenção preventiva",
      logo: raizenLogo,
    },
    {
      company: "NexTech Solutions",
      period: "2024 — Atualmente",
      role: "Fundador e Desenvolvedor Full-Stack",
      desc: "Desenvolvimento de sistemas empresariais e soluções digitais personalizadas, com foco em performance, segurança e experiência do usuário. Atuação em arquitetura de software, APIs REST e integração entre front-end e back-end.",
      tech: "Java • Python • React • MySQL • Node.js",
      logo: nextechLogo,
    },
    {
      company: "UNIGRAN EAD",
      period: "2024 — 2025",
      role: "Projeto Acadêmico de Engenharia de Software",
      desc: "Desenvolvimento do Sistema Bibliotecário UNIGRAN com cadastro e empréstimo de livros e interface Tkinter.",
      tech: "",
      logo: unigranLogo,
    },
    {
      company: "Freelancer",
      period: "2023 — 2024",
      role: "Desenvolvedor Web",
      desc: "Desenvolvimento de sites institucionais, portfólios e landing pages com foco em performance e design responsivo.",
      tech: "HTML • CSS • JavaScript",
      logo: null,
    },
  ],

  en: [
    {
      company: "Raízen",
      period: "September 2025 — Present",
      role: "Apprentice — Industrial Automation",
      desc: "Working in the automation department, assisting in control processes and maintenance of automated systems. Development of technical skills and hands-on experience in an industrial environment.",
      tech: "Automation • PLC • Process control • Preventive maintenance",
      logo: raizenLogo,
    },
    {
      company: "NexTech Solutions",
      period: "2024 — Present",
      role: "Founder & Full-Stack Developer",
      desc: "Development of business systems and custom digital solutions focused on performance, security and user experience. Acting in software architecture, REST APIs and integration between front-end and back-end.",
      tech: "Java • Python • React • MySQL • Node.js",
      logo: nextechLogo,
    },
    {
      company: "UNIGRAN EAD",
      period: "2024 — 2025",
      role: "Academic Project — Software Engineering",
      desc: "Development of the UNIGRAN Library System with book registration, loan management and Tkinter interface.",
      tech: "",
      logo: unigranLogo,
    },
    {
      company: "Freelancer",
      period: "2023 — 2024",
      role: "Web Developer",
      desc: "Development of institutional websites, portfolios and landing pages focused on performance and responsive design.",
      tech: "HTML • CSS • JavaScript",
      logo: null,
    },
  ],

  es: [
    {
      company: "Raízen",
      period: "Septiembre 2025 — Actualidad",
      role: "Joven Aprendiz — Automatización Industrial",
      desc: "Actuación en el área de automatización, apoyando en procesos de control y mantenimiento de sistemas automatizados. Desarrollo de habilidades técnicas y experiencia práctica en el entorno industrial.",
      tech: "Automatización • PLC • Control de procesos • Mantenimiento preventivo",
      logo: raizenLogo,
    },
    {
      company: "NexTech Solutions",
      period: "2024 — Actualidad",
      role: "Fundador y Desarrollador Full-Stack",
      desc: "Desarrollo de sistemas empresariales y soluciones digitales personalizadas, con foco en rendimiento, seguridad y experiencia del usuario. Actuación en arquitectura de software, APIs REST e integración entre front-end y back-end.",
      tech: "Java • Python • React • MySQL • Node.js",
      logo: nextechLogo,
    },
    {
      company: "UNIGRAN EAD",
      period: "2024 — 2025",
      role: "Proyecto Académico de Ingeniería de Software",
      desc: "Desarrollo del Sistema Bibliotecario UNIGRAN con registro y préstamo de libros e interfaz en Tkinter.",
      tech: "",
      logo: unigranLogo,
    },
    {
      company: "Freelancer",
      period: "2023 — 2024",
      role: "Desarrollador Web",
      desc: "Desarrollo de sitios institucionales, portafolios y landing pages con foco en rendimiento y diseño responsivo.",
      tech: "HTML • CSS • JavaScript",
      logo: null,
    },
  ],
};

export default function Experiencias() {
  const { lang } = useLang();
  const t = text[lang];
  const experiences = experiencesByLang[lang];

  return (
    <section id="experiencias" className="section">
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.title}
      </motion.h2>

      {/* SUBTÍTULO */}
      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t.subtitle}
      </motion.p>

      {/* CARDS */}
      <div className="grid">
        {experiences.map((exp, idx) => (
          <motion.article
            key={idx}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 0 20px rgba(106, 227, 255, 0.2)",
            }}
            style={{
              textAlign: "left",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h4 style={{ color: "#7ae3ff", marginBottom: "5px" }}>
                {exp.period}
              </h4>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "6px",
                }}
              >
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      objectFit: "contain",
                      background: "rgba(255,255,255,0.07)",
                      padding: "4px",
                      boxShadow: "0 0 6px rgba(255,255,255,0.08)",
                    }}
                  />
                ) : (
                  <FaBuilding style={{ fontSize: "22px", color: "#7ae3ff" }} />
                )}
                <h3 style={{ fontSize: "18px", fontWeight: 700 }}>
                  {exp.company}
                </h3>
              </div>

              <p style={{ fontWeight: 500 }}>{exp.role}</p>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "8px",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: "1.5",
                }}
              >
                {exp.desc}
              </p>
            </div>

            <p
              style={{
                color: "#9bb0d0",
                fontSize: "13px",
                marginTop: "10px",
                fontStyle: "italic",
              }}
            >
              {exp.tech}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
