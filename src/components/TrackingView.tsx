
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Star, Clock, ArrowUp } from "lucide-react";

interface TrackingViewProps {
  pickup: string;
  destination: string;
  ride: any;
  onBack: () => void;
}

export const TrackingView = ({ pickup, destination, ride, onBack }: TrackingViewProps) => {
  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="text-blue-600 hover:text-blue-700"
      >
        <ArrowUp className="h-4 w-4 mr-2 rotate-[-90deg]" />
        Change Ride
      </Button>

      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl">Your Ride is Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Driver is on the way</h3>
              <p className="text-green-600">Arriving in 3 minutes</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">Trip Details</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-sm text-gray-600">Pickup</div>
                  <div className="font-medium">{pickup}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-sm text-gray-600">Destination</div>
                  <div className="font-medium">{destination}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                <p className="text-gray-600">Your Driver</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600">{ride.rating} rating</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm text-gray-600">Vehicle</div>
                  <div className="font-medium">KA 01 AB 1234</div>
                  <div className="text-sm text-gray-600">White Maruti Swift</div>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p>Live tracking map would appear here</p>
              <p className="text-sm">Driver location: 0.5 km away</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">Total Fare</div>
                <div className="text-sm text-gray-600">Estimated cost</div>
              </div>
              <div className="text-2xl font-bold text-green-600">{ride.price}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
