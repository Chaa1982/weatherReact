import React, { useEffect, useRef, useState, useContext } from "react";
import { FlexColumn, FlexRow } from "../styled/Flex";
import { Button } from "../styled/Button";
import { WeatherDataInterface } from "../types";
import { MainContext } from "../contexts/MainContext";

//function convert temperature in celsius format
function inCelsiusFn(forengeit: number): number {
  return Math.floor(((forengeit - 32) * 5) / 9);
}

function WeatherApiFn(city: string): Promise<WeatherDataInterface> {
  const KEY = `03072fbacc09d24ee945cae072bf3567`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
  const options = {
    method: "GET",
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err, "Error with YahhoWeatherApi"));
}

function convertMsAsDate(ms: number)  {
  return new Date(ms);
}

  

export const InputComponent = () => {
  const { data, setData } = useContext(MainContext)!;
  const [city, setCity] = useState<string>("London");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    async function getWeather() {
      setData(await WeatherApiFn(city));
    }
    getWeather();
  }, [city, setData]);

  let flag: boolean = false;
  const onClickFn = () => {
    const value = inputRef.current?.value;
    setCity(value || "London");
    setCurrentDate(new Date());
    flag = true;
  };

  return (
    <FlexColumn className="device" alignItems="center">
      <FlexRow color={"yellowgreen"} alignItems="center" margin="0 0 40px 0 ">
        as of: {currentDate?.getDate()}.{currentDate?.getMonth()}.
        {currentDate?.getFullYear()}
        {"      "}
        {currentDate?.getHours()}:{currentDate?.getMinutes()}:
        {currentDate?.getSeconds()}
      </FlexRow>
      <FlexRow>
        <input ref={inputRef} type="text" placeholder="enter city" />
        <Button
          className="btn-city"
          onClick={onClickFn}
          width="120px"
          height="23px"
          borderRadius="10px"
          background="blue"
          color="white"
        >
          get weather data
        </Button>
      </FlexRow>
      <FlexColumn color="yellow" alignItems="center">
        <h1>
          {data?.name} ({data?.sys.country})
        </h1>
        <p>temp: {data?.main.temp && inCelsiusFn(data?.main.temp)}</p>
        <p>
          temp: min. {data?.main.temp_min && inCelsiusFn(data?.main.temp_max)} -
          max. {data?.main.temp_max && inCelsiusFn(data?.main.temp_max)}
        </p>
        <p>pressure: {data?.main.pressure}</p>
        <p>humidity: {data?.main.humidity}</p>
        <p>
          deg: {data?.wind.deg} - speed: {data?.wind.speed} m/s
        </p>
        <p>
          {/*сервер дає однаковий час сходу та заходу сонця (роблю штучно -12 годин)*/}
          sunrise: {(convertMsAsDate(data?.sys.sunrise).getHours()-12)}:{convertMsAsDate(data?.sys.sunrise).getMinutes()} - sunset: {convertMsAsDate(data?.sys.sunset).getHours()}:{convertMsAsDate(data?.sys.sunset).getMinutes()}
        </p>
        <p>base: {data?.base}</p>
      </FlexColumn>
    </FlexColumn>
  );
};
