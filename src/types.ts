import { Dispatch } from 'react';

export interface WeatherDataInterface{
   coord: CoordInterface;
   weather: WeatherInterface;
   base: string;
   main: MainInterface;
   visibility: number;
   wind: WindInterface;
   clouds: CloudsInterface;
   dt: number;
   sys:SysInterface;
   id: number;
   name: string;
   cod: number;
}

export interface CoordInterface{
    lon: number;
    lat: number;
}
export interface WeatherInterface{
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface MainInterface{
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}
export interface WindInterface{
    speed: number;
    deg: number;
}
export interface CloudsInterface{
    all: number;
}
export interface SysInterface{
    type: number;
    id: number;
    message: number;
    country: string,
    sunrise: number;
    sunset: number;
}

export interface MainContextInterface{
    data: WeatherDataInterface;
    setData: Dispatch<WeatherDataInterface>;
}

