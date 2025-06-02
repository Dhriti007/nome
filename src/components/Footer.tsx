
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
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

  // Quick links used in the footer
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/#works' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
  ];
  
  return (
    <footer className="pt-16 pb-8 bg-white dark:bg-neo-dark-blue-bg border-t-8 border-neo-black dark:border-neo-dark-border relative overflow-hidden">
      {/* Neo-brutalist decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-neo-yellow dark:bg-neo-dark-yellow border-4 border-neo-black dark:border-neo-dark-border -z-10 rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-neo-red dark:bg-neo-dark-red border-4 border-neo-black dark:border-neo-dark-border -z-10 rotate-45"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-neo-blue dark:bg-neo-dark-blue-accent border-4 border-neo-black dark:border-neo-dark-border -z-10 rounded-full"></div>

      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 dark:text-neo-dark-blue-text">
              Creating bold and distinctive designs that challenge conventional aesthetics and embody the raw, unfiltered essence of creative expression.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://m.facebook.com/dhritimanbhattacharjee.bhattacharjee/" 
                className="neo-social-icon"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dhritiman-bhattacharjee-b399a5292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="neo-social-icon"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com/Itz_Dhriti_007?t=ZNFjquDfVJX26Wem378TkQ&s=09" 
                className="neo-social-icon"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dhritiman-bhattacharjee-b399a5292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="neo-social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 dark:text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-medium hover:text-neo-red dark:text-neo-dark-blue-text dark:hover:text-neo-dark-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 dark:text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <Mail size={16} className="dark:text-neo-dark-blue-text" />
                </div>
                <span className="dark:text-neo-dark-blue-text">dhritiman16chhaya@gmail.com</span>
              </div>
              <div className="bg-neo-yellow dark:bg-neo-dark-yellow p-4 border-4 border-neo-black dark:border-neo-dark-border">
                <p className="font-display font-bold text-neo-black dark:text-neo-dark-blue-deep">Open for freelance projects!</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-black/10 dark:bg-neo-dark-blue-accent/20 h-1" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 dark:text-neo-dark-blue-text">© {currentYear} Dhritiman. All rights reserved.</p>
          <div className="flex space-x-4 text-sm dark:text-neo-dark-blue-text">
            <a href="#" className="hover:text-neo-red dark:hover:text-neo-dark-red">Privacy Policy</a>
            <a href="#" className="hover:text-neo-red dark:hover:text-neo-dark-red">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
