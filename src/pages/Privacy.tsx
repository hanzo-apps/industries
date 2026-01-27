import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2>Data Controller</h2>
              <p>Hanzo Industries, Inc. ("Hanzo", "we", "us", or "our") is the data controller for the personal information we process under this policy.</p>
              <p>For privacy-related inquiries, you can reach our Data Protection Officer (DPO) at:</p>
              <ul>
                <li>Email: dpo@hanzo.ai</li>
                <li>General Support: help@hanzo.ai</li>
              </ul>
              <p>Our registered agent information:</p>
              <ul>
                <li>Registered Agent: Legalinc Corporate Services Inc.</li>
                <li>Address: 131 Continental Dr, Suite 305, Newark, DE 19713 US</li>
              </ul>
            </section>

            <section>
              <h2>1. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul>
                <li>Account information (email, name, billing details)</li>
                <li>Usage data (API calls, prompts, generated content)</li>
                <li>Device information (IP address, browser type)</li>
                <li>Payment information (processed securely via Stripe)</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <p>We use collected information for:</p>
              <ul>
                <li>Providing and improving our services</li>
                <li>Training and fine-tuning our AI models</li>
                <li>Personalizing your experience</li>
                <li>Marketing and advertising purposes</li>
                <li>Analytics and service optimization</li>
                <li>Processing payments and maintaining financial records</li>
              </ul>
            </section>

            <section>
              <h2>3. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers (e.g., Stripe for payment processing)</li>
                <li>Analytics partners</li>
                <li>Marketing partners</li>
                <li>Law enforcement when required by law</li>
              </ul>
              <p>When you make a payment, your payment information is processed securely by Stripe. Hanzo does not store your full payment details.</p>
            </section>

            <section>
              <h2>4. AI Training and Data Usage</h2>
              <p>Content generated through our platform may be used to:</p>
              <ul>
                <li>Improve our AI models</li>
                <li>Analyze usage patterns</li>
                <li>Develop new features</li>
                <li>Create derivative works</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Retention</h2>
              <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data, subject to legal requirements.</p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Object to data processing</li>
                <li>Export your data</li>
              </ul>
              <p>To exercise these rights, please contact our DPO at dpo@hanzo.ai</p>
            </section>

            <section>
              <h2>7. Security</h2>
              <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, or destruction. This includes using industry-standard encryption for data transmission and storage.</p>
            </section>

            <section>
              <h2>8. Updates to Privacy Policy</h2>
              <p>We may update this policy periodically. We will notify you of significant changes via email or service notifications.</p>
            </section>

            <section>
              <h2>9. Contact Information</h2>
              <p>For any questions about our Privacy Policy or data practices:</p>
              <ul>
                <li>Data Protection Officer: dpo@hanzo.ai</li>
                <li>General Support: help@hanzo.ai</li>
                <li>Company: Hanzo Industries, Inc.</li>
                <li>Registered Agent: Legalinc Corporate Services Inc.</li>
                <li>Address: 131 Continental Dr, Suite 305, Newark, DE 19713 US</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
