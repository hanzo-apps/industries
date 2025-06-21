import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-black mb-4"
          >
            Mission, Accepted.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From single-scope initiatives to enterprise-wide transformations, 
            we align with your objectives and scale to your mission requirements
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Defense Division</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-2">Antje Karina Worring</h4>
                <p className="text-sm text-gray-600 mb-1">Chief Operating Officer</p>
                <div className="flex items-center text-gray-600 mt-3">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:a@hanzo.industries" className="hover:text-black">
                    a@hanzo.industries
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-2">Leigh Ferreira</h4>
                <p className="text-sm text-gray-600 mb-1">VP of Defense Solutions</p>
                <div className="flex items-center text-gray-600 mt-3">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:leigh@hanzo.industries" className="hover:text-black">
                    leigh@hanzo.industries
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Commercial Division</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-2">Zach Kelling</h4>
                <p className="text-sm text-gray-600 mb-1">Chief Executive Officer</p>
                <div className="flex items-center text-gray-600 mt-3">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:zach@hanzo.industries" className="hover:text-black">
                    zach@hanzo.industries
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-2">Michael Kelling</h4>
                <p className="text-sm text-gray-600 mb-1">President</p>
                <div className="flex items-center text-gray-600 mt-3">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:michael@hanzo.industries" className="hover:text-black">
                    michael@hanzo.industries
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-black text-white p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Corporate Headquarters</h4>
              <p className="text-sm opacity-80">
                1824 S. Fairfax Ave<br />
                Los Angeles, CA 90019<br />
                United States
              </p>
            </div>
            <div>
              <Phone className="w-6 h-6 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Secure Line</h4>
              <p className="text-sm opacity-80">
                +1 (913) 777-4443<br />
                Available 24/7
              </p>
            </div>
            <div>
              <Mail className="w-6 h-6 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">General Inquiries</h4>
              <p className="text-sm opacity-80">
                info@hanzo.industries<br />
                contracts@hanzo.industries<br />
                security@hanzo.industries
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;