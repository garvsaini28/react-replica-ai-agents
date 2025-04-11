
import React from 'react';
import { Brain, Cpu, LineChart, ShieldCheck, Zap, Users } from 'lucide-react';

const featuresList = [
  {
    icon: <Brain className="h-8 w-8 text-tech-purple" />,
    title: "Advanced AI Models",
    description: "Leverage state-of-the-art machine learning algorithms to deliver highly accurate recommendations."
  },
  {
    icon: <Zap className="h-8 w-8 text-tech-blue" />,
    title: "Instant Deployment",
    description: "Deploy your recommendation agent in minutes, not months, with our intuitive no-code interface."
  },
  {
    icon: <LineChart className="h-8 w-8 text-tech-cyan" />,
    title: "Real-time Analytics",
    description: "Monitor performance metrics and gain actionable insights to continuously optimize your agent."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-tech-blue" />,
    title: "Enterprise-grade Security",
    description: "Rest easy knowing your data is protected with bank-level encryption and security protocols."
  },
  {
    icon: <Cpu className="h-8 w-8 text-tech-purple" />,
    title: "Seamless Integration",
    description: "Connect with your existing systems via our comprehensive API and pre-built integrations."
  },
  {
    icon: <Users className="h-8 w-8 text-tech-cyan" />,
    title: "User Behavior Analysis",
    description: "Understand how users interact with recommendations to refine your strategy and boost engagement."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-tech-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-tech-purple/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 shadow-sm">
            <span className="font-medium text-tech-blue">Our Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tech-gradient-text inline-block mb-4">
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
              className="tech-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-lg w-fit" style={{
                background: `linear-gradient(135deg, rgba(230, 240, 255, 0.8), rgba(240, 250, 255, 0.5))`,
              }}>
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
