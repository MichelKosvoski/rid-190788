import React from "react";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { useLang } from "../context/LangContext";
import useTranslate from "../hooks/useTranslate";

const tech = [
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "HTML5", icon: <SiHtml5 color="#e44d26" /> },
  { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#6cc24a" /> },
  { name: "MySQL", icon: <SiMysql color="#00618A" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Git", icon: <SiGit color="#F1502F" /> },
];

export default function About() {
  const { lang } = useLang();
  const { t } = useTranslate(lang);

  return (
    <section id="sobre" className="section">
      <h2>{t("about.title")}</h2>

      <p className="subtitle">{t("about.paragraph1")}</p>

      {/* ===== TECNOLOGIAS ===== */}
      <div id="tecnologias" className="section" style={{ paddingTop: 0 }}>
        <h3 style={{ margin: "0 0 8px" }}>Tecnologias</h3>

        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "20px",
            marginTop: "16px",
          }}
        >
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(106, 227, 255, 0.2)",
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "20px 10px",
                minHeight: "120px",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</span>
              <b style={{ fontSize: 15 }}>{t.name}</b>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="timeline">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">2024</div>
          <b>Início na UNIGRAN</b>
          <p className="small">
            Ingresso no curso de <b>Engenharia de Software</b> na Universidade
            UNIGRAN, iniciando a jornada acadêmica e os primeiros projetos com
            foco em desenvolvimento full-stack.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">2024</div>
          <b>Fundação da NexTech Solutions</b>
          <p className="small">
            Criação da empresa <b>NexTech Solutions</b>, especializada no
            desenvolvimento de <b>sistemas web e sites institucionais</b>,
            oferecendo soluções sob medida para empresas locais.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">2025</div>
          <b>Expansão de Projetos e Portfólio</b>
          <p className="small">
            Desenvolvimento de sistemas personalizados para clientes comerciais
            e acadêmicos, ampliando o portfólio com aplicações em{" "}
            <b>Java, Python, React e Next.js</b>.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">2025 → hoje</div>
          <b>Consolidação Profissional</b>
          <p className="small">
            Atuação contínua como <b>engenheiro de software full-stack</b>, com
            foco em arquitetura, escalabilidade e soluções modernas para o
            ecossistema digital.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
