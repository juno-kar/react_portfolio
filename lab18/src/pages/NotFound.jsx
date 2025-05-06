import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;


const NotFound = () => (
  document.title = "Помилка 404",
  <Container>
    <h1>Сторінку не знайдено!!</h1>
    <p>абвгдеєжз</p>
  </Container>
);

export default NotFound;
