import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  position: fixed;
  width: 100%;
  z-index: 100;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    transition: color 0.3s ease;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    position: relative;
    
    &:hover {
      color: #ccc;
    }
    
    &.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    
    a {
      font-size: 0.8rem;
    }
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Nav style={{ 
      background: scrolled ? '#000' : 'rgba(0, 0, 0, 0.7)',
      boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <Logo to="/" />
      <NavLinks>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          HOME
        </Link>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
          PORTFOLIO
        </Link>
        <Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''}>
          CLIENTS
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          CONTACT
        </Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
