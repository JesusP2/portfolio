import type { Dictionary } from "intlayer";
import { t } from "intlayer";

const portfolioContent = {
  key: "portfolio",
  content: {
    hero: {
      greeting: t({
        en: "// Hello, I'm",
        es: "// Hola, soy",
      }),
      title: t({
        en: "Software Engineer",
        es: "Ingeniero de Software",
      }),
      description: t({
        en: "I'm a web developer from Mexico trying to build cool stuff for the web. I've been building things for over 6 years now and I've had the chance to collaborate with some great teams along the way.",
        es: "Soy un desarrollador web de Mexico tratando de construir cosas geniales para la web. Llevo mas de 6 anos construyendo cosas y he tenido la oportunidad de colaborar con grandes equipos en el camino.",
      }),
      cta: t({
        en: "Get in touch",
        es: "Contactame",
      }),
    },
    projects: {
      comment: t({
        en: "// things I've been building for fun",
        es: "// cosas que he estado construyendo por diversion",
      }),
      title: t({
        en: "Projects",
        es: "Proyectos",
      }),
      items: {
        omokage: {
          description: t({
            en: "A chat app to talk with LLMs, built in just 10 days during a clonathon (clone + hackathon). The goal was to recreate t3.chat. It's local-first and works completely offline.",
            es: "Una app de chat para hablar con LLMs, construida en solo 10 dias durante un clonathon (clon + hackathon). El objetivo era recrear t3.chat. Es local-first y funciona completamente offline.",
          }),
        },
        notMyAnimeList: {
          description: t({
            en: "A tracker for anime, manga, and light novels. But it's not just tracking - it also has minigames like 'Guess the anime opening' (more on the way (hopefully)).",
            es: "Un tracker para anime, manga y novelas ligeras. Pero no es solo tracking - tambien tiene minijuegos como 'Adivina el opening del anime' (mas en camino (esperemos)).",
          }),
        },
        tanstackFaster: {
          description: t({
            en: "An experiment to build the fastest possible ecommerce site using TanStack Start.",
            es: "Un experimento para construir el sitio de ecommerce mas rapido posible usando TanStack Start.",
          }),
        },
        nimonikku: {
          description: t({
            en: "Mnemonic flashcards app, Anki-style, but with AI features to help you learn smarter.",
            es: "App de tarjetas mnemonicas estilo Anki, pero con funciones de IA para ayudarte a aprender mejor.",
          }),
        },
      },
    },
    experience: {
      comment: t({
        en: "// places I've had the chance to grow",
        es: "// lugares donde he tenido la oportunidad de crecer",
      }),
      title: t({
        en: "Experience",
        es: "Experiencia",
      }),
      items: {
        jaxitank: {
          title: t({
            en: "Fullstack Developer",
            es: "Desarrollador Fullstack",
          }),
          description: t({
            en: "Here I've been helping build very complex web forms for the National Association of Realtors. Unified multiple projects into a single monorepo, which made everyone's life easier, and cut our CI/CD pipeline times from 10 minutes down to just 2-3. I've also enjoyed mentoring teammates through pair programming sessions.",
            es: "Aqui he estado ayudando a construir formularios web muy complejos para la National Association of Realtors. Unifique multiples proyectos en un solo monorepo, lo que facilito la vida de todos, y reduci los tiempos de CI/CD de 10 minutos a solo 2-3. Tambien he disfrutado mentorar companeros a traves de sesiones de pair programming.",
          }),
        },
        kuayolo: {
          title: t({
            en: "Fullstack Developer",
            es: "Desarrollador Fullstack",
          }),
          description: t({
            en: "This is where my web journey began. I started building APIs with node and express, deploying apps to GCP and maintaining SPAs with React and Vue.",
            es: "Aqui es donde comenzo mi viaje web. Empece construyendo APIs con node y express, desplegando apps en GCP y manteniendo SPAs con React y Vue.",
          }),
        },
      },
    },
    contact: {
      comment: t({
        en: "// I'd love to hear from you",
        es: "// me encantaria saber de ti",
      }),
      title: t({
        en: "Contact",
        es: "Contacto",
      }),
    },
    skills: {
      comment: t({
        en: "// my favorite tools to work with",
        es: "// mis herramientas favoritas para trabajar",
      }),
      title: t({
        en: "Skills & Technologies",
        es: "Habilidades y Tecnologias",
      }),
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        cloud: t({
          en: "Cloud & Infrastructure",
          es: "Cloud e Infraestructura",
        }),
        tools: t({
          en: "Tools & DevOps",
          es: "Herramientas y DevOps",
        }),
      },
    },
  },
} satisfies Dictionary;

export default portfolioContent;
