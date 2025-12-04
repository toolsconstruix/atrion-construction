import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AppointmentSuccess = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-border p-8 md:p-10 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-[#1d4ed8]" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Your appointment request has been received.</h1>
            <p className="text-muted-foreground mb-8">
              You will receive a confirmation shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="secondary" className="rounded-lg">Back to Home</Button>
              </Link>
              <Link to="/schedule-appointment">
                <Button className="rounded-lg bg-[#1d4ed8] hover:bg-[#1b43b8] text-white">Book Another Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppointmentSuccess;
