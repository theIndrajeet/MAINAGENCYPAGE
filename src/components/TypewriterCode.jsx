import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CodeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  padding: 1.5rem;
  background: var(--code-bg);
  
  .cursor {
    display: inline-block;
    width: 3px;
    height: 1.2em;
    background-color: ${props => props.$isDark ? '#ff4444' : '#8B0000'};
    animation: blink 1s infinite;
    margin-left: 1px;
    vertical-align: text-bottom;
    box-shadow: 0 0 5px currentColor;
  }
  
  @keyframes blink {
    0%, 49% {
      opacity: 1;
    }
    50%, 100% {
      opacity: 0;
    }
  }
  
  .typing-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-family: 'IBM Plex Mono', 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    padding: 1.5rem;
    color: var(--code-text);
    white-space: pre-wrap;
    overflow-y: auto;
    overflow-x: hidden;
    word-break: break-word;
  }
  
  /* Syntax highlighting classes */
  .comment {
    color: ${props => props.$isDark ? '#6a737d' : '#6a737d'};
    font-style: italic;
  }
  
  .keyword {
    color: ${props => props.$isDark ? '#ff79c6' : '#d73a49'};
    font-weight: 500;
  }
  
  .class-name {
    color: ${props => props.$isDark ? '#f8f8f2' : '#6f42c1'};
    font-weight: 600;
  }
  
  .function {
    color: ${props => props.$isDark ? '#50fa7b' : '#6f42c1'};
  }
  
  .string {
    color: ${props => props.$isDark ? '#f1fa8c' : '#032f62'};
  }
  
  .punctuation {
    color: ${props => props.$isDark ? '#f8f8f2' : '#24292e'};
  }
  
  .property {
    color: ${props => props.$isDark ? '#8be9fd' : '#005cc5'};
  }
  
  .boolean {
    color: ${props => props.$isDark ? '#bd93f9' : '#d73a49'};
  }
  
  .operator {
    color: ${props => props.$isDark ? '#ff79c6' : '#d73a49'};
  }
  
  .bracket {
    color: ${props => props.$isDark ? '#f8f8f2' : '#24292e'};
  }
`;

const TypewriterCode = ({ code, language = 'javascript', isDarkMode, onComplete, baseSpeed = 40 }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const containerRef = useRef(null);

  // Function to get random typing speed for more natural effect
  const getTypingSpeed = (char, nextChars) => {
    // Pause after certain characters
    if (char === '.' || char === ';' || char === ',') {
      return baseSpeed * 2.5;
    }
    if (char === '{' || char === '}') {
      return baseSpeed * 3;
    }
    // Speed up for spaces and common patterns
    if (char === ' ') {
      return baseSpeed * 0.5;
    }
    // Slow down for starting new lines
    if (char === '\n') {
      return baseSpeed * 4;
    }
    // Random variation for natural typing
    return baseSpeed + (Math.random() * 20 - 10);
  };

  // Enhanced syntax highlighting function
  const highlightCode = (code) => {
    return code
      // Comments
      .replace(/(\/\/[^\n]*)/g, '<span class="comment">$1</span>')
      // Keywords
      .replace(/\b(class|constructor|async|await|const|return|this|new|true|false)\b/g, '<span class="keyword">$1</span>')
      // Strings (both single and double quotes)
      .replace(/(['"])((?:\\.|(?!\1).)*?)\1/g, '<span class="string">$1$2$1</span>')
      // Class names
      .replace(/\b(LexRootAgency)\b/g, '<span class="class-name">$1</span>')
      // Functions
      .replace(/\b(buildSolution|analyzeLegalLandscape|developAndDeploy)\b/g, '<span class="function">$1</span>')
      // Properties after dot
      .replace(/\.(expertise|mission|compliant|automated)/g, '.<span class="property">$1</span>')
      // Booleans
      .replace(/\b(true|false)\b/g, '<span class="boolean">$1</span>')
      // Operators
      .replace(/([=:,])/g, '<span class="operator">$1</span>')
      // Brackets and parentheses
      .replace(/([{}()\[\]])/g, '<span class="bracket">$1</span>');
  };

  useEffect(() => {
    if (currentIndex < code.length) {
      const currentChar = code[currentIndex];
      const nextChars = code.slice(currentIndex);
      const speed = getTypingSpeed(currentChar, nextChars);

      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + currentChar);
        setCurrentIndex(prev => prev + 1);
        
        // Auto-scroll if needed (smooth scroll)
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
      // Keep cursor blinking for a moment then hide
      setTimeout(() => {
        setShowCursor(false);
        if (onComplete) onComplete();
      }, 2000);
    }
  }, [currentIndex, code, baseSpeed, isTypingComplete, onComplete]);

  // Reset when code changes
  useEffect(() => {
    setDisplayedCode('');
    setCurrentIndex(0);
    setShowCursor(true);
    setIsTypingComplete(false);
  }, [code]);

  return (
    <CodeContainer $isDark={isDarkMode}>
      <motion.div
        ref={containerRef}
        className="typing-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span 
          dangerouslySetInnerHTML={{ 
            __html: highlightCode(displayedCode) 
          }} 
        />
        {showCursor && <span className="cursor" />}
      </motion.div>
    </CodeContainer>
  );
};

export default TypewriterCode; 