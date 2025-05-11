import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: #fce4ec;
`;

const PageTitle = styled.h1`
  text-align: center;
  padding: 2rem 0;
  font-size: 2.5rem;
  color: #333;
  text-transform: uppercase;
  font-weight: 500;
`;

const ContactForm = styled.form`
  max-width: 800px;
  width: 90%;
  padding: 2rem;
  margin: 0 auto;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 0;
    font-size: 1rem;
    background: white;
    
    &:focus {
      outline: none;
      border-color: #d48c9f;
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
    grid-column: span 2;
  }
`;

const FullWidthGroup = styled(FormGroup)`
  grid-column: span 2;
`;

const SubmitButton = styled(motion.button)`
  background: #d48c9f;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 1rem;
  font-size: 0.8rem;
  color: #666;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: #333;
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! (This is a demo)');
  };

  return (
    <ContactContainer>
      <PageTitle>GET IN TOUCH</PageTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
            />
          </FormGroup>
          
          <FullWidthGroup>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
            />
          </FullWidthGroup>
        </FormGrid>
        
        <SubmitButton 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </ContactForm>
      
      <Footer>
        <SocialLinks>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Pinterest">PT</a>
        </SocialLinks>
        <p> {new Date().getFullYear()} Amanda Portfolio • Photographer</p>
      </Footer>
    </ContactContainer>
  );
};

export default Contact;
