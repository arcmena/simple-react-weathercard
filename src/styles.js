import styled from "styled-components";

//App
export const AppWhrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }
`;

//Weather
export const WeatherWhrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-content: center;
  margin: 10px auto;

  input {
    font-size: 1rem;
    text-align: center;
    border-radius: 6px;
    border-style: groove;
    height: 25px;
    width: 200px;
    font-family: "Fira Sans", sans-serif;
  }
`;

// WeaterCard
export const Card = styled.div`
  background: ${(props) => props.gradientColor};
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  border-radius: 15px;

  img {
    height: 30%;
  }
`;

export const Location = styled.div`
  text-align: center;

  h1 {
    font-family: "Merriweather", sans-serif;
    font-size: 1.3rem;
  }

  h3 {
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
  }
`;

export const Temp = styled.h1`
  font-family: "Fira Sans", sans-serif;
  font-size: 2rem;
  font-weight: 200;
`;

export const Condition = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;
