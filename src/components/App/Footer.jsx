import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled, { keyframes } from 'styled-components';

const StyledFooterContainer = styled.footer`
  background-color: #BBD24C;
`;

const Footer = () => (
  <StyledFooterContainer className="footer is-hidden-mobile is-hidden-tablet-only">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <span className="icon is-large">
            <a href="http://github.com/AustinGreen" target="_blank" rel="noopener noreferrer">
              <FontAwesome name="github" size="3x" style={{ color: '#010101' }} />
            </a>
          </span>
        </p>
      </div>
    </div>
  </StyledFooterContainer>
);

export default Footer;
