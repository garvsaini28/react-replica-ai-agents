
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestForm from './DemoRequestForm';

const CTA = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  
  const handleScheduleDemo = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-gradient rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="px-8 py-16 md:py-20 text-center md:text-left md:flex md:items-center md:justify-between relative z-10">
            <div className="max-w-2xl md:mx-0 mx-auto mb-10 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-white/90 font-medium">Start your journey today</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
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
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 rounded-full font-medium text-base py-6 px-8"
                onClick={handleScheduleDemo}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 right-10 hidden md:block animate-float">
            <Rocket className="h-12 w-12 text-white/70" />
          </div>
          
          <div className="absolute top-10 left-10 hidden md:block">
            <div className="h-24 w-24 rounded-full bg-white/10 pulse-glow"></div>
          </div>
        </div>
      </div>
      
      <DemoRequestForm isOpen={isDemoFormOpen} onOpenChange={setIsDemoFormOpen} />
    </section>
  );
};

export default CTA;
