const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Create a document
const doc = new PDFDocument({
  size: 'LETTER',
  layout: 'landscape',
  margin: 50
});

// Pipe to a file
const outputPath = path.join(__dirname, '..', 'public', 'hanzo-defense-capabilities.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Helper functions
const addSlide = (title, content) => {
  doc.addPage();
  doc.fontSize(28).font('Helvetica-Bold').text(title, 50, 50);
  doc.fontSize(14).font('Helvetica').text(content, 50, 120, {
    width: 650,
    align: 'left'
  });
};

// Title Slide
doc.fontSize(36).font('Helvetica-Bold').text('HANZO INDUSTRIES', 50, 200, { align: 'center' });
doc.fontSize(24).font('Helvetica').text('Defense & Intelligence Solutions', 50, 250, { align: 'center' });
doc.fontSize(16).text('Capabilities Overview', 50, 300, { align: 'center' });
doc.fontSize(12).text('Techstars-Backed • Security Focused • Mission Ready', 50, 350, { align: 'center' });

// About Slide
addSlide('About Hanzo Industries', 
`Hanzo Industries delivers cutting-edge defense and intelligence solutions, transforming complex operational challenges into strategic advantages through innovative AI, secure cloud infrastructure, and mission-focused engineering.

• Techstars-backed technology company
• 100+ enterprise clients
• $10M+ in contracts secured
• Security-first approach to all solutions
• Compliance-ready infrastructure

Headquarters: Los Angeles, CA
Contact: info@hanzo.industries`);

// Core Services
addSlide('Core Services',
`AI & Machine Learning
• Advanced AI solutions for predictive analytics
• Natural language processing for intelligence analysis
• Computer vision for surveillance and reconnaissance
• Automated threat detection and classification

Data Engineering
• Secure data pipelines for mission-critical systems
• Real-time processing and analytics
• Multi-source data fusion
• Scalable data architecture

Secure Cloud Solutions
• NIST-compliant cloud infrastructure
• Zero-trust security architecture
• Containerized deployments
• DevSecOps practices

Cybersecurity
• 24/7 threat monitoring
• Incident response capabilities
• Security operations center (SOC) services
• Compliance and risk management`);

// Defense Solutions
addSlide('Defense Solutions',
`Intelligence Analysis Platform
• Multi-source data fusion and analysis
• Real-time processing and threat modeling
• Geospatial analysis capabilities
• Pattern recognition and anomaly detection

Secure Communications Suite
• Quantum-resistant encryption
• Zero-knowledge architecture
• Multi-factor authentication
• Comprehensive audit logging

Mission Planning System
• AI-powered operational planning
• Scenario modeling and simulation
• Resource optimization
• Real-time collaboration tools

Cyber Defense Platform
• Advanced threat detection
• Automated response systems
• Continuous threat hunting
• Compliance reporting`);

// Why Hanzo
addSlide('Why Choose Hanzo Industries',
`Technical Excellence
• Cutting-edge AI/ML capabilities
• Cloud-native architecture
• Security-by-design approach
• Continuous innovation

Mission Focus
• Understanding of defense requirements
• Agile development methodology
• Rapid deployment capabilities
• 24/7 support availability

Proven Track Record
• Successful enterprise deployments
• Strong client relationships
• Consistent delivery excellence
• Compliance-ready solutions

Strategic Partnership
• Long-term commitment
• Flexible engagement models
• Transparent communication
• Shared success metrics`);

// Contact Slide
addSlide('Contact Information',
`Corporate Headquarters
1824 S. Fairfax Ave
Los Angeles, CA 90019

Leadership Contacts:

Defense Division
• Antje Karina Worring, COO - a@hanzo.industries
• Leigh Ferreira, VP Defense Solutions - leigh@hanzo.industries

Commercial Division  
• Zach Kelling, CEO - zach@hanzo.industries
• Michael Kelling, President - michael@hanzo.industries

General Inquiries
• Email: info@hanzo.industries
• Phone: +1 (913) 777-4443
• Web: hanzo.industries

Ready to secure your mission.`);

// Finalize
doc.end();

console.log('PDF generated successfully at:', outputPath);