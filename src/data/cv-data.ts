export interface SkillCategory {
  label: string
  items: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  meta: string
  current?: boolean
  points: string[]
}

export interface EarlyRole {
  company: string
  role: string
  period: string
  text: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  ongoing?: boolean
}

export interface Language {
  name: string
  level: string
  value: number
}

export interface Translations {
  role: string
  stack: string
  location: string
  cvFile: string
  cta: { download: string; getInTouch: string; viewWork: string }
  sections: {
    about: string
    experience: string
    earlyCareer: string
    skills: string
    education: string
    languages: string
    contact: string
  }
  yearsLabel: string
  stackTags: string[]

  summary: string
  summary2: string
  present: string
  skills: SkillCategory[]
  experience: Experience[]
  early: EarlyRole[]
  education: Education[]
  languages: Language[]
  contactLede: string
}

export interface ContactInfo {
  email: string
  whatsapp: string
  whatsappUrl: string
  linkedin: string
  linkedinUrl: string
  github: string
  githubUrl: string
  site: string
}

export interface CVData {
  name: string
  handle: string
  photo: string
  contact: ContactInfo
  en: Translations
  pt: Translations
}

export const DATA: CVData = {
  name: 'Bruno Sousa',
  handle: 'obssousa',
  photo: '/profile.jpeg',
  contact: {
    email: 'obssousa@pm.me',
    whatsapp: '+55 91 98503-7834',
    whatsappUrl: 'https://wa.me/5591985037834',
    linkedin: 'linkedin.com/in/obssousa',
    linkedinUrl: 'https://linkedin.com/in/obssousa',
    github: 'github.com/obssousa',
    githubUrl: 'https://github.com/obssousa',
    site: 'obssousa.github.io',
  },
  en: {
    role: 'Senior Front-End Engineer',
    stack: 'Vue.js · React · TypeScript',
    location: 'Belém, Brazil',
    cvFile: '/Bruno_Sousa_CV_EN.pdf',
    cta: { download: 'Download CV', getInTouch: 'Get in touch', viewWork: 'Experience' },
    sections: {
      about: 'About',
      experience: 'Experience',
      earlyCareer: 'Early career',
      skills: 'Technical skills',
      education: 'Education',
      languages: 'Languages',
      contact: 'Contact',
    },
    yearsLabel: 'years building for the web',
    stackTags: ['vue', 'react', 'typescript', 'astro', 'nuxt', 'node', 'express', 'mongo','aws', 'ci/cd', 'tdd'],

    summary:
      'Software Engineer with 6+ years of experience specializing in front-end architecture and high-performance web applications. Deep expertise across the Vue.js ecosystem (Vue 2/3, Nuxt) combined with a framework-agnostic approach spanning React, Astro and Angular. Proven track record leading large-scale modernizations — JavaScript-to-TypeScript migrations, Vue 2→3 upgrades and Nuxt→Astro transitions — and designing reusable component libraries that improve developer experience and delivery speed.',
    summary2:
      'Strong advocate of TDD and automated testing (Cypress, Jest), with solid REST and GraphQL integration experience. Comfortable working across the stack when needed — back-end exposure with Node.js, Express and MongoDB — with hands-on AWS delivery (CloudFront, S3, Route 53, CodePipeline, CloudWatch) and reliable CI/CD pipelines.',
    present: 'Present',
    skills: [
      {
        label: 'Languages & Frameworks',
        items: ['TypeScript', 'JavaScript (ES6+)', 'Vue.js (2/3)', 'Nuxt', 'React', 'Astro', 'Angular'],
      },
      {
        label: 'Architecture & Performance',
        items: ['Design systems', 'Component libraries', 'SSR / SSG', 'Rendering optimization', 'Modular architecture'],
      },
      { label: 'Testing & Quality', items: ['TDD', 'Cypress (E2E)', 'Jest (unit)', 'Storybook'] },
      { label: 'Back-end', items: ['Node.js', 'Express', 'MongoDB', 'PHP / Laravel'] },
      { label: 'APIs & Integration', items: ['RESTful APIs', 'GraphQL'] },
      {
        label: 'Cloud & DevOps',
        items: ['AWS (CloudFront, S3, Route 53)', 'CodePipeline', 'CloudWatch', 'Firebase', 'CI/CD'],
      },
      { label: 'Tooling', items: ['Git', 'Figma', 'VTEX IO'] },
    ],
    experience: [
      {
        company: 'Parcelex',
        role: 'Web Developer',
        period: 'Jan 2023 — Present',
        meta: 'Fintech · Brazil',
        current: true,
        points: [
          'Led the migration of legacy systems from Vue 2 to Vue 3 and introduced TypeScript across the codebase, enforcing strict type safety and significantly reducing runtime errors.',
          'Architected a unified, scalable package of shared UI components, scripts and typings for multi-project use — a single source of truth that increased cross-team code reuse.',
          'Drove the architectural transition from Nuxt to Astro, implementing SSR/SSG rendering to remove long-standing performance bottlenecks.',
          'Built a custom React component library from scratch for the VTEX IO e-commerce platform, creating a unified design language.',
          'Owned front-end delivery on AWS (CodePipeline, CloudFront, S3, Route 53) with CloudWatch monitoring and reliable CI/CD pipelines.',
        ],
      },
      {
        company: 'Clicksign',
        role: 'Frontend Developer',
        period: 'Oct 2021 — Dec 2022',
        meta: 'SaaS · Digital signatures · Brazil',
        points: [
          'Engineered complex, high-performance interfaces with Vue.js (Composition & Options API) and TypeScript for demanding business flows.',
          'Championed a test-driven culture — end-to-end automated testing with Cypress and extensive unit testing with Jest.',
          'Built and maintained a visual styleguide in Storybook, bridging design and development and ensuring UI consistency.',
        ],
      },
      {
        company: 'WeDev Tecnologia',
        role: 'Frontend Developer',
        period: 'Dec 2020 — Nov 2021',
        meta: 'Remote',
        points: [
          'Developed and maintained scalable white-label CRUD applications in Vue.js 2, designed for flexible, outsourced deployment.',
          'Authored technical documentation of complex front-end / back-end integrations, streamlining onboarding.',
          'Ensured component reliability through rigorous unit testing with Jest.',
        ],
      },
    ],
    early: [
      {
        company: 'Top Trader',
        role: 'Web Developer · Internship',
        period: '2019 — 2020',
        text: 'Fullstack with Nuxt/Vue and Laravel; interface prototyping in Figma and Jest unit testing.',
      },
      {
        company: 'UFPA',
        role: 'Web Developer · Internship',
        period: '2018 — 2019',
        text: 'Analytical dashboards with Vue.js and Highcharts (PHP back-end) and automated report generation.',
      },
      {
        company: 'CEAMAZON / UFPA',
        role: 'Front-End Developer · Internship',
        period: '2017 — 2018',
        text: 'Java/JavaFX desktop and mobile apps with back-end integration for FAPESPA and CEA.',
      },
    ],
    education: [
      {
        degree: 'B.Sc. Computer Engineering',
        institution: 'Universidade Federal do Pará (UFPA)',
        period: '2016 — 2022',
      },
      {
        degree: 'Postgraduate (Lato Sensu) — Full Stack Development & Cloud Computing',
        institution: 'GRAN',
        period: '2025 — 2026',
      },
      {
        degree: 'Postgraduate — Software Engineering in Applied AI',
        institution: 'UNIPDS',
        period: '2026 — 2027',
        ongoing: true,
      },
    ],
    languages: [
      { name: 'Portuguese', level: 'Native', value: 100 },
      { name: 'English', level: 'Professional working', value: 80 },
    ],
    contactLede: 'Let\'s talk.',
  },
  pt: {
    role: 'Engenheiro Front-End Sênior',
    stack: 'Vue.js · React · TypeScript',
    location: 'Belém, Brasil',
    cvFile: '/Bruno_Sousa_CV_PT.pdf',
    cta: { download: 'Baixar CV', getInTouch: 'Entrar em contato', viewWork: 'Experiência' },
    sections: {
      about: 'Sobre',
      experience: 'Experiência',
      earlyCareer: 'Início de carreira',
      skills: 'Competências técnicas',
      education: 'Formação',
      languages: 'Idiomas',
      contact: 'Contato',
    },
    yearsLabel: 'anos construindo para a web',
    stackTags: ['vue', 'react', 'typescript', 'astro', 'nuxt', 'node', 'aws', 'ci/cd', 'tdd'],

    summary:
      'Engenheiro de Software com mais de 6 anos de experiência, especializado em arquitetura front-end e aplicações web de alta performance. Profundo domínio do ecossistema Vue.js (Vue 2/3, Nuxt) aliado a uma abordagem agnóstica de frameworks que abrange React, Astro e Angular. Histórico comprovado liderando modernizações de larga escala — migrações de JavaScript para TypeScript, upgrades de Vue 2→3 e transições de Nuxt→Astro — e projetando bibliotecas de componentes reutilizáveis que melhoram a experiência do desenvolvedor e a velocidade de entrega.',
    summary2:
      'Defensor de TDD e testes automatizados (Cypress, Jest), com sólida experiência em integração REST e GraphQL. Confortável para atuar em outras partes da stack quando necessário — com exposição ao back-end em Node.js, Express e MongoDB — além de entregas hands-on na AWS (CloudFront, S3, Route 53, CodePipeline, CloudWatch) com pipelines de CI/CD confiáveis.',
    present: 'Atual',
    skills: [
      {
        label: 'Linguagens & Frameworks',
        items: ['TypeScript', 'JavaScript (ES6+)', 'Vue.js (2/3)', 'Nuxt', 'React', 'Astro', 'Angular'],
      },
      {
        label: 'Arquitetura & Performance',
        items: [
          'Design systems',
          'Bibliotecas de componentes',
          'SSR / SSG',
          'Otimização de renderização',
          'Arquitetura modular',
        ],
      },
      { label: 'Testes & Qualidade', items: ['TDD', 'Cypress (E2E)', 'Jest (unit)', 'Storybook'] },
      { label: 'Back-end', items: ['Node.js', 'Express', 'MongoDB', 'PHP / Laravel'] },
      { label: 'APIs & Integração', items: ['APIs RESTful', 'GraphQL'] },
      {
        label: 'Cloud & DevOps',
        items: ['AWS (CloudFront, S3, Route 53)', 'CodePipeline', 'CloudWatch', 'Firebase', 'CI/CD'],
      },
      { label: 'Ferramentas', items: ['Git', 'Figma', 'VTEX IO'] },
    ],
    experience: [
      {
        company: 'Parcelex',
        role: 'Desenvolvedor Web',
        period: 'Jan 2023 — Atual',
        meta: 'Fintech · Brasil',
        current: true,
        points: [
          'Liderei a migração de sistemas legados de Vue 2 para Vue 3 e introduzi TypeScript em toda a base de código, garantindo tipagem rigorosa e reduzindo significativamente erros em runtime.',
          'Arquitetei um pacote unificado e escalável de componentes de UI, scripts e tipagens compartilhados para uso multi-projeto — uma única fonte de verdade que aumentou o reuso de código entre times.',
          'Conduzi a transição arquitetural de Nuxt para Astro, implementando renderização SSR/SSG para eliminar gargalos de performance.',
          'Construí do zero uma biblioteca de componentes React para a plataforma de e-commerce VTEX IO, criando uma linguagem de design unificada.',
          'Responsável pela entrega de front-end na AWS (CodePipeline, CloudFront, S3, Route 53) com monitoramento via CloudWatch e pipelines de CI/CD confiáveis.',
        ],
      },
      {
        company: 'Clicksign',
        role: 'Desenvolvedor Frontend',
        period: 'Out 2021 — Dez 2022',
        meta: 'SaaS · Assinaturas digitais · Brasil',
        points: [
          'Desenvolvi interfaces complexas e de alta performance com Vue.js (Composition & Options API) e TypeScript para fluxos de negócio exigentes.',
          'Promovi uma cultura orientada a testes — testes automatizados end-to-end com Cypress e testes unitários extensivos com Jest.',
          'Construí e mantive um styleguide visual no Storybook, conectando design e desenvolvimento e garantindo consistência de UI.',
        ],
      },
      {
        company: 'WeDev Tecnologia',
        role: 'Desenvolvedor Frontend',
        period: 'Dez 2020 — Nov 2021',
        meta: 'Remoto',
        points: [
          'Desenvolvi e mantive aplicações CRUD white-label escaláveis em Vue.js 2, projetadas para deploy flexível e terceirizado.',
          'Documentei integrações complexas de front-end / back-end, agilizando o onboarding.',
          'Garanti a confiabilidade dos componentes com testes unitários rigorosos em Jest.',
        ],
      },
    ],
    early: [
      {
        company: 'Top Trader',
        role: 'Desenvolvedor Web · Estágio',
        period: '2019 — 2020',
        text: 'Fullstack com Nuxt/Vue e Laravel; prototipação de interfaces no Figma e testes unitários com Jest.',
      },
      {
        company: 'UFPA',
        role: 'Desenvolvedor Web · Estágio',
        period: '2018 — 2019',
        text: 'Dashboards analíticos com Vue.js e Highcharts (back-end PHP) e geração automatizada de relatórios.',
      },
      {
        company: 'CEAMAZON / UFPA',
        role: 'Desenvolvedor Front-End · Estágio',
        period: '2017 — 2018',
        text: 'Apps desktop e mobile em Java/JavaFX com integração de back-end para a FAPESPA e a CEA.',
      },
    ],
    education: [
      {
        degree: 'Bacharelado em Engenharia de Computação',
        institution: 'Universidade Federal do Pará (UFPA)',
        period: '2016 — 2022',
      },
      {
        degree: 'Pós-graduação (Lato Sensu) — Desenvolvimento Full Stack e Computação em Nuvem',
        institution: 'GRAN',
        period: '2025 — 2026',
      },
      {
        degree: 'Pós-graduação — Engenharia de Software em IA Aplicada',
        institution: 'UNIPDS',
        period: '2026 — 2027',
        ongoing: true,
      },
    ],
    languages: [
      { name: 'Português', level: 'Nativo', value: 100 },
      { name: 'Inglês', level: 'Profissional', value: 80 },
    ],
    contactLede: 'Vamos conversar.',
  },
}
