
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="orbit-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orbit-purple to-orbit-blue flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">O</span>
            </div>
            <span className="font-display font-bold text-2xl">Orbit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <a href="#features" className="nav-link">Features</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#pricing" className="nav-link">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#contact" className="text-orbit-purple font-medium hover:text-orbit-darkPurple transition-colors">Login</a>
              <a href="#trial" className="cta-button">
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#features" 
              className="nav-link py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="nav-link py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="nav-link py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="nav-link py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <a 
                href="#login" 
                className="py-2 text-orbit-purple font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <a 
                href="#trial" 
                className="cta-button text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
