
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsBackground from '../components/ProjectsBackground';
import { projects } from '../data/projects';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    console.log('Navigating to project:', projectId);
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep">
      <ProjectsBackground />
      <Navbar />
      
      <main className="container-xl py-16 relative z-10">
        <div className="mb-10 flex items-center gap-4">
          <Link to="/" className="neo-box p-3 inline-block hover:-translate-y-1 transition-transform">
            <ArrowLeft className="text-neo-black dark:text-white" />
          </Link>
          
          <div>
            <div className="inline-block bg-neo-blue dark:bg-neo-dark-blue-accent px-4 py-1 text-white border-4 border-neo-black dark:border-neo-dark-border transform -rotate-1 mb-3">
              <h2 className="font-display font-bold text-xl">MY PORTFOLIO</h2>
            </div>
            <h1 className="main-heading">All <span className="text-neo-red dark:text-neo-dark-red">Projects</span></h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`neo-box p-1 ${project.featured ? 'border-neo-blue dark:border-neo-dark-blue-accent' : ''}`}>
                <div className="relative group">
                  <div className="border-4 border-neo-black dark:border-neo-dark-border overflow-hidden h-56">
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="w-full h-full block"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </button>
                    {project.featured && (
                      <div className="absolute top-0 right-0 bg-neo-blue dark:bg-neo-dark-blue-accent text-white text-xs font-display font-bold border-l-4 border-b-4 border-neo-black dark:border-neo-dark-border p-1">
                        FEATURED
                      </div>
                    )}
                    <div className="absolute top-0 left-0 bg-neo-yellow dark:bg-neo-dark-yellow border-r-4 border-b-4 border-neo-black dark:border-neo-dark-border p-2">
                      {project.category === 'web' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                      )}
                      {project.category === 'app' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                      )}
                      {project.category === 'design' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                      )}
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-neo-dark-blue-box border-b-4 border-x-4 border-neo-black dark:border-neo-dark-border">
                    <h3 className="font-display font-bold text-xl mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-700 dark:text-neo-dark-blue-text mb-4 text-sm">{project.description}</p>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleProjectClick(project.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-neo-red dark:bg-neo-dark-red text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform text-sm touch-manipulation"
                      >
                        View Details
                      </button>
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 bg-white dark:bg-neo-dark-blue-deep text-neo-black dark:text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform text-sm touch-manipulation"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {project.id % 3 === 0 && (
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-neo-red dark:bg-neo-dark-red border-2 border-neo-black dark:border-neo-dark-border -z-10 transform rotate-12"></div>
              )}
              {project.id % 3 === 1 && (
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-neo-yellow dark:bg-neo-dark-yellow border-2 border-neo-black dark:border-neo-dark-border -z-10 transform -rotate-6"></div>
              )}
              {project.id % 3 === 2 && (
                <div className="absolute -top-3 -left-3 w-7 h-7 bg-neo-blue dark:bg-neo-dark-blue-accent border-2 border-neo-black dark:border-neo-dark-border -z-10 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
