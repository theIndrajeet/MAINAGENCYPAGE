import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled(motion.button)`
  position: relative;
  width: 50px;
  height: 24px;
  background: var(--border-dark);
  border: 2px solid var(--accent-red);
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 4px;
  transition: all 0.3s ease;
  margin: 0 0.25rem;
  
  &:hover {
    box-shadow: 0 0 10px rgba(139, 0, 0, 0.3);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.2);
  }
`;

const ToggleIndicator = styled(motion.div)`
  position: absolute;
  width: 18px;
  height: 18px;
  background: var(--accent-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  svg {
    color: var(--bg-cream);
    font-size: 0.65rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 8px);
  padding: 0 4px;
  pointer-events: none;
  
  svg {
    font-size: 0.75rem;
    transition: all 0.3s ease;
  }
  
  .sun {
    color: ${props => props.$isDark ? 'var(--text-gray)' : 'var(--accent-red)'};
    opacity: ${props => props.$isDark ? 0.3 : 1};
  }
  
  .moon {
    color: ${props => props.$isDark ? 'var(--accent-red)' : 'var(--text-gray)'};
    opacity: ${props => props.$isDark ? 1 : 0.3};
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <IconWrapper $isDark={isDarkMode}>
        <FaSun className="sun" />
        <FaMoon className="moon" />
      </IconWrapper>
      <ToggleIndicator
        animate={{
          x: isDarkMode ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </ToggleIndicator>
    </ToggleButton>
  );
};

export default ThemeToggle; 