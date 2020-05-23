import React, { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard/index.jsx";
import { WeatherWhrapper, Form } from "../../styles";

export default function Weather({ location }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: "",
    condition: "",
    country: "",
    city: "",
  });

  async function getWeather(query) {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=5d7dd47040a763978f98dd3d24b07810`
    );
    const data = await res.json();
    setWeather({
      temp: data.main,
      condition: data.weather[0],
      country: data.sys,
      city: data.name,
    });
    console.log(data);
  }

  useEffect(() => {
    getWeather(location);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  return (
    <WeatherWhrapper>
      <WeatherCard
        temp={weather.temp.temp}
        condition={weather.condition.main}
        city={weather.city}
        country={weather.country.country}
      />
      <Form>
        <input
          type="text"
          placeholder={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={(e) => handleSearch(e)} hidden>
          Search
        </button>
      </Form>
    </WeatherWhrapper>
  );
}
