import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PaperCard, SectionTitle, GradientText, TechBadge, ClassicButton } from '../styles/StyledComponents';
import { FaExternalLinkAlt, FaGlobe, FaCode, FaChartLine } from 'react-icons/fa';

const PortfolioContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  background: linear-gradient(180deg, transparent 0%, var(--primary) 50%, transparent 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background: transparent;
  border: 2px solid ${props => props.$active ? 'var(--accent)' : 'var(--border)'};
  color: ${props => props.$active ? 'var(--accent)' : 'var(--text-body)'};
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  gap: 3rem;
  margin-top: 3rem;
`;

const CaseStudyCard = styled(PaperCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
`;

const CaseStudyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const MetricCard = styled.div`
  background: rgba(0, 245, 255, 0.05);
  border: 1px solid var(--accent);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  
  .value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
    font-family: 'Fira Code', monospace;
  }
  
  .label {
    font-size: 0.9rem;
    color: var(--text-body);
    margin-top: 0.5rem;
  }
`;

const TechStackSection = styled.div`
  margin-top: 2rem;
  
  h5 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--text-dim);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(0, 245, 255, 0.2);
  }
`;

const ProjectHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--border);
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    svg {
      color: var(--accent);
      font-size: 1.2rem;
    }
  }
  
  .project-type {
    color: var(--text-dim);
    font-size: 0.9rem;
  }
`;

const ProjectBody = styled.div`
  padding: 2rem;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const ProjectFooter = styled.div`
  padding: 1.5rem 2rem;
  background: rgba(0, 245, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const LiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const portfolioData = {
  caseStudies: [
    {
      title: "iCompliance at Intellect",
      category: "Compliance Engineering",
      challenge: "Scaling telehealth services globally faced an operational wall of conflicting international laws.",
      solution: "Architected and built a centralized internal regulatory intelligence system with real-time updates.",
      outcome: "Enabled compliant operations across 190+ countries, reducing time-to-market for new regions by 60%.",
      metrics: [
        { value: "190+", label: "Countries Covered" },
        { value: "60%", label: "Faster Deployment" },
        { value: "100%", label: "Compliance Rate" },
        { value: "24/7", label: "Real-time Updates" }
      ],
      tech: ["Python", "PostgreSQL", "REST API", "React", "Regulatory APIs"]
    },
    {
      title: "AI Legal Assistant POC",
      category: "AI & Automation",
      challenge: "Paralegals spending hours on repetitive client queries, reducing billable hours.",
      solution: "Deployed a custom RAG chatbot trained on the firm's case history and FAQs with secure data handling.",
      outcome: "Handled 500+ daily queries with 95% accuracy, freeing up 15+ hours of paralegal time per week.",
      metrics: [
        { value: "500+", label: "Daily Queries" },
        { value: "95%", label: "Accuracy Rate" },
        { value: "15hrs", label: "Time Saved/Week" },
        { value: "3sec", label: "Avg Response Time" }
      ],
      tech: ["LangChain", "ChromaDB", "OpenAI", "FastAPI", "Vector Search"]
    }
  ],
  liveProjects: [
    {
      title: "iCompliance",
      type: "Regulatory Tech",
      description: "Advanced regulatory intelligence platform for cross-border compliance management.",
      url: "https://icompliance.netlify.app",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Ask Gowree",
      type: "Portfolio & Consultation",
      description: "Professional portfolio with integrated one-on-one consultation booking system.",
      url: "https://askgowree.netlify.app",
      tech: ["Next.js", "Tailwind", "Calendly API"]
    },
    {
      title: "Ask Sarkar",
      type: "RTI Automation",
      description: "Intelligent RTI application system with 7-step strategic conversation flow.",
      url: "https://asksarkar.netlify.app",
      tech: ["React", "Gemini AI", "Firebase"]
    },
    {
      title: "Echo for AI",
      type: "AI Application",
      description: "AI-powered voice assistant with natural language processing capabilities.",
      url: "https://echoforai.netlify.app",
      tech: ["React", "Web Speech API", "OpenAI"]
    },
    {
      title: "The Anshuman",
      type: "Portfolio/Digital Presence",
      description: "Modern professional portfolio showcasing legal expertise and achievements.",
      url: "https://theanshuman.netlify.app",
      tech: ["React", "Framer Motion", "SEO"]
    },
    {
      title: "Lilith AI",
      type: "India's First Legal AI Assistant",
      description: "Groundbreaking AI assistant specifically trained on Indian legal system and precedents.",
      url: "https://lilithai.netlify.app",
      tech: ["LangChain", "RAG", "Indian Legal DB"]
    }
  ]
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('caseStudies');

  return (
    <PortfolioContainer id="portfolio">
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle className="in-view">
            The Proof of Work
          </SectionTitle>
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
            Real solutions. Real impact. <GradientText>Real results.</GradientText>
          </p>
        </motion.div>

        <TabContainer>
          <Tab
            $active={activeTab === 'caseStudies'}
            onClick={() => setActiveTab('caseStudies')}
          >
            Case Studies
          </Tab>
          <Tab
            $active={activeTab === 'liveProjects'}
            onClick={() => setActiveTab('liveProjects')}
          >
            Live Projects
          </Tab>
        </TabContainer>

        {activeTab === 'caseStudies' && (
          <CaseStudiesGrid>
            {portfolioData.caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CaseStudyContent>
                  <div>
                    <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                      {study.category}
                    </p>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                      {study.title}
                    </h3>
                  </div>
                  
                  <div>
                    <h4 style={{ color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                      Challenge:
                    </h4>
                    <p>{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 style={{ color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                      Solution:
                    </h4>
                    <p>{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 style={{ color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                      Outcome:
                    </h4>
                    <p>{study.outcome}</p>
                  </div>
                  
                  <TechStackSection>
                    <h5>Tech Stack:</h5>
                    <div>
                      {study.tech.map((tech, idx) => (
                        <TechBadge key={idx}>{tech}</TechBadge>
                      ))}
                    </div>
                  </TechStackSection>
                </CaseStudyContent>
                
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Key Metrics</h4>
                  <MetricsGrid>
                    {study.metrics.map((metric, idx) => (
                      <MetricCard key={idx}>
                        <div className="value">{metric.value}</div>
                        <div className="label">{metric.label}</div>
                      </MetricCard>
                    ))}
                  </MetricsGrid>
                </div>
              </CaseStudyCard>
            ))}
          </CaseStudiesGrid>
        )}

        {activeTab === 'liveProjects' && (
          <ProjectsGrid>
            {portfolioData.liveProjects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectHeader>
                  <h4>
                    {project.title}
                    <FaGlobe />
                  </h4>
                  <p className="project-type">{project.type}</p>
                </ProjectHeader>
                
                <ProjectBody>
                  <p>{project.description}</p>
                </ProjectBody>
                
                <ProjectFooter>
                  <div>
                    {project.tech.map((tech, idx) => (
                      <TechBadge key={idx}>{tech}</TechBadge>
                    ))}
                  </div>
                  <LiveLink 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Live <FaExternalLinkAlt />
                  </LiveLink>
                </ProjectFooter>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        )}

        <motion.div
          style={{ textAlign: 'center', marginTop: '4rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ClassicButton
            as="a"
            href="https://calendly.com/heyjeetttt/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss Your Project
          </ClassicButton>
        </motion.div>
      </ContentWrapper>
    </PortfolioContainer>
  );
};

export default PortfolioSection; 