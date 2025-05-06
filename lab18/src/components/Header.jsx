import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1.7rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
`;

const StyledLink = styled(Link)`
  color:rgb(17, 35, 100);
  margin: 0 2rem;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
height: 100%;
`


function Header () {
  return (
    <Nav id="theme1">
      <Wrapper>
      <StyledLink to="/react_portfolio/" style={{"margin-left": 0}}>Про мене</StyledLink>
      </Wrapper>

      <Wrapper>
      <StyledLink to="/city">Моє місто</StyledLink>
      </Wrapper>

      <Wrapper>
      <StyledLink to="/future">Майбутнє</StyledLink>
      </Wrapper>
      <button  style={{"margin-left": 50+"px"}} onClick={() => {
          if ((document.getElementsByTagName("html"))[0].className == "theme1") {
            (document.getElementsByTagName("html"))[0].className = "theme2";
            (document.getElementsByTagName("nav"))[0].id = "theme2";
            (document.getElementsByTagName("footer"))[0].id = "theme2";
          } else {
            (document.getElementsByTagName("html"))[0].className = "theme1";
            (document.getElementsByTagName("nav"))[0].id = "theme1";
            (document.getElementsByTagName("footer"))[0].id = "theme1";
          }

          if (((document.getElementsByTagName("button"))[0]).getElementsByTagName("span")[0].className == "back" || ((document.getElementsByTagName("button"))[0]).getElementsByTagName("span")[0].className == "start") {
            ((document.getElementsByTagName("button"))[0]).getElementsByTagName("span")[0].className = "forth";
          } else ((document.getElementsByTagName("button"))[0]).getElementsByTagName("span")[0].className = "back";
      }
      } >
        <span className="start">
        </span>
      </button>
    </Nav>
  )
};

export default Header;
