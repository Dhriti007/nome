
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectDetailBreadcrumbProps {
  project: Project;
}

const ProjectDetailBreadcrumb: React.FC<ProjectDetailBreadcrumbProps> = ({ project }) => {
  return (
    <div className="mb-10 flex items-center gap-4">
      <Link to="/projects" className="neo-box p-3 inline-block hover:-translate-y-1 transition-transform">
        <ArrowLeft className="text-neo-black dark:text-white" />
      </Link>
      
      <div>
        <div className="inline-block bg-neo-blue dark:bg-neo-dark-blue-accent px-4 py-1 text-white border-4 border-neo-black dark:border-neo-dark-border transform -rotate-1 mb-3">
          <h2 className="font-display font-bold text-xl">PROJECT #{project.id}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailBreadcrumb;
