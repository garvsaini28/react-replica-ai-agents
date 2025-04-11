
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  ctaText, 
  popular = false, 
  annualBilling 
}) => {
  return (
    <div className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
      popular 
        ? 'bg-gradient-to-br from-white to-blue-50 shadow-lg border border-blue-100 ring-4 ring-blue-100/20' 
        : 'bg-white shadow-md border border-gray-100'
    }`}>
      {popular && (
        <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full bg-blue-50 mb-4 w-fit">
          <Sparkles className="h-3.5 w-3.5" />
          <span>MOST POPULAR</span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <div className="flex items-end">
          <span className="text-5xl font-bold">${annualBilling ? price * 10 : price}</span>
          <span className="text-gray-500 ml-2 mb-1">/month</span>
        </div>
        {annualBilling && (
          <span className="inline-block mt-1 text-green-600 text-sm font-medium bg-green-50 px-2 py-0.5 rounded-full">
            Save 17%
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        className={`w-full rounded-xl text-base py-6 h-auto ${
          popular 
            ? 'tech-gradient-button text-white' 
            : 'bg-gray-800 hover:bg-gray-900 transition-all hover:-translate-y-1'
        }`}
      >
        {ctaText}
      </Button>
      <div className="space-y-4 mt-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <div className={`rounded-full p-1 ${popular ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <Check className={`h-4 w-4 ${popular ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
            </div>
            <p className="ml-3 text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  
  const plans = [
    {
      title: "Starter",
      price: 49,
      description: "Perfect for small businesses getting started with AI recommendations.",
      features: [
        "Up to 10,000 recommendations/mo",
        "Basic analytics dashboard",
        "Email support",
        "2 recommendation models",
        "API access"
      ],
      ctaText: "Start with Starter"
    },
    {
      title: "Pro",
      price: 99,
      description: "For growing businesses that need more power and customization.",
      features: [
        "Up to 100,000 recommendations/mo",
        "Advanced analytics dashboard",
        "Priority email & chat support",
        "5 recommendation models",
        "API access",
        "Custom integration support",
        "A/B testing capability"
      ],
      ctaText: "Get Pro",
      popular: true
    },
    {
      title: "Enterprise",
      price: 249,
      description: "For large organizations with advanced needs and custom requirements.",
      features: [
        "Unlimited recommendations",
        "Enterprise analytics suite",
        "24/7 dedicated support",
        "Unlimited recommendation models",
        "Full API access",
        "Custom integration team",
        "Advanced A/B testing",
        "Custom model training",
        "SLA guarantee"
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="pricing-gradient py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-tech-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-purple/10 rounded-full blur-3xl"></div>
      
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-tech-blue">Flexible Pricing Plans</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="tech-gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Choose the plan that fits your business needs. All plans include our core AI recommendation technology.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full inline-flex items-center shadow-md">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !annualBilling ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setAnnualBilling(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  annualBilling ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setAnnualBilling(true)}
              >
                Annual
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              popular={plan.popular}
              annualBilling={annualBilling}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
