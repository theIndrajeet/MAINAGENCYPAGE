import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import FloatingElements from '../components/FloatingElements';

const PageContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
    </PageContainer>
  );
};

export default HomePage; 