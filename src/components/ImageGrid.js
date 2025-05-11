import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ImageGrid = ({ images, setSelectedImage }) => {
  return (
    <Grid>
      {images.map((img, index) => (
        <ImageWrapper
          key={index}
          onClick={() => setSelectedImage(img)}
          whileHover={{ scale: 1.03 }}
          layout
        >
          <img src={img.url} alt={img.category} />
        </ImageWrapper>
      ))}
    </Grid>
  );
};

export default ImageGrid;
