import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './projects/ProjectCard';
import Reveal from './projects/Reveal';

const WorksSection = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="works" className="py-20 relative overflow-hidden dark:bg-neo-dark-bg">
      {/* Background neo-brutalist shapes */}
      <div className="absolute w-40 h-40 dark:invisible bg-neo-red/10 dark:bg-neo-dark-red/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 rounded-full -top-10 -left-10 animate-float"></div>
      <div className="absolute w-32 h-32 dark:invisible bg-neo-yellow/10 dark:bg-neo-dark-yellow/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform rotate-45 -bottom-10 right-1/4"></div>
      <div className="absolute w-24 h-24 dark:invisible bg-neo-blue/10 dark:bg-neo-dark-blue/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform rotate-12 top-1/3 -right-5"></div>

      <div className="container-xl relative z-10">
        <Reveal y={20}>
          <div className="mb-12">
            <div className="inline-block bg-neo-blue dark:bg-neo-dark-blue px-4 py-1 text-white border-4 border-neo-black dark:border-neo-dark-border transform -rotate-1 mb-4">
              <h2 className="font-display font-bold text-2xl">MY WORKS</h2>
            </div>
            <h3 className="main-heading mb-6">
              Selected <span className="text-neo-red dark:text-neo-dark-red">Projects</span>
            </h3>
            <p className="text-xl max-w-2xl dark:text-gray-300">
              Case studies, not just screenshots — how each project was framed, decided and built.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link to="/projects" className="neo-button flex items-center gap-2 group">
              View All Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WorksSection;
