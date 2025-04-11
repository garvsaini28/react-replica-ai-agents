
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestForm from './DemoRequestForm';

const CTA = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  
  const handleScheduleDemo = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-gradient rounded-2xl overflow-hidden shadow-xl relative">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between relative z-10">
            <div className="max-w-2xl md:mx-0 mx-auto mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to transform your recommendation strategy?
              </h2>
              <p className="text-white/80 text-lg">
                Start delivering personalized recommendations that drive engagement and boost conversions today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button className="bg-white text-tech-blue hover:bg-blue-50 rounded-full font-medium text-base py-6 px-8 shadow-lg hover:shadow-xl transition-all group">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/20 rounded-full font-medium text-base py-6 px-8"
                onClick={handleScheduleDemo}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 right-10 hidden md:block animate-float">
            <Rocket className="h-12 w-12 text-white/70" />
          </div>
        </div>
      </div>
      
      <DemoRequestForm isOpen={isDemoFormOpen} onOpenChange={setIsDemoFormOpen} />
    </section>
  );
};

export default CTA;
