import React from 'react';
import styled from 'styled-components';

import futureImage from '../assets/catwithlaptop.gif';

const Container = styled.div`
  padding: 0rem 5rem 3rem 5rem;
`;

const FrontImage = styled.div `
  padding: 2.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1 {
  text-align: left;
  margin: 0;
  }
  div {
  width: 600px;
  }
`

const MyFuture = () => (
  document.title = "Мій розвиток",
  <div>
  <FrontImage>
  <img alt="frontimage" style={{width: 490 + 'px'}} src={futureImage}></img>
  <div>
  <h1>Мій розвиток</h1>
      <p>&lt;---- після важкої праці десь так і сплять</p>
      <br></br>
          </div>
  </FrontImage>
  <Container>
    зараз дуже зацікавлена у <b>аналітиці розвідки на основі відкритих джерел(OSINT)</b> та <b>техніці апаратного забезпечення</b>.<br></br> аналітики розвідки відіграють вирішальну роль у зборі, оцінці та інтерпретації інформації для підтримки прийняття рішень і стратегічного планування в багатьох секторах, в тому числі військовому і криміналістичному. <br></br> техніки з апаратного забезпечення підтримують та обслуговують комп'ютерні системи та периферійні пристрої, встановлюючи, налаштовуючи, тестуючи, усуваючи несправності та ремонтуючи обладнання.
 <br></br><br></br>    я б хотіла застосовувати свої майбутні навички та знання для того, щоб мати позитивний вплив на наше суспільство та рухати його далі.
  </Container>
  </div>
);

export default MyFuture;
