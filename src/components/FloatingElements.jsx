import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
  opacity: 0.3;
`;

const FloatingPaper = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 260px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0.5;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: repeating-linear-gradient(
      180deg,
      transparent,
      transparent 20px,
      rgba(26, 26, 26, 0.03) 20px,
      rgba(26, 26, 26, 0.03) 21px
    );
  }
  
  &::after {
    content: 'LEX ROOT';
    position: absolute;
    top: 30px;
    left: 20px;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 1.2rem;
    color: var(--text-black);
    opacity: 0.1;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const FloatingCode = styled(motion.div)`
  position: absolute;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  color: var(--text-gray);
  opacity: 0.3;
  white-space: pre;
  line-height: 1.4;
`;

const NewspaperClipping = styled(motion.div)`
  position: absolute;
  width: 150px;
  padding: 1rem;
  background: var(--bg-light);
  border: 1px solid var(--border);
  transform: rotate(-5deg);
  opacity: 0.4;
  
  h4 {
    font-family: 'Playfair Display', serif;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.625rem;
    line-height: 1.4;
    color: var(--text-gray);
  }
`;

const codeSnippets = [
  `compliance = {
  automated: true,
  efficient: true
};`,
  `function transform() {
  law => code;
}`,
  `// Legal + Tech
await deploy();`,
];

const FloatingElements = () => {
  return (
    <FloatingContainer>
      {/* Floating Papers */}
      <FloatingPaper
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <NewspaperClipping
        style={{ top: '60%', right: '8%' }}
        animate={{
          y: [0, 15, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <h4>Breaking</h4>
        <p>Legal tech revolution transforms compliance landscape...</p>
      </NewspaperClipping>
      
      <FloatingPaper
        style={{ bottom: '15%', left: '10%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Code Snippets */}
      {codeSnippets.map((code, index) => (
        <FloatingCode
          key={index}
          style={{
            top: `${30 + index * 25}%`,
            right: index % 2 === 0 ? '15%' : 'auto',
            left: index % 2 === 1 ? '15%' : 'auto',
          }}
          animate={{
            y: [0, index % 2 === 0 ? -10 : 10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2,
          }}
        >
          {code}
        </FloatingCode>
      ))}
    </FloatingContainer>
  );
};

export default FloatingElements; 