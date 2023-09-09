import React, { useEffect, useRef, useState } from "react";
import { FlexColumn, FlexRow } from "../styled/Flex";
import { Button } from "../styled/Button";
import { WeatherDataInterface } from "../types";

//function convert temperature in celsius format
function inCelsiusFn(forengeit: number): number {
  return Math.floor(forengeit / 33.8);
}

function WeatherApiFn(city: string): Promise<WeatherDataInterface> {
  const KEY = "03072fbacc09d24ee945cae072bf3567";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
  const options = {
    method: "GET",
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err, "Error with YahhoWeatherApi"));
}

export const InputComponent = () => {
  const [city, setCity] = useState<string>("London");
  const [data, setData] = useState<WeatherDataInterface | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    async function getWeather() {
      setData(await WeatherApiFn(city));
    }
    getWeather();
  }, [data, setData]);

  const onClickFn = () => {
    const value = inputRef.current?.value;
    setCity(value || "London");
  };

  return (
    <FlexColumn className="device" alignItems="senter">
      <FlexRow>
        <input ref={inputRef} type="text" placeholder="enter city" />
        <Button onClick={onClickFn} height="23px">
          get weather data
        </Button>
      </FlexRow>
      <FlexColumn color="yellow" alignItems="center">
        <h1>
          {data?.name} ({data?.sys.country})
        </h1>
        <p>temp: {data?.main.temp && inCelsiusFn(data?.main.temp)}</p>
        <p>
          temp: min.{" "}
          {data?.main.temp_min && inCelsiusFn(data?.main.temp_min)} - max.{" "}
          {data?.main.temp_max && inCelsiusFn(data?.main.temp_max)}
        </p>
        <p>pressure: {data?.main.pressure}</p>
        <p>humidity: {data?.main.humidity}</p>
        <p>
          deg: {data?.wind.deg} - speed: {data?.wind.speed}
        </p>
        <p>
          sunrise: {data?.sys.sunrise} - sunset: {data?.sys.sunset}
        </p>
        <p>base: {data?.base}</p>
      </FlexColumn>
    </FlexColumn>
  );
};
