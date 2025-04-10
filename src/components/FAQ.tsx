
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
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
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
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our AI recommendation platform
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
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
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Don't see your question here?
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
