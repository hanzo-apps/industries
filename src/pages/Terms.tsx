
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2>1. Agreement to Terms</h2>
              <p>By accessing or using Hanzo's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. These terms constitute a legal agreement between you and Hanzo Industries, Inc. ("Hanzo", "we", "us", or "our").</p>
            </section>

            <section>
              <h2>2. Intellectual Property Rights</h2>
              <p>When you use our AI services to generate content:</p>
              <ul>
                <li>You retain ownership of your input prompts and any pre-existing materials you provide.</li>
                <li>For content generated using our public services, Hanzo retains the right to use, modify, and distribute the AI-generated outputs for any purpose.</li>
                <li>For private/enterprise services, content ownership is determined by your specific service agreement.</li>
              </ul>
            </section>

            <section>
              <h2>3. User Generated Content</h2>
              <p>By submitting content to our platform, you grant Hanzo a worldwide, non-exclusive, royalty-free license to use, modify, and analyze such content for service improvement and research purposes.</p>
            </section>

            <section>
              <h2>4. API Usage and Rate Limits</h2>
              <p>Your use of our API is subject to rate limits and fair use policies. We reserve the right to modify these limits based on service load and other factors.</p>
            </section>

            <section>
              <h2>5. Payment Terms</h2>
              <p>Payment processing is handled securely through Stripe. By subscribing to our services, you agree to:</p>
              <ul>
                <li>Provide valid payment information</li>
                <li>Pay all charges at the prices in effect when incurred</li>
                <li>Pay any applicable taxes</li>
                <li>Keep your billing information current and accurate</li>
                <li>Authorize us to share your payment information with Stripe</li>
              </ul>
              <p>All payment information is processed and stored securely by Stripe. Hanzo does not store your full payment details.</p>
            </section>

            <section>
              <h2>6. Service Availability</h2>
              <p>While we strive for high availability, we do not guarantee uninterrupted access to our services. We reserve the right to modify or discontinue services with reasonable notice.</p>
            </section>

            <section>
              <h2>7. Limitation of Liability</h2>
              <p>Hanzo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
            </section>

            <section>
              <h2>8. Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the service after such modifications constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2>9. Contact Information</h2>
              <p>For any questions about these Terms of Service, please contact us at:</p>
              <ul>
                <li>Email: help@hanzo.ai</li>
                <li>Company: Hanzo Industries, Inc.</li>
                <li>For legal notices: legal@hanzo.ai</li>
              </ul>
              <p>Our registered agent information:</p>
              <ul>
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

export default Terms;
