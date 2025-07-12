import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard, SectionTitle, GradientText, TechBadge, ClassicButton } from '../styles/StyledComponents';
import { FaCode, FaRobot, FaChartLine, FaShieldAlt, FaGlobe, FaLightbulb } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../context/ThemeContext';

const customDarkTheme = {
  'code[class*="language-"]': {
    color: '#d4d4d4',
    background: '#1e1e1e',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: '0.95rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.6',
    tabSize: 4,
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#d4d4d4',
    background: '#1e1e1e',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: '0.95rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.6',
    tabSize: 4,
    hyphens: 'none',
    padding: '1em',
    margin: '0',
    overflow: 'auto',
  },
  comment: {
    color: '#6A9955',
    fontStyle: 'italic',
  },
  prolog: {
    color: '#6A9955',
    fontStyle: 'italic',
  },
  doctype: {
    color: '#6A9955',
    fontStyle: 'italic',
  },
  cdata: {
    color: '#6A9955',
    fontStyle: 'italic',
  },
  punctuation: {
    color: '#D4D4D4',
  },
  '.namespace': {
    opacity: '.7',
  },
  property: {
    color: '#9CDCFE',
  },
  tag: {
    color: '#569CD6',
  },
  boolean: {
    color: '#569CD6',
  },
  number: {
    color: '#B5CEA8',
  },
  constant: {
    color: '#9CDCFE',
  },
  symbol: {
    color: '#B5CEA8',
  },
  deleted: {
    color: '#CE9178',
  },
  selector: {
    color: '#D7BA7D',
  },
  'attr-name': {
    color: '#9CDCFE',
  },
  string: {
    color: '#CE9178',
  },
  char: {
    color: '#CE9178',
  },
  builtin: {
    color: '#CE9178',
  },
  inserted: {
    color: '#B5CEA8',
  },
  operator: {
    color: '#D4D4D4',
  },
  entity: {
    color: '#569CD6',
    cursor: 'help',
  },
  url: {
    color: '#569CD6',
  },
  '.language-css .token.string': {
    color: '#D4D4D4',
  },
  '.style .token.string': {
    color: '#D4D4D4',
  },
  atrule: {
    color: '#C586C0',
  },
  'attr-value': {
    color: '#CE9178',
  },
  keyword: {
    color: '#569CD6',
    fontWeight: 'bold',
  },
  function: {
    color: '#DCDCAA',
  },
  'class-name': {
    color: '#4EC9B0',
  },
  regex: {
    color: '#D16969',
  },
  important: {
    color: '#569CD6',
    fontWeight: 'bold',
  },
  variable: {
    color: '#9CDCFE',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};

const ServicesContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  background: var(--bg-cream);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServiceTiers = styled.div`
  margin-top: 3rem;
`;

const TierSection = styled(motion.div)`
  margin-bottom: 4rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, var(--accent-red), var(--text-gray));
    opacity: 0.5;
  }
`;

const TierHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  h3 {
    font-size: 2rem;
    margin: 0;
    font-family: 'Playfair Display', serif;
    color: var(--text-black);
  }
  
  .tier-number {
    font-family: 'IBM Plex Mono', monospace;
    color: var(--accent-red);
    font-size: 1rem;
    opacity: 0.7;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ServiceCardExtended = styled(ServiceCard)`
  cursor: pointer;
  position: relative;
  
  .icon {
    font-size: 2.5rem;
    color: var(--accent-red);
    margin-bottom: 1rem;
  }
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
  }
  
  .description {
    color: var(--text-gray);
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  
  .tech-stack {
    margin-top: auto;
  }
`;

const ExpandedContentUpdated = styled(motion.div)`
  position: relative;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  background: var(--bg-cream);
  border: 2px solid var(--border-dark);
  border-radius: 0;
  padding: 3rem;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  pointer-events: all;
  
  /* Ensure scrollbar doesn't affect layout */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--bg-light);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--text-gray);
    border-radius: 4px;
  }
  
  /* Vintage paper effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 30px,
        rgba(0, 0, 0, 0.02) 30px,
        rgba(0, 0, 0, 0.02) 31px
      );
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem;
    max-height: 95vh;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-black);
  font-size: 2rem;
  cursor: pointer;
  font-family: 'Crimson Text', serif;
  font-weight: 400;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--accent-red);
    transform: rotate(90deg);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  pointer-events: all;
`;

const AnimatedCodeBlock = styled(motion.div)`
  position: relative;
  overflow: hidden;
  margin: 1rem 0;
  
  pre {
    margin: 0 !important;
    padding: 1.5rem !important;
    background: #1e1e1e !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    
    code {
      font-family: 'IBM Plex Mono', monospace !important;
      font-size: 0.95rem !important;
      line-height: 1.6 !important;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }
  }
  
  /* Enhance syntax colors */
  .token.comment {
    color: #6A9955 !important;
    font-style: italic;
  }
  
  .token.string {
    color: #CE9178 !important;
  }
  
  .token.keyword {
    color: #569CD6 !important;
    font-weight: bold;
  }
  
  .token.function {
    color: #DCDCAA !important;
  }
  
  .token.operator {
    color: #D4D4D4 !important;
  }
  
  .token.class-name {
    color: #4EC9B0 !important;
  }
  
  .token.number {
    color: #B5CEA8 !important;
  }
  
  .token.punctuation {
    color: #D4D4D4 !important;
  }
  
  .token.property {
    color: #9CDCFE !important;
  }
  
  .token.parameter {
    color: #9CDCFE !important;
  }
  
  .token.decorator {
    color: #DCDCAA !important;
  }
  
  /* Animation shimmer effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    animation: shimmer 2s ease-out;
  }
  
  @keyframes shimmer {
    to {
      left: 100%;
    }
  }
`;

const services = [
  {
    tier: 1,
    tierName: "Digital Foundation & Authority",
    services: [
      {
        icon: <FaCode />,
        title: "BCI-Compliant Law Firm Architecture",
        description: "Bespoke, mobile-first websites engineered as powerful client acquisition engines with optimized lead capture.",
        details: "We build law firm websites that don't just look professional—they perform. Our sites are engineered to convert visitors into clients with strategic CTAs, trust signals, and seamless user experiences.",
        tech: ["React", "Next.js", "Tailwind CSS", "SEO Optimization"],
        code: `// Example: Dynamic practice area component
const PracticeArea = ({ area }) => {
  return (
    <motion.div 
      className="practice-card"
      whileHover={{ scale: 1.05 }}
    >
      <h3>{area.title}</h3>
      <p>{area.description}</p>
      <ContactForm area={area.id} />
    </motion.div>
  );
};`
      },
      {
        icon: <FaChartLine />,
        title: "Content & SEO Engineering",
        description: "Systematic, engineering-led approach to content, including foundational SEO and authoritative whitepapers.",
        details: "We don't just write content—we engineer it for maximum visibility and authority. Our data-driven approach ensures your firm ranks for the searches that matter.",
        tech: ["Technical SEO", "Content Strategy", "Analytics", "Keyword Research"],
        code: `// SEO metadata generation
export const generateMetadata = (page) => ({
  title: \`\${page.title} | Top Law Firm in \${page.location}\`,
  description: page.excerpt,
  openGraph: {
    title: page.title,
    description: page.excerpt,
    images: [page.featuredImage],
  },
  schema: generateLegalSchema(page)
});`
      }
    ]
  },
  {
    tier: 2,
    tierName: "Automation & Intelligence",
    services: [
      {
        icon: <FaRobot />,
        title: "AI Legal Assistant Deployment",
        description: "Custom-built RAG chatbots trained securely on your firm's private documents to automate client intake.",
        details: "Transform your knowledge base into an AI assistant that handles client queries 24/7, qualifies leads, and provides instant, accurate information based on your firm's expertise.",
        tech: ["LangChain", "RAG", "Vector DB", "Custom LLM"],
        code: `// RAG implementation for legal queries
const legalAssistant = new RAGChain({
  vectorStore: await ChromaDB.fromDocuments(firmDocs),
  llm: new OpenAI({ 
    temperature: 0.2,
    modelName: "gpt-4" 
  }),
  retrievalQA: {
    k: 5,
    scoreThreshold: 0.8
  }
});`
      },
      {
        icon: <FaShieldAlt />,
        title: "Compliance Automation Systems",
        description: "High-ROI tools like cross-border compliance calculators and automated privacy policy generators.",
        details: "Stop manually updating compliance documents. Our automation systems keep your firm compliant across jurisdictions with real-time updates and intelligent document generation.",
        tech: ["Node.js", "API Integration", "Database Design", "Automation"],
        code: `// Automated compliance checker
async function checkCompliance(userData) {
  const jurisdictions = await detectJurisdictions(userData);
  const requirements = await fetchRequirements(jurisdictions);
  
  return {
    gdpr: checkGDPR(userData, requirements.eu),
    ccpa: checkCCPA(userData, requirements.california),
    recommendations: generateCompliance(requirements)
  };
}`
      }
    ]
  },
  {
    tier: 3,
    tierName: "Advanced Consulting & Prototyping",
    services: [
      {
        icon: <FaLightbulb />,
        title: "Legal-Tech MVP Development",
        description: "End-to-end guidance from concept to reality: wireframing, prototypes, and functional backends.",
        details: "Have an idea for a legal tech product? We take you from napkin sketch to working MVP, handling everything from user research to deployment.",
        tech: ["Figma", "FastAPI", "Supabase", "React Native"],
        code: `// FastAPI backend for legal tech MVP
@app.post("/api/case-analysis")
async def analyze_case(case: CaseInput):
    # Extract key information
    entities = await extract_entities(case.text)
    citations = await find_citations(case.text)
    
    # Generate insights
    analysis = await legal_ai.analyze(
        text=case.text,
        entities=entities,
        citations=citations
    )
    
    return CaseAnalysis(
        summary=analysis.summary,
        key_points=analysis.points,
        recommendations=analysis.recommendations
    )`
      },
      {
        icon: <FaGlobe />,
        title: "Regulatory Intelligence & Market Entry",
        description: "Data-driven compliance gap reports and market entry strategies for global expansion.",
        details: "Expanding internationally? We provide actionable intelligence on regulatory requirements, helping you navigate complex legal landscapes with confidence.",
        tech: ["Data Analysis", "Research", "Strategic Planning", "Risk Assessment"],
        code: `// Market entry analysis framework
const marketAnalysis = {
  regulatory: await analyzeRegulations(targetMarket),
  competitors: await mapCompetitiveLandscape(targetMarket),
  opportunities: identifyGaps(regulatory, competitors),
  
  strategy: {
    phase1: 'Establish compliance framework',
    phase2: 'Localize service offerings',
    phase3: 'Build strategic partnerships',
    timeline: generateTimeline(complexity)
  }
};`
      }
    ]
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { isDarkMode } = useTheme();

  return (
    <ServicesContainer id="services">
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle className="in-view">
            The Lex Root Service Stack
          </SectionTitle>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem' }}>
            From foundation to innovation, we deliver <GradientText>complete legal-tech solutions</GradientText>
          </p>
        </motion.div>

        <ServiceTiers>
          {services.map((tier, tierIndex) => (
            <TierSection
              key={tierIndex}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
            >
              <TierHeader>
                <h3>Tier {tier.tier}: {tier.tierName}</h3>
                <span className="tier-number">0{tier.tier}</span>
              </TierHeader>
              
              <ServicesGrid>
                {tier.services.map((service, index) => (
                  <ServiceCardExtended
                    key={index}
                    onClick={() => setSelectedService(service)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="icon">{service.icon}</div>
                    <h4>{service.title}</h4>
                    <p className="description">{service.description}</p>
                    <div className="tech-stack">
                      {service.tech.slice(0, 3).map((tech, idx) => (
                        <TechBadge key={idx}>{tech}</TechBadge>
                      ))}
                      {service.tech.length > 3 && (
                        <TechBadge>+{service.tech.length - 3} more</TechBadge>
                      )}
                    </div>
                  </ServiceCardExtended>
                ))}
              </ServicesGrid>
            </TierSection>
          ))}
        </ServiceTiers>

        <AnimatePresence>
          {selectedService && (
            <>
              <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
              />
              <ModalContainer>
                <ExpandedContentUpdated
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300
                  }}
                >
                  <ModalContent>
                    <CloseButton onClick={() => setSelectedService(null)}>×</CloseButton>
                    <div className="icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-red)' }}>
                      {selectedService.icon}
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif', color: 'var(--text-black)' }}>
                      {selectedService.title}
                    </h3>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-gray)', lineHeight: '1.8' }}>
                      {selectedService.details}
                    </p>
                    
                    <h4 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display, serif', color: 'var(--text-black)' }}>Technology Stack:</h4>
                    <div style={{ marginBottom: '2rem' }}>
                      {selectedService.tech.map((tech, idx) => (
                        <TechBadge key={idx}>{tech}</TechBadge>
                      ))}
                    </div>
                    
                    <h4 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display, serif', color: 'var(--text-black)' }}>Example Implementation:</h4>
                    <AnimatedCodeBlock
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <SyntaxHighlighter
                        language="javascript"
                        style={customDarkTheme}
                        customStyle={{
                          fontSize: '0.95rem',
                          borderRadius: '0',
                          margin: 0,
                          background: '#1e1e1e',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
                        }}
                        showLineNumbers={true}
                        lineNumberStyle={{
                          color: '#858585',
                          paddingRight: '1rem',
                          userSelect: 'none',
                          minWidth: '2.5em',
                        }}
                        wrapLines={true}
                        lineProps={{
                          style: { 
                            display: 'block',
                            width: '100%',
                          }
                        }}
                      >
                        {selectedService.code}
                      </SyntaxHighlighter>
                    </AnimatedCodeBlock>
                    
                    <ClassicButton
                      as="a"
                      href="https://calendly.com/heyjeetttt/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: '2rem' }}
                    >
                      Discuss This Service
                    </ClassicButton>
                  </ModalContent>
                </ExpandedContentUpdated>
              </ModalContainer>
            </>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection; 