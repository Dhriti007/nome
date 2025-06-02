
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectDetailSidebarProps {
  project: Project;
}

const ProjectDetailSidebar: React.FC<ProjectDetailSidebarProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="neo-box p-6 bg-white dark:bg-neo-dark-blue-box mb-8">
        <h2 className="font-display font-bold text-2xl mb-4 dark:text-white">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-neo-yellow dark:bg-neo-dark-yellow text-neo-black dark:text-neo-dark-blue-deep border-2 border-neo-black dark:border-neo-dark-border font-medium text-sm"
            >
              {tech}
            </span>
          )) || (
            <span className="text-gray-500 dark:text-gray-400">No technologies listed</span>
          )}
        </div>
      </div>
      
      <div className="neo-box p-6 bg-white dark:bg-neo-dark-blue-box">
        <h2 className="font-display font-bold text-2xl mb-4 dark:text-white">Category</h2>
        <div className="flex items-center gap-2">
          <span className="bg-neo-blue dark:bg-neo-dark-blue-accent px-4 py-1 text-white border-2 border-neo-black dark:border-neo-dark-border uppercase font-bold text-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="bg-neo-red dark:bg-neo-dark-red px-4 py-1 text-white border-2 border-neo-black dark:border-neo-dark-border uppercase font-bold text-sm">
              FEATURED
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailSidebar;
