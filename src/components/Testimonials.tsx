
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The AI recommendation engine has transformed how we connect customers with products. Our conversion rate increased by 28% in just the first month.",
    author: "Sarah Johnson",
    position: "Director of E-Commerce, TechStyle",
    avatarLetter: "S",
    rating: 5
  },
  {
    quote: "Implementation was seamless, and the results have been outstanding. The personalization capabilities have significantly improved our customer engagement.",
    author: "Michael Chen",
    position: "CTO, RetailNova",
    avatarLetter: "M",
    rating: 5
  },
  {
    quote: "We've tried several recommendation systems, but none have delivered the ROI we've seen with this platform. The AI continually improves its recommendations over time.",
    author: "Emily Rodriguez",
    position: "VP of Digital Marketing, FashionForward",
    avatarLetter: "E",
    rating: 5
  },
  {
    quote: "The analytics dashboard gives us valuable insights into customer preferences that we never had access to before. It's been a game-changer for our strategy.",
    author: "David Wilson",
    position: "Data Analytics Lead, ShopDirect",
    avatarLetter: "D",
    rating: 5
  }
];

const RatingStars = ({ rating }) => {
  return (
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-purple/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 shadow-sm">
            <span className="text-sm font-medium text-tech-blue">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="tech-gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Businesses of all sizes are transforming their recommendation strategies with our AI platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <RatingStars rating={testimonial.rating} />
              
              <div className="relative mb-6">
                <Quote className="absolute text-blue-100 h-10 w-10 -left-1 -top-1" />
                <p className="text-gray-700 relative z-10 pl-3 italic">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatarLetter}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
