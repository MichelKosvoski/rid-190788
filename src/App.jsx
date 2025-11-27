import React, { useEffect, useState } from "react";

// ==== CONTEXTO DE IDIOMA ====
import { LangProvider, useLang } from "./context/LangContext";

// ==== TRADUTOR GLOBAL ====
import useTranslate from "./hooks/useTranslate";

// ==== COMPONENTES ====
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experiencias from "./components/Experiencias";
import Certificados from "./components/Certificados";
import About from "./components/About";
import Footer from "./components/Footer";

function AppContent() {
  const { lang } = useLang();
  useTranslate(lang);

  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Projects />
        <Experiencias />
        <Certificados />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [online, setOnline] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // status online fake
  useEffect(() => {
    const id = setInterval(() => setOnline((v) => !v), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}
