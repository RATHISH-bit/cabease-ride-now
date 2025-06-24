
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { BookingFlow } from "@/components/BookingFlow";
import { Features } from "@/components/Features";

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {!showBooking ? (
        <>
          <Hero onBookNow={() => setShowBooking(true)} />
          <Features />
        </>
      ) : (
        <BookingFlow onBack={() => setShowBooking(false)} />
      )}
    </div>
  );
};

export default Index;
