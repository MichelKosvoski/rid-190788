# Portfólio — Desafio React Hooks (RID-190788)

## ✅ Template escolhido
- **Template 02** (Figma)

**Link do Figma:**
https://www.figma.com/file/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks

---

## 📌 Sobre o projeto
Portfólio profissional desenvolvido com **React + Vite**, seguindo o layout do template escolhido no Figma.
O projeto possui seções de apresentação, projetos, experiências, certificados e contato, com suporte a recursos modernos (tema, idioma e responsividade).

---

## 🚀 Deploy
- **GitHub Pages:** https://michelkosvoski.github.io/rid-190788/

---

## 🧱 Tecnologias utilizadas
- React
- Vite
- JavaScript
- CSS

---

## 🧩 Estrutura do projeto
- Componentes separados por seção (Header, Hero, Projects, Experiencias, Certificados, About, Footer)
- Pastas organizadas (`src/components`, `src/context`, `src/hooks`, etc.)
- Conteúdo personalizado (sem Lorem Ipsum)

---

## 🪝 Utilização de Hooks (obrigatório do desafio)

### ✅ useState
Usado para controle de **estado** da aplicação, por exemplo:
- **Tema** (dark/light)  
- **Status online/offline** (simulação)

> Arquivo: `src/App.jsx`

### ✅ useEffect
Usado para **efeitos colaterais**, por exemplo:
- Aplicar tema no DOM (atributo no `body`)
- Persistir tema no `localStorage`
- Controlar intervalos/timers (simulação do status online)

> Arquivo: `src/App.jsx`

### ✅ Hooks customizados (extra)
Além dos hooks obrigatórios, o projeto utiliza hooks customizados para internacionalização:
- `useLang` (contexto de idioma)
- `useTranslate` (traduções)

> Pastas: `src/context` e `src/hooks`

---

## ▶️ Como rodar o projeto localmente
```bash
npm install
npm run dev
