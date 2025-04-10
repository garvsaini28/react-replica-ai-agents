
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

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
    <div className={`bg-white rounded-xl p-6 shadow-sm border ${popular ? 'border-blue-400 ring-2 ring-blue-400/20' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">${annualBilling ? price * 10 : price}</span>
        <span className="text-gray-500">/month</span>
        {annualBilling && <span className="ml-2 text-green-600 text-sm font-medium">Save 17%</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        className={`w-full rounded-lg mb-6 ${popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
      >
        {ctaText}
      </Button>
      <div className="space-y-3">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <Check className="h-5 w-5 text-green-500" />
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
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Choose the plan that fits your business needs. All plans include our core AI recommendation technology.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex items-center">
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  !annualBilling ? 'bg-white shadow-sm' : 'text-gray-700'
                }`}
                onClick={() => setAnnualBilling(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  annualBilling ? 'bg-white shadow-sm' : 'text-gray-700'
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
