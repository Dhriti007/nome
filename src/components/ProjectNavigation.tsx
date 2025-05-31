
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectNavigationProps {
  prevProject: Project | null;
  nextProject: Project | null;
  onScrollToTop: () => void;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ 
  prevProject, 
  nextProject, 
  onScrollToTop 
}) => {
  return (
    <div className="mt-16 flex justify-between">
      {prevProject ? (
        <Link 
          to={`/projects/${prevProject.id}`}
          className="neo-box p-4 bg-white dark:bg-neo-dark-blue-box flex items-center gap-3 hover:-translate-y-1 transition-transform"
        >
          <ArrowLeft size={20} className="text-neo-black dark:text-white" />
          <span className="font-display font-bold dark:text-white">Previous Project</span>
        </Link>
      ) : (
        <div></div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onScrollToTop}
        className="neo-box p-4 bg-neo-yellow dark:bg-neo-dark-yellow flex items-center gap-2 hover:-translate-y-1 transition-transform"
      >
        <ArrowUp size={20} className="text-neo-black dark:text-neo-dark-blue-deep" />
        <span className="font-display font-bold text-neo-black dark:text-neo-dark-blue-deep">Back to Top</span>
      </motion.button>
      
      {nextProject ? (
        <Link 
          to={`/projects/${nextProject.id}`}
          className="neo-box p-4 bg-white dark:bg-neo-dark-blue-box flex items-center gap-3 hover:-translate-y-1 transition-transform"
        >
          <span className="font-display font-bold dark:text-white">Next Project</span>
          <ArrowRight size={20} className="text-neo-black dark:text-white" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProjectNavigation;
