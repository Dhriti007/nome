
import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  const skills = [
    { name: "UI/UX Design", experience: "3 years" },
    { name: "Web Development", experience: "2.5 years" },
    { name: "Branding", experience: "2 years" },
    { name: "Illustration", experience: "1.5 years" },
  ];

  // Glitch effect state
  const [glitchActive, setGlitchActive] = useState(false);

  // Glitch effect interval
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => {
        setGlitchActive(false);
      }, 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Function to handle the resume button click
  const handleResumeClick = () => {
    // For demonstration purposes, you might want to add the actual resume file
    alert('Resume download would start here. Replace this with actual download functionality.');
    // Alternatively, you could link to a PDF file:
    // window.open('/path/to/resume.pdf', '_blank');
  };

  return (
    <section
      className="pt-10 pb-20 dark:bg-neo-dark-bg relative overflow-hidden"
    >
      {/* Random positioned neo-brutalist background shapes */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-neo-yellow/10 dark:bg-neo-dark-blue/20 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform rotate-12 z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-20 bg-neo-red/10 dark:bg-neo-dark-blue/15 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform -rotate-6 z-0"></div>
      <div className="absolute top-2/3 left-1/4 w-24 h-24 bg-neo-blue/10 dark:bg-neo-dark-blue/25 border-2 border-neo-black/20 dark:border-neo-dark-border/20 rounded-full z-0"></div>

      <div className="container-xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <span className="bg-neo-red dark:bg-neo-dark-red text-white px-4 py-1 font-display font-bold inline-block border-4 border-neo-black dark:border-neo-dark-border transform -rotate-2">
                Portfolio
              </span>
            </div>

            <h1 className="main-heading mb-6">
              Hi, call me <span className="text-neo-red dark:text-neo-dark-red">DHRITI</span>
              <br />
              <span
                className={`glitch-text bg-neo-blue dark:bg-neo-dark-blue text-white px-2 inline-block transform rotate-1 border-4 border-neo-black dark:border-neo-dark-border relative ${glitchActive ? 'animate-glitch' : ''}`}
                data-text="CREATIVE DESIGNER"
              >
                CREATIVE DESIGNER
              </span>
            </h1>

            <p className="text-xl mb-10 font-medium max-w-2xl dark:text-white">
              I create bold, unique designs that stand out from the crowd.
              I help start-ups and companies <span className="bg-neo-yellow dark:bg-neo-dark-yellow px-2 text-neo-black dark:text-neo-dark-blue-deep">to provide help to execute their projects</span> and creative solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="neo-button flex items-center gap-2 group">
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a href="#contact" className="px-8 py-3 border-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box dark:text-white font-display font-bold uppercase text-neo-black shadow-neo dark:shadow-neo-dark hover:bg-neo-black hover:text-white dark:hover:bg-neo-dark-border transition-colors duration-200 flex items-center gap-2">
                Contact Me
              </a>
            </div>
          </div>

          {/* Hero Visual Elements with Hover Skills */}
          <div className="lg:col-span-5 relative">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="neo-box p-8 relative z-10 cursor-pointer">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-neo-yellow dark:bg-neo-dark-yellow border-4 border-neo-black dark:border-neo-dark-border z-0 animate-float"></div>

                  <div className="border-4 border-neo-black dark:border-neo-dark-border mb-4 overflow-hidden">
                    <AspectRatio ratio={4 / 5} className="bg-gray-200 dark:bg-neo-dark-blue/40">
                      <div className="w-full h-full bg-gradient-to-br from-neo-blue to-neo-red dark:from-neo-dark-blue dark:to-neo-dark-red opacity-50 absolute"></div>
                      <img
                        src="/Frame 46.jpg"
                        alt="Jhon Doe"
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* <span className="text-xl font-display font-bold text-white bg-neo-black/70 dark:bg-neo-dark-border/80 px-4 py-2"></span>*/}
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-display font-bold text-xl dark:text-white">Creative Designer</h3>
                      <p className="dark:text-white">5+ Years Experience</p>
                    </div>
                    <button
                      onClick={handleResumeClick}
                      className="w-16 h-16 bg-neo-blue dark:bg-neo-dark-blue border-4 border-neo-black dark:border-neo-dark-border flex items-center justify-center hover:bg-neo-red dark:hover:bg-neo-dark-red transition-colors duration-200 group"
                      aria-label="Download Resume"
                    >
                      <FileText className="text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </HoverCardTrigger>

              <HoverCardContent className="w-64 p-0 bg-white dark:bg-neo-dark-box border-4 border-neo-black dark:border-neo-dark-border shadow-neo dark:shadow-neo-dark">
                <div className="p-4">
                  <h4 className="font-display font-bold text-lg mb-3 border-b-4 border-neo-red dark:border-neo-dark-red pb-2 dark:text-white">My Skills</h4>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-white dark:bg-neo-dark-bg p-1.5 border-2 border-neo-black dark:border-neo-dark-border">
                        <div className="flex justify-between items-center">
                          <span className="font-display font-bold text-sm dark:text-white">{skill.name}</span>
                          <span className="font-display text-xs bg-neo-yellow/80 dark:bg-neo-dark-yellow/80 px-1.5 py-0.5 text-neo-black dark:text-neo-dark-blue-deep">{skill.experience}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <div className="absolute top-20 -left-10 w-24 h-24 bg-neo-red dark:bg-neo-dark-red border-4 border-neo-black dark:border-neo-dark-border -z-10"></div>
            <div className="absolute -bottom-10 right-10 w-16 h-16 bg-neo-yellow dark:bg-neo-dark-yellow border-4 border-neo-black dark:border-neo-dark-border -z-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
