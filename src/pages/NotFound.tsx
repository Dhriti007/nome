
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    console.log("User agent:", navigator.userAgent);
    console.log("Screen dimensions:", window.screen.width, "x", window.screen.height);
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    try {
      navigate(path);
    } catch (err) {
      console.error("Navigation error:", err);
      window.location.href = path;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep p-4">
      <div className="text-center max-w-md">
        <div className="neo-box p-6 bg-white dark:bg-neo-dark-blue-box">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Oops! Page not found</p>
          <p className="text-gray-500 dark:text-gray-500 mb-6 text-sm">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => handleNavigate("/")}
              className="px-4 py-2 bg-neo-blue dark:bg-neo-dark-blue-accent text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform touch-manipulation"
            >
              Return to Home
            </button>
            <button 
              onClick={() => handleNavigate("/projects")}
              className="px-4 py-2 bg-neo-red dark:bg-neo-dark-red text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform touch-manipulation"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
