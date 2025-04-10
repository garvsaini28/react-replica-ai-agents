
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestForm from './DemoRequestForm';

const Hero = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  
  const handleScheduleDemo = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Deploy AI Recommendation <span className="gradient-text">Agents</span> in Minutes
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
            Enhance user experience with personalized product recommendations that drive engagement and boost conversions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/get-started">
              <Button className="rounded-full text-base py-6 px-8 bg-blue-600 hover:bg-blue-700">
                Start Building Your Agent <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="rounded-full text-base py-6 px-8"
              onClick={handleScheduleDemo}
            >
              Schedule a Demo
            </Button>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4 md:p-6 max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-blue-800 mb-2 font-medium">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-gray-500 font-semibold">ACME Corp</div>
              <div className="text-gray-500 font-semibold">TechGiant</div>
              <div className="text-gray-500 font-semibold">Innovatech</div>
              <div className="text-gray-500 font-semibold">FutureSoft</div>
              <div className="text-gray-500 font-semibold">NextWave</div>
            </div>
          </div>
        </div>
      </div>
      
      <DemoRequestForm isOpen={isDemoFormOpen} onOpenChange={setIsDemoFormOpen} />
    </section>
  );
};

export default Hero;
