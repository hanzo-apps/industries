"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search, MapPin, Building2, Briefcase, ExternalLink,
  ArrowLeft, Calendar, Clock, DollarSign, Users, Laptop, Heart,
  BookOpen, Globe, Zap, Shield, Brain, Code2, Database
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, cn } from '@hanzo/ui'
import site from "@/site.config";

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
    location: "San Francisco, CA | Los Angeles, CA",
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
    location: "San Francisco, CA | Los Angeles, CA",
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
    location: "Los Angeles, CA | San Francisco, CA",
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
    description: "Implement and optimize post-quantum cryptographic primitives (FALCON, Dilithium, Corona)."
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
    location: "San Francisco, CA | New York, NY",
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
    location: "San Francisco, CA | Paris, France",
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
    location: "San Francisco, CA | Los Angeles, CA",
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
    location: "San Francisco, CA | Marbella, Spain",
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
    location: "San Francisco, CA | Los Angeles, CA",
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
    location: "Kansas City, MO | Vancouver, BC | New York, NY",
    type: "full-time",
    new: true,
    salary: "$180,000 - $280,000",
    description: "Manage and optimize our GPU clusters for AI training and inference across datacenter locations."
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
    location: "San Francisco, CA | Los Angeles, CA",
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
    location: "San Francisco, CA | Los Angeles, CA",
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
    location: "San Francisco, CA | Los Angeles, CA",
    type: "full-time",
    new: true,
    salary: "$180,000 - $280,000",
    description: "Lead product development for Model Context Protocol ecosystem."
  },
  {
    id: "31",
    title: "Product Manager, Zen Models",
    team: "Product & Design",
    location: "San Francisco, CA | Marbella, Spain",
    type: "full-time",
    salary: "$180,000 - $280,000",
    description: "Drive product strategy for our Zen model family."
  },

  // Go-to-Market
  {
    id: "32",
    title: "Solutions Architect, Enterprise",
    team: "Go-to-Market",
    location: "San Francisco, CA | New York, NY | Marbella, Spain",
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
    location: "San Francisco, CA | Los Angeles, CA",
    type: "full-time",
    salary: "$150,000 - $220,000",
    description: "Coordinate research programs across teams."
  },
  {
    id: "37",
    title: "Research Operations Manager",
    team: "Research Operations",
    location: "San Francisco, CA | Paris, France",
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
    location: "San Francisco, CA | Kansas City, MO",
    type: "full-time",
    salary: "$120,000 - $180,000",
    description: "Build and maintain a world-class employee experience."
  },
  {
    id: "40",
    title: "Finance & Strategy Analyst",
    team: "Operations",
    location: "San Francisco, CA | Vancouver, BC",
    type: "full-time",
    salary: "$130,000 - $200,000",
    description: "Support financial planning and strategic decision-making."
  },
  {
    id: "41",
    title: "Recruiting Coordinator",
    team: "Operations",
    location: "San Francisco, CA | Los Angeles, CA | Kansas City, MO",
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
const locations = ["All Locations", "San Francisco, CA", "Los Angeles, CA", "Kansas City, MO", "Vancouver, BC", "New York, NY", "Marbella, Spain", "Paris, France", "Remote"];

export default function PageClient() {
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
      <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
        <main className="hz-pt-6 hz-pb-6 hz-px-4">
          <div className="hz-container-narrow">
            <button
              onClick={() => setSelectedJob(null)}
              className={cn("hz-row hz-ai-center hz-gap-2 hz-mb-6 hz-transition", "hz-fg hz-hoverable")}
            >
              <ArrowLeft className="hz-sq-2" />
              Back to Careers
            </button>

            {selectedJob.new && (
              <span className={cn("hz-px-3 hz-py-1 hz-t-sm hz-w-medium hz-r-md hz-mb-4", "hz-bg-inverse")}>
                New
              </span>
            )}

            <h1 className="hz-t-4xl hz-w-bold hz-mb-4">{selectedJob.title}</h1>
            <p className={cn("hz-t-xl hz-mb-5", "hz-fg")}>{selectedJob.location}</p>

            <div className={cn("hz-bordered hz-r-lg hz-p-6 hz-mb-6", "hz-bg-surface")}>
              <h2 className="hz-t-xl hz-w-semibold hz-mb-4">About Hanzo Industries</h2>
              <p className={cn("hz-mb-4", "hz-fg")}>
                Hanzo Industries is a frontier AI research lab advancing the state of the art in machine learning,
                cryptography, consensus protocols, and distributed systems. Our mission is to create reliable,
                interpretable, and steerable AI systems that are safe and beneficial for humanity.
              </p>
              <p className={cn("hz-fg")}>
                We're a quickly growing team of committed researchers, engineers, and business leaders working
                together to build beneficial AI systems. We've published over 130 research papers, released
                the Zen model family (100+ model weights, 600M–1T+ parameters), and maintain {site.brand.ossRepos} open-source
                projects across AI, cryptography, and distributed systems.
              </p>
            </div>

            <div className={cn("hz-bordered hz-r-lg hz-p-6 hz-mb-6", "hz-bg-surface")}>
              <h2 className="hz-t-xl hz-w-semibold hz-mb-4">About the Role</h2>
              <p className={cn("hz-mb-4", "hz-fg")}>{selectedJob.description}</p>

              <h3 className="hz-w-semibold hz-mt-5 hz-mb-3">Responsibilities</h3>
              <ul className={cn("hz-stack-2", "hz-fg")}>
                <li>Contribute to cutting-edge research and engineering projects</li>
                <li>Collaborate with world-class researchers and engineers</li>
                <li>Publish research and contribute to open source</li>
                <li>Help shape the direction of our technology and products</li>
              </ul>

              <h3 className="hz-w-semibold hz-mt-5 hz-mb-3">You May Be a Good Fit If You Have</h3>
              <ul className={cn("hz-stack-2", "hz-fg")}>
                <li>Strong technical background relevant to the role</li>
                <li>Track record of impactful work</li>
                <li>Excellent communication and collaboration skills</li>
                <li>Passion for AI safety and beneficial AI development</li>
              </ul>
            </div>

            <div className={cn("hz-bordered hz-r-lg hz-p-6 hz-mb-6", "hz-bg-surface")}>
              <h2 className="hz-t-xl hz-w-semibold hz-mb-4">Compensation & Benefits</h2>

              {selectedJob.salary && (
                <div className="hz-row hz-ai-center hz-gap-3 hz-mb-4">
                  <DollarSign className={cn("hz-sq-3", "hz-fg")} />
                  <span className={cn("hz-fg")}>Annual Salary: {selectedJob.salary} USD</span>
                </div>
              )}

              <div className="hz-grid hz-grid-2 hz-gap-4 hz-mt-5">
                <div className="hz-row hz-ai-start hz-gap-3">
                  <Heart className={cn("hz-sq-3 hz-mt-1", "hz-fg")} />
                  <div>
                    <div className="hz-w-medium">Health & Wellness</div>
                    <div className={cn("hz-t-sm", "hz-fg")}>Comprehensive medical, dental, and vision</div>
                  </div>
                </div>
                <div className="hz-row hz-ai-start hz-gap-3">
                  <DollarSign className={cn("hz-sq-3 hz-mt-1", "hz-fg")} />
                  <div>
                    <div className="hz-w-medium">Equity</div>
                    <div className={cn("hz-t-sm", "hz-fg")}>Competitive equity package</div>
                  </div>
                </div>
                <div className="hz-row hz-ai-start hz-gap-3">
                  <Laptop className={cn("hz-sq-3 hz-mt-1", "hz-fg")} />
                  <div>
                    <div className="hz-w-medium">Equipment</div>
                    <div className={cn("hz-t-sm", "hz-fg")}>Top-tier equipment and setup</div>
                  </div>
                </div>
                <div className="hz-row hz-ai-start hz-gap-3">
                  <BookOpen className={cn("hz-sq-3 hz-mt-1", "hz-fg")} />
                  <div>
                    <div className="hz-w-medium">Learning</div>
                    <div className={cn("hz-t-sm", "hz-fg")}>Generous learning budget</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn("hz-bordered hz-r-lg hz-p-6 hz-mb-6", "hz-bg-surface")}>
              <h2 className="hz-t-xl hz-w-semibold hz-mb-4">Logistics</h2>
              <div className={cn("hz-stack-4", "hz-fg")}>
                <p><strong>Location:</strong> {selectedJob.location}</p>
                <p><strong>Type:</strong> {selectedJob.type.charAt(0).toUpperCase() + selectedJob.type.slice(1)}</p>
                <p><strong>Visa Sponsorship:</strong> We sponsor visas and will make every reasonable effort to support your visa process.</p>
                <p><strong>Hybrid Policy:</strong> We expect staff to be in one of our offices (San Francisco, Los Angeles, Kansas City, Vancouver, New York, Marbella, or Paris) at least 25% of the time, though some roles may be fully remote.</p>
              </div>
            </div>

            {/* Apply Section */}
            <div className={cn("hz-r-lg hz-p-6", "hz-bg-inverse")}>
              <h2 className="hz-t-xl hz-w-semibold hz-mb-4">Apply for this Role</h2>
              <p className={cn("hz-mb-5", "hz-fg-soft")}>
                We encourage you to apply even if you don't meet every qualification.
                Research shows that people from underrepresented groups often doubt their candidacy—don't exclude yourself.
              </p>

              <div className="hz-col-row hz-gap-4">
                <a
                  href="https://cal.com/hanzo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "hz-btn hz-btn-ghost hz-gap-2 hz-transition",
                    "hz-bg hz-fg hz-hoverable"
                  )}
                >
                  <Calendar className="hz-sq-3" />
                  Schedule a Call
                </a>
                <a
                  href={`mailto:careers@hanzo.ai?subject=Application: ${encodeURIComponent(selectedJob.title)}&body=Hi,%0A%0AI'm interested in the ${encodeURIComponent(selectedJob.title)} position.%0A%0A[Please attach your resume and include a brief introduction]`}
                  className={cn(
                    "hz-btn hz-btn-ghost hz-gap-2 hz-transition",
                    "hz-bg-surface hz-fg hz-hoverable"
                  )}
                >
                  <ExternalLink className="hz-sq-3" />
                  Email Application
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Job Listings View
  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container-wide">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center hz-mb-7"
          >
            <h1 className="hz-t-5xl hz-w-bold hz-mb-5">
              Join Our Team
            </h1>
            <p className={cn("hz-container-narrow hz-t-xl hz-mb-6", "hz-fg")}>
              Help us build the future of AI. We're looking for exceptional people to join our mission of creating safe, beneficial AI systems.
            </p>
            <div className={cn("hz-row hz-wrap hz-jc-center hz-gap-5 hz-t-sm", "hz-fg")}>
              <span className="hz-row hz-ai-center hz-gap-2">
                <Building2 className="hz-sq-2" />
                7 Global Offices
              </span>
              <span className="hz-row hz-ai-center hz-gap-2">
                <Briefcase className="hz-sq-2" />
                {jobs.length} Open Roles
              </span>
              <span className="hz-row hz-ai-center hz-gap-2">
                <Globe className="hz-sq-2" />
                Remote-Friendly
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hz-grid hz-grid-4 hz-gap-4 hz-mb-7"
          >
            <div className={cn("hz-bordered hz-r-lg hz-p-5 hz-align-center", "hz-bg-surface")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-1">{site.brand.ossRepos}</div>
              <div className={cn("hz-t-sm", "hz-fg")}>OSS Projects</div>
            </div>
            <div className={cn("hz-bordered hz-r-lg hz-p-5 hz-align-center", "hz-bg-surface")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-1">130+</div>
              <div className={cn("hz-t-sm", "hz-fg")}>Research Papers</div>
            </div>
            <div className={cn("hz-bordered hz-r-lg hz-p-5 hz-align-center", "hz-bg-surface")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-1">41+</div>
              <div className={cn("hz-t-sm", "hz-fg")}>AI Models</div>
            </div>
            <div className={cn("hz-bordered hz-r-lg hz-p-5 hz-align-center", "hz-bg-surface")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-1">$1B+</div>
              <div className={cn("hz-t-sm", "hz-fg")}>Client Revenue</div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn("hz-bordered hz-r-lg hz-p-5 hz-mb-6", "hz-bg-surface")}
          >
            <div className="hz-grid hz-grid-4 hz-gap-4">
              {/* Search */}
              <div className="hz-rel">
                <Search className={cn("hz-center-y hz-sq-3 hz-abs", "hz-fg")} />
                <input
                  type="text"
                  placeholder="Search roles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "hz-w-full hz-bordered hz-r-lg hz-px-6 hz-px-4 hz-py-3",
                    "hz-bg-surface hz-fg"
                  )}
                />
              </div>

              {/* Team Filter */}
              <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                <SelectTrigger className="hz-w-full hz-r-lg">
                  <Building2 className="hz-sq-2 hz-none hz-fg hz-mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {teams.map(team => (
                    <SelectItem key={team} value={team}>{team}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="hz-w-full hz-r-lg">
                  <MapPin className="hz-sq-2 hz-none hz-fg hz-mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(loc => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Results Count */}
          <div className={cn("hz-mb-5", "hz-fg")}>
            {filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'} found
          </div>

          {/* Job Listings */}
          <div className="hz-stack-6">
            {Object.entries(groupedJobs).map(([team, teamJobs], groupIndex) => (
              <motion.div
                key={team}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * Math.min(groupIndex, 3) }}
              >
                <div className="hz-row hz-ai-center hz-jc-between hz-mb-4">
                  <h3 className="hz-t-xl hz-w-semibold">{team}</h3>
                  <span className={cn("hz-t-sm", "hz-fg")}>{teamJobs.length} {teamJobs.length === 1 ? 'role' : 'roles'}</span>
                </div>
                <div className={cn("hz-bordered hz-r-lg hz-clip", "hz-bg-surface")}>
                  {teamJobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className={cn("hz-w-full hz-row hz-ai-center hz-jc-between hz-p-4 hz-transition hz-align-left", "hz-hoverable")}
                    >
                      <div className="hz-grow">
                        <div className="hz-row hz-ai-center hz-gap-2 hz-mb-1">
                          <span className="hz-w-medium hz-truncate">
                            {job.title}
                          </span>
                          {job.new && (
                            <span className={cn("hz-px-2 hz-py-1 hz-t-xs hz-w-medium hz-r-md", "hz-bg-inverse")}>
                              New
                            </span>
                          )}
                        </div>
                        <div className={cn("hz-row hz-ai-center hz-gap-4 hz-t-sm", "hz-fg")}>
                          <span className="hz-row hz-ai-center hz-gap-1">
                            <MapPin className="hz-sq-2" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="hz-row hz-ai-center hz-gap-2 hz-invisible hz-transition">
                        <span className="hz-t-sm">View</span>
                        <ExternalLink className="hz-sq-2" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="hz-align-center hz-py-7">
              <p className={cn("hz-mb-4", "hz-fg")}>No roles match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTeam("All Teams");
                  setSelectedLocation("All Locations");
                }}
                className="hz-underline"
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
            className={cn("hz-mt-7 hz-bordered hz-r-lg hz-p-6 hz-align-center", "hz-bg-surface")}
          >
            <h2 className="hz-t-2xl hz-w-bold hz-mb-4">Don't see the right role?</h2>
            <p className={cn("hz-container-narrow hz-mw-md hz-mb-5", "hz-fg")}>
              We're always looking for exceptional talent. Schedule a call to discuss how you could contribute to our mission.
            </p>
            <div className="hz-col-row hz-gap-4 hz-jc-center">
              <a
                href="https://cal.com/hanzo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hz-btn hz-btn-ghost hz-btn-lg hz-gap-2 hz-transition",
                  "hz-bg-inverse hz-hoverable"
                )}
              >
                <Calendar className="hz-sq-3" />
                Schedule a Call
              </a>
              <a
                href="mailto:careers@hanzo.ai?subject=General Application"
                className={cn(
                  "hz-btn hz-btn-ghost hz-btn-lg hz-gap-2 hz-transition",
                  "hz-fg hz-hoverable"
                )}
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
            className="hz-mt-7"
          >
            <h2 className="hz-t-2xl hz-w-bold hz-mb-6 hz-align-center">Why Hanzo?</h2>
            <div className="hz-grid hz-grid-3 hz-gap-5">
              <div className={cn("hz-bordered hz-r-lg hz-p-5", "hz-bg-surface")}>
                <Brain className="hz-sq-5 hz-mb-4" />
                <h3 className="hz-w-semibold hz-mb-2">Frontier Research</h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  Work on frontier AI models, post-quantum cryptography, and novel consensus protocols alongside world-class researchers.
                </p>
              </div>
              <div className={cn("hz-bordered hz-r-lg hz-p-5", "hz-bg-surface")}>
                <DollarSign className="hz-sq-5 hz-mb-4" />
                <h3 className="hz-w-semibold hz-mb-2">Competitive Compensation</h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  Competitive salary, equity, comprehensive health benefits, and 401(k) matching.
                </p>
              </div>
              <div className={cn("hz-bordered hz-r-lg hz-p-5", "hz-bg-surface")}>
                <Laptop className="hz-sq-5 hz-mb-4" />
                <h3 className="hz-w-semibold hz-mb-2">Flexible Work</h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  Remote-friendly culture with offices in San Francisco, Los Angeles, New York, Kansas City, Vancouver, Marbella, and Paris.
                </p>
              </div>
              <div className={cn("hz-bordered hz-r-lg hz-p-5", "hz-bg-surface")}>
                <BookOpen className="hz-sq-5 hz-mb-4" />
                <h3 className="hz-w-semibold hz-mb-2">Learning & Growth</h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  Generous learning budget, conference attendance, and opportunities to publish research.
                </p>
              </div>
              <div className={cn("hz-bordered hz-r-lg hz-p-5", "hz-bg-surface")}>
                <Zap className="hz-sq-5 hz-mb-4" />
                <h3 className="hz-w-semibold hz-mb-2">Meaningful Impact</h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  Your work directly contributes to building safe, beneficial AI systems that will shape the future.
                </p>
              </div>
              <div className={cn("hz-bordered hz-r-lg hz-p-5", "hz-bg-surface")}>
                <Users className="hz-sq-5 hz-mb-4" />
                <h3 className="hz-w-semibold hz-mb-2">Diverse Team</h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
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
            className={cn("hz-mt-7 hz-bordered hz-r-lg hz-p-6", "hz-bg-surface")}
          >
            <h2 className="hz-t-2xl hz-w-bold hz-mb-5">How We're Different</h2>
            <div className="hz-prose">
              <p className={cn("hz-mb-4", "hz-fg")}>
                We believe that the highest-impact AI research requires combining rigorous science with practical engineering.
                At Hanzo, we work as a cohesive team on large-scale research efforts across AI, cryptography, and distributed systems.
              </p>
              <p className={cn("hz-mb-4", "hz-fg")}>
                Our research spans multiple domains: from frontier AI models (the Zen family) to post-quantum cryptography,
                from novel consensus protocols to privacy-preserving computation. We publish openly and contribute to open source.
              </p>
              <p className={cn("hz-fg")}>
                We value impact over individual publications. We're looking for people who want to work on hard problems
                that matter and who can collaborate effectively across disciplines.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
