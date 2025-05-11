import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ClientsContainer = styled.div`
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

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ClientLogo = styled(motion.div)`
  background: white;
  padding: 2rem;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;

const Clients = () => {
  // Client logos from the public/images folder
  const clients = [
    { name: 'Client 1', logo: '/images/client_1.png' },
    { name: 'Client 2', logo: '/images/client_2.png' },
    { name: 'Client 3', logo: '/images/client_3.png' },
    { name: 'Client 4', logo: '/images/client_4.png' },
    { name: 'Client 5', logo: '/images/client_5.png' },
    { name: 'Client 6', logo: '/images/client_6.png' },
    { name: 'Client 7', logo: '/images/client_7.png' },
    { name: 'Client 8', logo: '/images/client_8.png' },
    { name: 'Client 9', logo: '/images/client_9.png' }
  ];

  return (
    <ClientsContainer>
      <PageTitle>CLIENTS</PageTitle>
      <ClientsGrid>
        {clients.map((client, index) => (
          <ClientLogo
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={client.logo} alt={client.name} />
          </ClientLogo>
        ))}
      </ClientsGrid>
    </ClientsContainer>
  );
};

export default Clients;
