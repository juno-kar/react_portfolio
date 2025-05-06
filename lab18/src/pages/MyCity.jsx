import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import forestImage from '../assets/forest.png';

const Container = styled.div`
  padding: 3rem 6rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  div {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  }
`;

const FrontImage = styled.div `
  display: flex;
  padding: 2.2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  h1 {
  text-align: left;
  margin: 0;
  }
  div {
  margin-top: 20px;
  width: 600px;
  }
`


const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [weatherDesc, setDesc] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.26247372337931&lon=30.288554575755313&lang=ua&appid=777d292a3b56bc669e8efe23366b3b58&units=metric')
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error('Помилка:', error));
  }, []);

  
  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?q=50.263,30.289&lang=uk&key=5a1a0d4a6e1546f0bc7151725250305')
      .then(response => response.json())
      .then(data => setDesc(data))
      .catch(error => console.error('Помилка:', error));
  }, []);


  return (
    document.title = "Моє місто",
        <div>
          <FrontImage>
          <img alt="frontimage" style={{width: 490 + 'px'}} src={forestImage}></img>
          <div>
          <h1>Моє місто</h1>

          <div>
          <p>&lt;---- Боярський ліс біля мого селища</p>
          <br></br>
          <p>з дитинства живу в селищі Глеваха, ходила тут в школу, продовжую жити тут. <br></br>назва Глеваха походить від назви річки Глеви (від слова глевкий — сирий), яка протікає через сільську частину Глевахи і яка раніше мала дуже глинисте річище.  </p>
          </div>
          </div>
          </FrontImage>

          <Container>
      {weather ? (
        <div>
        <span>
        {weather.sys.country}, {weather.name} <br></br>
        Широта: {weather.coord.lat}°, довгота: {weather.coord.lon}°<br></br>     
        </span>
        <span>
        Поточна температура: {weather.main.temp}°C, але відчувається як {weather.main.feels_like}°C <br></br>
        Поточна вологість: {weather.main.humidity}% <br></br>
        Поточна швидкість вітру: {weather.wind.speed} м/с <br></br>
        </span>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
      {weatherDesc ? (
        <div>
          Погода цієї години - {weatherDesc.current.condition.text}, ультрафіолетовий індекс - {weatherDesc.current.uv}
        </div>
      ) : (
      <p>Завантажуємо опис...</p>
      )}</Container>
    </div>
  );
};

export default MyCity;
