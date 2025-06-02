
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 500); // Slight delay before hiding
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white dark:bg-neo-dark-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="relative max-w-md w-full px-4">
        {/* Neo-brutalist container */}
        <div className="neo-box p-8 mb-8">
          <h1 className="main-heading text-5xl mb-6">Loading</h1>
          
          {/* Geometric shapes */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-neo-red border-4 border-neo-black dark:border-neo-dark-border animate-float" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-neo-yellow border-4 border-neo-black dark:border-neo-dark-border animate-pulse-glow" />
          
          {/* Progress bar container */}
          <div className="w-full h-8 border-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box mb-4">
            {/* Progress bar fill */}
            <motion.div 
              className="h-full bg-neo-yellow dark:bg-neo-dark-yellow"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="font-display font-bold text-xl">
            {progress}%
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute w-16 h-16 -left-8 top-1/2 bg-neo-blue border-4 border-neo-black dark:border-neo-dark-blue dark:border-neo-dark-border transform -translate-y-1/2 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute w-10 h-10 -right-5 bottom-0 bg-neo-red border-4 border-neo-black dark:bg-neo-dark-red dark:border-neo-dark-border animate-float" style={{ animationDelay: '0.8s' }} />
      </div>
    </motion.div>
  );
};

export default Preloader;
