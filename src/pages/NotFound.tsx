
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center max-w-md">
        <div className="text-primary text-9xl font-bold mb-6 opacity-80">404</div>
        <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-glow"
        >
          <Home size={18} />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
