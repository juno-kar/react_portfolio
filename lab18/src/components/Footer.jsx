import React from 'react';
import styled from 'styled-components';
import email from '../assets/mail.gif';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 0.7rem;
  margin-top: auto;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;


function Footer () {
  return (
    <FooterWrapper id="theme1">
      <img alt="email" src={email} style={{height: 40 + 'px', marginTop: 0.5+'rem'}} ></img>
      <p style={{userSelect: 'text'}}>Контакти: kn23-m.kartava@nubip.edu.ua</p>
    </FooterWrapper>
  )
};

export default Footer;
