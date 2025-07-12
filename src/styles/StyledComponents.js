import styled from 'styled-components';
import { motion } from 'framer-motion';

// Vintage Paper Card
export const PaperCard = styled(motion.div)`
  background: var(--bg-light);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-paper);
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Classic Button
export const ClassicButton = styled(motion.button)`
  background: var(--accent-red);
  border: none;
  color: var(--bg-cream);
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-subtle);
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: var(--accent-hover);
    color: var(--bg-cream) !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Outlined Button
export const OutlinedButton = styled(ClassicButton)`
  background: transparent;
  border: 2px solid var(--accent-red);
  color: var(--accent-red);
  
  &:hover {
    background: var(--accent-red);
    color: var(--bg-cream) !important;
    border-color: var(--accent-red);
  }
`;

// Compact Button for Navbar
export const CompactButton = styled(ClassicButton)`
  padding: 0.5rem 1.25rem;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
`;

// Code Block Container
export const CodeBlock = styled.div`
  background: var(--code-bg);
  border: 1px solid var(--border-dark);
  border-radius: 0;
  overflow: hidden;
  margin: 2rem 0;
  position: relative;
  box-shadow: var(--shadow-paper);
  
  &::before {
    content: '// CODE';
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: var(--text-gray);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    opacity: 0.5;
  }
  
  pre {
    padding: 2rem;
    overflow-x: auto;
    margin: 0;
    color: var(--code-text);
    
    &::-webkit-scrollbar {
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

// Section Title with Newspaper Style
export const SectionTitle = styled(motion.h2)`
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--text-black);
  }
`;

// Newspaper Column Text
export const ArticleText = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  text-align: justify;
  
  &.two-column {
    column-count: 2;
    column-gap: 2rem;
    column-rule: 1px solid var(--border);
    
    @media (max-width: 768px) {
      column-count: 1;
    }
  }
  
  &.drop-cap::first-letter {
    float: left;
    font-size: 4rem;
    line-height: 0.8;
    margin: 0.1em 0.1em 0 0;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    color: var(--accent-red);
  }
`;

// Service Card
export const ServiceCard = styled(PaperCard)`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 4px solid var(--accent-red);
  
  &:hover {
    transform: translateY(-2px);
    border-left-color: var(--accent-hover);
  }
`;

// Tech Badge
export const TechBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  background: var(--text-black);
  color: var(--bg-cream);
  font-size: 0.75rem;
  font-family: 'IBM Plex Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Navigation Link
export const NavLink = styled.a`
  position: relative;
  color: var(--text-black);
  font-weight: 600;
  padding: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-red);
    transition: width 0.3s ease;
  }
  
  &:hover,
  &.active {
    color: var(--accent-red);
    text-decoration: none;
    
    &::after {
      width: 100%;
    }
  }
`;

// Quote Block
export const QuoteBlock = styled.blockquote`
  position: relative;
  padding: 2rem 3rem;
  margin: 2rem 0;
  background: var(--bg-light);
  border-left: 4px solid var(--accent-red);
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.8;
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: var(--accent-red);
    font-family: 'Playfair Display', serif;
    line-height: 1;
  }
  
  cite {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    font-size: 1rem;
    color: var(--text-gray);
    text-align: right;
    
    &::before {
      content: '— ';
    }
  }
`;

// Hero Container
export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--bg-cream);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(
        circle at top right,
        rgba(139, 0, 0, 0.02) 0%,
        transparent 50%
      );
  }
`;

// Grid Container
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

// Contact Info Item
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
  
  svg {
    color: var(--accent-red);
    font-size: 1.25rem;
  }
  
  a {
    color: var(--text-black);
    font-weight: 600;
    
    &:hover {
      color: var(--accent-red);
    }
  }
`;

// Headline Style
export const Headline = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: var(--text-black);
    margin: 1rem auto;
  }
`;

// Subheadline
export const Subheadline = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: var(--text-gray);
  font-style: italic;
  margin-bottom: 3rem;
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.02em;
`;

// Divider Line
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--border-dark);
  margin: 3rem 0;
  position: relative;
  
  &.ornamental {
    &::before {
      content: '❦';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--bg-cream);
      padding: 0 1rem;
      font-size: 1.5rem;
      color: var(--accent-red);
    }
  }
`;

// Gradient Text - for emphasis
export const GradientText = styled.span`
  color: var(--accent-red);
  font-weight: 700;
  font-style: italic;
`;

// Terminal Code Container
export const TerminalContainer = styled.div`
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .terminal-header {
    background: linear-gradient(180deg, #323232 0%, #1e1e1e 100%);
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    .window-controls {
      display: flex;
      gap: 8px;
      
      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: block;
        
        &.close {
          background: #ff5f56;
        }
        
        &.minimize {
          background: #ffbd2e;
        }
        
        &.maximize {
          background: #27c93f;
        }
      }
    }
    
    .terminal-title {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }
  
  .terminal-body {
    background: var(--code-bg);
    min-height: 300px;
  }
`; 