import {
  Code2, Paintbrush, Settings, MessagesSquare, HelpCircle,
  ChartBar, Bot, DollarSign, Shield, Binary, Database,
  FileText, Users, Megaphone, Briefcase, Scale,
  Search, TestTube, Rocket, Brain
} from "lucide-react";

// 4x4 Autonomous AI Workforce
// BUILD (Engineering) | SHIP (Product) | GROW (Go-to-Market) | RUN (Operations)

export const teamDepartments = [
  { key: "build", label: "Build", description: "Engineering & infrastructure" },
  { key: "ship", label: "Ship", description: "Product & quality" },
  { key: "grow", label: "Grow", description: "Go-to-market & growth" },
  { key: "run", label: "Run", description: "Operations & strategy" },
] as const;

export const teamMembers = {
  // ── BUILD (Engineering) ──────────────────────────────────
  dev: {
    name: "Dev",
    title: "Meet Dev, Your AI Engineer",
    role: "Software Engineering",
    department: "build",
    description: "Agentic coding agent — writes, reviews, refactors, and ships production code with full codebase context.",
    gradient: "from-blue-500 to-cyan-500",
    mainIcon: Code2,
    features: [
      {
        icon: Code2,
        color: "text-blue-400",
        title: "Full-Stack Development",
        description: "Writes production code across frontend, backend, and infrastructure."
      },
      {
        icon: Bot,
        color: "text-cyan-400",
        title: "Code Review & Refactoring",
        description: "Reviews PRs, identifies issues, and refactors for maintainability."
      },
      {
        icon: Binary,
        color: "text-blue-400",
        title: "Architecture & Design",
        description: "Designs system architecture and makes technical decisions."
      }
    ]
  },
  ops: {
    name: "Ops",
    title: "Meet Ops, Your AI DevOps Engineer",
    role: "Infrastructure & DevOps",
    department: "build",
    description: "Manages deployment, monitoring, scaling, and incident response across cloud infrastructure.",
    gradient: "from-yellow-500 to-orange-500",
    mainIcon: Settings,
    features: [
      {
        icon: Settings,
        color: "text-yellow-400",
        title: "CI/CD & Deployment",
        description: "Automates build pipelines, deployments, and rollbacks."
      },
      {
        icon: Rocket,
        color: "text-orange-400",
        title: "Cloud Infrastructure",
        description: "Manages Kubernetes, containers, and cloud resources."
      },
      {
        icon: ChartBar,
        color: "text-yellow-400",
        title: "Monitoring & Incidents",
        description: "Monitors system health and responds to incidents automatically."
      }
    ]
  },
  sec: {
    name: "Sec",
    title: "Meet Sec, Your AI Security Engineer",
    role: "Security & Compliance",
    department: "build",
    description: "Zero-trust security, vulnerability scanning, audit trails, and compliance automation.",
    gradient: "from-red-500 to-orange-500",
    mainIcon: Shield,
    features: [
      {
        icon: Shield,
        color: "text-red-400",
        title: "Threat Detection",
        description: "Scans for vulnerabilities and monitors for security threats."
      },
      {
        icon: Scale,
        color: "text-orange-400",
        title: "Compliance Automation",
        description: "Enforces security policies and generates audit reports."
      },
      {
        icon: Settings,
        color: "text-red-400",
        title: "Zero-Trust Operations",
        description: "Implements and maintains zero-trust security architecture."
      }
    ]
  },
  data: {
    name: "Data",
    title: "Meet Data, Your AI Data Engineer",
    role: "Data & Analytics",
    department: "build",
    description: "Builds data pipelines, runs analytics, trains models, and extracts insights from complex datasets.",
    gradient: "from-blue-500 to-indigo-500",
    mainIcon: Database,
    features: [
      {
        icon: Database,
        color: "text-blue-400",
        title: "Data Pipelines",
        description: "Builds and maintains ETL pipelines and data infrastructure."
      },
      {
        icon: ChartBar,
        color: "text-indigo-400",
        title: "Analytics & ML",
        description: "Runs analysis, builds models, and generates insights."
      },
      {
        icon: Brain,
        color: "text-blue-400",
        title: "AI/ML Operations",
        description: "Manages model training, evaluation, and deployment pipelines."
      }
    ]
  },

  // ── SHIP (Product) ───────────────────────────────────────
  des: {
    name: "Des",
    title: "Meet Des, Your AI Designer",
    role: "Design & UX",
    department: "ship",
    description: "Creates interfaces, prototypes, design systems, and brand assets with pixel-perfect precision.",
    gradient: "from-purple-500 to-pink-500",
    mainIcon: Paintbrush,
    features: [
      {
        icon: Paintbrush,
        color: "text-purple-400",
        title: "UI/UX Design",
        description: "Creates intuitive interfaces and seamless user experiences."
      },
      {
        icon: Bot,
        color: "text-pink-400",
        title: "Design Systems",
        description: "Builds and maintains consistent component libraries and brand guidelines."
      },
      {
        icon: Settings,
        color: "text-purple-400",
        title: "Prototyping",
        description: "Builds interactive prototypes to validate concepts and flows."
      }
    ]
  },
  pm: {
    name: "PM",
    title: "Meet PM, Your AI Product Manager",
    role: "Product Management",
    department: "ship",
    description: "Owns roadmap, writes specs, prioritizes features, and coordinates cross-functional execution.",
    gradient: "from-indigo-500 to-violet-500",
    mainIcon: Briefcase,
    features: [
      {
        icon: Briefcase,
        color: "text-indigo-400",
        title: "Roadmap & Strategy",
        description: "Defines product vision, roadmap, and feature priorities."
      },
      {
        icon: FileText,
        color: "text-violet-400",
        title: "Specs & Requirements",
        description: "Writes detailed specifications and acceptance criteria."
      },
      {
        icon: Users,
        color: "text-indigo-400",
        title: "Cross-Functional Coordination",
        description: "Aligns engineering, design, and go-to-market teams."
      }
    ]
  },
  qa: {
    name: "QA",
    title: "Meet QA, Your AI Test Engineer",
    role: "Quality Assurance",
    department: "ship",
    description: "Writes and runs tests, catches regressions, validates builds, and gates releases.",
    gradient: "from-teal-500 to-cyan-500",
    mainIcon: TestTube,
    features: [
      {
        icon: TestTube,
        color: "text-teal-400",
        title: "Test Automation",
        description: "Writes and maintains unit, integration, and E2E test suites."
      },
      {
        icon: Search,
        color: "text-cyan-400",
        title: "Bug Detection",
        description: "Identifies regressions, edge cases, and performance issues."
      },
      {
        icon: Shield,
        color: "text-teal-400",
        title: "Release Validation",
        description: "Gates deployments with comprehensive quality checks."
      }
    ]
  },
  doc: {
    name: "Doc",
    title: "Meet Doc, Your AI Technical Writer",
    role: "Documentation",
    department: "ship",
    description: "Writes API docs, guides, tutorials, and knowledge base articles that developers actually read.",
    gradient: "from-slate-500 to-gray-500",
    mainIcon: FileText,
    features: [
      {
        icon: FileText,
        color: "text-slate-400",
        title: "API Documentation",
        description: "Generates and maintains comprehensive API references."
      },
      {
        icon: Bot,
        color: "text-gray-400",
        title: "Guides & Tutorials",
        description: "Creates step-by-step guides and onboarding documentation."
      },
      {
        icon: Search,
        color: "text-slate-400",
        title: "Knowledge Base",
        description: "Builds searchable knowledge bases and FAQs."
      }
    ]
  },

  // ── GROW (Go-to-Market) ──────────────────────────────────
  mark: {
    name: "Mark",
    title: "Meet Mark, Your AI Marketing Lead",
    role: "Marketing",
    department: "grow",
    description: "Runs campaigns, creates content, optimizes SEO, manages social, and tracks attribution.",
    gradient: "from-green-500 to-emerald-500",
    mainIcon: Megaphone,
    features: [
      {
        icon: Megaphone,
        color: "text-green-400",
        title: "Campaigns & Content",
        description: "Creates and executes multi-channel marketing campaigns."
      },
      {
        icon: ChartBar,
        color: "text-emerald-400",
        title: "SEO & Analytics",
        description: "Optimizes search rankings and tracks conversion metrics."
      },
      {
        icon: MessagesSquare,
        color: "text-green-400",
        title: "Social & Community",
        description: "Manages social presence and community engagement."
      }
    ]
  },
  sales: {
    name: "Sales",
    title: "Meet Sales, Your AI Sales Agent",
    role: "Sales & Revenue",
    department: "grow",
    description: "Qualifies leads, runs outreach, demos products, writes proposals, and manages pipeline.",
    gradient: "from-emerald-500 to-green-500",
    mainIcon: DollarSign,
    features: [
      {
        icon: DollarSign,
        color: "text-emerald-400",
        title: "Pipeline & Outreach",
        description: "Qualifies leads, runs sequences, and manages deal flow."
      },
      {
        icon: Users,
        color: "text-green-400",
        title: "Demos & Proposals",
        description: "Delivers product demos and generates custom proposals."
      },
      {
        icon: ChartBar,
        color: "text-emerald-400",
        title: "Revenue Analytics",
        description: "Tracks metrics, forecasts revenue, and optimizes conversion."
      }
    ]
  },
  su: {
    name: "Su",
    title: "Meet Su, Your AI Support Agent",
    role: "Support & Success",
    department: "grow",
    description: "Handles tickets, onboards users, resolves issues, and drives retention through proactive support.",
    gradient: "from-pink-500 to-rose-500",
    mainIcon: HelpCircle,
    features: [
      {
        icon: HelpCircle,
        color: "text-pink-400",
        title: "Ticket Resolution",
        description: "Triages and resolves support tickets across all channels."
      },
      {
        icon: Users,
        color: "text-rose-400",
        title: "Onboarding & Success",
        description: "Guides new users through setup and drives adoption."
      },
      {
        icon: MessagesSquare,
        color: "text-pink-400",
        title: "Proactive Support",
        description: "Monitors for issues and reaches out before users ask."
      }
    ]
  },
  pr: {
    name: "PR",
    title: "Meet PR, Your AI Communications Lead",
    role: "Communications & PR",
    department: "grow",
    description: "Writes press releases, manages announcements, handles media, and protects brand reputation.",
    gradient: "from-sky-500 to-blue-500",
    mainIcon: MessagesSquare,
    features: [
      {
        icon: MessagesSquare,
        color: "text-sky-400",
        title: "Press & Announcements",
        description: "Drafts press releases, blog posts, and public announcements."
      },
      {
        icon: Megaphone,
        color: "text-blue-400",
        title: "Media Relations",
        description: "Manages journalist outreach and media coverage."
      },
      {
        icon: Shield,
        color: "text-sky-400",
        title: "Brand & Reputation",
        description: "Monitors brand sentiment and manages crisis communications."
      }
    ]
  },

  // ── RUN (Operations) ─────────────────────────────────────
  fin: {
    name: "Fin",
    title: "Meet Fin, Your AI Finance Lead",
    role: "Finance & Accounting",
    department: "run",
    description: "Handles billing, invoicing, forecasting, cost optimization, and financial reporting.",
    gradient: "from-green-500 to-teal-500",
    mainIcon: DollarSign,
    features: [
      {
        icon: DollarSign,
        color: "text-green-400",
        title: "Billing & Invoicing",
        description: "Manages billing cycles, invoices, and payment processing."
      },
      {
        icon: ChartBar,
        color: "text-teal-400",
        title: "Forecasting & Reporting",
        description: "Builds financial models and generates executive reports."
      },
      {
        icon: Settings,
        color: "text-green-400",
        title: "Cost Optimization",
        description: "Identifies savings and optimizes operational costs."
      }
    ]
  },
  legal: {
    name: "Legal",
    title: "Meet Legal, Your AI Legal Advisor",
    role: "Legal & Compliance",
    department: "run",
    description: "Reviews contracts, tracks regulatory requirements, manages IP, and assesses risk.",
    gradient: "from-amber-500 to-yellow-500",
    mainIcon: Scale,
    features: [
      {
        icon: Scale,
        color: "text-amber-400",
        title: "Contract Review",
        description: "Reviews and drafts contracts, NDAs, and agreements."
      },
      {
        icon: Shield,
        color: "text-yellow-400",
        title: "Regulatory Compliance",
        description: "Tracks regulations and ensures organizational compliance."
      },
      {
        icon: FileText,
        color: "text-amber-400",
        title: "IP & Risk",
        description: "Manages intellectual property and assesses legal risk."
      }
    ]
  },
  hr: {
    name: "HR",
    title: "Meet HR, Your AI People Lead",
    role: "People & Recruiting",
    department: "run",
    description: "Sources candidates, screens resumes, onboards hires, and manages team operations.",
    gradient: "from-violet-500 to-purple-500",
    mainIcon: Users,
    features: [
      {
        icon: Users,
        color: "text-violet-400",
        title: "Recruiting & Sourcing",
        description: "Sources candidates, screens applications, and schedules interviews."
      },
      {
        icon: Bot,
        color: "text-purple-400",
        title: "Onboarding",
        description: "Guides new hires through setup, access, and orientation."
      },
      {
        icon: ChartBar,
        color: "text-violet-400",
        title: "Team Operations",
        description: "Tracks performance, manages reviews, and supports culture."
      }
    ]
  },
  chief: {
    name: "Chief",
    title: "Meet Chief, Your AI Strategy Lead",
    role: "Strategy & Coordination",
    department: "run",
    description: "Sets OKRs, coordinates cross-functional work, runs planning cycles, and makes executive decisions.",
    gradient: "from-gray-500 to-slate-600",
    mainIcon: Brain,
    features: [
      {
        icon: Brain,
        color: "text-gray-400",
        title: "Strategic Planning",
        description: "Defines goals, OKRs, and quarterly planning cycles."
      },
      {
        icon: Users,
        color: "text-slate-400",
        title: "Cross-Functional Coordination",
        description: "Aligns all departments and resolves blockers."
      },
      {
        icon: Rocket,
        color: "text-gray-400",
        title: "Executive Decisions",
        description: "Synthesizes data and makes high-stakes operational calls."
      }
    ]
  },
};

export type TeamMemberId = keyof typeof teamMembers;
