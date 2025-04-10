
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const handleScheduleDemo = () => {
    window.open("https://page.genspark.site/page/toolu_01TNa5FvtKAPcvZsdP2JE6kQ/ai_recommendation_agents.html", "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="max-w-2xl md:mx-0 mx-auto mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to transform your recommendation strategy?
              </h2>
              <p className="text-blue-100 text-lg">
                Start delivering personalized recommendations that drive engagement and boost conversions today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full font-medium text-base py-6 px-8">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-blue-700 rounded-full font-medium text-base py-6 px-8"
                onClick={handleScheduleDemo}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
