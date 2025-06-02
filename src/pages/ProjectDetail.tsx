
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectDetailsBackground from '../components/ProjectDetailsBackground';
import ProjectDetailBreadcrumb from '../components/ProjectDetailBreadcrumb';
import ProjectDetailHeader from '../components/ProjectDetailHeader';
import ProjectDetailOverview from '../components/ProjectDetailOverview';
import ProjectDetailSidebar from '../components/ProjectDetailSidebar';
import ProjectNavigation from '../components/ProjectNavigation';
import { projects, Project } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    console.log('ProjectDetail useEffect triggered');
    console.log('Current URL path:', window.location.pathname);
    console.log('Project ID from params:', id);
    console.log('All available projects:', projects.map(p => ({ id: p.id, title: p.title })));
    
    // Add a small delay to ensure the component is mounted properly on mobile
    const timer = setTimeout(() => {
      try {
        if (!id) {
          console.error('No project ID provided in URL');
          setError('No project ID provided');
          setIsLoading(false);
          return;
        }
        
        const projectId = parseInt(id, 10);
        console.log('Parsed project ID:', projectId);
        
        if (isNaN(projectId) || projectId <= 0) {
          console.error('Invalid project ID format:', id);
          setError('Invalid project ID format');
          setIsLoading(false);
          return;
        }
        
        const currentProject = projects.find(p => p.id === projectId);
        console.log('Found project:', currentProject ? currentProject.title : 'Not found');
        
        if (currentProject) {
          setProject(currentProject);
          
          const currentIndex = projects.findIndex(p => p.id === projectId);
          console.log('Current project index:', currentIndex);
          
          setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
          setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
          
          setError(null);
          setIsLoading(false);
          
          // Update document title for better mobile experience
          document.title = `${currentProject.title} - Project Details`;
        } else {
          console.error('Project not found with ID:', projectId);
          console.error('Available project IDs:', projects.map(p => p.id));
          setError('Project not found');
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error in ProjectDetail useEffect:', err);
        setError('An unexpected error occurred');
        setIsLoading(false);
      }
    }, 100); // Small delay to help with mobile rendering

    return () => clearTimeout(timer);
  }, [id]);
  
  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, 0);
    }
  };
  
  // Handle navigation errors gracefully
  const handleNavigationError = (path: string) => {
    try {
      navigate(path);
    } catch (err) {
      console.error('Navigation error:', err);
      window.location.href = path;
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="neo-box p-6 animate-pulse text-center max-w-md">
            <h2 className="font-display font-bold text-xl dark:text-white">Loading project...</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Please wait while we fetch the project details.</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="neo-box p-6 text-center max-w-md">
            <h2 className="font-display font-bold text-xl mb-4 dark:text-white">
              {error || 'Project not found'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The project you're looking for doesn't exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigationError('/projects')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neo-blue dark:bg-neo-dark-blue-accent text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform touch-manipulation"
              >
                Back to Projects
              </button>
              <button 
                onClick={() => handleNavigationError('/')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neo-red dark:bg-neo-dark-red text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform touch-manipulation"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep">
      <ProjectDetailsBackground />
      <Navbar />
      
      <main className="container-xl py-16 relative z-10">
        <ProjectDetailBreadcrumb project={project} />
        <ProjectDetailHeader project={project} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProjectDetailOverview project={project} />
          <ProjectDetailSidebar project={project} />
        </div>
        
        <ProjectNavigation 
          prevProject={prevProject}
          nextProject={nextProject}
          onScrollToTop={scrollToTop}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
