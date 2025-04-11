
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgentCard from '@/components/AgentCard';

const AgentList = () => {
  // Mock data for the AI agents
  const agents = [
    {
      id: 1,
      name: 'Product Recommendation Agent',
      description: 'Recommends products based on user preferences and browsing history.',
      icon: '🛒',
      category: 'E-commerce',
    },
    {
      id: 2,
      name: 'Content Discovery Agent',
      description: 'Suggests articles, videos, and other content based on user interests.',
      icon: '📚',
      category: 'Media',
    },
    {
      id: 3,
      name: 'Learning Path Recommender',
      description: 'Creates personalized learning journeys based on skills and goals.',
      icon: '🎓',
      category: 'Education',
    },
    {
      id: 4,
      name: 'Financial Product Advisor',
      description: 'Recommends financial products based on user goals and risk profile.',
      icon: '💰',
      category: 'Finance',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col tech-gradient-bg">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/40 backdrop-blur shadow-sm">
              <span className="font-medium text-tech-blue">Our AI Arsenal</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Our AI Recommendation <span className="tech-gradient-text">Agents</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Test our powerful AI agents designed to deliver personalized recommendations
              across various domains. Select an agent below to start experimenting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentList;
