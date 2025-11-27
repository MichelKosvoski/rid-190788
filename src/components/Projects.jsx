import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaJava } from "react-icons/fa";
import {
  SiPython,
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

import { useLang } from "../context/LangContext";

// ================= TEXTOS GERAIS =================
const text = {
  pt: {
    title: "Projetos em Destaque",
    subtitle:
      "Alguns dos projetos que mais representam minha evolução como desenvolvedor — desde aplicações acadêmicas até sistemas empresariais e soluções internas da MK.",
    viewProject: "Ver projeto",
    repo: "Repositório",
  },
  en: {
    title: "Featured Projects",
    subtitle:
      "Some of the projects that best represent my growth as a developer — from academic applications to business systems and internal MK solutions.",
    viewProject: "View project",
    repo: "Repository",
  },
  es: {
    title: "Proyectos Destacados",
    subtitle:
      "Algunos de los proyectos que mejor representan mi evolución como desarrollador — desde aplicaciones académicas hasta sistemas empresariales y soluciones internas de MK.",
    viewProject: "Ver proyecto",
    repo: "Repositorio",
  },
};

// ================= PROJETOS POR IDIOMA =================
const projectsByLang = {
  pt: [
    {
      title: "Projeto Landing Page — Escola DNC",
      desc: "Landing page desenvolvida durante o módulo base da Escola DNC, com design moderno e responsivo.",
      tech: [
        <SiHtml5 key="html" />,
        <SiCss3 key="css" />,
        <SiJavascript key="js" />,
      ],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Projeto-Landing-Page",
    },
    {
      title: "Calculadora em Python",
      desc: "Aplicação em Python com operações matemáticas básicas, estrutura modular e validações.",
      tech: [<SiPython key="py" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Calculadora",
    },
    {
      title: "Painel de Login",
      desc: "Sistema de autenticação com interface gráfica, desenvolvido em Python usando Tkinter.",
      tech: [<SiPython key="py" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Painel-de-login",
    },
    {
      title: "Sistema Bibliotecário UNIGRAN",
      desc: "Sistema acadêmico desenvolvido como atividade na UNIGRAN, com cadastro e empréstimo de livros.",
      tech: [<SiPython key="py" />, <SiMysql key="mysql" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/System-Bibliotecario-Unigran",
    },
    {
      title: "SystemGest-o",
      desc: "Sistema sob demanda para uma loja comercial local — gestão de estoque, clientes e vendas.",
      tech: [<FaJava key="java" />, <SiMysql key="mysql" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/SystemGest-o",
    },
    {
      title: "Sistema Nex-Tech",
      desc: "Sistema empresarial em desenvolvimento para automação e controle interno.",
      tech: [
        <FaJava key="java" />,
        <SiSpringboot key="spring" />,
        <SiMysql key="mysql" />,
      ],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Sistema-Nex-Tech",
    },
  ],

  en: [
    {
      title: "Landing Page Project — DNC School",
      desc: "Landing page built during the DNC School base module, with a modern and responsive design.",
      tech: [
        <SiHtml5 key="html" />,
        <SiCss3 key="css" />,
        <SiJavascript key="js" />,
      ],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Projeto-Landing-Page",
    },
    {
      title: "Python Calculator",
      desc: "Python application with basic math operations, modular structure and input validation.",
      tech: [<SiPython key="py" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Calculadora",
    },
    {
      title: "Login Panel",
      desc: "Authentication system with graphical interface, built in Python using Tkinter.",
      tech: [<SiPython key="py" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Painel-de-login",
    },
    {
      title: "UNIGRAN Library System",
      desc: "Academic system developed at UNIGRAN, with book registration and loan control.",
      tech: [<SiPython key="py" />, <SiMysql key="mysql" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/System-Bibliotecario-Unigran",
    },
    {
      title: "SystemGest-o",
      desc: "On-demand system for a local store — inventory, customers and sales management.",
      tech: [<FaJava key="java" />, <SiMysql key="mysql" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/SystemGest-o",
    },
    {
      title: "Nex-Tech System",
      desc: "Business system in development for automation and internal control.",
      tech: [
        <FaJava key="java" />,
        <SiSpringboot key="spring" />,
        <SiMysql key="mysql" />,
      ],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Sistema-Nex-Tech",
    },
  ],

  es: [
    {
      title: "Landing Page — Escuela DNC",
      desc: "Landing page desarrollada durante el módulo base de la Escuela DNC, con diseño moderno y responsivo.",
      tech: [
        <SiHtml5 key="html" />,
        <SiCss3 key="css" />,
        <SiJavascript key="js" />,
      ],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Projeto-Landing-Page",
    },
    {
      title: "Calculadora en Python",
      desc: "Aplicación en Python con operaciones matemáticas básicas, estructura modular y validaciones.",
      tech: [<SiPython key="py" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Calculadora",
    },
    {
      title: "Panel de Login",
      desc: "Sistema de autenticación con interfaz gráfica, desarrollado en Python usando Tkinter.",
      tech: [<SiPython key="py" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Painel-de-login",
    },
    {
      title: "Sistema Bibliotecario UNIGRAN",
      desc: "Sistema académico desarrollado en UNIGRAN, con registro y préstamo de libros.",
      tech: [<SiPython key="py" />, <SiMysql key="mysql" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/System-Bibliotecario-Unigran",
    },
    {
      title: "SystemGest-o",
      desc: "Sistema a medida para una tienda comercial local — gestión de stock, clientes y ventas.",
      tech: [<FaJava key="java" />, <SiMysql key="mysql" />],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/SystemGest-o",
    },
    {
      title: "Sistema Nex-Tech",
      desc: "Sistema empresarial en desarrollo para automatización y control interno.",
      tech: [
        <FaJava key="java" />,
        <SiSpringboot key="spring" />,
        <SiMysql key="mysql" />,
      ],
      demo: "#",
      repo: "https://github.com/MichelKosvoski/Sistema-Nex-Tech",
    },
  ],
};

export default function Projects() {
  const { lang } = useLang();
  const t = text[lang];
  const items = projectsByLang[lang];

  return (
    <section id="projetos" className="section">
      {/* ===== TÍTULO ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.title}
      </motion.h2>

      {/* ===== SUBTÍTULO ===== */}
      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t.subtitle}
      </motion.p>

      {/* ===== GRID DE PROJETOS ===== */}
      <div className="grid">
        {items.map((p, idx) => (
          <motion.article
            className="card"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 0 20px rgba(106, 227, 255, 0.2)",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              minHeight: "260px",
            }}
          >
            {/* ===== CONTEÚDO ===== */}
            <div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "20px",
                  color: "#7ae3ff",
                  marginTop: "8px",
                  marginBottom: "14px",
                }}
              >
                {p.tech.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            </div>

            {/* ===== BOTÕES ===== */}
            <div
              className="card-actions"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "auto",
                gap: "10px",
              }}
            >
              {p.demo !== "#" && (
                <a
                  className="btn"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt style={{ marginRight: "6px" }} />{" "}
                  {t.viewProject}
                </a>
              )}
              {p.repo !== "#" && (
                <a
                  className="btn ghost"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub style={{ marginRight: "6px" }} /> {t.repo}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
