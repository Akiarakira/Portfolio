// Theme and language preferences
const themeToggle = document.querySelector("#themeToggle");
const bodyElement = document.querySelector("#body");
const THEME_KEY = "portfolio-theme";
const LANGUAGE_KEY = "portfolio-language";

if (bodyElement) {
  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    bodyElement.classList.toggle("darkMode", isDark);
    bodyElement.classList.toggle("lightMode", !isDark);
    if (themeToggle) themeToggle.checked = isDark;
  };

  applyTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
  themeToggle?.addEventListener("change", () => {
    const next = themeToggle.checked ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

const spanishTranslations = {
  Projects: "Proyectos",
  "Professional Experience": "Experiencia profesional",
  Testimonials: "Testimonios",
  "See My Work": "Ver mi trabajo",
  "View All Projects": "Ver todos los proyectos",
  "Download CV": "Descargar CV",
  "Full-Stack Developer": "Desarrolladora Full-Stack",
  "Shopify Specialist": "Especialista en Shopify",
  "WordPress Expert": "Experta en WordPress",
  "Tools & Tech": "Herramientas y tecnologías",
  "Technologies:": "Tecnologías:",
  "Stack:": "Tecnologías:",
  "View Project →": "Ver proyecto →",
  "Kind words": "Palabras bonitas",
  "Let's Connect": "Conectemos",
  "Let's chat!": "¡Hablemos!",
  "Available for new projects": "Disponible para nuevos proyectos",
  "Usually replies fast": "Suele responder rápido",
  "Email me": "Envíame un correo",
  "Language selector": "Selector de idioma",
  "Open contact options": "Abrir opciones de contacto",
  "Front-End Engineer and Shopify Specialist with 4 years of experience, focused on Shopify 2.0, Liquid, Cart API, GraphQL integrations, and conversion-focused, mobile-first storefronts across Shopify, WordPress, and custom Node.js ecosystems.": "Ingeniera Front-End y especialista en Shopify con 4 años de experiencia, enfocada en Shopify 2.0, Liquid, Cart API, integraciones GraphQL y tiendas mobile-first orientadas a la conversión en Shopify, WordPress y ecosistemas Node.js personalizados.",
  "Web Developer & Shopify Specialist": "Desarrolladora web y especialista en Shopify",
  "Full-Stack Web Developer": "Desarrolladora web Full-Stack",
  "Web Developer (Contractor)": "Desarrolladora web (contratista)",
  "Web Developer": "Desarrolladora web",
  "Systems Analyst / Analyst II": "Analista de sistemas / Analista II",
  "Biomedical Equipment Maintenance Engineer": "Ingeniera de mantenimiento de equipos biomédicos",
  "Developed and maintained Shopify e-commerce sites with advanced Liquid theme customization (Shopify 2.0).": "Desarrollé y mantuve sitios de comercio electrónico en Shopify con personalización avanzada de temas Liquid (Shopify 2.0).",
  "Delivered client projects as an independent contractor, managing multiple concurrent priorities with a strong delivery focus.": "Entregué proyectos para clientes como contratista independiente, gestionando varias prioridades simultáneas con un fuerte enfoque en resultados.",
  "Improved performance and code quality across projects using Lighthouse audits, web vitals checks, multi-device testing, and CRO principles.": "Mejoré el rendimiento y la calidad del código mediante auditorías de Lighthouse, métricas web, pruebas multidispositivo y principios de CRO.",
  "Configured and managed VPS servers, DNS settings, SSL certificates, and corporate business email services across multiple domains.": "Configuré y administré servidores VPS, DNS, certificados SSL y servicios de correo corporativo en múltiples dominios.",
  "Designed high-converting landing pages for clients and events using WordPress, Elementor, and custom code.": "Diseñé landing pages de alta conversión para clientes y eventos usando WordPress, Elementor y código personalizado.",
  "Led the redesign and restructuring of the corporate Intranet on WordPress to streamline internal organizational communication.": "Lideré el rediseño y reestructuración de la intranet corporativa en WordPress para optimizar la comunicación interna.",
  "Performed technical diagnostics, calibration, and preventive/corrective maintenance on precision medical and biomedical electronic hardware.": "Realicé diagnósticos técnicos, calibración y mantenimiento preventivo/correctivo de equipos electrónicos médicos y biomédicos de precisión.",
  "Maintained detailed technical service logs and documentation ensuring equipment compliance.": "Mantuve registros detallados de servicio técnico y documentación para garantizar el cumplimiento de los equipos.",
};

const normalize = (value) => value.replace(/\s+/g, " ").trim();

function translatePage(language) {
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.__originalText ?? node.textContent;
    node.__originalText = original;
    const key = normalize(original || "");
    const translated = language === "es" ? spanishTranslations[key] : original;
    if (translated && key) {
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      node.textContent = `${leading}${translated}${trailing}`;
    }
  });

  document.querySelectorAll("[aria-label]").forEach((element) => {
    const original = element.dataset.originalAriaLabel || element.getAttribute("aria-label");
    if (!original) return;
    element.dataset.originalAriaLabel = original;
    element.setAttribute("aria-label", language === "es" ? spanishTranslations[normalize(original)] || original : original);
  });

  document.querySelectorAll(".language-option").forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.language === language));
  });
  localStorage.setItem(LANGUAGE_KEY, language);
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
}

translatePage(localStorage.getItem(LANGUAGE_KEY) === "es" ? "es" : "en");
document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", () => translatePage(option.dataset.language || "en"));
});
