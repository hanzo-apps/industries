import {
  Code2, Paintbrush, Settings, MessagesSquare, HelpCircle,
  ChartBar, Bot, DollarSign, Shield, Binary, Database,
  FileText, Users, Megaphone, Briefcase, Scale, Music, Film, Image,
  Rocket, Brain
} from "lucide-react";

// 4x4 Autonomous AI Workforce
// BUILD (Engineering) | CREATE (Creative) | SHIP (Product & Growth) | RUN (Operations)

export const teamDepartments = [
  { key: "build", label: "Build", description: "Engineering & infrastructure" },
  { key: "create", label: "Create", description: "Design & creative production" },
  { key: "ship", label: "Ship", description: "Product & growth" },
  { key: "run", label: "Run", description: "Operations & strategy" },
] as const;

export const teamMembers = {
  // ── BUILD (Engineering) ──────────────────────────────────
  dev: {
    name: "Dev",
    emoji: "\u{1F469}\u{200D}\u{1F4BB}",
    title: "Meet Dev, Your AI Engineer",
    role: "Software Engineering",
    department: "build",
    description: "Writes, reviews, refactors, and ships production code with full codebase context.",
    mainIcon: Code2,
    features: [
      { icon: Code2, title: "Full-Stack Development", description: "Writes production code across frontend, backend, and infrastructure." },
      { icon: Bot, title: "Code Review & Refactoring", description: "Reviews PRs, identifies issues, and refactors for maintainability." },
      { icon: Binary, title: "Architecture & Design", description: "Designs system architecture and makes technical decisions." }
    ]
  },
  opera: {
    name: "Opera",
    emoji: "\u{1F9D1}\u{200D}\u{1F527}",
    title: "Meet Opera, Your AI DevOps Engineer",
    role: "Infrastructure & DevOps",
    department: "build",
    description: "Manages deployment, monitoring, scaling, and incident response across cloud infrastructure.",
    mainIcon: Settings,
    features: [
      { icon: Settings, title: "CI/CD & Deployment", description: "Automates build pipelines, deployments, and rollbacks." },
      { icon: Rocket, title: "Cloud Infrastructure", description: "Manages Kubernetes, containers, and cloud resources." },
      { icon: ChartBar, title: "Monitoring & Incidents", description: "Monitors system health and responds to incidents automatically." }
    ]
  },
  kira: {
    name: "Kira",
    emoji: "\u{1F575}\u{FE0F}",
    title: "Meet Kira, Your AI Security Engineer",
    role: "Security & Compliance",
    department: "build",
    description: "Zero-trust security, vulnerability scanning, audit trails, and compliance automation.",
    mainIcon: Shield,
    features: [
      { icon: Shield, title: "Threat Detection", description: "Scans for vulnerabilities and monitors for security threats." },
      { icon: Scale, title: "Compliance Automation", description: "Enforces security policies and generates audit reports." },
      { icon: Settings, title: "Zero-Trust Operations", description: "Implements and maintains zero-trust security architecture." }
    ]
  },
  dax: {
    name: "Dax",
    emoji: "\u{1F9D1}\u{200D}\u{1F52C}",
    title: "Meet Dax, Your AI Data Engineer",
    role: "Data & Analytics",
    department: "build",
    description: "Builds data pipelines, runs analytics, trains models, and extracts insights from complex datasets.",
    mainIcon: Database,
    features: [
      { icon: Database, title: "Data Pipelines", description: "Builds and maintains ETL pipelines and data infrastructure." },
      { icon: ChartBar, title: "Analytics & ML", description: "Runs analysis, builds models, and generates insights." },
      { icon: Brain, title: "AI/ML Operations", description: "Manages model training, evaluation, and deployment pipelines." }
    ]
  },

  // ── CREATE (Creative Production) ───────────────────────────
  desi: {
    name: "Desi",
    emoji: "\u{1F9D1}\u{200D}\u{1F3A8}",
    title: "Meet Desi, Your AI Designer",
    role: "Design & UX",
    department: "create",
    description: "Creates interfaces, prototypes, design systems, and brand assets with pixel-perfect precision.",
    mainIcon: Paintbrush,
    features: [
      { icon: Paintbrush, title: "UI/UX Design", description: "Creates intuitive interfaces and seamless user experiences." },
      { icon: Bot, title: "Design Systems", description: "Builds and maintains consistent component libraries and brand guidelines." },
      { icon: Settings, title: "Prototyping", description: "Builds interactive prototypes to validate concepts and flows." }
    ]
  },
  art: {
    name: "Art",
    emoji: "\u{1F5BC}\u{FE0F}",
    title: "Meet Art, Your AI Visual Artist",
    role: "Visual Art & Illustration",
    department: "create",
    description: "Generates images, illustrations, concept art, and visual assets for any medium or style.",
    mainIcon: Image,
    features: [
      { icon: Image, title: "Image Generation", description: "Creates original illustrations, concept art, and visual assets." },
      { icon: Paintbrush, title: "Style & Branding", description: "Maintains visual consistency across brand touchpoints." },
      { icon: Bot, title: "Asset Production", description: "Produces marketing visuals, social graphics, and presentations." }
    ]
  },
  mu: {
    name: "Mu",
    emoji: "\u{1F3B5}",
    title: "Meet Mu, Your AI Music Producer",
    role: "Music & Audio",
    department: "create",
    description: "Composes music, produces audio, creates soundscapes, and handles sound design for any project.",
    mainIcon: Music,
    features: [
      { icon: Music, title: "Music Composition", description: "Composes original scores, jingles, and background music." },
      { icon: Settings, title: "Audio Production", description: "Mixes, masters, and produces broadcast-ready audio." },
      { icon: Bot, title: "Sound Design", description: "Creates sound effects, ambient audio, and sonic branding." }
    ]
  },
  fil: {
    name: "Fil",
    emoji: "\u{1F3AC}",
    title: "Meet Fil, Your AI Filmmaker",
    role: "Video & Film",
    department: "create",
    description: "Produces video content, edits footage, creates animations, and directs visual storytelling.",
    mainIcon: Film,
    features: [
      { icon: Film, title: "Video Production", description: "Shoots, edits, and produces video content for any platform." },
      { icon: Bot, title: "Animation & Motion", description: "Creates animations, motion graphics, and visual effects." },
      { icon: Megaphone, title: "Visual Storytelling", description: "Directs narrative content and brand films." }
    ]
  },

  // ── SHIP (Product & Growth) ────────────────────────────────
  mana: {
    name: "Mana",
    emoji: "\u{1F9D1}\u{200D}\u{1F4BC}",
    title: "Meet Mana, Your AI Product Manager",
    role: "Product Management",
    department: "ship",
    description: "Owns roadmap, writes specs, prioritizes features, and coordinates cross-functional execution.",
    mainIcon: Briefcase,
    features: [
      { icon: Briefcase, title: "Roadmap & Strategy", description: "Defines product vision, roadmap, and feature priorities." },
      { icon: FileText, title: "Specs & Requirements", description: "Writes detailed specifications and acceptance criteria." },
      { icon: Users, title: "Cross-Functional Coordination", description: "Aligns engineering, design, and go-to-market teams." }
    ]
  },
  doc: {
    name: "Doc",
    emoji: "\u270D\uFE0F",
    title: "Meet Doc, Your AI Technical Writer",
    role: "Documentation",
    department: "ship",
    description: "Writes API docs, guides, tutorials, and knowledge base articles that developers actually read.",
    mainIcon: FileText,
    features: [
      { icon: FileText, title: "API Documentation", description: "Generates and maintains comprehensive API references." },
      { icon: Bot, title: "Guides & Tutorials", description: "Creates step-by-step guides and onboarding documentation." },
      { icon: ChartBar, title: "Knowledge Base", description: "Builds searchable knowledge bases and FAQs." }
    ]
  },
  mark: {
    name: "Mark",
    emoji: "\u{1F4E3}",
    title: "Meet Mark, Your AI Marketing Lead",
    role: "Marketing",
    department: "ship",
    description: "Runs campaigns, creates content, optimizes SEO, manages social, and tracks attribution.",
    mainIcon: Megaphone,
    features: [
      { icon: Megaphone, title: "Campaigns & Content", description: "Creates and executes multi-channel marketing campaigns." },
      { icon: ChartBar, title: "SEO & Analytics", description: "Optimizes search rankings and tracks conversion metrics." },
      { icon: MessagesSquare, title: "Social & Community", description: "Manages social presence and community engagement." }
    ]
  },
  sal: {
    name: "Sal",
    emoji: "\u{1F91D}",
    title: "Meet Sal, Your AI Sales Agent",
    role: "Sales & Revenue",
    department: "ship",
    description: "Qualifies leads, runs outreach, demos products, writes proposals, and manages pipeline.",
    mainIcon: DollarSign,
    features: [
      { icon: DollarSign, title: "Pipeline & Outreach", description: "Qualifies leads, runs sequences, and manages deal flow." },
      { icon: Users, title: "Demos & Proposals", description: "Delivers product demos and generates custom proposals." },
      { icon: ChartBar, title: "Revenue Analytics", description: "Tracks metrics, forecasts revenue, and optimizes conversion." }
    ]
  },

  // ── RUN (Operations) ─────────────────────────────────────
  su: {
    name: "Su",
    emoji: "\u{1F481}",
    title: "Meet Su, Your AI Support Agent",
    role: "Support & Success",
    department: "run",
    description: "Handles tickets, onboards users, resolves issues, and drives retention through proactive support.",
    mainIcon: HelpCircle,
    features: [
      { icon: HelpCircle, title: "Ticket Resolution", description: "Triages and resolves support tickets across all channels." },
      { icon: Users, title: "Onboarding & Success", description: "Guides new users through setup and drives adoption." },
      { icon: MessagesSquare, title: "Proactive Support", description: "Monitors for issues and reaches out before users ask." }
    ]
  },
  fin: {
    name: "Fin",
    emoji: "\u{1F4B0}",
    title: "Meet Fin, Your AI Finance Lead",
    role: "Finance & Accounting",
    department: "run",
    description: "Handles billing, invoicing, forecasting, cost optimization, and financial reporting.",
    mainIcon: DollarSign,
    features: [
      { icon: DollarSign, title: "Billing & Invoicing", description: "Manages billing cycles, invoices, and payment processing." },
      { icon: ChartBar, title: "Forecasting & Reporting", description: "Builds financial models and generates executive reports." },
      { icon: Settings, title: "Cost Optimization", description: "Identifies savings and optimizes operational costs." }
    ]
  },
  le: {
    name: "Le",
    emoji: "\u2696\uFE0F",
    title: "Meet Le, Your AI Legal Advisor",
    role: "Legal & Compliance",
    department: "run",
    description: "Reviews contracts, tracks regulatory requirements, manages IP, and assesses risk.",
    mainIcon: Scale,
    features: [
      { icon: Scale, title: "Contract Review", description: "Reviews and drafts contracts, NDAs, and agreements." },
      { icon: Shield, title: "Regulatory Compliance", description: "Tracks regulations and ensures organizational compliance." },
      { icon: FileText, title: "IP & Risk", description: "Manages intellectual property and assesses legal risk." }
    ]
  },
  vi: {
    name: "Vi",
    emoji: "\u{1F469}\u{200D}\u{1F3A4}",
    title: "Meet Vi, Your AI Strategy Lead",
    role: "Strategy & Coordination",
    department: "run",
    description: "Sets OKRs, coordinates cross-functional work, runs planning cycles, and makes executive decisions.",
    mainIcon: Brain,
    features: [
      { icon: Brain, title: "Strategic Planning", description: "Defines goals, OKRs, and quarterly planning cycles." },
      { icon: Users, title: "Cross-Functional Coordination", description: "Aligns all departments and resolves blockers." },
      { icon: Rocket, title: "Executive Decisions", description: "Synthesizes data and makes high-stakes operational calls." }
    ]
  },
};

export type TeamMemberId = keyof typeof teamMembers;
