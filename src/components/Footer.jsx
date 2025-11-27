import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useLang } from "../context/LangContext";

export default function Footer() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const labels = {
    pt: {
      title: "Vamos conversar",
      subtitle: (
        <>
          Falo sobre <b>projetos, freelas</b> e <b>oportunidades</b>. Me envie
          uma mensagem:
        </>
      ),
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu e-mail",
      messagePlaceholder: "Escreva sua mensagem…",
      send: "Enviar",
      sent: "Enviado! ✅",
      emailBtn: "E-mail",
      copyrightPrefix: "Desenvolvido com",
      successMsg: "Mensagem enviada! Abrindo WhatsApp...",
    },

    en: {
      title: "Let’s talk",
      subtitle: (
        <>
          I’m open to <b>projects, freelance work</b> and <b>opportunities</b>.
          Send me a message:
        </>
      ),
      namePlaceholder: "Your name",
      emailPlaceholder: "Your e-mail",
      messagePlaceholder: "Write your message…",
      send: "Send",
      sent: "Sent! ✅",
      emailBtn: "Email",
      copyrightPrefix: "Built with",
      successMsg: "Message sent! Opening WhatsApp...",
    },

    es: {
      title: "Vamos conversar",
      subtitle: (
        <>
          Hablo sobre <b>proyectos, trabajos freelance</b> y{" "}
          <b>oportunidades</b>. Envíame un mensaje:
        </>
      ),
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo",
      messagePlaceholder: "Escribe tu mensaje…",
      send: "Enviar",
      sent: "¡Enviado! ✅",
      emailBtn: "Correo",
      copyrightPrefix: "Desarrollado con",
      successMsg: "¡Mensaje enviado! Abriendo WhatsApp...",
    },
  };

  const t = labels[lang];

  // ESTADO DOS CAMPOS
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // =============================
  // 🚀 ENVIO PARA FORMSPREE + WHATSAPP
  // =============================
  const onSubmit = async (e) => {
    e.preventDefault();

    // 1) ----------- ENVIO PARA O FORMSPREE ----------
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    await fetch("https://formspree.io/f/xyzqzbka", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    // 2) ----------- MENSAGEM PARA WHATSAPP ----------
    const msg = `📩 NOVA MENSAGEM DO PORTFÓLIO\n
👤 Nome: ${form.name}
📧 Email: ${form.email}

💬 Mensagem:
${form.message}
`;

    const encoded = encodeURIComponent(msg);

    window.open(`https://wa.me/5567993487826?text=${encoded}`, "_blank");

    // 3) ----------- FEEDBACK VISUAL ----------
    setSent(true);
    setTimeout(() => setSent(false), 2500);

    // 4) ----------- RESET FORM ----------
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contato" className="footer">
      <div className="container" style={{ textAlign: "center" }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {t.title}
        </motion.h2>

        <motion.p className="subtitle">{t.subtitle}</motion.p>

        {/* ================= FORM ================= */}
        <motion.form
          onSubmit={onSubmit}
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "1fr 1fr",
            margin: "25px auto",
            maxWidth: 800,
          }}
        >
          <input
            name="name"
            required
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="email"
            required
            type="email"
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            required
            placeholder={t.messagePlaceholder}
            value={form.message}
            onChange={handleChange}
            rows={5}
            style={{ ...inputStyle, gridColumn: "1/-1" }}
          />

          {/* BOTÕES */}
          <div
            style={{
              gridColumn: "1/-1",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <button className="btn" type="submit">
              {sent ? t.sent : t.send}
            </button>

            <div className="links" style={{ display: "flex", gap: 14 }}>
              <a
                className="icon-btn"
                title="WhatsApp"
                href="https://wa.me/5567993487826"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                className="icon-btn"
                title="LinkedIn"
                href="https://linkedin.com/in/michel-soares-kosvoski"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                className="icon-btn"
                title="GitHub"
                href="https://github.com/MichelKosvoski"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.form>

        {/* COPYRIGHT */}
        <motion.p className="small" style={{ marginTop: 18, opacity: 0.7 }}>
          © {new Date().getFullYear()} Michel Soares Kosvoski —{" "}
          {t.copyrightPrefix} <b>React • Vite • Framer Motion</b>
        </motion.p>
      </div>
    </footer>
  );
}

const inputStyle = {
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.1)",
  color: "#fff",
  padding: "12px 14px",
  borderRadius: 12,
  outline: "none",
  fontSize: "0.95rem",
  transition: "0.3s ease",
  width: "100%",
};
