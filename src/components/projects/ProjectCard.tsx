import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../data/projects';
import { getCaseStudy } from '../../data/caseStudies';
import ProjectCover from './ProjectCover';
import ImageSlot from './ImageSlot';

interface ProjectCardProps {
  project: Project;
}

/**
 * Showcase card — a composed project cover on top, metadata below.
 * Hover: cover zooms slightly, card lifts, CTA slides into view.
 * The whole card is a single link for clean keyboard/touch behaviour.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const study = getCaseStudy(project.id);

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block neo-box p-0 overflow-hidden bg-white dark:bg-neo-dark-box focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neo-blue dark:focus-visible:ring-neo-dark-blue-accent"
      aria-label={`View case study: ${project.title}`}
    >
      {/* Cover */}
      <div className="relative h-52 sm:h-60 border-b-4 border-neo-black dark:border-neo-dark-border overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          {study ? (
            <ProjectCover cover={study.cover} title={project.title} />
          ) : (
            <ImageSlot src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
          )}
        </div>

        {/* year chip */}
        <div className="absolute top-0 right-0 bg-neo-yellow dark:bg-neo-dark-yellow border-l-4 border-b-4 border-neo-black dark:border-neo-dark-border px-2 py-1 font-display font-bold text-xs text-neo-black dark:text-neo-dark-blue-deep">
          {project.year}
        </div>

        {/* hover CTA */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-neo-black/90 dark:bg-neo-dark-blue-deep/95 border-t-4 border-neo-black dark:border-neo-dark-border px-4 py-2.5 flex items-center justify-between">
          <span className="font-display font-bold text-sm text-white uppercase tracking-wide">View Case Study</span>
          <ArrowRight size={18} className="text-neo-yellow dark:text-neo-dark-yellow" />
        </div>
      </div>

      {/* Meta */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-neo-blue dark:bg-neo-dark-blue-accent text-white text-xs font-display font-bold uppercase px-2.5 py-1 border-2 border-neo-black dark:border-neo-dark-border">
            {project.category}
          </span>
          {project.featured && (
            <span className="bg-neo-red dark:bg-neo-dark-red text-white text-xs font-display font-bold uppercase px-2.5 py-1 border-2 border-neo-black dark:border-neo-dark-border">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 dark:text-white group-hover:text-neo-red dark:group-hover:text-neo-dark-red transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-neo-dark-blue-text text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.disciplines.map((d) => (
            <span
              key={d}
              className="text-xs font-medium px-2 py-0.5 border-2 border-neo-black/60 dark:border-neo-dark-border text-gray-600 dark:text-neo-dark-blue-text"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
