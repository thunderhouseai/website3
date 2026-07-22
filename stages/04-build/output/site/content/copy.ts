// Transposed verbatim from stage 02's copy.md (+ the stage 03 language-offer
// addendum). Do not edit copy here — edit copy.md and re-transpose; this
// file is not the source of truth. The SiteContent type enforces EN/ES
// structural parity at compile time: a missing ES string is a build error.

export type ModuleContent = {
  number: string;
  name: string;
  keywords: readonly [string, string, string];
  paragraph: string;
};

export type SiteContent = {
  meta: {
    home: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: { wordmark: string; cta: string };
  languageOffer: { prompt: string; link: string; dismiss: string };
  hero: { headline: string; subhead: string; cta: string };
  painMirror: { kicker: string; beats: readonly [string, string, string, string] };
  // Protected verbatim (founder-approved): never paraphrased; its only
  // appearance is the pivot beat.
  philosophy: string;
  modules: { header: string; items: readonly ModuleContent[] };
  founderProof: {
    header: string;
    paragraphs: readonly [string, string];
    listHeader: string;
    clients: readonly string[];
  };
  howItWorks: { header: string; steps: readonly string[] };
  finalCta: { headline: string; body: string; cta: string };
  contact: {
    headline: string;
    body: string;
    embedFallbackLine: string;
    embedFallbackLink: string;
    whatsappSecondary: string;
  };
  whatsappLabel: string;
  footer: { copyright: string; link: string };
};

export const en: SiteContent = {
  meta: {
    home: {
      title: 'ThunderHouse AI — AI Digital Strategy for Small Business',
      description:
        'Websites, chatbots, automations, and marketing systems for small and medium businesses — in English and Spanish. ThunderHouse AI, Orlando.',
    },
    contact: {
      title: 'Book a Discovery Call — ThunderHouse AI',
      description:
        'Book a free 30-minute discovery call with ThunderHouse AI. Tell us about your business — in English or Spanish — and get a concrete plan with a price.',
    },
  },
  nav: { wordmark: 'ThunderHouse', cta: 'Book a call' },
  languageOffer: { prompt: '¿Prefieres español?', link: 'Ver en español', dismiss: 'No, gracias' },
  hero: {
    headline: 'Websites, chatbots, and automations — built around you.',
    subhead:
      "We're a bilingual AI digital strategy company for small and medium businesses. We build what brings customers in and keeps your operation running — and we'll tell you honestly where AI helps and where it doesn't.",
    cta: 'Book a discovery call',
  },
  painMirror: {
    kicker: 'Does this sound like your week?',
    beats: [
      'Customers search for you and find nothing — or worse, an outdated site.',
      "Calls, messages, and leads slip past while you're doing the actual work.",
      'Everyone says use AI. Nobody says where, or for what.',
      'Agencies quote big, deliver slow, and disappear after launch.',
    ],
  },
  philosophy:
    'AI is not the strategy — solving business problems is. Use AI where it makes sense, people where they matter most.',
  modules: {
    header: 'What we build',
    items: [
      {
        number: '01',
        name: 'Websites & Landing Pages',
        keywords: ['Fast', 'Findable', 'Credible'],
        paragraph:
          "Your website is the first legitimacy check you pass — or don't. We build sites and landing pages that load fast, read clearly, and make it obvious what you do and how to reach you — whether it's your first site or a rebuild of the one that's embarrassed you for years.",
      },
      {
        number: '02',
        name: 'AI Chatbots & Assistants',
        keywords: ['Trained', 'Helpful', 'Supervised'],
        paragraph:
          "A chatbot that knows your business answers when you can't — after hours, mid-job, weekends. We train it on your services, your prices, your way of talking to customers, and we keep people in the loop for anything that needs judgment. Leads get an answer in minutes, not Monday.",
      },
      {
        number: '03',
        name: 'Automations & Integrations',
        keywords: ['Connected', 'Reliable', 'Invisible'],
        paragraph:
          'The follow-up email that never got sent. The invoice that waited a week. The same customer data typed into three systems. We connect the tools you already use and automate the busywork between them — so things happen on time, every time, without you being the glue.',
      },
      {
        number: '04',
        name: 'Marketing Systems & Campaigns',
        keywords: ['Measured', 'Steady', 'Accountable'],
        paragraph:
          "Marketing that runs like a system, not a gamble. Campaigns, landing pages, follow-up sequences, and tracking that tells you plainly what brought customers in and what didn't — so you spend where it works and stop where it doesn't. Built to run month after month, not as a one-time blast.",
      },
      {
        number: '05',
        name: 'AI Strategy, Consulting & Team Training',
        keywords: ['Clear', 'Practical', 'Human'],
        paragraph:
          "Twenty-plus years of digital strategy, applied to your business. We look at how you operate, tell you honestly where AI helps and where it doesn't, and train your team to use it with confidence. No jargon, no fear — a clear plan your people can actually follow.",
      },
    ],
  },
  founderProof: {
    header: "Who you're working with",
    paragraphs: [
      'ThunderHouse is led by a builder with 20+ years across development, product, and strategy: global head of digital strategy at a 107-year-old association for the amusement industry — leading its AI-first retooling, team training, and platform rebuild — product owner at Tribune, lead developer at a billion-dollar manufacturer, and before all that, a front-end developer and graphic designer.',
      "Today that means working daily with C-suite executives from the world's largest attractions brands — and bringing the same discipline to small businesses like yours.",
    ],
    listHeader: 'Recent client work',
    clients: [
      'HappyPaws Orlando — pet boarding site, chatbot, and automations',
      'A customer design-approval portal',
      'Marketing and booking automation for a diesel fleet service',
      'LastAnnex — sneaker brand site and Shopify chatbot',
      'A wine app in progress',
      'Consulting for CPAs and attorneys',
    ],
  },
  howItWorks: {
    header: 'How it works',
    steps: [
      'Book a discovery call — 30 minutes, no prep needed.',
      'We understand your business and your goals.',
      'You get a concrete plan with a price.',
      "You buy it — or you don't. No packages, no pressure.",
      'We build it.',
      'A small monthly retainer keeps it running.',
    ],
  },
  finalCta: {
    headline: 'Ready when you are.',
    body: "Thirty minutes. Tell us what's slow, what's manual, or what's missing — we'll tell you honestly what we'd build and what it would cost.",
    cta: 'Book a discovery call',
  },
  contact: {
    headline: "Let's talk about your business.",
    body: 'A 30-minute discovery call. No pitch deck, no obligation — we ask about your business, you ask about us, and we both find out if this is a fit. English or Spanish, whichever you prefer.',
    embedFallbackLine: "The calendar didn't load. Open it directly:",
    embedFallbackLink: 'Open the calendar',
    whatsappSecondary: 'Prefer to chat first? Message us on WhatsApp.',
  },
  whatsappLabel: 'Message us on WhatsApp',
  footer: { copyright: '© ThunderHouse AI. All rights reserved.', link: 'Book a call' },
};

export const es: SiteContent = {
  meta: {
    home: {
      title: 'ThunderHouse AI — Estrategia Digital con IA para tu Negocio',
      description:
        'Sitios web, chatbots, automatizaciones y sistemas de marketing para pequeñas y medianas empresas — en español e inglés. ThunderHouse AI, Orlando.',
    },
    contact: {
      title: 'Agenda tu Llamada — ThunderHouse AI',
      description:
        'Agenda una llamada de descubrimiento de 30 minutos con ThunderHouse AI. Cuéntanos de tu negocio — en español o inglés — y recibe un plan concreto con precio.',
    },
  },
  nav: { wordmark: 'ThunderHouse', cta: 'Agenda una llamada' },
  languageOffer: { prompt: 'Prefer English?', link: 'View in English', dismiss: 'No, thanks' },
  hero: {
    headline: 'Sitios web, chatbots y automatizaciones — hechos para tu negocio.',
    subhead:
      'Somos una empresa bilingüe de estrategia digital con IA para pequeñas y medianas empresas. Construimos lo que te trae clientes y mantiene tu operación andando — y te decimos con honestidad dónde la IA ayuda y dónde no.',
    cta: 'Agenda tu llamada',
  },
  painMirror: {
    kicker: '¿Te suena familiar?',
    beats: [
      'Tus clientes te buscan y no encuentran nada — o peor, un sitio abandonado.',
      'Llamadas, mensajes y clientes potenciales se pierden mientras tú haces el trabajo de verdad.',
      'Todos dicen que uses IA. Nadie te dice dónde ni para qué.',
      'Las agencias cobran caro, entregan tarde y desaparecen después del lanzamiento.',
    ],
  },
  philosophy:
    'La IA no es la estrategia — la estrategia es resolver problemas de negocio. Usa la IA donde tiene sentido, y a las personas donde más importan.',
  modules: {
    header: 'Qué construimos',
    items: [
      {
        number: '01',
        name: 'Sitios Web y Landing Pages',
        keywords: ['Rápido', 'Visible', 'Creíble'],
        paragraph:
          'Tu sitio web es la primera prueba de legitimidad que pasas — o no. Construimos sitios y landing pages que cargan rápido, se entienden a la primera y dejan claro qué haces y cómo contactarte — sea tu primer sitio o el reemplazo de uno que te ha dado pena por años.',
      },
      {
        number: '02',
        name: 'Chatbots y Asistentes de IA',
        keywords: ['Entrenado', 'Útil', 'Supervisado'],
        paragraph:
          'Un chatbot que conoce tu negocio responde cuando tú no puedes — fuera de horario, mientras trabajas, los fines de semana. Lo entrenamos con tus servicios, tus precios y tu forma de hablarle a tus clientes, y las personas siguen a cargo de lo que requiere criterio. Tus clientes reciben respuesta en minutos, no el lunes.',
      },
      {
        number: '03',
        name: 'Automatizaciones e Integraciones',
        keywords: ['Conectado', 'Confiable', 'Invisible'],
        paragraph:
          'El correo de seguimiento que nunca se envió. La factura que esperó una semana. Los mismos datos escritos en tres sistemas distintos. Conectamos las herramientas que ya usas y automatizamos el trabajo repetitivo entre ellas — para que todo pase a tiempo, siempre, sin que tú seas el pegamento.',
      },
      {
        number: '04',
        name: 'Sistemas de Marketing y Campañas',
        keywords: ['Medido', 'Constante', 'Responsable'],
        paragraph:
          'Marketing que funciona como un sistema, no como una apuesta. Campañas, landing pages, secuencias de seguimiento y métricas que te dicen con claridad qué te trajo clientes y qué no — para invertir donde funciona y parar donde no. Hecho para funcionar mes tras mes, no para un solo intento.',
      },
      {
        number: '05',
        name: 'Estrategia de IA, Consultoría y Capacitación',
        keywords: ['Claro', 'Práctico', 'Humano'],
        paragraph:
          'Más de veinte años de estrategia digital, aplicados a tu negocio. Vemos cómo operas, te decimos con honestidad dónde la IA ayuda y dónde no, y entrenamos a tu equipo para usarla con confianza. Sin jerga y sin miedo — un plan claro que tu gente puede seguir.',
      },
    ],
  },
  founderProof: {
    header: 'Con quién vas a trabajar',
    paragraphs: [
      'ThunderHouse la dirige un constructor con más de 20 años en desarrollo, producto y estrategia: jefe global de estrategia digital en una asociación de la industria de las atracciones con 107 años de historia — liderando su transformación hacia la IA, la capacitación de sus equipos y la reconstrucción de su plataforma — product owner en Tribune, desarrollador líder en un fabricante de mil millones de dólares, y antes de todo eso, desarrollador front-end y diseñador gráfico.',
      'Hoy eso significa trabajar a diario con ejecutivos de las marcas de atracciones más grandes del mundo — y traer esa misma disciplina a negocios como el tuyo.',
    ],
    listHeader: 'Trabajo reciente',
    clients: [
      'HappyPaws Orlando — sitio de hospedaje para mascotas, chatbot y automatizaciones',
      'Un portal de aprobación de diseños para clientes',
      'Automatización de marketing y reservas para una flota diésel',
      'LastAnnex — sitio de marca de sneakers y chatbot en Shopify',
      'Una app de vinos en desarrollo',
      'Consultoría para contadores y abogados',
    ],
  },
  howItWorks: {
    header: 'Cómo funciona',
    steps: [
      'Agenda una llamada de descubrimiento — 30 minutos, sin preparación.',
      'Entendemos tu negocio y tus metas.',
      'Recibes un plan concreto con un precio.',
      'Lo compras — o no. Sin paquetes, sin presión.',
      'Lo construimos.',
      'Una mensualidad pequeña lo mantiene funcionando.',
    ],
  },
  finalCta: {
    headline: 'Cuando tú digas.',
    body: 'Treinta minutos. Cuéntanos qué va lento, qué haces a mano o qué te falta — te diremos con honestidad qué construiríamos y cuánto costaría.',
    cta: 'Agenda tu llamada',
  },
  contact: {
    headline: 'Hablemos de tu negocio.',
    body: 'Una llamada de descubrimiento de 30 minutos. Sin presentaciones infladas y sin compromiso — nosotros preguntamos por tu negocio, tú preguntas por nosotros, y juntos vemos si esto encaja. En español o en inglés, como prefieras.',
    embedFallbackLine: 'El calendario no cargó. Ábrelo directamente:',
    embedFallbackLink: 'Abre el calendario',
    whatsappSecondary: '¿Prefieres escribirnos primero? Mándanos un WhatsApp.',
  },
  whatsappLabel: 'Escríbenos por WhatsApp',
  footer: { copyright: '© ThunderHouse AI. Todos los derechos reservados.', link: 'Agenda una llamada' },
};

export const content: Record<'en' | 'es', SiteContent> = { en, es };
