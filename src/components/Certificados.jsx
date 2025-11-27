import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

import sistemaJava from "../docs/SistemaJava.pdf";
import js from "../docs/JS.pdf";
import css from "../docs/CSS.pdf";
import webhtml from "../docs/Webhtml.pdf";

import { useLang } from "../context/LangContext";

// 🔵 TEXTOS EM 3 IDIOMAS
const text = {
  pt: {
    title: "Certificados",
    subtitle:
      "Conquistas acadêmicas e certificações que fortalecem minha atuação como desenvolvedor.",
    view: "Visualizar",

    certificates: [
      {
        title: "Sistema Java",
        issuer: "Fundação Bradesco",
        year: "2025",
        link: sistemaJava,
      },
      {
        title: "Fundamentos de JavaScript",
        issuer: "Fundação Bradesco",
        year: "2025",
        link: js,
      },
      {
        title: "Responsividade CSS com Media Queries",
        issuer: "Fundação Bradesco",
        year: "2025",
        link: css,
      },
      {
        title: "Introdução ao Desenvolvimento Web",
        issuer: "Fundação Bradesco",
        year: "2025",
        link: webhtml,
      },
    ],
  },

  en: {
    title: "Certificates",
    subtitle:
      "Academic achievements and certifications that strengthen my work as a developer.",
    view: "View",

    certificates: [
      {
        title: "Java System",
        issuer: "Bradesco Foundation",
        year: "2025",
        link: sistemaJava,
      },
      {
        title: "JavaScript Fundamentals",
        issuer: "Bradesco Foundation",
        year: "2025",
        link: js,
      },
      {
        title: "CSS Responsiveness with Media Queries",
        issuer: "Bradesco Foundation",
        year: "2025",
        link: css,
      },
      {
        title: "Introduction to Web Development",
        issuer: "Bradesco Foundation",
        year: "2025",
        link: webhtml,
      },
    ],
  },

  es: {
    title: "Certificados",
    subtitle:
      "Logros académicos y certificaciones que refuerzan mi actuación como desarrollador.",
    view: "Ver",

    certificates: [
      {
        title: "Sistema Java",
        issuer: "Fundación Bradesco",
        year: "2025",
        link: sistemaJava,
      },
      {
        title: "Fundamentos de JavaScript",
        issuer: "Fundación Bradesco",
        year: "2025",
        link: js,
      },
      {
        title: "Responsividad CSS con Media Queries",
        issuer: "Fundación Bradesco",
        year: "2025",
        link: css,
      },
      {
        title: "Introducción al Desarrollo Web",
        issuer: "Fundación Bradesco",
        year: "2025",
        link: webhtml,
      },
    ],
  },
};

export default function Certificates() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section id="certificados" className="section">
      {/* 🔵 TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.title}
      </motion.h2>

      {/* 🔵 SUBTÍTULO */}
      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t.subtitle}
      </motion.p>

      {/* 🔵 GRID */}
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {t.certificates.map((cert, idx) => (
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
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "240px",
              padding: "16px",
            }}
          >
            <div>
              <FaCertificate
                style={{
                  fontSize: "30px",
                  color: "#7ae3ff",
                  marginBottom: 10,
                }}
              />

              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
              <p style={{ color: "#aaa", fontSize: "13px" }}>{cert.year}</p>
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="btn ghost"
              style={{
                marginTop: "10px",
                width: "120px",
                alignSelf: "center",
              }}
            >
              <FaExternalLinkAlt style={{ marginRight: "6px" }} /> {t.view}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
