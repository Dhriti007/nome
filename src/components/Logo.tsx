
import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container relative inline-block">
      <div className="bg-neo-red dark:bg-neo-dark-red border-4 border-neo-black dark:border-neo-dark-border transform rotate-2 px-3 py-1 inline-block shadow-neo dark:shadow-neo-dark">
        <span className="font-display font-bold text-2xl text-white uppercase tracking-wider">D</span>
      </div>
      <span className="font-display font-bold text-2xl uppercase border-b-4 border-neo-red dark:border-neo-dark-red dark:text-white ml-1">hritiman</span>
    </div>
  );
};

export default Logo;
