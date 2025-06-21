import { motion } from "framer-motion";

const Leadership = () => {
  const leaders = [
    {
      name: "Zach Kelling",
      title: "Chief Executive Officer",
      bio: "Visionary leader driving Hanzo's frontier AI research and development. Focused on building safe, aligned AI systems for critical applications.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Kelling",
      title: "President",
      bio: "Strategic operations leader overseeing commercial expansion and enterprise partnerships. Expert in scaling AI solutions for global impact.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Antje Karina Worring",
      title: "Chief Operating Officer",
      bio: "Operational excellence leader ensuring seamless execution across all divisions. Specializes in defense sector integration and compliance.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Leigh Ferreira",
      title: "VP of Defense Solutions",
      bio: "Defense industry expert leading mission-critical AI deployments. Deep experience in government contracting and secure system implementation.",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-black mb-4"
          >
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our leadership team combines deep AI expertise with operational excellence, 
            driving innovation in frontier AI research while maintaining focus on safety and alignment
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-1">{leader.name}</h3>
              <p className="text-sm font-medium text-gray-600 mb-3">{leader.title}</p>
              <p className="text-sm text-gray-600">{leader.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-16"
        >
          <div className="text-center">
            <h4 className="text-3xl font-bold text-black mb-2">Techstars</h4>
            <p className="text-gray-600">Backed Company</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-black mb-2">100+</h4>
            <p className="text-gray-600">Enterprise Clients</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-black mb-2">24/7</h4>
            <p className="text-gray-600">AI Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;