import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { FileText, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Use first 4 projects for the works section
  const displayProjects = projects.slice(0, 4);
  
  const filteredProjects = activeCategory === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="works" className="py-20 relative overflow-hidden dark:bg-neo-dark-bg">
      {/* Background 3D elements */}
      <div className="absolute w-40 h-40 bg-neo-red/10 dark:bg-neo-dark-red/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 rounded-full -top-10 -left-10 animate-float"></div>
      <div className="absolute w-32 h-32 bg-neo-yellow/10 dark:bg-neo-dark-yellow/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform rotate-45 -bottom-10 right-1/4"></div>
      <div className="absolute w-24 h-24 bg-neo-blue/10 dark:bg-neo-dark-blue/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform rotate-12 top-1/3 -right-5"></div>
      
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block bg-neo-blue dark:bg-neo-dark-blue px-4 py-1 text-white border-4 border-neo-black dark:border-neo-dark-border transform -rotate-1 mb-4">
            <h2 className="font-display font-bold text-2xl">MY WORKS</h2>
          </div>
          <h3 className="main-heading mb-6">Selected <span className="text-neo-red dark:text-neo-dark-red">Projects</span></h3>
          <p className="text-xl max-w-2xl dark:text-gray-300">
            Explore my carefully crafted projects that showcase my skills and creative approach.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          {['all', 'web', 'app', 'design'].map((category) => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 border-4 border-neo-black dark:border-neo-dark-border font-display font-bold uppercase transition-all duration-200 ${
                activeCategory === category 
                  ? 'bg-neo-black text-white shadow-neo dark:bg-neo-dark-border dark:shadow-neo-dark' 
                  : 'bg-white hover:bg-neo-yellow dark:bg-neo-dark-box dark:hover:bg-neo-dark-yellow dark:hover:text-neo-dark-blue-deep shadow-neo dark:shadow-neo-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {filteredProjects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2">
                <motion.div 
                  className="neo-box p-1 h-full"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="border-4 border-neo-black dark:border-neo-dark-border overflow-hidden relative h-48">
                    <Link to={`/project/${project.id}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </Link>
                    <div className="absolute top-0 right-0 bg-neo-yellow dark:bg-neo-dark-yellow border-l-4 border-b-4 border-neo-black dark:border-neo-dark-border p-2">
                      {project.category === 'web' && <Briefcase size={20} className="text-neo-black dark:text-neo-dark-blue-deep" />}
                      {project.category === 'app' && <FileText size={20} className="text-neo-black dark:text-neo-dark-blue-deep" />}
                      {project.category === 'design' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-xl mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neo-red dark:bg-neo-dark-red text-white border-4 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform"
                    >
                      View Project <ExternalLink size={16} />
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-4">
            <CarouselPrevious className="relative left-0 transform-none data-[state=disabled]:opacity-50 border-4 border-neo-black dark:border-neo-dark-border rounded-none h-10 w-10" />
            <CarouselNext className="relative right-0 transform-none data-[state=disabled]:opacity-50 border-4 border-neo-black dark:border-neo-dark-border rounded-none h-10 w-10" />
          </div>
        </Carousel>
        
        {/* View all projects button */}
        <div className="mt-12 flex justify-center">
          <Link to="/projects" className="neo-button flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
