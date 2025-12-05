import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-border p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              This Privacy Policy explains how Atrion Construction ("we", "us", "our") collects, uses, and protects your information when you interact with our website and services.
            </p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contact details such as name, phone number, and email address</li>
                  <li>Project information and service preferences you provide</li>
                  <li>Appointment date and time preferences</li>
                  <li>Technical data such as browser type, pages visited, and general usage analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To respond to inquiries and provide construction services</li>
                  <li>To schedule and manage appointments</li>
                  <li>To send confirmations, reminders, and service-related updates</li>
                  <li>To improve our website, services, and customer experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">SMS and Email Communications</h2>
                <p className="text-muted-foreground">
                  By providing your phone number and email, you agree to receive appointment confirmations, reminders, and service-related messages. Message and data rates may apply. You can opt out of SMS at any time by replying STOP.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Sharing Your Information</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share information with trusted service providers who assist in operating our website, scheduling, or communications, subject to confidentiality obligations, or when required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Data Retention and Security</h2>
                <p className="text-muted-foreground">
                  We retain information only as long as necessary to fulfill the purposes described in this policy and to comply with legal obligations. We implement reasonable safeguards to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Your Choices</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Update your contact details by contacting us</li>
                  <li>Opt out of non-essential communications</li>
                  <li>Request access to or deletion of your information where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices of those websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at (781) 268-7795 or atrionconstruction@gmail.com.
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

export default PrivacyPolicy;
