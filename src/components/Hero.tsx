
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestForm from './DemoRequestForm';

const Hero = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  
  const handleScheduleDemo = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <section className="tech-gradient-bg pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-tech-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tech-purple/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/40 backdrop-blur shadow-sm">
            <span className="text-sm font-medium text-tech-blue">Powering the Future with AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Deploy AI Recommendation <span className="tech-gradient-text">Agents</span><br/> in Minutes
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
            Enhance user experience with personalized product recommendations that drive engagement and boost conversions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/get-started">
              <Button className="rounded-full text-base py-6 px-8 tech-gradient-button group">
                Start Building Your Agent 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="rounded-full text-base py-6 px-8 border-2 border-tech-blue text-tech-blue hover:bg-tech-blue/10"
              onClick={handleScheduleDemo}
            >
              Schedule a Demo
            </Button>
          </div>
          
          <div className="tech-card p-6 md:p-8 max-w-3xl mx-auto rounded-2xl">
            <p className="text-sm md:text-base text-tech-blue mb-4 font-medium">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-gray-500 font-semibold">ACME Corp</div>
              <div className="text-gray-500 font-semibold">TechGiant</div>
              <div className="text-gray-500 font-semibold">Innovatech</div>
              <div className="text-gray-500 font-semibold">FutureSoft</div>
              <div className="text-gray-500 font-semibold">NextWave</div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-10 hidden lg:block">
            <div className="floating-tech p-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
              <Bot className="h-10 w-10 text-tech-purple" />
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-10 hidden lg:block">
            <div className="floating-tech p-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg animation-delay-200">
              <Bot className="h-10 w-10 text-tech-blue" />
            </div>
          </div>
        </div>
      </div>
      
      <DemoRequestForm isOpen={isDemoFormOpen} onOpenChange={setIsDemoFormOpen} />
    </section>
  );
};

export default Hero;
