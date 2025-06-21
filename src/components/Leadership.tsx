import { motion } from "framer-motion";

const Leadership = () => {
  const leaders = [
    {
      name: "Zach Kelling",
      title: "Founder and CTO",
      bio: "Visionary leader driving Hanzo's technical innovation and frontier AI research. Focused on building cutting-edge AI systems and technology infrastructure.",
      image: "/leadership/zach-kelling.png"
    },
    {
      name: "Michael Kelling",
      title: "President",
      bio: "Strategic operations leader overseeing commercial expansion and enterprise partnerships. Expert in scaling AI solutions for global impact.",
      image: "/leadership/michael-kelling.png"
    },
    {
      name: "Antje Worring",
      title: "Chief Operating Officer",
      bio: "Operational excellence leader ensuring seamless execution across all divisions. Drives strategic initiatives and organizational effectiveness.",
      image: "/leadership/antje-worring.png"
    },
    {
      name: "Vincent Butta",
      title: "Executive VP",
      bio: "Leading key business initiatives and strategic operations. Expert in driving growth and operational excellence across the organization.",
      image: "/leadership/vincent-butta.jpg"
    },
    {
      name: "Leigh Ferreria",
      title: "Chief Revenue Officer",
      bio: "Revenue growth strategist leading sales and market expansion. Expert in building scalable revenue operations and driving commercial success.",
      image: "/leadership/leigh-ferreria.png"
    },
    {
      name: "Danielle Savage",
      title: "Chief Brand Officer",
      bio: "Brand visionary elevating Hanzo's global presence and market positioning. Expert in creating compelling brand narratives and customer experiences.",
      image: "/leadership/danielle-savage.png"
    },
    {
      name: "Ashley Kathleen Christie",
      title: "Chief of Staff",
      bio: "Strategic advisor ensuring organizational alignment and leadership effectiveness. Expert in executive operations and cross-functional coordination.",
      image: "/leadership/ashley-christie.png"
    },
    {
      name: "Anastasia Zacharaoff",
      title: "VP Engineering",
      bio: "Engineering leader driving technical excellence and innovation. Expert in building high-performing engineering teams and scalable systems.",
      image: "/leadership/anastasia-zacharaoff.png"
    },
    {
      name: "Rob Ruiz",
      title: "VP Strategy",
      bio: "Strategic planning expert developing business intelligence and growth initiatives. Focused on market analysis and strategic partnerships.",
      image: "/leadership/rob-ruiz.png"
    },
    {
      name: "Marcus White",
      title: "VP Research",
      bio: "Research leader advancing AI capabilities and innovation. Expert in applied research and bringing cutting-edge technology to production.",
      image: "/leadership/marcus-white.png"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-white">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale"
                    style={{ filter: 'grayscale(100%)' }}
                  />
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