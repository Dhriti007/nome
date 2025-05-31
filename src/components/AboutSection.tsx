
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Info, User } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: "HTML/CSS", experience: "3 years" },
    { name: "JavaScript/TypeScript", experience: "2.5 years" },
    { name: "React", experience: "2 years" },
    { name: "UI/UX Design", experience: "2.5 years" },
    { name: "3D Design", experience: "1.5 years" },
    { name: "Node.js", experience: "2 years" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden dark:bg-neo-dark-bg">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-neo-blue/5 dark:bg-neo-dark-blue/5 rounded-full blur-3xl top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-96 h-96 bg-neo-red/5 dark:bg-neo-dark-red/5 rounded-full blur-3xl bottom-1/4 right-1/3" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-72 h-72 bg-neo-yellow/5 dark:bg-neo-dark-yellow/5 rounded-full blur-3xl top-1/2 right-1/4" style={{ animationDelay: "2s" }}></div>
      </div>
      
      {/* 3D Neo-brutalist objects for light mode */}
      <div className="absolute top-20 left-[15%] w-40 h-40 bg-neo-yellow/20 border-8 border-neo-black/30 transform rotate-12 z-0 hidden dark:hidden md:block animate-float"></div>
      <div className="absolute bottom-40 right-[10%] w-56 h-28 bg-neo-red/20 border-8 border-neo-black/30 transform -rotate-6 z-0 hidden dark:hidden md:block"></div>
      <div className="absolute top-1/3 right-[20%] w-32 h-32 bg-neo-blue/20 border-8 border-neo-black/30 transform rotate-45 z-0 hidden dark:hidden md:block animate-float" style={{ animationDelay: "1.2s" }}></div>
      <div className="absolute bottom-1/4 left-[25%] w-24 h-60 bg-neo-red/15 border-8 border-neo-black/30 z-0 hidden dark:hidden md:block"></div>
      
      {/* Neo-brutalist shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-neo-yellow/15 dark:bg-neo-dark-yellow/15 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform rotate-12"></div>
      <div className="absolute bottom-40 left-10 w-24 h-48 bg-neo-red/15 dark:bg-neo-dark-red/15 border-2 border-neo-black/20 dark:border-neo-dark-border/20"></div>
      <div className="absolute top-40 left-20 w-16 h-16 bg-neo-blue/15 dark:bg-neo-dark-blue/15 border-2 border-neo-black/20 dark:border-neo-dark-border/20 rounded-full"></div>
      
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block bg-neo-red dark:bg-neo-dark-red px-4 py-1 text-white border-4 border-neo-black dark:border-neo-dark-border transform rotate-2 mb-4">
            <h2 className="font-display font-bold text-2xl">ABOUT ME</h2>
          </div>
          <h3 className="main-heading mb-6">My <span className="text-neo-blue dark:text-neo-dark-blue">Journey</span></h3>
          <p className="text-xl max-w-2xl dark:text-gray-300">
            Get to know my background, skills, and the experiences that shaped my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="neo-box p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neo-yellow dark:bg-neo-dark-yellow border-4 border-neo-black dark:border-neo-dark-border">
                  <User className="h-6 w-6 text-neo-black dark:text-neo-dark-text" />
                </div>
                <h4 className="text-2xl font-display font-bold dark:text-white">Who Am I</h4>
              </div>
              <p className="dark:text-gray-300 mb-4">
                I'm Dhritiman, a creative designer and developer with over 5 years of experience crafting unique digital experiences. 
                My approach combines technical skills with artistic vision to create impactful designs.
              </p>
              <p className="dark:text-gray-300">
                I specialize in neo-brutalism, minimalist design, and building interactive web experiences 
                that stand out from the crowd.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="neo-box p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neo-blue dark:bg-neo-dark-blue border-4 border-neo-black dark:border-neo-dark-border">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-display font-bold dark:text-white">My Story</h4>
              </div>
              <p className="dark:text-gray-300 mb-4">
                My journey began with a fascination for the intersection of design and technology. 
                After completing my studies in Computer Science, I worked with various startups and design agencies, 
                refining my skills and developing my unique style.
              </p>
              <p className="dark:text-gray-300">
                Today, I collaborate with clients and teams around the world, bringing creative solutions 
                to challenging problems through thoughtful design and clean code.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Skills Section - Now takes full second column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="neo-box p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neo-red dark:bg-neo-dark-red border-4 border-neo-black dark:border-neo-dark-border">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-display font-bold dark:text-white">My Skills</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 border-2 border-neo-black dark:border-neo-dark-border bg-white/80 dark:bg-neo-dark-bg/80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-display font-bold dark:text-white">{skill.name}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className={`h-2 w-2 rounded-full ${
                        index % 3 === 0 ? 'bg-neo-red dark:bg-neo-dark-red' : 
                        index % 3 === 1 ? 'bg-neo-yellow dark:bg-neo-dark-yellow' : 
                        'bg-neo-blue dark:bg-neo-dark-blue'
                      }`}></div>
                      <span className="text-sm bg-neo-yellow/80 dark:bg-neo-dark-yellow/80 px-2 py-1 font-medium dark:text-neo-dark-text">{skill.experience}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
