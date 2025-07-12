import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PaperCard, SectionTitle, TechBadge, QuoteBlock, Divider, ArticleText } from '../styles/StyledComponents';
import { FaGlobe, FaShieldAlt, FaRobot, FaBriefcase } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  background: var(--bg-cream);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainTitle = styled(SectionTitle)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  display: block;
  margin: 0 auto 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-gray);
  font-style: italic;
  font-family: 'Crimson Text', serif;
`;

const FounderSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FounderCard = styled(PaperCard)`
  text-align: center;
  position: relative;
  padding: 3rem 2rem;
  border-top: 4px solid var(--accent-red);
`;

const FounderTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

const FounderCredentials = styled.p`
  color: var(--text-gray);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const FounderRole = styled.p`
  font-size: 1.125rem;
  color: var(--accent-red);
  font-weight: 600;
  font-style: italic;
`;

const StorySection = styled.div`
  position: relative;
`;

const StoryHeadline = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border-bottom: 3px solid var(--text-black);
  padding-bottom: 0.5rem;
  display: inline-block;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent-red);
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-paper);
  }
  
  .icon-wrapper {
    display: inline-block;
    padding: 0.75rem;
    background: var(--accent-red);
    margin-bottom: 1rem;
    
    svg {
      font-size: 1.5rem;
      color: var(--bg-cream);
    }
  }
  
  h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  
  p {
    color: var(--text-gray);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

// Add a profile stats component
const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 900;
    color: var(--accent-red);
    margin-bottom: 0.25rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--text-gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

// Add expertise tags
const ExpertiseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
  justify-content: center;
`;

const ExpertiseTag = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  background: transparent;
  border: 1px solid var(--border-dark);
  color: var(--text-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-red);
    color: var(--bg-cream);
    border-color: var(--accent-red);
  }
`;

// Add a brief one-liner
const Tagline = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.125rem;
  font-style: italic;
  color: var(--text-gray);
  margin-top: 1.5rem;
  line-height: 1.6;
  padding: 0 1rem;
`;

const AboutSection = () => {
  const experiences = [
    {
      icon: <FaGlobe />,
      title: "Global Compliance",
      description: "Spearheaded iCompliance Tool at Intellect, streamlining telehealth regulations across 190+ countries.",
      skills: ["Cross-border Law", "Regulatory Intelligence", "Telehealth"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Data Privacy Expert",
      description: "Applied GDPR, PDPA, and HIPAA expertise to draft operational documents actively preventing breaches.",
      skills: ["GDPR", "HIPAA", "Privacy Policies"]
    },
    {
      icon: <FaRobot />,
      title: "AI Legal-Tech Founder",
      description: "Founded Lawyer AI, personally training models on 2,000+ legal documents from incorporation to VC engagement.",
      skills: ["AI/ML", "Legal Tech", "Entrepreneurship"]
    },
    {
      icon: <FaBriefcase />,
      title: "Big Tech Foundation",
      description: "Forged expertise at Tata Motors and QuisLex with 99% accuracy in high-stakes document review.",
      skills: ["Patent Analysis", "Due Diligence", "Corporate Law"]
    }
  ];

  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MainTitle>The Architect Behind the Agency</MainTitle>
            <Subtitle>From Legal Theory to Tech Reality</Subtitle>
          </motion.div>
        </SectionHeader>

        <FounderSection>
          <FounderCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FounderTitle>Indrajeet K Singh</FounderTitle>
            <FounderCredentials>BBA LLB (IPR Hons)</FounderCredentials>
            <Divider />
            <FounderRole>Founder & Principal Architect</FounderRole>
            
            <Tagline>
              "I don't just interpret the law. I engineer it."
            </Tagline>
            
            <ProfileStats>
              <StatItem>
                <div className="stat-number">190+</div>
                <div className="stat-label">Countries</div>
              </StatItem>
              <StatItem>
                <div className="stat-number">2000+</div>
                <div className="stat-label">Legal Docs</div>
              </StatItem>
              <StatItem>
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy</div>
              </StatItem>
              <StatItem>
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Tech</div>
              </StatItem>
            </ProfileStats>
            
            <ExpertiseTags>
              <ExpertiseTag>Legal AI</ExpertiseTag>
              <ExpertiseTag>Compliance</ExpertiseTag>
              <ExpertiseTag>Privacy Law</ExpertiseTag>
              <ExpertiseTag>Full Stack</ExpertiseTag>
              <ExpertiseTag>Automation</ExpertiseTag>
            </ExpertiseTags>
          </FounderCard>

          <StorySection>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <StoryHeadline>The Builder's Manifesto</StoryHeadline>
              
              <QuoteBlock>
                I founded Lex Root not as a consultant, but as a builder. My journey has taken me from legal theory to the front lines of global tech, from analyzing case law to coding AI solutions. I don't just offer advice—I offer execution.
                <cite>Indrajeet K Singh</cite>
              </QuoteBlock>

              <ArticleText className="drop-cap">
                I've been the person in the trenches tasked with the operational challenge of making compliance work, 
                and that experience is the foundation of this agency. When you partner with Lex Root, you're not hiring 
                a web designer who read an article about legal marketing, and you're not hiring a lawyer who will hand 
                you a complex document to implement yourself.
              </ArticleText>

              <ArticleText>
                You are partnering with a legal-tech founder who has built the exact type 
                of solutions he now offers. We merge verified legal experience with a developer's toolkit. 
                That is our unbreakable advantage.
              </ArticleText>
            </motion.div>
          </StorySection>
        </FounderSection>

        <Divider className="ornamental" />

        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon-wrapper">
                {exp.icon}
              </div>
              <h4>{exp.title}</h4>
              <p>{exp.description}</p>
              <SkillsContainer>
                {exp.skills.map((skill, idx) => (
                  <TechBadge key={idx}>{skill}</TechBadge>
                ))}
              </SkillsContainer>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection; 