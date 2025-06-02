
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectDetailHeaderProps {
  project: Project;
}

const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h1 className="main-heading mb-8">{project.title}</h1>
      
      <div className="neo-box p-1 mb-10">
        <div className="border-4 border-neo-black dark:border-neo-dark-border overflow-hidden h-[50vh]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailHeader;
