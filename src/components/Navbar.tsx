
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tech-gradient-text">ReplicaAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Features</a>
            <a href="#pricing" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Pricing</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Testimonials</a>
            <a href="#faq" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/sign-in">
              <Button variant="outline" className="rounded-full border-tech-blue text-tech-blue hover:bg-tech-blue/10">Sign In</Button>
            </Link>
            <Link to="/get-started">
              <Button className="rounded-full tech-gradient-button">Get Started</Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-tech-blue focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 px-4 sm:px-6 lg:px-8 bg-white shadow-lg">
            <a 
              href="#features" 
              className="block py-2 text-gray-700 hover:text-tech-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block py-2 text-gray-700 hover:text-tech-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-gray-700 hover:text-tech-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block py-2 text-gray-700 hover:text-tech-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full rounded-full border-tech-blue text-tech-blue">Sign In</Button>
              </Link>
              <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-full tech-gradient-button">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
