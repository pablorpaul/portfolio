import React, { useState, useEffect } from 'react';
import './App.css';

const DATA = {
  profile: {
    name: "Pablo Ricardo Paul",
    role: "Desenvolvedor Full-Stack",
    status: "Estudante de Análise e Desenvolvimento de Sistemas na Faculdade Senac - Joinville",
    location: "Joinville, SC - Brasil",
    email: "pablo.r.paul@gmail.com",
    about: "Eu sou o Pablo, Desenvolvedor Full-Stack no início da carreira, no momento focado na criação de aplicações web modernas, escaláveis e performáticas. Atualmente cursando a faculdade e desenvolvendo projetos práticos com ecossistema JavaScript/TypeScript (React, Node.js) e bancos de dados relacionais e não-relacionais.",
    avatar: "/foto_perfil.png",
    links: {
      github: "https://github.com/pablorpaul",
      linkedin: "https://linkedin.com/in/seulinkedin",
      resume: "/curriculo.pdf"
    }
  },
  skills: [
    {
      category: "Linguagens & Front-End",
      items: ["JavaScript (ES6+)", "TypeScript", "React.js", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Back-End & Bancos de Dados",
      items: ["Node.js", "Express", "PostgreSQL", "MariaDB", "APIs RESTful"]
    },
    {
      category: "Ferramentas & DevOps",
      items: ["Git & GitHub", "Docker", "Linux", "Postman", "VS Code"]
    }
  ],
  projects: [
    {
      id: "petshop_api",
      title: "Petshop API",
      subtitle: "Sistema para controle de atendimento de petshop",
      category: "API RESTful & Back-End",
      year: "2023 - 2024",
      role: "Desenvolvedor Back-End",
      description: "API RESTful completa com controle de clientes, pets e painel administrativo responsivo.",
      fullDescription: `Desenvolvimento de uma infraestrutura robusta para petshop focada em performance, controle e gestão eficiente de clientes e atendimentos, assim como agendamentos.

A API foi projetada seguindo padrões da arquitetura em camadas (Controller, Service, Repository), garantindo um código altamente testável, desacoplado e fácil de estender para novos módulos.`,
      tags: ["JavaScript", "Express", "MariaDB", "JWT", "Bcrypt"],
      github: "https://github.com/pablorpaul/pet_shop",
      demo: null,
      keyFeatures: [
        "CRUD completo de clientes, pets, agendamentos",
        "Controle de níveis de acesso",
        "Filtros e paginação"
      ],
      architecture: [
        { title: "Back-End Core", details: "Node.js com JavaScript e Express." },
        { title: "Banco de Dados", details: "MariaDB para armazenamento rápido e simples." }
      ],
      learnings: "Aprendi na prática a lidar com paginação de registros em grandes volumes, criação de índices otimizados no MariaDB, tratamento centralizado de erros assíncronos e arquitetura modular em Node.js com JavaScript."
    },
    {
      id: "financas-app",
      title: "App de Finanças Pessoais",
      subtitle: "Dashboard financeiro interativo com análise gráfica e controle de finanças",
      category: "Front-End & Back-End",
      year: "2026",
      role: "Desenvolvedor Full-Stack",
      description: "Aplicação para controle de finanças pessoais e contorle de vida financeira.",
      fullDescription: `Um aplicativo dinâmico e focado em experiência do usuário para gerenciamento de gastos gerais. O projeto permite cadastrar despesas por categoria, visualizar o fluxo de caixa mensal e exbibir dados financeiros baseadas em dados históricos.

O foco principal do projeto foi criar uma interface extremamente rápida, fluida e visualmente atraente, permitindo que o usuário entenda sua saúde financeira em poucos segundos.`,
      tags: ["React", "Vite", "Node.js", "JavaScript (ES6+)", "Express", "MariaDB", "JWT" ],
      github: "https://github.com/pablorpaul/personal-expenses-api",
      demo: null,
      keyFeatures: [
        "Gráficos interativos de rosca e barras mostrando distribuição por categoria e total de gastos",
        "Filtro avançado por período (mês atual, ano, datas customizadas)",
        "Responsivo, podendo ser utilizado em ambos diversos dispositivos"
      ],
      architecture: [
        { title: "Front-End", details: "Desenvolvido em React funcional com componentes otimizados e Vite para design totalmente responsivo." },
        { title: "Back-End", details: "Desenvolvimento em JavaScript e Express para facil gerenciamento e conexão com a database" },
        { title: "Banco de Dados", details: "MariaDB para armazenamento rápido e simples." }
      ],
      learnings: "Domínio de bibliotecas de manipulação gráfica, otimização de renderização de listas no React, desenvolvimento de API restful com integração front-end."
    }
  ],
  education: [
    {
      institution: "Faculdade Senac - Joinville",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "2025 - 2027 (Previsão)",
      details: "Desenvolvimento Full-Stack, Engenharia de Software, Redes e Sistemas Distribuídos."
    },
    {
      institution: "Faculdade Senac - Joinville",
      degree: "Curso Jovem Programador",
      period: "2023",
      details: "Desenvolvimento backend e frontend, banco de dados, elaborar projetos."
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
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = DATA.projects.find((p) => p.id === selectedProjectId);

  return (
    <div
      className={`min-h-screen font-sans p-4 sm:p-6 md:p-12 transition-colors duration-200 ${
        darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-800'
      }`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Top Header / Theme Switcher */}
        {/* <div className="flex justify-between items-center mb-8">
          <span className="text-xs text-zinc-400 font-mono">portfolio.dev</span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-100'
            }`}
            aria-label="Alternar tema"
          >
            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
        </div> */}

        {/* Main Content Page */}
        <HomePage
          data={DATA}
          darkMode={darkMode}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} {DATA.profile.name}. Desenvolvido com
            React & Tailwind CSS.
          </p>
        </footer>
      </div>

      {/* Project Detail Modal / Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          darkMode={darkMode}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </div>
  );
}

function HomePage({ data, darkMode, onSelectProject }) {
  return (
    <main>
      {/* Header Profile Section */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
        <img
          src={data.profile.avatar}
          alt={data.profile.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-800 shadow-sm"
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {data.profile.name}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-base mt-1">
            {data.profile.role}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
            {data.profile.status} • {data.profile.location}
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm font-medium">
            <a
              href={`mailto:${data.profile.email}`}
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>✉️</span> E-mail
            </a>
            <a
              href={data.profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>🐙</span> GitHub
            </a>
            <a
              href={data.profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>💼</span> LinkedIn
            </a>
            {data.profile.links.resume && (
              <a
                href={data.profile.links.resume}
                download="cv_Pablo_Ricardo_Paul.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>📄</span> Currículo (PDF)
              </a>
            )}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 pb-1 border-b border-zinc-200 dark:border-zinc-800">
          Sobre mim
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
          {data.profile.about}
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 pb-1 border-b border-zinc-200 dark:border-zinc-800">
          Tecnologias & Conhecimentos
        </h2>
        <div className="space-y-4">
          {data.skills.map((skillGroup, idx) => (
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

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 pb-1 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
          <span>Projetos em Destaque</span>
          <span className="text-xs font-normal text-zinc-400">
            Clique para ver o projeto detalhado
          </span>
        </h2>
        <div className="space-y-6">
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj.id)}
              className={`p-5 rounded-xl border transition-all cursor-pointer group ${
                darkMode
                  ? 'bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900'
                  : 'bg-white border-zinc-200/80 hover:border-zinc-300 hover:shadow-md shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                    {proj.category}
                  </span>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex gap-3 text-xs font-medium" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                    title="Código fonte no GitHub"
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
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                <div className="flex flex-wrap gap-1">
                  {proj.tags.slice(0, 4).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                  {proj.tags.length > 4 && (
                    <span className="text-[11px] text-zinc-400 px-1 py-0.5">
                      +{proj.tags.length - 4}
                    </span>
                  )}
                </div>

                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1">
                  Ver detalhes →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 pb-1 border-b border-zinc-200 dark:border-zinc-800">
          Educação & Formação
        </h2>
        <div className="space-y-4">
          {data.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
                  {edu.degree}
                </h3>
                <span className="text-xs text-zinc-400 font-mono">
                  {edu.period}
                </span>
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

      {/* Hobbies Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 pb-1 border-b border-zinc-200 dark:border-zinc-800">
          Interesses & Hobbies
        </h2>
        <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
          {data.hobbies.map((hobby, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <span className="text-zinc-400">•</span> {hobby}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function ProjectModal({ project, darkMode, onClose }) {
  // Lock background body scroll and listen for ESC key
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl transition-all ${
          darkMode
            ? 'bg-zinc-950 border-zinc-800 text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-900'
        }`}
      >
        {/* Top Header & Close Button */}
        <div className="flex justify-between items-start mb-6 sticky top-0 bg-inherit pt-1 pb-3 border-b border-zinc-200 dark:border-zinc-800 z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg border text-sm transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
            }`}
            aria-label="Fechar Popup"
          >
            ✕
          </button>
        </div>

        {/* Subtitle & Links */}
        <div className="mb-6">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-4">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              <span>🐙</span> Ver no GitHub ↗
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
              >
                <span>🚀</span> Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-6 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/40">
          <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            Tecnologias Utilizadas
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                  darkMode
                    ? 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                    : 'bg-white text-zinc-700 border border-zinc-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section className="mb-6">
          <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 pb-1 border-b border-zinc-200 dark:border-zinc-800">
            Visão Geral do Projeto
          </h3>
          <div className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed whitespace-pre-line space-y-2">
            {project.fullDescription}
          </div>
        </section>

        {/* Key Features */}
        {project.keyFeatures && (
          <section className="mb-6">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              Principais Funcionalidades
            </h3>
            <ul className="space-y-1.5">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architecture */}
        {project.architecture && (
          <section className="mb-6">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              Arquitetura & Estrutura Técnica
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border ${
                    darkMode
                      ? 'bg-zinc-900/40 border-zinc-800'
                      : 'bg-white border-zinc-200'
                  }`}
                >
                  <h4 className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-0.5">
                    {arch.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {arch.details}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Learnings */}
        {project.learnings && (
          <section className="mb-6">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              Desafios & Aprendizados
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 p-3.5 rounded-xl">
              {project.learnings}
            </p>
          </section>
        )}

        {/* Modal Bottom Footer */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
}