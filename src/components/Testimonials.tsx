
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The AI recommendation engine has transformed how we connect customers with products. Our conversion rate increased by 28% in just the first month.",
    author: "Sarah Johnson",
    position: "Director of E-Commerce, TechStyle",
    avatarLetter: "S"
  },
  {
    quote: "Implementation was seamless, and the results have been outstanding. The personalization capabilities have significantly improved our customer engagement.",
    author: "Michael Chen",
    position: "CTO, RetailNova",
    avatarLetter: "M"
  },
  {
    quote: "We've tried several recommendation systems, but none have delivered the ROI we've seen with this platform. The AI continually improves its recommendations over time.",
    author: "Emily Rodriguez",
    position: "VP of Digital Marketing, FashionForward",
    avatarLetter: "E"
  },
  {
    quote: "The analytics dashboard gives us valuable insights into customer preferences that we never had access to before. It's been a game-changer for our strategy.",
    author: "David Wilson",
    position: "Data Analytics Lead, ShopDirect",
    avatarLetter: "D"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Businesses of all sizes are transforming their recommendation strategies with our AI platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatarLetter}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute text-blue-100 h-8 w-8 -left-2 -top-2" />
                <p className="text-gray-700 relative z-10 pl-2">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
