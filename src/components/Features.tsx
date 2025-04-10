
import React from 'react';
import { Brain, Cpu, LineChart, ShieldCheck, Zap, Users } from 'lucide-react';

const featuresList = [
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: "Advanced AI Models",
    description: "Leverage state-of-the-art machine learning algorithms to deliver highly accurate recommendations."
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Instant Deployment",
    description: "Deploy your recommendation agent in minutes, not months, with our intuitive no-code interface."
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Real-time Analytics",
    description: "Monitor performance metrics and gain actionable insights to continuously optimize your agent."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Enterprise-grade Security",
    description: "Rest easy knowing your data is protected with bank-level encryption and security protocols."
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    title: "Seamless Integration",
    description: "Connect with your existing systems via our comprehensive API and pre-built integrations."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "User Behavior Analysis",
    description: "Understand how users interact with recommendations to refine your strategy and boost engagement."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            Powerful Features to Drive Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI recommendation platform comes packed with everything you need to create engaging, personalized experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-blue-50 p-3 rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
