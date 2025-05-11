import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { AnimatePresence, motion } from 'framer-motion';

const PortfolioContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: #000;
  color: white;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  
  &:nth-child(odd) {
    background-color: #d48c9f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 1rem;
  }
  
  &:nth-child(even) {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
`;

const ArrowIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &::after {
    content: '→';
    color: white;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4px;
  background: #000;
`;

const GalleryItem = styled(motion.div)`
  aspect-ratio: 1;
  overflow: hidden;
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

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('food');

  // Function to get images for the selected category
  const getImagesForCategory = (category) => {
    // Get all images from the gallery folder that match the category
    const images = [];
    
    // Map category names to image ranges
    const categoryRanges = {
      food: { start: 45, end: 65 },
      product: { start: 66, end: 75 },
      nature: { start: 76, end: 85 },
      architecture: { start: 86, end: 95 }
    };
    
    const range = categoryRanges[category] || { start: 45, end: 65 };
    
    for (let i = range.start; i <= range.end; i++) {
      images.push({
        url: `/images/gallery/Rectangle ${i}.png`,
        category: category
      });
      
      // Add variations if they exist
      images.push({
        url: `/images/gallery/Rectangle ${i}-1.png`,
        category: category
      });
      
      images.push({
        url: `/images/gallery/Rectangle ${i}-2.png`,
        category: category
      });
    }
    
    return images;
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <PortfolioContainer>
      <Categories>
        <CategoryItem>
          <CategoryTitle>Food Photography</CategoryTitle>
          <ArrowIcon onClick={() => handleCategoryClick('food')} />
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url('/images/gallery/Rectangle 48.png')` }} />
        
        <CategoryItem>
          <CategoryTitle>Product Photography</CategoryTitle>
          <ArrowIcon onClick={() => handleCategoryClick('product')} />
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url('/images/gallery/Rectangle 73.png')` }} />
      </Categories>
      
      <Categories>
        <CategoryItem>
          <CategoryTitle>Nature Photography</CategoryTitle>
          <ArrowIcon onClick={() => handleCategoryClick('nature')} />
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url('/images/gallery/Rectangle 77.png')` }} />
        
        <CategoryItem>
          <CategoryTitle>Architecture Photography</CategoryTitle>
          <ArrowIcon onClick={() => handleCategoryClick('architecture')} />
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url('/images/gallery/Rectangle 79.png')` }} />
      </Categories>
      
      {activeCategory && (
        <GalleryGrid>
          {getImagesForCategory(activeCategory).map((img, index) => (
            <GalleryItem
              key={index}
              onClick={() => setSelectedImage(img)}
              whileHover={{ scale: 1.03 }}
              layout
            >
              <img src={img.url} alt={img.category} />
            </GalleryItem>
          ))}
        </GalleryGrid>
      )}
      
      <AnimatePresence>
        {selectedImage && (
          <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        )}
      </AnimatePresence>
    </PortfolioContainer>
  );
};

export default Portfolio;
