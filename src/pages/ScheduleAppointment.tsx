import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ScheduleAppointment = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/appointment-success");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Schedule an Appointment</h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Use this page to schedule an appointment with Atrion Construction. Choose your preferred date and time and provide your project details. You will receive confirmations, reminders, and important service-related updates by SMS or email.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-border">
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="grid grid-cols-1 gap-8">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" name="fullName" required placeholder="John Doe" className="mt-2 rounded-lg focus-visible:ring-[#1d4ed8]" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" required placeholder="(555) 555-5555" className="mt-2 rounded-lg focus-visible:ring-[#1d4ed8]" />
                        <p className="text-xs text-muted-foreground mt-2">We will use this number to send confirmations and reminders.</p>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-2 rounded-lg focus-visible:ring-[#1d4ed8]" />
                      </div>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Service Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="serviceType">Service Type</Label>
                        <Select name="serviceType" required>
                          <SelectTrigger id="serviceType" className="mt-2 rounded-lg focus:ring-[#1d4ed8]">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                            <SelectItem value="bathroom">Bathroom Remodeling</SelectItem>
                            <SelectItem value="deck">Deck & Porch</SelectItem>
                            <SelectItem value="carpentry">Carpentry</SelectItem>
                            <SelectItem value="painting">Interior / Exterior Painting</SelectItem>
                            <SelectItem value="general">General Construction</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="address">Project Address</Label>
                        <Input id="address" name="address" required placeholder="Street, City, State" className="mt-2 rounded-lg focus-visible:ring-[#1d4ed8]" />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Date & Time</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" name="date" type="date" required className="mt-2 rounded-lg focus-visible:ring-[#1d4ed8]" />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Input id="time" name="time" type="time" required className="mt-2 rounded-lg focus-visible:ring-[#1d4ed8]" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                    <Label htmlFor="details">Project Details / Notes</Label>
                    <Textarea id="details" name="details" placeholder="Tell us about your project..." className="mt-2 min-h-[140px] rounded-lg focus-visible:ring-[#1d4ed8]" />
                  </div>

                  {/* Opt-in box */}
                  <div className="rounded-lg border border-[#1d4ed8]/30 bg-[#1d4ed8]/5 p-4 md:p-5">
                    <p className="text-sm text-foreground">
                      By submitting this form, you agree to receive appointment confirmations, reminders, and service-related messages from Atrion Construction at the phone number and email provided. Message and data rates may apply. Reply STOP to unsubscribe. No unsolicited messages will be sent.
                    </p>
                  </div>

                  {/* Submit */}
                  <div>
                    <Button type="submit" className="rounded-lg bg-[#1d4ed8] hover:bg-[#1b43b8] text-white px-6 py-6 h-auto text-base"> 
                      Schedule Appointment
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      By booking, you agree to our <a href="/privacy-policy" className="text-[#1d4ed8] hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-[#1d4ed8] hover:underline">Terms of Service</a>.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScheduleAppointment;
