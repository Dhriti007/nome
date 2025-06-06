
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/#works' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Function to handle smooth scrolling for hash links
  const handleNavClick = (e, href) => {
    // If it's a hash link on the home page
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL without full page reload
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <nav className={`w-full py-4 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/50 dark:bg-neo-dark-blue-bg/60 backdrop-blur-xl border-b border-white/20 dark:border-neo-dark-border/30 shadow-lg' 
        : 'bg-white/20 dark:bg-neo-dark-blue-bg/30 backdrop-blur-lg'
    }`}>
      <div className="container-xl flex justify-between items-center">
        <div className="logo">
          <Link to="/" aria-label="Dhritiman - Home">
            <Logo />
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display font-bold hover:text-neo-red dark:text-white dark:hover:text-neo-dark-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-neo-red dark:bg-neo-dark-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-4">
          <ThemeToggle />
          
          {/* Hamburger menu - hidden on md screens and above */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className={`${isMobileMenuOpen ? 'rotate-180 bg-neo-red/90 dark:bg-neo-dark-red/90' : 'bg-white/70 dark:bg-neo-dark-blue-box/80'} transition-all duration-300 transform neo-box p-1.5 relative z-50 backdrop-blur-lg rounded-md w-10 h-10 flex items-center justify-center border-2 hover:scale-105`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - with improved glassmorphism */}
      <div 
        className={`fixed inset-0 z-40 bg-white/90 dark:bg-neo-dark-blue-bg/95 backdrop-blur-xl transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full hidden opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <div className="container h-full flex flex-col items-center justify-center">
          <div className="space-y-8">
            {navLinks.map((link, index) => (
              <div key={index} className="text-center">
                <Link
                  to={link.href}
                  className="font-display font-bold text-2xl hover:text-neo-red dark:text-white dark:hover:text-neo-dark-red"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
