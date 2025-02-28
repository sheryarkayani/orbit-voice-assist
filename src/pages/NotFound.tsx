
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orbit-purple to-orbit-blue flex items-center justify-center text-white">
          <span className="text-5xl font-bold">4</span>
          <div className="w-6 h-6 rounded-full bg-white/20 mx-1"></div>
          <span className="text-5xl font-bold">4</span>
        </div>
        
        <h1 className="text-3xl font-display font-bold mb-4 opacity-0 animate-fade-in">Page Not Found</h1>
        
        <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in stagger-1">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="cta-button inline-flex items-center opacity-0 animate-fade-in stagger-2"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
