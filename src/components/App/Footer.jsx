import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledFooterContainer = styled.footer`
  background-color: #BBD24C;
`;

const Footer = () => (
  <StyledFooterContainer className="footer is-hidden-mobile is-hidden-tablet-only">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>Weather App.</strong>
          {' '}
          Made with 🔥🔥🔥 by
          {' '}
          <a href="http://github.com/AustinGreen" target="_blank" rel="noopener noreferrer">
            Austin Green
          </a>
          .
        </p>
      </div>
    </div>
  </StyledFooterContainer>
);

export default Footer;
