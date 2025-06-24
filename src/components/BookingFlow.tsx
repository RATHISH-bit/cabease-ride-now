
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUp, MapPin, Car, Star, Clock } from "lucide-react";
import { RideSelection } from "@/components/RideSelection";
import { TrackingView } from "@/components/TrackingView";

interface BookingFlowProps {
  onBack: () => void;
}

export const BookingFlow = ({ onBack }: BookingFlowProps) => {
  const [step, setStep] = useState(1);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedRide, setSelectedRide] = useState(null);

  const handleLocationSubmit = () => {
    if (pickup && destination) {
      setStep(2);
    }
  };

  const handleRideConfirm = (ride: any) => {
    setSelectedRide(ride);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700"
          >
            <ArrowUp className="h-4 w-4 mr-2 rotate-[-90deg]" />
            Back to Home
          </Button>
          <div className="text-2xl font-bold text-gray-900">CabEase</div>
        </div>

        {step === 1 && (
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Where to?</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="pickup" className="text-lg font-medium">Pickup Location</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                    <Input
                      id="pickup"
                      placeholder="Enter pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="pl-12 h-12 text-lg border-2 focus:border-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="destination" className="text-lg font-medium">Destination</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-red-500" />
                    <Input
                      id="destination"
                      placeholder="Enter destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-12 h-12 text-lg border-2 focus:border-red-500"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleLocationSubmit}
                  disabled={!pickup || !destination}
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  Find Available Rides
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <RideSelection 
            pickup={pickup}
            destination={destination}
            onRideSelect={handleRideConfirm}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && selectedRide && (
          <TrackingView 
            pickup={pickup}
            destination={destination}
            ride={selectedRide}
            onBack={() => setStep(2)}
          />
        )}
      </div>
    </div>
  );
};
