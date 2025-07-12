import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle, GradientText, ClassicButton, Divider } from '../styles/StyledComponents';
import { FaRupeeSign } from 'react-icons/fa';

const PricingContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  background: var(--bg-cream);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const PricingContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: var(--bg-light);
  border: 2px solid var(--border);
  border-radius: 8px;
  box-shadow: var(--shadow-paper);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(139, 0, 0, 0.01) 10px,
        rgba(139, 0, 0, 0.01) 20px
      );
    pointer-events: none;
    border-radius: 8px;
  }
`;

const PriceDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  
  .price-label {
    font-size: 1.5rem;
    color: var(--text-gray);
    font-family: 'Crimson Text', serif;
  }
  
  .price-amount {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--accent-red);
    font-family: 'Playfair Display', serif;
    display: flex;
    align-items: center;
    
    svg {
      font-size: 2.5rem;
      margin-right: 0.5rem;
    }
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-style: italic;
`;

const Features = styled.div`
  margin: 3rem 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-black);
    font-family: 'Playfair Display', serif;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-gray);
  }
`;

const CTAArea = styled.div`
  margin-top: 3rem;
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: var(--text-gray);
  }
`;

const PricingSection = () => {
  return (
    <PricingContainer id="pricing">
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle className="in-view">
            Investment That Transforms
          </SectionTitle>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            Quality solutions tailored to your <GradientText>unique needs</GradientText>
          </p>
        </motion.div>

        <PricingContent
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PriceDisplay>
            <span className="price-label">Starting from</span>
            <span className="price-amount">
              <FaRupeeSign />
              5,000
            </span>
          </PriceDisplay>
          
          <Divider className="ornamental" />
          
          <Description>
            Every legal challenge is unique, and so is our approach. We craft bespoke solutions 
            that align with your specific requirements and budget.
          </Description>
          
          <Features>
            <h3>Our Flexible Engagement Models</h3>
            <p>
              From one-time project implementations to ongoing strategic partnerships, 
              we offer flexible engagement models designed to maximize your ROI. Whether you need 
              a compliance automation tool, a complete digital transformation, or continuous 
              legal-tech support, we scale our services to match your vision and budget.
            </p>
          </Features>
          
          <CTAArea>
            <p>
              Let's discuss how we can transform your legal operations within your budget.
            </p>
            <ClassicButton
              as="a"
              href="https://calendly.com/heyjeetttt/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Requirements
            </ClassicButton>
          </CTAArea>
        </PricingContent>
      </ContentWrapper>
    </PricingContainer>
  );
};

export default PricingSection; 