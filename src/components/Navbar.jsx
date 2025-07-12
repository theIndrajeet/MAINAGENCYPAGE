import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ClassicButton, Divider } from '../styles/StyledComponents';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? 'rgba(var(--bg-cream-rgb), 0.95)' : 'var(--bg-cream)'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.$scrolled ? '2px solid var(--border-dark)' : '2px solid transparent'};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--text-black);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  position: relative;
  
  span {
    color: var(--accent-red);
    font-size: 0.75rem;
    position: absolute;
    bottom: -8px;
    left: 0;
    font-family: 'Crimson Text', serif;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 0.05em;
  }
  
  &:hover {
    color: var(--text-black);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  > *:first-child {
    margin-right: 0.5rem;
  }
`;

const NavItem = styled.a`
  color: var(--text-black);
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  position: relative;
  transition: color 0.2s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent-red);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--accent-red);
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-black);
  font-size: 1.25rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavButton = styled(ClassicButton)`
  padding: 0.5rem 1.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: var(--bg-light);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 2px solid var(--border-dark);
  z-index: 1001;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: var(--text-black);
  font-size: 2rem;
  cursor: pointer;
  font-family: 'Crimson Text', serif;
  
  &:hover {
    color: var(--accent-red);
  }
`;

const MobileNavItem = styled.a`
  color: var(--text-black);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--accent-red);
  }
`;

const MobileThemeToggle = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  border-top: 1px solid var(--border);
  margin-top: auto;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <NavContainer $scrolled={scrolled}>
        <NavContent>
          <Logo to="/">
            Lex Root
            <span>Legal Tech Agency</span>
          </Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <NavItem key={item.label} href={item.href}>
                {item.label}
              </NavItem>
            ))}
            <NavActions>
              <ThemeToggle />
              <NavButton
                as="a"
                href="https://calendly.com/heyjeetttt/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call
              </NavButton>
            </NavActions>
          </NavLinks>
          
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            ☰
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          <CloseButton onClick={() => setMobileMenuOpen(false)}>×</CloseButton>
          {navItems.map((item) => (
            <MobileNavItem
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </MobileNavItem>
          ))}
          <NavButton
            as="a"
            href="https://calendly.com/heyjeetttt/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Strategy Call
          </NavButton>
          <MobileThemeToggle>
            <ThemeToggle />
          </MobileThemeToggle>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar; 