import React from "react";

import { Card, Location, Temp, Condition } from "../../../styles";

function WeatherCard({ temp, condition, city, country }) {
  //Props Temperature
  let { highColor, lowColor } = 0;
  let bg = null;
  if (temp > 19) {
    //Hot Weather
    highColor = (1 - (temp - 20) / 30) * 255;
    lowColor = highColor - 50;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (temp <= 19) {
    // Cold Weather
    highColor = (1 - (temp - 20) / 30) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  //Props Condition
  let icon = "";
  switch (condition) {
    case "Clear":
      icon = "../../../img/Mostly Sunny-2x.png";
      break;
    case "Clouds":
      icon = "./../../img/Mostly Cloudy-2x.png";
      break;
    case "Haze":
      icon = "./../../img/Haze-2x.png";
      break;
    case "Hail":
      icon = "./../../img/Hail-2x.png";
      break;
    case "Fog":
      icon = "./../../img/Fog-2x.png";
      break;
    case "Tornado":
      icon = "./../../img/Tornado-2x.png";
      break;
    case "Dust":
      icon = "./../../img/Dust-2x.png";
      break;
    case "Mist":
      icon = "./../../img/Fog-2x.png";
      break;
    case "Snow":
      icon = "./../../img/Snow-2x.png";
      break;
    case "Rain":
      icon = "./../../img/Rain-2x.png";
      break;
    case "Drizzle":
      icon = "./../../img/Drizzle-2x.png";
      break;
    case "Thunderstorm":
      icon = "./../../img/Severe Thunderstorm-2x.png";
      break;
    default:
      icon = "./../../img/Fog-2x.png";
      break;
  }

  return (
    <Card gradientColor={bg}>
      <Location>
        <h1>{city}</h1>
        <h3>{country}</h3>
      </Location>
      <img src={icon} alt="Weather Icon" />
      <Temp>{temp} °C</Temp>
      <Condition>{condition}</Condition>
    </Card>
  );
}

export default WeatherCard;
