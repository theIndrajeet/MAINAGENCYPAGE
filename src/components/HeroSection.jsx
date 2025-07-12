import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { HeroContainer, ClassicButton, OutlinedButton, Headline, Subheadline, Divider } from '../styles/StyledComponents';
import TypewriterCode from './TypewriterCode';
import { useTheme } from '../context/ThemeContext';

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  text-align: center;
  position: relative;
  z-index: 10;
`;

// Glitch animation keyframes
const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(139, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 100, 139, 0.75),
                0.025em 0.05em 0 rgba(139, 100, 0, 0.75);
    transform: translate(0);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(139, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 100, 139, 0.75),
                0.025em 0.05em 0 rgba(139, 100, 0, 0.75);
    transform: translate(0);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(139, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 100, 139, 0.75),
                -0.05em -0.05em 0 rgba(139, 100, 0, 0.75);
    transform: translate(2px, -2px);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(139, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 100, 139, 0.75),
                -0.05em -0.05em 0 rgba(139, 100, 0, 0.75);
    transform: translate(2px, -2px);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(139, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 100, 139, 0.75),
                0 -0.05em 0 rgba(139, 100, 0, 0.75);
    transform: translate(-2px, 2px);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(139, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 100, 139, 0.75),
                0 -0.05em 0 rgba(139, 100, 0, 0.75);
    transform: translate(-2px, 2px);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(139, 0, 0, 0.75),
                -0.025em -0.025em 0 rgba(0, 100, 139, 0.75),
                -0.025em -0.05em 0 rgba(139, 100, 0, 0.75);
    transform: translate(0);
  }
`;

const MainHeadline = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text-black);
  position: relative;
  
  /* Glitch effect on hover and periodically */
  &:hover {
    animation: ${glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  
  /* Periodic glitch effect */
  animation: ${glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s;
  animation-iteration-count: infinite;
  
  span.line {
    display: block;
    margin-bottom: 0.1em;
    position: relative;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &.accent {
      color: var(--accent-red);
    }
    
    /* Glitch layers */
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    
    &::before {
      animation: glitch-1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s;
      animation-iteration-count: infinite;
      color: var(--accent-red);
      z-index: -1;
    }
    
    &::after {
      animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s;
      animation-iteration-count: infinite;
      color: #0066ff;
      z-index: -2;
    }
  }
  
  @keyframes glitch-1 {
    0%, 10%, 30%, 70%, 100% {
      opacity: 0;
      transform: translate(0);
    }
    20% {
      opacity: 0.7;
      transform: translate(-2px, -2px);
    }
    25% {
      opacity: 0.7;
      transform: translate(2px, 2px);
    }
  }
  
  @keyframes glitch-2 {
    0%, 10%, 30%, 70%, 100% {
      opacity: 0;
      transform: translate(0);
    }
    20% {
      opacity: 0.7;
      transform: translate(2px, 2px);
    }
    25% {
      opacity: 0.7;
      transform: translate(-2px, -2px);
    }
  }
`;

const Tagline = styled(motion.p)`
  font-family: 'Crimson Text', serif;
  font-size: 1.5rem;
  font-style: italic;
  color: var(--text-gray);
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
`;

const NewspaperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 3rem;
  margin-top: 4rem;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    .divider {
      display: none;
    }
  }
`;

const ColumnDivider = styled.div`
  width: 1px;
  height: 100%;
  background: var(--border-dark);
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const ArticleColumn = styled(motion.div)`
  text-align: left;
  position: relative;
`;

const ArticleHeadline = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border-bottom: 2px solid var(--text-black);
  padding-bottom: 0.5rem;
`;

const ArticleText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 1.5rem;
  
  &:first-of-type::first-letter {
    float: left;
    font-size: 3.5rem;
    line-height: 0.8;
    margin: 0.1em 0.1em 0 0;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    color: var(--accent-red);
  }
`;

const CodeSnippet = styled.div`
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
  
  .code-header {
    background: linear-gradient(180deg, #323232 0%, #1e1e1e 100%);
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    min-height: 40px;
    
    .window-controls {
      position: absolute;
      left: 1rem;
      display: flex;
      gap: 8px;
      align-items: center;
      
      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: block;
        transition: transform 0.2s ease;
        
        &:hover {
          transform: scale(1.1);
        }
        
        &:nth-child(1) {
          background: #ff5f56;
          border: 1px solid #e0443e;
        }
        
        &:nth-child(2) {
          background: #ffbd2e;
          border: 1px solid #dea123;
        }
        
        &:nth-child(3) {
          background: #27c93f;
          border: 1px solid #1aab29;
        }
      }
    }
    
    .terminal-title {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.8);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 500;
    }
    
    .file-name {
      position: absolute;
      right: 1rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  
  .code-body {
    position: relative;
    min-height: 320px;
    background: var(--code-bg);
    overflow: hidden;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const TypewriterText = styled.span`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: -2px;
    top: 0;
    height: 100%;
    width: 2px;
    background: var(--text-black);
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

// Define all tagline options (original 10 + 20 new ones)
const taglineOptions = [
  // Original 10
  {
    lines: [
      { text: "Turning", accent: false },
      { text: "Law Into", accent: true },
      { text: "Competitive", accent: false },
      { text: "Advantage", accent: true }
    ],
    mission: "Turning Law Into Competitive Advantage"
  },
  {
    lines: [
      { text: "Where", accent: false },
      { text: "Lawyers", accent: true },
      { text: "Write", accent: false },
      { text: "Code", accent: true }
    ],
    mission: "Where Lawyers Write Code"
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Minds", accent: true },
      { text: "Tech", accent: false },
      { text: "Solutions", accent: true }
    ],
    mission: "Legal Minds. Tech Solutions."
  },
  {
    lines: [
      { text: "Building", accent: false },
      { text: "Tomorrow's", accent: true },
      { text: "Legal", accent: false },
      { text: "Tech", accent: true }
    ],
    mission: "Building Tomorrow's Legal Tech"
  },
  {
    lines: [
      { text: "From", accent: false },
      { text: "Statutes", accent: true },
      { text: "To", accent: false },
      { text: "Software", accent: true }
    ],
    mission: "From Statutes to Software"
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Precision", accent: true },
      { text: "Digital", accent: false },
      { text: "Execution", accent: true }
    ],
    mission: "Legal Precision. Digital Execution."
  },
  {
    lines: [
      { text: "Law", accent: false },
      { text: "Meets", accent: true },
      { text: "Code", accent: false },
      { text: "Here", accent: true }
    ],
    mission: "Law Meets Code Here"
  },
  {
    lines: [
      { text: "Transform", accent: false },
      { text: "Compliance", accent: true },
      { text: "Into", accent: false },
      { text: "Code", accent: true }
    ],
    mission: "Transform Compliance Into Code"
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Strategy", accent: true },
      { text: "Tech", accent: false },
      { text: "Delivery", accent: true }
    ],
    mission: "Legal Strategy. Tech Delivery."
  },
  {
    lines: [
      { text: "Decoding", accent: false },
      { text: "Legal", accent: true },
      { text: "Building", accent: false },
      { text: "Digital", accent: true }
    ],
    mission: "Decoding Legal. Building Digital."
  },
  // 20 new taglines
  {
    lines: [
      { text: "Coding", accent: false },
      { text: "Compliance", accent: true },
      { text: "Into", accent: false },
      { text: "Success", accent: true }
    ],
    mission: "Coding Compliance Into Success"
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Architects", accent: true },
      { text: "Digital", accent: false },
      { text: "Builders", accent: true }
    ],
    mission: "Legal Architects. Digital Builders."
  },
  {
    lines: [
      { text: "Automating", accent: false },
      { text: "Justice", accent: true },
      { text: "Delivering", accent: false },
      { text: "Results", accent: true }
    ],
    mission: "Automating Justice. Delivering Results."
  },
  {
    lines: [
      { text: "Where", accent: false },
      { text: "Compliance", accent: true },
      { text: "Meets", accent: false },
      { text: "Innovation", accent: true }
    ],
    mission: "Where Compliance Meets Innovation"
  },
  {
    lines: [
      { text: "Rewriting", accent: false },
      { text: "Legal", accent: true },
      { text: "In", accent: false },
      { text: "JavaScript", accent: true }
    ],
    mission: "Rewriting Legal in JavaScript"
  },
  {
    lines: [
      { text: "Contracts", accent: false },
      { text: "To", accent: true },
      { text: "Code", accent: false },
      { text: "Conversion", accent: true }
    ],
    mission: "Contracts to Code Conversion"
  },
  {
    lines: [
      { text: "Debugging", accent: false },
      { text: "Legal", accent: true },
      { text: "Building", accent: false },
      { text: "Digital", accent: true }
    ],
    mission: "Debugging Legal. Building Digital."
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Logic", accent: true },
      { text: "Tech", accent: false },
      { text: "Magic", accent: true }
    ],
    mission: "Legal Logic. Tech Magic."
  },
  {
    lines: [
      { text: "Crafting", accent: false },
      { text: "Legal", accent: true },
      { text: "Deploying", accent: false },
      { text: "Solutions", accent: true }
    ],
    mission: "Crafting Legal. Deploying Solutions."
  },
  {
    lines: [
      { text: "Beyond", accent: false },
      { text: "Consulting", accent: true },
      { text: "Into", accent: false },
      { text: "Engineering", accent: true }
    ],
    mission: "Beyond Consulting. Into Engineering."
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Frameworks", accent: true },
      { text: "Tech", accent: false },
      { text: "Stacks", accent: true }
    ],
    mission: "Legal Frameworks. Tech Stacks."
  },
  {
    lines: [
      { text: "Turning", accent: false },
      { text: "Policies", accent: true },
      { text: "Into", accent: false },
      { text: "Products", accent: true }
    ],
    mission: "Turning Policies Into Products"
  },
  {
    lines: [
      { text: "Where", accent: false },
      { text: "Lawyers", accent: true },
      { text: "Become", accent: false },
      { text: "Builders", accent: true }
    ],
    mission: "Where Lawyers Become Builders"
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Thinking", accent: true },
      { text: "Digital", accent: false },
      { text: "Doing", accent: true }
    ],
    mission: "Legal Thinking. Digital Doing."
  },
  {
    lines: [
      { text: "Contracts", accent: false },
      { text: "As", accent: true },
      { text: "Code", accent: false },
      { text: "Reality", accent: true }
    ],
    mission: "Contracts as Code Reality"
  },
  {
    lines: [
      { text: "Building", accent: false },
      { text: "Compliant", accent: true },
      { text: "Shipping", accent: false },
      { text: "Fast", accent: true }
    ],
    mission: "Building Compliant. Shipping Fast."
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Expertise", accent: true },
      { text: "Tech", accent: false },
      { text: "Excellence", accent: true }
    ],
    mission: "Legal Expertise. Tech Excellence."
  },
  {
    lines: [
      { text: "Transforming", accent: false },
      { text: "Law", accent: true },
      { text: "Through", accent: false },
      { text: "Code", accent: true }
    ],
    mission: "Transforming Law Through Code"
  },
  {
    lines: [
      { text: "Legal", accent: false },
      { text: "Problems", accent: true },
      { text: "Tech", accent: false },
      { text: "Answers", accent: true }
    ],
    mission: "Legal Problems. Tech Answers."
  },
  {
    lines: [
      { text: "Architecting", accent: false },
      { text: "Compliance", accent: true },
      { text: "Automating", accent: false },
      { text: "Growth", accent: true }
    ],
    mission: "Architecting Compliance. Automating Growth."
  }
];

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [startCodeAnimation, setStartCodeAnimation] = useState(false);
  const [selectedTagline, setSelectedTagline] = useState(null);
  const fullText = "AI Won't Replace Lawyers. But Lawyers with AI Will.";
  const { isDarkMode } = useTheme();
  
  // Select a random tagline on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * taglineOptions.length);
    setSelectedTagline(taglineOptions[randomIndex]);
  }, []);
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    
    return () => clearInterval(interval);
  }, []);
  
  // Start code animation after hero section is in view
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCodeAnimation(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate code example based on selected tagline
  const codeExample = selectedTagline ? `// Transform Legal Complexity into Code
class LexRootAgency {
  constructor() {
    this.expertise = ['Legal', 'Technology', 'Compliance'];
    this.mission = '${selectedTagline.mission}';
  }
  
  async buildSolution(legalRequirements) {
    const strategy = await this.analyzeLegalLandscape(legalRequirements);
    const solution = await this.developAndDeploy(strategy);
    
    return { compliant: true, automated: true };
  }
}` : '';

  // Don't render until tagline is selected
  if (!selectedTagline) return null;

  return (
    <HeroContainer id="home">
      <HeroContent>
        <MainHeadline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {selectedTagline.lines.map((line, index) => (
            <span 
              key={index} 
              className={`line ${line.accent ? 'accent' : ''}`}
              data-text={line.text}
            >
              {line.text}
            </span>
          ))}
        </MainHeadline>
        
        <Tagline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypewriterText>{typewriterText}</TypewriterText>
        </Tagline>
        
        <Divider className="ornamental" />
        
        <NewspaperGrid>
          <ArticleColumn
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <ArticleHeadline>The Legal-Tech Revolution</ArticleHeadline>
            <ArticleText>
              We're not consultants who deliver slide decks. We're legal-tech architects who build, deploy, 
              and automate your compliance into strategic advantage. Our solutions are engineered with the 
              precision of a legal professional and the pragmatism of a coder.
            </ArticleText>
            <ArticleText>
              Transform legal liabilities and compliance burdens into operational efficiencies. 
              We don't just give advice; we build the systems that implement it.
            </ArticleText>
          </ArticleColumn>
          
          <ColumnDivider className="divider" />
          
          <ArticleColumn
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <ArticleHeadline>Code as Evidence</ArticleHeadline>
            <CodeSnippet>
              <div className="code-header">
                <div className="window-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="terminal-title">// LIVE IMPLEMENTATION</div>
                <div className="file-name">LexRootAgency.js</div>
              </div>
              <div className="code-body">
                {startCodeAnimation && (
                  <TypewriterCode
                    code={codeExample}
                    language="javascript"
                    isDarkMode={isDarkMode}
                    baseSpeed={35}
                  />
                )}
              </div>
            </CodeSnippet>
          </ArticleColumn>
        </NewspaperGrid>
        
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ClassicButton
            as="a"
            href="https://calendly.com/heyjeetttt/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Strategy Session
          </ClassicButton>
          <OutlinedButton
            as="a"
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </OutlinedButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 