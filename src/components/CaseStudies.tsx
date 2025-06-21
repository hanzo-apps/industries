import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      category: "Intelligence Analysis",
      title: "Multi-Domain Operations Center",
      client: "U.S. Department of Defense",
      description: "Developed an AI-powered intelligence fusion platform that processes data from multiple domains, reducing analysis time by 75% and improving threat detection accuracy",
      impact: "75% faster analysis",
      year: "2024"
    },
    {
      category: "Cybersecurity",
      title: "Zero Trust Architecture Implementation",
      client: "Defense Intelligence Agency",
      description: "Designed and deployed a comprehensive zero trust security framework across classified networks, enhancing security posture while maintaining operational efficiency",
      impact: "99.9% threat prevention",
      year: "2024"
    },
    {
      category: "Cloud Migration",
      title: "Secure Cloud Transformation",
      client: "U.S. Air Force",
      description: "Led the migration of mission-critical systems to a FedRAMP-compliant cloud infrastructure, enabling global collaboration while maintaining security clearance requirements",
      impact: "60% cost reduction",
      year: "2023"
    },
    {
      category: "AI/ML Solutions",
      title: "Predictive Maintenance System",
      client: "U.S. Navy",
      description: "Implemented machine learning models for predictive maintenance of naval assets, significantly reducing downtime and maintenance costs across the fleet",
      impact: "40% less downtime",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-black mb-4"
          >
            Proven Mission Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Delivering measurable impact for defense and intelligence organizations through 
            innovative technology solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {study.category}
                </span>
                <span className="text-sm text-gray-500">{study.year}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-2">{study.title}</h3>
              <p className="text-sm text-gray-600 mb-4 font-medium">{study.client}</p>
              <p className="text-gray-600 mb-6">{study.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="bg-gray-100 px-4 py-2 rounded-md">
                  <span className="text-sm font-semibold text-black">{study.impact}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href="/case-studies" 
            className="inline-flex items-center text-black font-semibold hover:underline"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;