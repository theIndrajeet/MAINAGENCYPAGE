import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PaperCard, SectionTitle, GradientText, ClassicButton } from '../styles/StyledComponents';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaCalendarAlt } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 5rem 0 2rem;
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: left;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-red);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    
    .icon {
      transform: scale(1.1);
    }
  }
  
  .icon {
    font-size: 2rem;
    color: var(--accent-red);
    min-width: 2rem;
    transition: transform 0.3s ease;
  }
  
  .content {
    flex-grow: 1;
    
    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-family: 'Playfair Display', serif;
      color: var(--text-dark);
    }
    
    p {
      color: var(--text-gray);
      font-size: 1rem;
      margin: 0;
    }
  }
`;

const CTASection = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: var(--bg-light);
  border: 2px solid var(--border);
  border-radius: 8px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 1px solid var(--border);
  color: var(--text-gray);
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const ContactSection = () => {
  // Pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in discussing legal-tech solutions for my business.");
  
  return (
    <ContactContainer id="contact">
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <SectionTitle className="in-view">
            Let's Build Your Legal-Tech Advantage
          </SectionTitle>
          <p style={{ fontSize: '1.2rem' }}>
            Ready to transform compliance into <GradientText>competitive advantage</GradientText>?
          </p>
        </motion.div>

        <ContactGrid>
          <ContactCard
            href="https://calendly.com/heyjeetttt/30min"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaCalendarAlt className="icon" />
            <div className="content">
              <h4>Book a Strategy Session</h4>
              <p>Free 30-min consultation</p>
            </div>
          </ContactCard>
          
          <ContactCard
            href="mailto:indrajeetatlaw@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaEnvelope className="icon" />
            <div className="content">
              <h4>Email</h4>
              <p>indrajeetatlaw@gmail.com</p>
            </div>
          </ContactCard>
          
          <ContactCard
            href={`https://wa.me/919504608913?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaWhatsapp className="icon" />
            <div className="content">
              <h4>WhatsApp</h4>
              <p>Chat with us directly</p>
            </div>
          </ContactCard>
          
          <ContactCard
            href="https://www.linkedin.com/in/indrajeetksingh/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaLinkedin className="icon" />
            <div className="content">
              <h4>LinkedIn</h4>
              <p>/in/indrajeetksingh</p>
            </div>
          </ContactCard>
        </ContactGrid>

        <CTASection
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Ready to <GradientText>Engineer Compliance</GradientText>?
          </h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Let's discuss how we can transform your legal challenges into technological advantages.
          </p>
          <ClassicButton
            as="a"
            href="https://calendly.com/heyjeetttt/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Free Strategy Session
          </ClassicButton>
        </CTASection>

        <Footer>
          <p>&copy; 2024 Lex Root Agency. All rights reserved.</p>
          <p>
            <GradientText>Engineering Compliance. Architecting Growth.</GradientText>
          </p>
        </Footer>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default ContactSection; 