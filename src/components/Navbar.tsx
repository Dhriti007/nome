import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { Home, Hammer, User, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        backdropRef.current &&
        backdropRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5 mr-2" /> },
    { name: 'Works', href: '/#works', icon: <Hammer className="w-5 h-5 mr-2" /> },
    { name: 'About', href: '/#about', icon: <User className="w-5 h-5 mr-2" /> },
    { name: 'Contact', href: '/#contact', icon: <Mail className="w-5 h-5 mr-2" /> },
  ];

  const handleNavClick = (e, href) => {
    if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }

    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'min-h-[56px] py-2' : 'min-h-[80px] py-5'
    } ${
      isScrolled
        ? 'bg-white dark:bg-neo-dark-blue-bg border-b border-white/20 dark:border-neo-dark-border/30 shadow-lg'
        : 'bg-white dark:bg-neo-dark-blue-bg'
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
              className="font-display font-bold flex items-center hover:text-neo-red dark:text-white dark:hover:text-neo-dark-red transition-colors relative group"
            >
              {link.icon}
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-neo-red dark:bg-neo-dark-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <ThemeToggle />
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

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-40 bg-black/50 dark:bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Slide-in Side Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-white dark:bg-neo-dark-blue-bg shadow-2xl border-l border-black/10 dark:border-white/10 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center py-12 space-y-8">
          {navLinks.map((link, index) => (
            <div key={index} className="text-center">
              <Link
                to={link.href}
                className="font-display font-bold text-2xl flex items-center justify-center gap-2 text-black dark:text-white hover:text-neo-red dark:hover:text-neo-dark-red transition-colors"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
              >
                {link.icon}
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
