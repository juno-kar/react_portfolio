import React from 'react';
import styled from 'styled-components';

import frontImage from '../assets/frontimage.gif';
import htmlImage from '../assets/html.png';
import jsImage from '../assets/javascript.png';
import reactImage from '../assets/react.png';

const Container = styled.div`
  padding: 0rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FrontImage = styled.div `
  padding: 2.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  h1 {
  text-align: left;
  margin: 0;
  }
  div {
  width: 600px;
  }
`

const Projects = styled.div `
display: flex;
flex-direction: row;
padding: 0rem 2rem 2rem 2rem;
gap: 3rem;
text-align: center;
justify-content: center;

a {
text-decoration: underline;
color: gold;
}

a:hover {
text-decoration: none;
}

img {
height: 80px;
margin-bottom: 30px}
`


const AboutMe = () => (
  document.title = "Про мене",
  <div>
    <FrontImage>
    <img alt="frontimage" style={{width: 490 + 'px'}} src={frontImage}></img>
    <div>
        <h1>Про мене</h1>
        <p>&lt;---- цьому фото вже 13 років. час іде, а я досі за компом</p>
        <br></br>
        <p>мене звати Мирослава, мені 19 і це моя остання робота з вебтехнологій. вчуся на 2 курсі та намагаюся дожити до диплому. люблю котів, все пов'язане з 2000-ми та творчість. ціную щирість, відповідальність і відданість власній справі</p>
    </div>
    </FrontImage>
  <Container>

  <h1>Мої проєкти</h1>

    <Projects>
        <span>
          <img alt="html" src={htmlImage}></img>
          <br></br>
          HTML + CSS: практичне завдання<br></br>
        мій GitHub-репо: <a href="https://github.com/juno-kar/practice-css" target="_blank" rel="noreferrer">посилання</a>
        </span>

        <span>
          <img alt="js" src={jsImage}></img>
          <br></br>
        JavaScript: калькулятор<br></br>
        мій GitHub-репо: <a href="https://github.com/juno-kar/js-DOM1" target="_blank" rel="noreferrer">посилання</a>
        </span>

        <span>
          <img alt="react" src={reactImage}></img>
          <br></br>
        React: галерея<br></br>
        мій GitHub-репо: <a href="https://github.com/juno-kar/api_gallery" target="_blank" rel="noreferrer">посилання</a>
        </span>

    </Projects>
    
  </Container>
  </div>
);

export default AboutMe;
