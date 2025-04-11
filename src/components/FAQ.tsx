
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "How quickly can I get my recommendation agent up and running?",
    answer: "Most customers can have their recommendation agent deployed and producing results within 24-48 hours. The exact timeline depends on the complexity of your data and customization needs. Our team will guide you through the entire process to ensure a smooth and efficient setup."
  },
  {
    question: "Do I need to have technical expertise to use this platform?",
    answer: "No technical expertise is required. Our platform is designed with a user-friendly interface that allows non-technical users to create, deploy, and manage AI recommendation agents. For users who want more control, we do offer advanced customization options."
  },
  {
    question: "How does the AI learn and improve over time?",
    answer: "Our AI recommendations get smarter with each interaction. The system continuously analyzes user behavior, feedback, and conversion patterns to refine its recommendation algorithms. This ensures that the quality of recommendations improves over time, leading to better engagement and conversion rates."
  },
  {
    question: "Can I integrate this with my existing e-commerce platform?",
    answer: "Yes, our platform offers seamless integration with all major e-commerce platforms including Shopify, WooCommerce, Magento, and BigCommerce. We also provide a robust API that allows for custom integrations with any proprietary systems you may be using."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support across all plans. This includes detailed documentation, video tutorials, email support, and a knowledge base. Our Pro and Enterprise plans include priority support with faster response times and access to our technical team for more complex inquiries."
  },
  {
    question: "Is my data secure with your platform?",
    answer: "Absolutely. We take data security very seriously. All data is encrypted both in transit and at rest using industry-standard protocols. We are compliant with GDPR, CCPA, and other relevant data protection regulations. Our infrastructure is hosted on secure cloud providers with regular security audits and penetration testing."
  }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={`border-b border-gray-200 py-5 transition-all duration-300 ${isOpen ? 'bg-blue-50/40' : ''}`}>
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 group"
        onClick={toggleOpen}
      >
        <span className={`text-lg ${isOpen ? 'text-tech-blue' : ''} group-hover:text-tech-blue transition-colors`}>{question}</span>
        <div className={`p-1 rounded-full ${isOpen ? 'bg-tech-blue text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-tech-blue'} transition-all`}>
          {isOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 pr-12">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 pricing-gradient relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tech-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-tech-blue">Got Questions?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="tech-gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Everything you need to know about our AI recommendation platform
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 tech-card py-8 px-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you get started with the perfect recommendation solution for your business.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-tech-blue text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
