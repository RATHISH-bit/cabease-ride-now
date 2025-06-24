
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Phone, Car } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Instant & Scheduled Booking",
      description: "Book rides on demand or schedule in advance for your convenience.",
      color: "bg-blue-500"
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking", 
      description: "Track your cab's live location and ETA on the interactive map.",
      color: "bg-green-500"
    },
    {
      icon: Car,
      title: "Multiple Ride Options",
      description: "Choose from Economy, Premium, and SUV rides to suit your needs.",
      color: "bg-purple-500"
    },
    {
      icon: Star,
      title: "Transparent Pricing",
      description: "No hidden charges — see fare estimates before booking your ride.",
      color: "bg-orange-500"
    },
    {
      icon: Phone,
      title: "24/7 Customer Support",
      description: "Always here to assist you with any questions or concerns.",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose CabEase?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of transportation with our feature-rich platform designed for your comfort and convenience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
