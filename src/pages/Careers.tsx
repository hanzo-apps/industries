import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search, MapPin, Building2, Briefcase, ExternalLink, ChevronDown,
  ArrowLeft, Calendar, Clock, DollarSign, Users, Laptop, Heart,
  BookOpen, Globe, Zap, Shield, Brain, Code2, Database
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  team: string;
  location: string;
  type: "full-time" | "contract" | "internship";
  remote?: boolean;
  new?: boolean;
  salary?: string;
  description?: string;
}

const jobs: Job[] = [
  // AI Research & Engineering
  {
    id: "1",
    title: "Research Scientist, Alignment",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$250,000 - $400,000",
    description: "Lead research on AI alignment and safety, developing new methodologies to ensure AI systems behave as intended."
  },
  {
    id: "2",
    title: "Research Engineer, Pre-training",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$200,000 - $350,000",
    description: "Build and optimize large-scale pre-training infrastructure for frontier AI models."
  },
  {
    id: "3",
    title: "Research Engineer, Interpretability",
    team: "AI Research & Engineering",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$200,000 - $350,000",
    description: "Develop tools and techniques to understand what's happening inside neural networks."
  },
  {
    id: "4",
    title: "ML Engineer, Inference Optimization",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$180,000 - $300,000",
    description: "Optimize model inference for production deployment, reducing latency and cost."
  },
  {
    id: "5",
    title: "Research Engineer, Multimodal (Vision)",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$200,000 - $350,000",
    description: "Extend our models' capabilities to understand and generate visual content."
  },
  {
    id: "6",
    title: "Research Engineer, Multimodal (Audio)",
    team: "AI Research & Engineering",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$200,000 - $350,000",
    description: "Build state-of-the-art audio understanding and generation capabilities."
  },
  {
    id: "7",
    title: "Research Scientist, RLHF",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$250,000 - $400,000",
    description: "Advance reinforcement learning from human feedback techniques for model alignment."
  },
  {
    id: "8",
    title: "Research Engineer, Agents",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$200,000 - $350,000",
    description: "Build autonomous AI agents that can accomplish complex tasks reliably."
  },
  {
    id: "9",
    title: "Research Engineer, Diffusion Models",
    team: "AI Research & Engineering",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$200,000 - $350,000",
    description: "Develop next-generation diffusion models for image, video, and 3D generation."
  },
  {
    id: "10",
    title: "Research Scientist, JEPA",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$250,000 - $400,000",
    description: "Research joint embedding predictive architectures for self-supervised learning."
  },
  {
    id: "11",
    title: "ML Engineer, Real-time Inference",
    team: "AI Research & Engineering",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$180,000 - $300,000",
    description: "Build low-latency inference systems for real-time AI applications."
  },

  // Cryptography & Security
  {
    id: "12",
    title: "Cryptography Engineer, Post-Quantum",
    team: "Cryptography & Security",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    new: true,
    salary: "$200,000 - $350,000",
    description: "Implement and optimize post-quantum cryptographic primitives (FALCON, Dilithium, Ringtail)."
  },
  {
    id: "13",
    title: "Research Engineer, FHE",
    team: "Cryptography & Security",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$200,000 - $350,000",
    description: "Advance fully homomorphic encryption for privacy-preserving AI computation."
  },
  {
    id: "14",
    title: "Security Engineer, Infrastructure",
    team: "Cryptography & Security",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$180,000 - $280,000",
    description: "Secure our AI infrastructure and protect against adversarial attacks."
  },
  {
    id: "15",
    title: "Research Scientist, MPC Protocols",
    team: "Cryptography & Security",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$220,000 - $380,000",
    description: "Design and implement secure multi-party computation protocols for distributed AI."
  },
  {
    id: "16",
    title: "Research Engineer, Zero-Knowledge Proofs",
    team: "Cryptography & Security",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$200,000 - $350,000",
    description: "Build ZK proof systems for verifiable AI computation."
  },
  {
    id: "17",
    title: "Cryptography Engineer, LSSS Threshold",
    team: "Cryptography & Security",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$200,000 - $350,000",
    description: "Implement linear secret sharing schemes for threshold cryptography systems."
  },

  // Blockchain & Consensus
  {
    id: "18",
    title: "Protocol Engineer, Consensus",
    team: "Blockchain & Consensus",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$200,000 - $350,000",
    description: "Design and implement novel consensus protocols (Wave, Focus, Quasar)."
  },
  {
    id: "19",
    title: "Systems Engineer, Lux Node",
    team: "Blockchain & Consensus",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$180,000 - $300,000",
    description: "Build and optimize the Lux Network node implementation in Go."
  },
  {
    id: "20",
    title: "Research Engineer, DAG Consensus",
    team: "Blockchain & Consensus",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$200,000 - $350,000",
    description: "Advance DAG-based consensus for high-throughput blockchain systems."
  },
  {
    id: "21",
    title: "Protocol Engineer, Cross-Chain",
    team: "Blockchain & Consensus",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$200,000 - $350,000",
    description: "Build secure cross-chain interoperability protocols."
  },

  // Infrastructure & Platform
  {
    id: "22",
    title: "Staff Software Engineer, Platform",
    team: "Infrastructure & Platform",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$250,000 - $400,000",
    description: "Lead platform engineering for our AI infrastructure."
  },
  {
    id: "23",
    title: "Senior Software Engineer, API",
    team: "Infrastructure & Platform",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$180,000 - $300,000",
    description: "Build and scale our AI API serving millions of requests."
  },
  {
    id: "24",
    title: "DevOps Engineer, GPU Infrastructure",
    team: "Infrastructure & Platform",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$180,000 - $280,000",
    description: "Manage and optimize our GPU cluster for AI training and inference."
  },
  {
    id: "25",
    title: "Software Engineer, Developer Tools",
    team: "Infrastructure & Platform",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$160,000 - $260,000",
    description: "Build tools that make our engineers more productive."
  },
  {
    id: "26",
    title: "Software Engineer, MCP Infrastructure",
    team: "Infrastructure & Platform",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$180,000 - $300,000",
    description: "Build Model Context Protocol infrastructure for AI tool integration."
  },
  {
    id: "27",
    title: "Software Engineer, ZAP Protocol",
    team: "Infrastructure & Platform",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    new: true,
    salary: "$180,000 - $300,000",
    description: "Implement Zero-copy Agent Protocol for high-performance agent communication."
  },

  // Product & Design
  {
    id: "28",
    title: "Product Manager, AI Platform",
    team: "Product & Design",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$180,000 - $280,000",
    description: "Define and drive the product roadmap for our AI platform."
  },
  {
    id: "29",
    title: "Product Designer, Developer Experience",
    team: "Product & Design",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$160,000 - $250,000",
    description: "Design intuitive interfaces for AI developers."
  },
  {
    id: "30",
    title: "Technical Product Manager, MCP",
    team: "Product & Design",
    location: "San Francisco, CA",
    type: "full-time",
    new: true,
    salary: "$180,000 - $280,000",
    description: "Lead product development for Model Context Protocol ecosystem."
  },
  {
    id: "31",
    title: "Product Manager, Zen Models",
    team: "Product & Design",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$180,000 - $280,000",
    description: "Drive product strategy for our Zen model family."
  },

  // Go-to-Market
  {
    id: "32",
    title: "Solutions Architect, Enterprise",
    team: "Go-to-Market",
    location: "San Francisco, CA | New York, NY",
    type: "full-time",
    salary: "$180,000 - $280,000",
    description: "Help enterprise customers integrate our AI solutions."
  },
  {
    id: "33",
    title: "Developer Advocate",
    team: "Go-to-Market",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$150,000 - $220,000",
    description: "Build and engage with our developer community."
  },
  {
    id: "34",
    title: "Technical Writer",
    team: "Go-to-Market",
    location: "Remote",
    type: "full-time",
    remote: true,
    salary: "$120,000 - $180,000",
    description: "Create clear, comprehensive documentation for our products."
  },
  {
    id: "35",
    title: "Developer Relations, MCP",
    team: "Go-to-Market",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    new: true,
    salary: "$150,000 - $220,000",
    description: "Grow the MCP ecosystem and support tool developers."
  },

  // Research Operations
  {
    id: "36",
    title: "Research Program Manager",
    team: "Research Operations",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$150,000 - $220,000",
    description: "Coordinate research programs across teams."
  },
  {
    id: "37",
    title: "Research Operations Manager",
    team: "Research Operations",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$140,000 - $200,000",
    description: "Support research teams with operational excellence."
  },
  {
    id: "38",
    title: "Data Operations Manager",
    team: "Research Operations",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$140,000 - $200,000",
    description: "Manage data pipelines and quality for model training."
  },

  // Operations
  {
    id: "39",
    title: "People Operations Manager",
    team: "Operations",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$120,000 - $180,000",
    description: "Build and maintain a world-class employee experience."
  },
  {
    id: "40",
    title: "Finance & Strategy Analyst",
    team: "Operations",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$130,000 - $200,000",
    description: "Support financial planning and strategic decision-making."
  },
  {
    id: "41",
    title: "Recruiting Coordinator",
    team: "Operations",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "$80,000 - $120,000",
    description: "Coordinate interviews and support recruiting operations."
  },
  {
    id: "42",
    title: "Technical Recruiter, AI Research",
    team: "Operations",
    location: "San Francisco, CA | Remote",
    type: "full-time",
    remote: true,
    salary: "$120,000 - $180,000",
    description: "Find and attract top AI research talent."
  },
];

const teams = ["All Teams", ...Array.from(new Set(jobs.map(j => j.team)))];
const locations = ["All Locations", "San Francisco, CA", "New York, NY", "Remote"];

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.team.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTeam = selectedTeam === "All Teams" || job.team === selectedTeam;
      const matchesLocation = selectedLocation === "All Locations" ||
                             job.location.includes(selectedLocation) ||
                             (selectedLocation === "Remote" && job.remote);
      return matchesSearch && matchesTeam && matchesLocation;
    });
  }, [searchQuery, selectedTeam, selectedLocation]);

  const groupedJobs = useMemo(() => {
    const groups: Record<string, Job[]> = {};
    filteredJobs.forEach(job => {
      if (!groups[job.team]) groups[job.team] = [];
      groups[job.team].push(job);
    });
    return groups;
  }, [filteredJobs]);

  // Job Detail View
  if (selectedJob) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </button>

            {selectedJob.new && (
              <span className="inline-block px-3 py-1 text-sm font-medium bg-white text-black rounded mb-4">
                New
              </span>
            )}

            <h1 className="text-4xl font-bold mb-4">{selectedJob.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{selectedJob.location}</p>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">About Hanzo Industries</h2>
              <p className="text-gray-300 mb-4">
                Hanzo Industries is a frontier AI research lab advancing the state of the art in machine learning,
                cryptography, consensus protocols, and distributed systems. Our mission is to create reliable,
                interpretable, and steerable AI systems that are safe and beneficial for humanity.
              </p>
              <p className="text-gray-300">
                We're a quickly growing team of committed researchers, engineers, and business leaders working
                together to build beneficial AI systems. We've published 58 research papers, released 22 AI models
                (the Zen family, 600M-480B parameters), and achieved breakthrough results like 99.8% training cost
                reduction through our Training-Free GRPO methodology.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">About the Role</h2>
              <p className="text-gray-300 mb-4">{selectedJob.description}</p>

              <h3 className="font-semibold mt-6 mb-3">Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Contribute to cutting-edge research and engineering projects</li>
                <li>Collaborate with world-class researchers and engineers</li>
                <li>Publish research and contribute to open source</li>
                <li>Help shape the direction of our technology and products</li>
              </ul>

              <h3 className="font-semibold mt-6 mb-3">You May Be a Good Fit If You Have</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Strong technical background relevant to the role</li>
                <li>Track record of impactful work</li>
                <li>Excellent communication and collaboration skills</li>
                <li>Passion for AI safety and beneficial AI development</li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">Compensation & Benefits</h2>

              {selectedJob.salary && (
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-300">Annual Salary: {selectedJob.salary} USD</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Health & Wellness</div>
                    <div className="text-sm text-gray-400">Comprehensive medical, dental, and vision</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Equity</div>
                    <div className="text-sm text-gray-400">Competitive equity package</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Laptop className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Equipment</div>
                    <div className="text-sm text-gray-400">Top-tier equipment and setup</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Learning</div>
                    <div className="text-sm text-gray-400">Generous learning budget</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">Logistics</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>Location:</strong> {selectedJob.location}</p>
                <p><strong>Type:</strong> {selectedJob.type.charAt(0).toUpperCase() + selectedJob.type.slice(1)}</p>
                <p><strong>Visa Sponsorship:</strong> We sponsor visas and will make every reasonable effort to support your visa process.</p>
                <p><strong>Hybrid Policy:</strong> We expect staff to be in our San Francisco office at least 25% of the time, though some roles may be fully remote.</p>
              </div>
            </div>

            {/* Apply Section */}
            <div className="bg-white text-black rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-4">Apply for this Role</h2>
              <p className="text-gray-700 mb-6">
                We encourage you to apply even if you don't meet every qualification.
                Research shows that people from underrepresented groups often doubt their candidacy—don't exclude yourself.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://cal.com/hanzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </a>
                <a
                  href={`mailto:careers@hanzo.ai?subject=Application: ${encodeURIComponent(selectedJob.title)}&body=Hi,%0A%0AI'm interested in the ${encodeURIComponent(selectedJob.title)} position.%0A%0A[Please attach your resume and include a brief introduction]`}
                  className="flex items-center justify-center gap-2 bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Email Application
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Job Listings View
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of AI. We're looking for exceptional people to join our mission of creating safe, beneficial AI systems.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                San Francisco HQ
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {jobs.length} Open Roles
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Remote-Friendly
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-1">58</div>
              <div className="text-sm text-gray-400">Published Papers</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-1">22</div>
              <div className="text-sm text-gray-400">AI Models</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-sm text-gray-400">Research Orgs</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-1">99.8%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search roles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Team Filter */}
              <div className="relative">
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-gray-600"
                >
                  {teams.map(team => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-gray-600"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="mb-6 text-gray-400">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'} found
          </div>

          {/* Job Listings */}
          <div className="space-y-8">
            {Object.entries(groupedJobs).map(([team, teamJobs], groupIndex) => (
              <motion.div
                key={team}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * Math.min(groupIndex, 3) }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{team}</h3>
                  <span className="text-sm text-gray-500">{teamJobs.length} {teamJobs.length === 1 ? 'role' : 'roles'}</span>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden divide-y divide-gray-800">
                  {teamJobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-800 transition-colors group text-left"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white group-hover:text-gray-200 truncate">
                            {job.title}
                          </span>
                          {job.new && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-white text-black rounded">
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">View</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 mb-4">No roles match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTeam("All Teams");
                  setSelectedLocation("All Locations");
                }}
                className="text-white underline hover:no-underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-gray-900 border border-gray-800 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Schedule a call to discuss how you could contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/hanzo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </a>
              <a
                href="mailto:careers@hanzo.ai?subject=General Application"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Send Resume
              </a>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Why Hanzo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <Brain className="w-8 h-8 mb-4 text-white" />
                <h3 className="font-semibold mb-2">Cutting-Edge Research</h3>
                <p className="text-sm text-gray-400">
                  Work on frontier AI models, post-quantum cryptography, and novel consensus protocols alongside world-class researchers.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <DollarSign className="w-8 h-8 mb-4 text-white" />
                <h3 className="font-semibold mb-2">Competitive Compensation</h3>
                <p className="text-sm text-gray-400">
                  Competitive salary, equity, comprehensive health benefits, and 401(k) matching.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <Laptop className="w-8 h-8 mb-4 text-white" />
                <h3 className="font-semibold mb-2">Flexible Work</h3>
                <p className="text-sm text-gray-400">
                  Remote-friendly culture with offices in San Francisco. We trust you to do your best work wherever you are.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <BookOpen className="w-8 h-8 mb-4 text-white" />
                <h3 className="font-semibold mb-2">Learning & Growth</h3>
                <p className="text-sm text-gray-400">
                  Generous learning budget, conference attendance, and opportunities to publish research.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <Zap className="w-8 h-8 mb-4 text-white" />
                <h3 className="font-semibold mb-2">Meaningful Impact</h3>
                <p className="text-sm text-gray-400">
                  Your work directly contributes to building safe, beneficial AI systems that will shape the future.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <Users className="w-8 h-8 mb-4 text-white" />
                <h3 className="font-semibold mb-2">Diverse Team</h3>
                <p className="text-sm text-gray-400">
                  Join a team of researchers, engineers, and operators from diverse backgrounds united by a shared mission.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How We're Different */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-gray-900 border border-gray-800 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">How We're Different</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                We believe that the highest-impact AI research requires combining rigorous science with practical engineering.
                At Hanzo, we work as a cohesive team on large-scale research efforts across AI, cryptography, and distributed systems.
              </p>
              <p className="text-gray-300 mb-4">
                Our research spans multiple domains: from frontier AI models (the Zen family) to post-quantum cryptography,
                from novel consensus protocols to privacy-preserving computation. We publish openly and contribute to open source.
              </p>
              <p className="text-gray-300">
                We value impact over individual publications. We're looking for people who want to work on hard problems
                that matter and who can collaborate effectively across disciplines.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
