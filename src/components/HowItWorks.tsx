
import React from 'react';
import { Monitor, Database, Lightbulb, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Connect Your Data",
    description: "Seamlessly integrate your product catalog and user interaction data through our simple API or direct imports."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-white" />,
    title: "Train Your Agent",
    description: "Our platform analyzes your data and automatically configures the ideal recommendation model for your business needs."
  },
  {
    icon: <Monitor className="h-8 w-8 text-white" />,
    title: "Deploy and Monitor",
    description: "Launch your agent across any channel and track its performance with our comprehensive analytics dashboard."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your AI recommendation agent up and running in three simple steps
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-24 h-[calc(100%-120px)] w-0.5 bg-gray-200 -ml-0.5"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`lg:flex items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 md:p-10 h-60 flex items-center justify-center">
                      <div className="animate-float">
                        {step.icon}
                        <div className="text-white font-medium mt-4">Step {index + 1}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="hidden lg:block absolute top-16 left-1/2 -ml-4 z-10">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
