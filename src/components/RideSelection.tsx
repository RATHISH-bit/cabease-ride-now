
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Star, Clock, ArrowUp } from "lucide-react";

interface RideSelectionProps {
  pickup: string;
  destination: string;
  onRideSelect: (ride: any) => void;
  onBack: () => void;
}

export const RideSelection = ({ pickup, destination, onRideSelect, onBack }: RideSelectionProps) => {
  const rides = [
    {
      id: 1,
      type: "Economy",
      price: "₹180",
      eta: "3 mins",
      description: "Affordable rides for everyday travel",
      icon: "🚗",
      rating: 4.8,
      color: "bg-blue-500"
    },
    {
      id: 2,
      type: "Premium",
      price: "₹280",
      eta: "5 mins", 
      description: "Comfortable rides with premium cars",
      icon: "🚙",
      rating: 4.9,
      color: "bg-purple-500"
    },
    {
      id: 3,
      type: "SUV",
      price: "₹350",
      eta: "7 mins",
      description: "Spacious SUVs for groups and luggage",
      icon: "🚐",
      rating: 4.7,
      color: "bg-green-500"
    }
  ];

  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="text-blue-600 hover:text-blue-700"
      >
        <ArrowUp className="h-4 w-4 mr-2 rotate-[-90deg]" />
        Change Location
      </Button>

      <Card className="shadow-xl border-0">
        <CardContent className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-600 mb-1">From</div>
            <div className="font-medium">{pickup}</div>
            <div className="text-sm text-gray-600 mt-2 mb-1">To</div>
            <div className="font-medium">{destination}</div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Choose Your Ride</h2>
          
          <div className="space-y-4">
            {rides.map((ride) => (
              <Card 
                key={ride.id} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-blue-300"
                onClick={() => onRideSelect(ride)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${ride.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <Car className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{ride.type}</h3>
                        <p className="text-gray-600">{ride.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm text-gray-600">{ride.eta}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm text-gray-600">{ride.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{ride.price}</div>
                      <div className="text-sm text-gray-500">Estimated fare</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
