
import { Button } from "@/components/ui/button";
import { Car, Star, Clock, MapPin } from "lucide-react";

interface HeroProps {
  onBookNow: () => void;
}

export const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Car className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            CabEase
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Your Personal Ride, Just a Tap Away
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Smart, seamless, and secure cab booking designed to make commuting easier, faster, and more reliable.
          </p>
          
          <Button 
            onClick={onBookNow}
            size="lg"
            className="bg-white text-blue-600 hover:bg-white/90 text-xl px-12 py-6 rounded-full font-semibold shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Book Your Ride Now
          </Button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Clock className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">24/7 Available</h3>
              <p className="text-white/80">Round the clock service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <MapPin className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Real-Time Tracking</h3>
              <p className="text-white/80">Live location updates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Star className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Top Rated Drivers</h3>
              <p className="text-white/80">Professional & verified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
