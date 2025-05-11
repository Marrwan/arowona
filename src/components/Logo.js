import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const Logo = ({ to }) => (
  <LogoLink to={to}>
    <LogoImage src="/arowona-logo.svg" alt="Arowona Logo" />
  </LogoLink>
);

export default Logo; 