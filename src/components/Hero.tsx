import { Button } from "./ui/button";
import { ArrowRight, Heart, Cross } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fhm-white via-fhm-gray-light to-fhm-yellow-light"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Cross className="h-32 w-32 text-fhm-yellow" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Heart className="h-24 w-24 text-fhm-yellow" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-fhm-black mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-fhm-yellow">Final Harvest</span>{" "}
            Ministry
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-fhm-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Gathering souls for the Kingdom of God. Join us in spreading His love, 
            hope, and salvation to every corner of the world.
          </p>

          {/* Bible verse */}
          <div className="bg-fhm-white/80 backdrop-blur-sm rounded-lg p-6 mb-10 shadow-lg border border-fhm-yellow/20">
            <p className="text-lg italic text-fhm-black mb-2">
              "The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, 
              therefore, to send out workers into his harvest field."
            </p>
            <p className="text-fhm-gray font-semibold">- Matthew 9:37-38</p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join Our Ministry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-fhm-black text-fhm-black hover:bg-fhm-black hover:text-fhm-white transition-all duration-300"
            >
              Watch Services Online
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-fhm-yellow mb-2">500+</div>
              <p className="text-fhm-gray">Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fhm-yellow mb-2">15</div>
              <p className="text-fhm-gray">Years Serving</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fhm-yellow mb-2">50+</div>
              <p className="text-fhm-gray">Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;