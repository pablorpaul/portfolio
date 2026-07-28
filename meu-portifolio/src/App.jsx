import React, { useState } from 'react';
import './App.css';

const DATA = {
  profile: {
    name: "Pablo Ricardo Paul",
    role: "Desenvolvedor Full-Stack",
    status: "Estudante de Análise e Desenvolvimento de Sistemas na Faculdade Senac - Joinville",
    location: "Joinville, SC - Brasil",
    email: "pablo.r.paul@gmail.com",
    about: "Desenvolvedor Full-Stack focado na criação de aplicações web modernas, escaláveis e performáticas. Atualmente cursando a faculdade e desenvolvendo projetos práticos com ecossistema JavaScript/TypeScript (React, Node.js) e bancos de dados relacionais e não-relacionais.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    links: {
      github: "https://github.com/pablorpaul",
      linkedin: "https://linkedin.com/in/seulinkedin",
      resume: "#"
    }
  },
  skills: [
    {
      category: "Linguagens & Front-End",
      items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Back-End & Bancos de Dados",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "APIs RESTful"]
    },
    {
      category: "Ferramentas & DevOps",
      items: ["Git & GitHub", "Docker", "Linux", "Postman", "VS Code"]
    }
  ],
  projects: [
    {
      title: "Plataforma de Gestão Acadêmica",
      description: "Sistema Full-Stack para gerenciamento de tarefas, notas e horários acadêmicos com autenticação JWT e banco PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/seugithub/projeto-academico",
      demo: "https://meu-projeto-demo.vercel.app"
    },
    {
      title: "E-Commerce API & Dashboard",
      description: "API RESTful completa com controle de estoque, cálculo de frete e painel administrativo responsivo.",
      tags: ["TypeScript", "Express", "MongoDB", "React"],
      github: "https://github.com/seugithub/ecommerce-api",
      demo: null
    },
    {
      title: "App de Finanças Pessoais",
      description: "Aplicação interativa com gráficos em tempo real para controle de orçamentos e relatórios em PDF.",
      tags: ["React", "Tailwind", "Chart.js"],
      github: "https://github.com/seugithub/financas-app",
      demo: "https://financas-demo.vercel.app"
    }
  ],
  education: [
    {
      institution: "Faculdade Senac - Joinville",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "2025 - 2027 (Previsão)",
      details: "Desenvolvimento Full-Stack, Engenharia de Software, Redes e Sistemas Distribuídos."
    }
  ],
  hobbies: [
    "Desenvolvimento de Web & Aplicativos",
    "Jogos Indie",
    "Música & Podcasts",
    "Board Games",
    "Filmes e Séries"
  ]
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-800'}`}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              darkMode 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800' 
                : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-100 shadow-sm'
            }`}
            aria-label="Alternar tema"
          >
            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
        </div>

        {}
        <header className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
          <img
            src={DATA.profile.avatar}
            alt={DATA.profile.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-800 shadow-sm"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {DATA.profile.name}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium text-base mt-1">
              {DATA.profile.role}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
              {DATA.profile.status} • {DATA.profile.location}
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-sm font-medium">
              <a
                href={`mailto:${DATA.profile.email}`}
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>✉️</span> E-mail
              </a>
              <a
                href={DATA.profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>🐙</span> GitHub
              </a>
              <a
                href={DATA.profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>💼</span> LinkedIn
              </a>
              {DATA.profile.links.resume && (
                <a
                  href={DATA.profile.links.resume}
                  className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>📄</span> Currículo (PDF)
                </a>
              )}
            </div>
          </div>
        </header>

        {}
        <section className="mb-12">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 pb-1 border-b border-zinc-200 dark:border-zinc-800">
            Sobre mim
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
            {DATA.profile.about}
          </p>
        </section>

        {}
        <section className="mb-12">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 pb-1 border-b border-zinc-200 dark:border-zinc-800">
            Tecnologias & Conhecimentos
          </h2>
          <div className="space-y-4">
            {DATA.skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className={`text-xs px-2.5 py-1 rounded-md font-mono transition-colors ${
                        darkMode
                          ? 'bg-zinc-900 border border-zinc-800 text-zinc-300'
                          : 'bg-zinc-100 border border-zinc-200 text-zinc-700'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="mb-12">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 pb-1 border-b border-zinc-200 dark:border-zinc-800">
            Projetos em Destaque
          </h2>
          <div className="space-y-6">
            {DATA.projects.map((proj, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700'
                    : 'bg-white border-zinc-200/80 hover:border-zinc-300 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                    {proj.title}
                  </h3>
                  <div className="flex gap-3 text-xs font-medium">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub ↗
                    </a>
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {proj.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="mb-12">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 pb-1 border-b border-zinc-200 dark:border-zinc-800">
            Educação & Formação
          </h2>
          <div className="space-y-4">
            {DATA.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-0.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
                    {edu.degree}
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono">{edu.period}</span>
                </div>
                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  {edu.institution}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="mb-12">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 pb-1 border-b border-zinc-200 dark:border-zinc-800">
            Interesses
          </h2>
          <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            {DATA.hobbies.map((hobby, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="text-zinc-400">•</span> {hobby}
              </li>
            ))}
          </ul>
        </section>

        {}
        <footer className="mt-16 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {DATA.profile.name}. Desenvolvido com React & Tailwind CSS.</p>
        </footer>

      </div>
    </div>
  );
}