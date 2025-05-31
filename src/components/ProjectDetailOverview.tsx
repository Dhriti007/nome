
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectDetailOverviewProps {
  project: Project;
}

const ProjectDetailOverview: React.FC<ProjectDetailOverviewProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-2"
    >
      <div className="neo-box p-6 bg-white dark:bg-neo-dark-blue-box mb-8">
        <h2 className="font-display font-bold text-2xl mb-4 dark:text-white">Project Overview</h2>
        <p className="text-gray-700 dark:text-neo-dark-blue-text mb-6">
          {project.fullDescription || project.description}
        </p>
        
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 bg-neo-red dark:bg-neo-dark-red text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform"
        >
          View Live Project <ExternalLink size={18} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectDetailOverview;
