import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const FoodSection = styled.div`
  position: relative;
  background-image: url('/images/gallery/Rectangle 45.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const CircleButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ff00ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
  cursor: pointer;
`;

const HeadingContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 2rem;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
`;

const PhotographerSection = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ColorfulBackground = styled.div`
  background-image: url('/images/gallery/Rectangle 56-2.png');
  background-size: cover;
  background-position: center;
  height: 50%;
  position: relative;
`;

const CircleButtonSecond = styled(CircleButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PhotographerInfo = styled.div`
  padding: 2rem;
  color: white;
  text-align: left;
`;

const PhotographerTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const PhotographerDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ExploreButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: white;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const FoodStorySection = styled.div`
  background-color: #000;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const FoodStoryHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

const GetInTouchButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: white;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  width: fit-content;
`;

const BurgerSection = styled.div`
  background-image: url('/images/gallery/Rectangle 48.png');
  background-size: cover;
  background-position: center;
`;

const FooterSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #d48c9f;
  padding: 2rem;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PortfolioSection = styled.div`
  text-align: center;
`;

const ClientsSection = styled.div`
  text-align: center;
`;

const FooterHeading = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-top: 0.5rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <MainContent>
        <FoodSection>
          <CircleButton>A</CircleButton>
          <HeadingContainer>
            <Heading>Capture</Heading>
            <Heading>the Crave</Heading>
          </HeadingContainer>
        </FoodSection>
        <PhotographerSection>
          <ColorfulBackground>
            <CircleButtonSecond>A</CircleButtonSecond>
          </ColorfulBackground>
          <PhotographerInfo>
            <PhotographerTitle>Food, Product and Nature Photographer</PhotographerTitle>
            <PhotographerDescription>
              Amanda is a photographer specializing in food and product imagery, working with restaurants and brands to create visually delicious photos that elevate their brands. I capture the colors of their food story.
            </PhotographerDescription>
            <ExploreButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              EXPLORE
            </ExploreButton>
          </PhotographerInfo>
        </PhotographerSection>
      </MainContent>
      
      <BottomSection>
        <FoodStorySection>
          <FoodStoryHeading>Ready to bring your food story to life?</FoodStoryHeading>
          <Link to="/contact">
            <GetInTouchButton>GET IN TOUCH</GetInTouchButton>
          </Link>
        </FoodStorySection>
        <BurgerSection />
      </BottomSection>
      
      <FooterSection>
        <PortfolioSection>
          <FooterHeading>Portfolio</FooterHeading>
          <FooterLink to="/portfolio">View my work</FooterLink>
        </PortfolioSection>
        <ClientsSection>
          <FooterHeading>Clients</FooterHeading>
          <FooterLink to="/clients">Recognized By</FooterLink>
        </ClientsSection>
      </FooterSection>
    </HomeContainer>
  );
};

export default Home;
