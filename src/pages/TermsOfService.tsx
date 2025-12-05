import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-border p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">
              These Terms of Service ("Terms") govern your use of the Atrion Construction website and services. By accessing or using our services, you agree to these Terms.
            </p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Services</h2>
                <p className="text-muted-foreground">
                  We provide construction and home-improvement services as described on our website or quoted directly. Service details, timelines, and pricing may vary based on project scope and availability.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Estimates and Payments</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Estimates or quotes are based on the information available at the time and may change if conditions differ.</li>
                  <li>Payment terms, deposits, and schedules will be provided prior to project start.</li>
                  <li>Late payments may incur fees as stated in your agreement.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Scheduling and Access</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>We will coordinate appointments and work schedules with you.</li>
                  <li>You agree to provide reasonable access to the property where services are performed.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Communications</h2>
                <p className="text-muted-foreground">
                  By providing your phone number and email, you consent to receive service-related messages including confirmations, reminders, and important updates. Message and data rates may apply. You may opt out of SMS by replying STOP.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Warranties and Liability</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>We stand behind our workmanship as specified in your agreement.</li>
                  <li>To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Customer Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate information regarding project scope and site conditions.</li>
                  <li>Secure any required permissions or approvals not handled by our team.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Cancellations and Changes</h2>
                <p className="text-muted-foreground">
                  Project changes or cancellations should be communicated as early as possible. Fees may apply depending on timing and materials ordered.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may include links to third-party websites. We are not responsible for their content or practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes will be handled in accordance with applicable laws in our service region. You agree to attempt informal resolution before pursuing formal claims.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Changes to These Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms from time to time. Updates will be posted on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, contact us at (781) 268-7795 or atrionconstruction@gmail.com.
                </p>
              </section>

              <section>
                <p className="text-sm text-muted-foreground">Effective date: {new Date().getFullYear()}</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
