import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from './WeatherCard'
import { v4 as uuidv4 } from 'uuid'

const WeatherList = () => {

  const [weather, setWeather] = useState([])
  const [city, setCity] = useState("Madrid")
  const [values, setValue] = useState("")
  const renderCards = () => {
    return weather.map((w) => <WeatherCard weather={w} city={city} key={uuidv4()} />);
  }
  useEffect(() => {
    const getWeather = async () => {
      try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}`);
        console.log(resp);
        setWeather(resp.data.list)
      } catch (err) {
        console.log(err)
      }

    }

    getWeather();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(values)
    setValue("")




  }


  const handleChange = (e) => {//Funcion para handlear el estado. ...values spread op. e.target.name: e.target value
    setValue(e.target.value);
  }
  useEffect(() => {
    const getWeather = async () => {
      try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}`);
        console.log(resp);
        setWeather(resp.data.list)
      } catch (err) {
        console.log(err)
      }

    }

    getWeather();
  }, [city])



  return <>
      <h3> Weather Search </h3>
      <header>
        
        <form onSubmit={handleSubmit}>

          <label htmlFor="name"></label><br />
          <input type="text" name="title" value={values} onChange={handleChange}></input>
          <button type="submit">🔎</button>
        </form>
        
      
      
      </header>
      <h2>City: {city}</h2>
      <section>
        {renderCards()}
    </section>
  </>;
};

export default WeatherList;
