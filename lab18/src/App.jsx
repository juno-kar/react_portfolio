import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import cursor from './assets/cursor.gif'
import error from './assets/error.png'

import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import NotFound from './pages/NotFound';

import WidePixel from './assets/Wide_Pixel-7.ttf';
import HeatherScript from './assets/Manuscript.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'WidePixel';
    src: url(${WidePixel}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Manuscript';
    src: url(${HeatherScript}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
html,
body {
    padding: 0;
    margin: 0;
    font-family: Consolas;
    font-weight: 600;
    font-size: 18px;
}

h1 {
    font-family: WidePixel;
    text-align: center;
    font-size: 80px;
  }
a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    cursor: url(${cursor}), auto;
    user-select: none;
}

.theme1 {
body {
    background-color:rgb(47, 47, 48);
    color: white;
}

}

.theme2 {
  body {
  background-color:rgb(203, 200, 200);
  }
  h1 {
    color: black;
    font-family: Manuscript;
  }
}

@keyframes forth {
  from {
  margin-left: 0px;
  } to {
  margin-left: 20px;
  margin-right: -5px;
}
}
.forth {
  animation: forth 0.5s ease-out forwards;
}

@keyframes back {
  from {
    margin-left: 20px;
    margin-right: -5px;
  } to {
  margin-left: -5px;
  margin-right: 20px;
}
}
.back {
  animation: back 0.5s ease-out forwards;
}

button {
width: 55px;
height: 30px;
background-color: white;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
padding: 0;

span {
width: 20px;
height: 20px;
background-color: black;
border-radius: 10px;
margin-right: 25px;
}
}
.warning {
display: none;
    overflow: hidden;

img {
max-width: 110px;}

p {
max-width: 300px;
}
}

@media screen and (max-width: 700px) {
    .warning {
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color:rgb(168, 96, 96);
    text-align: center;
    padding: 60px;
    top:0px;
    left:0px;
    z-index:1000;
    position: fixed;
    bottom: 0;
    right: 0;
    }
}

  #theme1 {
  background-color:rgb(50, 54, 89);

  a {
  color:rgb(147, 142, 179);
  }
  }
  #theme2 {

    background-color:rgb(130, 125, 125);
  a {
  color:rgb(196, 187, 187);
  }
  }

`;


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/city" element={<MyCity />} />
          <Route path="/future" element={<MyFuture />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

      <div className='warning'>
      <img src={error}></img>
        <p>вкрай раджу перейти на ширший екран, бо на сайті немає повної адаптивності</p>
      </div>
    </>
  );
};

export default App;
