
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 md:py-16">
      <div className="orbit-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orbit-purple to-orbit-blue flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">O</span>
              </div>
              <span className="font-display font-bold text-xl">Orbit</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              AI voice automation for ecommerce brands. Handle returns, order tracking, and FAQs 24/7.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Orbit AI. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-display font-medium text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-orbit-purple transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-orbit-purple transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-orbit-purple transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="text-muted-foreground hover:text-orbit-purple transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-orbit-purple transition-colors">About Us</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-orbit-purple transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-orbit-purple transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-orbit-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#terms" className="text-muted-foreground hover:text-orbit-purple transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-orbit-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#security" className="text-muted-foreground hover:text-orbit-purple transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
