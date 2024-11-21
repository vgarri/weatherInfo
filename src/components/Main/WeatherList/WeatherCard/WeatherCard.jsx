import React from "react";

const WeatherCard = (w) => {

  const {weather} = w
  
  return (<>
 
    <article className="weather-card">
      <h3>Time: {weather.dt_txt.split(" ")[1].slice(0,5)}</h3>
      <h4>Description: {weather.weather[0].description}</h4>
      <h5>Date: {weather.dt_txt.slice(0,10)}</h5>
      <h5>Temperature: {((weather.main.temp)-273.15).toFixed(1)}℃</h5>
      
    </article>
    </>);
};

export default WeatherCard;
