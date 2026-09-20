import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsBackground from '../components/ProjectsBackground';
import { projects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import Reveal from '../components/projects/Reveal';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'product', label: 'Product & Web' },
  { key: 'branding', label: 'Branding' },
  { key: 'graphic', label: 'Graphic' },
] as const;

type FilterKey = (typeof FILTERS)[number]['key'];

const Projects = () => {
  const [active, setActive] = useState<FilterKey>('all');
  const visible = active === 'all' ? projects : projects.filter((p) => p.group === active);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep">
      <ProjectsBackground />
      <Navbar />

      <main className="container-xl py-16 relative z-10">
        <Reveal y={16}>
          <div className="mb-10 flex items-center gap-4">
            <Link to="/" className="neo-box p-3 inline-block bg-white dark:bg-neo-dark-box hover:-translate-y-1 transition-transform" aria-label="Back to home">
              <ArrowLeft className="text-neo-black dark:text-white" />
            </Link>

            <div>
              <div className="inline-block bg-neo-blue dark:bg-neo-dark-blue-accent px-4 py-1 text-white border-4 border-neo-black dark:border-neo-dark-border transform -rotate-1 mb-3">
                <h2 className="font-display font-bold text-xl">MY PORTFOLIO</h2>
              </div>
              <h1 className="main-heading">All <span className="text-neo-red dark:text-neo-dark-red">Projects</span></h1>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-xl max-w-2xl dark:text-gray-300 mb-8">
            Seven projects across product, brand and print — each with a full case study.
          </p>
        </Reveal>

        {/* Group filters */}
        <Reveal delay={0.12}>
          <div className="flex flex-wrap gap-4 mb-12" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                aria-pressed={active === f.key}
                onClick={() => setActive(f.key)}
                className={`px-6 py-2 border-4 border-neo-black dark:border-neo-dark-border font-display font-bold uppercase transition-all duration-200 ${
                  active === f.key
                    ? 'bg-neo-black text-white shadow-neo dark:bg-neo-dark-border dark:shadow-neo-dark'
                    : 'bg-white hover:bg-neo-yellow dark:bg-neo-dark-box dark:hover:bg-neo-dark-yellow dark:hover:text-neo-dark-blue-deep shadow-neo dark:shadow-neo-dark'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
