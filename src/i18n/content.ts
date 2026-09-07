export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path;
  return locale === 'en' ? `/${clean}`.replace(/\/+/g, '/') : `/es/${clean}`.replace(/\/+/g, '/');
}

export function altLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const stripped = pathname.replace(/^\/es(\/|$)/, '/');
  return localePath(target, stripped);
}

const en = {
  meta: {
    titleSuffix: 'Ismael Arias — Senior Shopify Developer',
    description:
      'Senior Shopify Developer (ex-Amazon) building fast Shopify Plus / Hydrogen storefronts and custom WordPress sites from Mexico City.',
  },
  nav: {
    home: 'Home',
    shopify: 'Shopify',
    wordpress: 'WordPress',
    work: 'Work',
    contact: 'Contact',
    cta: 'Book a call',
    langSwitchLabel: 'Español',
  },
  footer: {
    tagline: 'Senior Shopify Developer, ex-Amazon. Based in Mexico City, working US hours.',
    linksHeading: 'Site',
    contactHeading: 'Contact',
    rights: `© ${new Date().getFullYear()} Ismael Arias. All rights reserved.`,
  },
  home: {
    eyebrow: 'Senior Shopify Developer · Ex-Amazon · Mexico City',
    h1: 'Shopify and WordPress sites that load fast, convert, and don’t break at scale.',
    sub: 'I design, build, and fix Shopify Plus / Hydrogen storefronts and fast WordPress sites for teams tired of guessing why performance and conversion stall. 10+ years shipping production frontend, most recently as a Frontend Engineer II at Amazon.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See the Performance Audit',
    servicesEyebrow: 'What I do',
    servicesHeading: 'Two focused service lines, not a generalist agency.',
    services: [
      {
        tag: 'Line A',
        title: 'Shopify Development',
        description:
          'Shopify Plus & Hydrogen storefronts, Checkout Extensibility, Shopify Functions, and Core Web Vitals work for D2C brands who need real engineering, not another app.',
        bullets: [
          'Headless storefronts on Hydrogen / Remix',
          'Checkout Extensibility & Shopify Functions',
          'Core Web Vitals & performance audits',
          'Custom theme builds & redesigns',
          'Shipped my own Shopify app, live on the App Store',
        ],
        href: '/shopify',
        cta: 'Explore Shopify services',
      },
      {
        tag: 'Line B',
        title: 'WordPress & Dynamic Sites',
        description:
          'Booking systems, directories, and B2B catalogs on WordPress — built and launched in 1–3 weeks, with custom PHP wherever plugins run out.',
        bullets: [
          'Booking & appointment systems',
          'Directories & marketplaces',
          'B2B catalogs with custom pricing logic',
          'WooCommerce & legacy CMS migrations',
        ],
        href: '/wordpress',
        cta: 'Explore WordPress services',
      },
    ],
    proofEyebrow: 'Background',
    proofHeading: 'Ten years of production frontend, most recently inside Amazon.',
    proofBody:
      'Before focusing on Shopify, I spent over a decade building production applications in React, Vue, Next.js, and Nuxt for companies shipping real products to real users — including a stint building TV experiences at Amazon under some of the strictest performance constraints in the industry.',
    proofList: [
      { name: 'Amazon', role: 'Frontend Engineer II — TV platform, video performance, telemetry systems' },
      { name: 'Kritik', role: 'Full Stack Developer — React/Redux to React Query migration' },
      { name: 'Viafoura', role: 'Frontend Developer — Vue/Nuxt to Next.js' },
      { name: 'Avantica', role: 'Software Engineer — React, TypeScript, GraphQL' },
    ],
    workEyebrow: 'Recent work',
    workHeading: 'A few problems I’ve actually solved.',
    workCta: 'See all case studies',
    finalHeading: 'Have a store or site that needs to perform better?',
    finalBody: 'Tell me what’s not working. I’ll tell you honestly whether it’s a quick fix or a bigger rebuild — before you pay for either.',
    finalCta: 'Book a call',
  },
  shopify: {
    eyebrow: 'Line A · Shopify Plus & Hydrogen',
    h1: 'Enterprise-grade engineering for Shopify Plus stores.',
    sub: 'I help D2C brands on Shopify Plus fix performance, ship Hydrogen/headless architecture, and build what Checkout Extensibility and Shopify Functions actually require — backed by 10+ years of production React/TypeScript, most recently as a Frontend Engineer II at Amazon.',
    ctaPrimary: 'Book a call',
    app: {
      eyebrow: 'Built from scratch',
      heading: 'Easy Upsell — a Shopify app I designed, built, and shipped end-to-end',
      body: 'Not a theme tweak or a no-code automation — a full Shopify app, live on the Shopify App Store today, built and maintained solo from the ground up.',
      cta: 'View on the Shopify App Store',
      url: 'https://apps.shopify.com/easy-upsell-6',
    },
    servicesHeading: 'Where I add the most value',
    services: [
      {
        title: 'Hydrogen & Headless Storefronts',
        description:
          'Hydrogen runs on Remix — the average Shopify dev knows Liquid, not production React. If your team already invested in headless, I make sure it’s actually faster than Liquid, not just more expensive.',
      },
      {
        title: 'Checkout Extensibility & Shopify Functions',
        description:
          'Custom checkout logic, validation, and discount rules that require real backend and programming skill — not an app-store workaround with a monthly fee.',
      },
      {
        title: 'Core Web Vitals & Performance',
        description:
          'LCP, INP, CLS, TTFB — diagnosed with real field data (CrUX), not lab guesses. I find the actual bottleneck, whether it’s server-side rendering, a heavy app, or unoptimized assets.',
      },
      {
        title: 'Theme Builds & Redesigns',
        description:
          'Custom Liquid themes built for speed and maintainability from day one, not retrofitted after launch.',
      },
    ],
    audit: {
      eyebrow: 'Not sure where to start?',
      heading: 'Get a Performance Audit.',
      body: 'I run your store’s Core Web Vitals through real field data, tell you exactly what’s costing you conversions on mobile, and hand you a prioritized, honest roadmap — no guessing, no pressure to buy the next step.',
      price: 'From $900 USD',
      cta: 'Book the audit',
    },
    processHeading: 'How a project actually runs',
    process: [
      { step: '01', title: 'Diagnose', body: 'Real field data first. No price before I know what’s actually wrong.' },
      { step: '02', title: 'Propose', body: 'Options, not a single number — you choose the scope that fits your budget.' },
      { step: '03', title: 'Build', body: 'Fixed milestones, clear scope, no silent change orders.' },
      { step: '04', title: 'Measure', body: 'The same field data, measured again, so results aren’t a claim — they’re a number.' },
    ],
    finalHeading: 'Have a Shopify Plus store that needs real engineering?',
    finalCta: 'Book a call',
  },
  wordpress: {
    eyebrow: 'Line B · WordPress & Dynamic Sites',
    h1: 'Custom WordPress builds that do more than a blog.',
    sub: 'I build booking systems, directories, and B2B catalogs on WordPress — production-ready in 1–3 weeks, with custom PHP wherever the plugin ecosystem runs out.',
    ctaPrimary: 'Book a call',
    servicesHeading: 'What I build',
    services: [
      {
        title: 'Booking & Appointment Systems',
        description:
          'Replace "book via WhatsApp" with a real scheduling flow — availability, confirmations, reminders — live in 1–2 weeks.',
      },
      {
        title: 'Directories & Marketplaces',
        description:
          'Searchable, filterable listings for multi-vendor or multi-location businesses, built to stay fast as the catalog grows.',
      },
      {
        title: 'B2B Catalogs',
        description:
          'Wholesale-style catalogs with tiered pricing and rules that off-the-shelf plugins can’t handle alone — that’s where I write custom PHP.',
      },
      {
        title: 'Migrations',
        description:
          'Moving off WooCommerce or a legacy CMS without losing SEO rankings or content along the way.',
      },
    ],
    processHeading: 'Typical timeline',
    process: [
      { step: '01', title: 'Diagnose', body: 'What’s costing you time or bookings today — and what a fix is actually worth.' },
      { step: '02', title: 'Propose', body: 'A fixed-scope quote before any work starts. No surprises.' },
      { step: '03', title: 'Build & Launch', body: 'Most projects go from kickoff to launch in 1–3 weeks.' },
    ],
    licenseNote:
      'Premium plugin tooling runs under my own agency license at no extra cost while we work together. If we ever part ways, you can get your own license or I’ll document a clean migration path — your site is never locked to me.',
    finalHeading: 'Tired of running your business through a spreadsheet and WhatsApp?',
    finalCta: 'Book a call',
  },
  work: {
    eyebrow: 'Selected work',
    h1: 'A few problems I’ve actually solved.',
    sub: 'Real engineering work from my time at Amazon, Kritik, and Viafoura — described plainly: the problem, what I did, and what changed.',
    labels: { problem: 'Problem', action: 'Action', result: 'Result' },
    caseStudies: [
      {
        company: 'Amazon',
        role: 'Frontend Engineer II',
        title: 'Video performance under hard platform constraints',
        problem:
          'TV app experiences run under strict rendering, memory, and input constraints — most standard web performance playbooks don’t apply, and navigation/focus handling has to be built from scratch for remote-control input.',
        action:
          'Built reusable focus/navigation systems, reference apps, and internal tooling adopted across multiple teams; worked directly on video playback architecture and rendering limits; modernized telemetry clients across TypeScript, Go, and Python to align behavior across the whole ecosystem.',
        result:
          'Tooling and components adopted by internal and external (3P) teams, unblocking work that previously required rebuilding the same systems per team, and raising the baseline for TV experience quality across the organization.',
      },
      {
        company: 'Kritik',
        role: 'Full Stack Developer',
        title: 'Untangling a tightly-coupled React/Redux codebase',
        problem:
          'The data layer and frontend state had grown tightly coupled — React and Redux components duplicating logic, hard to test safely, and slow to change without breaking something else.',
        action:
          'Integrated PostgreSQL with Prisma in TypeScript, migrated state management from Redux to React Query, broke components down for reuse, and added Cypress end-to-end test coverage.',
        result:
          'A data layer and component architecture the team could extend without breaking existing features, with automated tests catching regressions before they reached production.',
      },
      {
        company: 'Viafoura',
        role: 'Frontend Developer',
        title: 'Moving from Vue/Nuxt to Next.js without disrupting live clients',
        problem:
          'Client-facing apps ran on Vue.js and Nuxt SSR; parts of the stack needed to move to Next.js for better SSR/SSG performance and SEO — without breaking functionality clients depended on daily.',
        action:
          'Architected and refined the existing Vue/Nuxt applications, resolved complex cross-framework bugs, and led the transition of key surfaces to Next.js.',
        result:
          'SEO-friendly, high-performance client experiences carried over cleanly to the new stack, with no loss of functionality during the transition.',
      },
    ],
    finalHeading: 'Want engineering like this on your store or site?',
    finalCta: 'Book a call',
  },
  contact: {
    eyebrow: 'Contact',
    h1: 'Let’s talk about your store or site.',
    sub: 'The fastest way to reach me is to book a short call. I’ll ask a few questions about your store or site beforehand, so the call isn’t spent on basic discovery.',
    ctaPrimary: 'Book a call on Calendly',
    emailLabel: 'Prefer email?',
    locationNote: 'Based in Mexico City — full overlap with US business hours.',
    socialsHeading: 'Elsewhere',
  },
} as const;

const es = {
  meta: {
    titleSuffix: 'Ismael Arias — Senior Shopify Developer',
    description:
      'Senior Shopify Developer (ex-Amazon) construyendo tiendas Shopify Plus / Hydrogen y sitios WordPress rápidos desde Ciudad de México.',
  },
  nav: {
    home: 'Inicio',
    shopify: 'Shopify',
    wordpress: 'WordPress',
    work: 'Trabajo',
    contact: 'Contacto',
    cta: 'Agenda una llamada',
    langSwitchLabel: 'English',
  },
  footer: {
    tagline: 'Senior Shopify Developer, ex-Amazon. Con base en Ciudad de México, trabajando en horario de EE. UU.',
    linksHeading: 'Sitio',
    contactHeading: 'Contacto',
    rights: `© ${new Date().getFullYear()} Ismael Arias. Todos los derechos reservados.`,
  },
  home: {
    eyebrow: 'Senior Shopify Developer · Ex-Amazon · Ciudad de México',
    h1: 'Tiendas Shopify y sitios WordPress que cargan rápido, convierten y no se rompen al crecer.',
    sub: 'Diseño, construyo y arreglo tiendas Shopify Plus / Hydrogen y sitios WordPress rápidos para equipos cansados de adivinar por qué el rendimiento y la conversión no avanzan. 10+ años construyendo frontend en producción, más recientemente como Frontend Engineer II en Amazon.',
    ctaPrimary: 'Agenda una llamada',
    ctaSecondary: 'Ver el Performance Audit',
    servicesEyebrow: 'Qué hago',
    servicesHeading: 'Dos líneas de servicio enfocadas, no una agencia generalista.',
    services: [
      {
        tag: 'Línea A',
        title: 'Desarrollo Shopify',
        description:
          'Tiendas Shopify Plus & Hydrogen, Checkout Extensibility, Shopify Functions y trabajo de Core Web Vitals para marcas D2C que necesitan ingeniería real, no otra app más.',
        bullets: [
          'Tiendas headless sobre Hydrogen / Remix',
          'Checkout Extensibility & Shopify Functions',
          'Core Web Vitals & audits de rendimiento',
          'Temas a medida y rediseños',
          'Mi propia app de Shopify, publicada en el App Store',
        ],
        href: '/shopify',
        cta: 'Ver servicios de Shopify',
      },
      {
        tag: 'Línea B',
        title: 'WordPress & Sitios Dinámicos',
        description:
          'Sistemas de reservas, directorios y catálogos B2B en WordPress — construidos y lanzados en 1 a 3 semanas, con PHP a medida cuando los plugins no alcanzan.',
        bullets: [
          'Sistemas de reservas y citas',
          'Directorios y marketplaces',
          'Catálogos B2B con lógica de precios a medida',
          'Migraciones desde WooCommerce o CMS antiguos',
        ],
        href: '/wordpress',
        cta: 'Ver servicios de WordPress',
      },
    ],
    proofEyebrow: 'Trayectoria',
    proofHeading: 'Diez años de frontend en producción, el más reciente dentro de Amazon.',
    proofBody:
      'Antes de enfocarme en Shopify, pasé más de una década construyendo aplicaciones en producción con React, Vue, Next.js y Nuxt para empresas que lanzan productos reales a usuarios reales — incluyendo un período construyendo experiencias de TV en Amazon bajo algunas de las restricciones de rendimiento más estrictas de la industria.',
    proofList: [
      { name: 'Amazon', role: 'Frontend Engineer II — plataforma de TV, rendimiento de video, sistemas de telemetría' },
      { name: 'Kritik', role: 'Full Stack Developer — migración de React/Redux a React Query' },
      { name: 'Viafoura', role: 'Frontend Developer — migración de Vue/Nuxt a Next.js' },
      { name: 'Avantica', role: 'Software Engineer — React, TypeScript, GraphQL' },
    ],
    workEyebrow: 'Trabajo reciente',
    workHeading: 'Algunos problemas que ya resolví.',
    workCta: 'Ver todos los casos',
    finalHeading: '¿Tienes una tienda o sitio que necesita rendir mejor?',
    finalBody: 'Cuéntame qué no está funcionando. Te digo honestamente si es un ajuste rápido o una reconstrucción mayor — antes de que pagues por cualquiera de las dos.',
    finalCta: 'Agenda una llamada',
  },
  shopify: {
    eyebrow: 'Línea A · Shopify Plus & Hydrogen',
    h1: 'Ingeniería de nivel enterprise para tiendas Shopify Plus.',
    sub: 'Ayudo a marcas D2C en Shopify Plus a resolver rendimiento, construir arquitectura Hydrogen/headless, y desarrollar lo que Checkout Extensibility y Shopify Functions realmente requieren — respaldado por 10+ años de React/TypeScript en producción, el más reciente como Frontend Engineer II en Amazon.',
    ctaPrimary: 'Agenda una llamada',
    app: {
      eyebrow: 'Construida desde cero',
      heading: 'Easy Upsell — una app de Shopify que diseñé, construí y publiqué de principio a fin',
      body: 'No es un ajuste de tema ni una automatización sin código — es una app de Shopify completa, publicada hoy en el Shopify App Store, construida y mantenida en solitario desde cero.',
      cta: 'Ver en el Shopify App Store',
      url: 'https://apps.shopify.com/easy-upsell-6',
    },
    servicesHeading: 'Dónde aporto más valor',
    services: [
      {
        title: 'Hydrogen & Tiendas Headless',
        description:
          'Hydrogen corre sobre Remix — el desarrollador Shopify promedio sabe Liquid, no React de producción. Si tu equipo ya invirtió en headless, me aseguro de que sea realmente más rápido que Liquid, no solo más caro.',
      },
      {
        title: 'Checkout Extensibility & Shopify Functions',
        description:
          'Lógica de checkout, validaciones y reglas de descuento a medida que requieren programación real — no un workaround de app-store con costo mensual.',
      },
      {
        title: 'Core Web Vitals & Rendimiento',
        description:
          'LCP, INP, CLS, TTFB — diagnosticados con datos de campo reales (CrUX), no simulaciones de laboratorio. Encuentro el cuello de botella real, sea server-side rendering, una app pesada, o assets sin optimizar.',
      },
      {
        title: 'Temas a Medida y Rediseños',
        description:
          'Temas Liquid construidos para velocidad y mantenibilidad desde el primer día, no ajustados después del lanzamiento.',
      },
    ],
    audit: {
      eyebrow: '¿No sabes por dónde empezar?',
      heading: 'Solicita un Performance Audit.',
      body: 'Reviso los Core Web Vitals de tu tienda con datos de campo reales, te digo exactamente qué te está costando conversiones en móvil, y te entrego una hoja de ruta priorizada y honesta — sin adivinar y sin presión para comprar el siguiente paso.',
      price: 'Desde $900 USD',
      cta: 'Agenda el audit',
    },
    processHeading: 'Cómo corre un proyecto en realidad',
    process: [
      { step: '01', title: 'Diagnóstico', body: 'Datos de campo primero. Sin precio antes de saber qué está realmente mal.' },
      { step: '02', title: 'Propuesta', body: 'Opciones, no un solo número — tú eliges el alcance que cabe en tu presupuesto.' },
      { step: '03', title: 'Construcción', body: 'Hitos fijos, alcance claro, sin cambios de alcance silenciosos.' },
      { step: '04', title: 'Medición', body: 'Los mismos datos de campo, medidos de nuevo, para que el resultado no sea una afirmación — sea un número.' },
    ],
    finalHeading: '¿Tienes una tienda Shopify Plus que necesita ingeniería real?',
    finalCta: 'Agenda una llamada',
  },
  wordpress: {
    eyebrow: 'Línea B · WordPress & Sitios Dinámicos',
    h1: 'Sitios WordPress a medida que hacen mucho más que un blog.',
    sub: 'Construyo sistemas de reservas, directorios y catálogos B2B en WordPress — listos para producción en 1 a 3 semanas, con PHP a medida cuando el ecosistema de plugins no alcanza.',
    ctaPrimary: 'Agenda una llamada',
    servicesHeading: 'Qué construyo',
    services: [
      {
        title: 'Sistemas de Reservas y Citas',
        description:
          'Reemplaza "agenda por WhatsApp" con un flujo de agendado real — disponibilidad, confirmaciones, recordatorios — en vivo en 1 a 2 semanas.',
      },
      {
        title: 'Directorios y Marketplaces',
        description:
          'Listados buscables y filtrables para negocios multi-vendedor o multi-sucursal, construidos para seguir siendo rápidos al crecer el catálogo.',
      },
      {
        title: 'Catálogos B2B',
        description:
          'Catálogos estilo mayoreo con precios escalonados y reglas que los plugins genéricos no pueden manejar solos — ahí es donde escribo PHP a medida.',
      },
      {
        title: 'Migraciones',
        description:
          'Migración desde WooCommerce o un CMS antiguo sin perder posicionamiento SEO ni contenido en el camino.',
      },
    ],
    processHeading: 'Tiempo típico',
    process: [
      { step: '01', title: 'Diagnóstico', body: 'Qué te está costando tiempo o citas hoy — y cuánto vale realmente arreglarlo.' },
      { step: '02', title: 'Propuesta', body: 'Una cotización de alcance fijo antes de empezar. Sin sorpresas.' },
      { step: '03', title: 'Construcción y Lanzamiento', body: 'La mayoría de los proyectos van de kickoff a lanzamiento en 1 a 3 semanas.' },
    ],
    licenseNote:
      'Las herramientas de plugins premium corren bajo mi propia licencia de agencia, sin costo extra mientras trabajemos juntos. Si en algún momento terminamos, puedes adquirir tu propia licencia o te documento una migración limpia — tu sitio nunca queda atado a mí.',
    finalHeading: '¿Cansado de operar tu negocio por WhatsApp y hojas de cálculo?',
    finalCta: 'Agenda una llamada',
  },
  work: {
    eyebrow: 'Trabajo seleccionado',
    h1: 'Algunos problemas que ya resolví.',
    sub: 'Trabajo de ingeniería real de mi paso por Amazon, Kritik y Viafoura — descrito en términos simples: el problema, qué hice, y qué cambió.',
    labels: { problem: 'Problema', action: 'Acción', result: 'Resultado' },
    caseStudies: [
      {
        company: 'Amazon',
        role: 'Frontend Engineer II',
        title: 'Rendimiento de video bajo restricciones de plataforma extremas',
        problem:
          'Las experiencias de apps de TV corren bajo restricciones estrictas de renderizado, memoria y entrada — la mayoría de los playbooks estándar de performance web no aplican, y el manejo de navegación/foco tiene que construirse desde cero para control remoto.',
        action:
          'Construí sistemas reutilizables de foco/navegación, apps de referencia, y herramientas internas adoptadas por múltiples equipos; trabajé directamente en arquitectura de reproducción de video y límites de renderizado; modernicé clientes de telemetría en TypeScript, Go y Python para alinear el comportamiento en todo el ecosistema.',
        result:
          'Herramientas y componentes adoptados por equipos internos y externos (3P), destrabando trabajo que antes requería reconstruir los mismos sistemas por equipo, y elevando el estándar de calidad de experiencias de TV en toda la organización.',
      },
      {
        company: 'Kritik',
        role: 'Full Stack Developer',
        title: 'Desenredando un codebase de React/Redux fuertemente acoplado',
        problem:
          'La capa de datos y el estado del frontend se habían vuelto fuertemente acoplados — componentes de React y Redux duplicando lógica, difíciles de probar con seguridad, y lentos de cambiar sin romper algo más.',
        action:
          'Integré PostgreSQL con Prisma en TypeScript, migré el manejo de estado de Redux a React Query, dividí componentes para reutilización, y agregué cobertura de pruebas end-to-end con Cypress.',
        result:
          'Una capa de datos y arquitectura de componentes que el equipo pudo extender sin romper funcionalidad existente, con pruebas automatizadas detectando regresiones antes de llegar a producción.',
      },
      {
        company: 'Viafoura',
        role: 'Frontend Developer',
        title: 'Migrando de Vue/Nuxt a Next.js sin afectar clientes en vivo',
        problem:
          'Las apps de cara al cliente corrían sobre Vue.js y Nuxt SSR; partes del stack necesitaban migrar a Next.js para mejor rendimiento SSR/SSG y SEO — sin romper funcionalidad de la que los clientes dependían a diario.',
        action:
          'Arquitecté y refiné las aplicaciones existentes de Vue/Nuxt, resolví bugs complejos entre frameworks, y lideré la transición de las superficies clave hacia Next.js.',
        result:
          'Experiencias de cliente rápidas y amigables con SEO que pasaron limpiamente al nuevo stack, sin pérdida de funcionalidad durante la transición.',
      },
    ],
    finalHeading: '¿Quieres ingeniería así en tu tienda o sitio?',
    finalCta: 'Agenda una llamada',
  },
  contact: {
    eyebrow: 'Contacto',
    h1: 'Hablemos de tu tienda o sitio.',
    sub: 'La forma más rápida de contactarme es agendando una llamada corta. Te haré algunas preguntas sobre tu tienda o sitio antes, para que la llamada no se vaya en descubrimiento básico.',
    ctaPrimary: 'Agenda una llamada en Calendly',
    emailLabel: '¿Prefieres correo?',
    locationNote: 'Con base en Ciudad de México — con traslape completo con horario de negocios de EE. UU.',
    socialsHeading: 'En otros lugares',
  },
} as const;

export const content = { en, es };

export function t(locale: Locale) {
  return content[locale];
}
