
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    let [weatherInfo ,setWeatherInfo]=useState({
        city: "Nepal",
        feels_like: 8.13,
        humidity: 71,
        temp: 8.13,
        temp_max: 8.13,

        temp_min: 8.13,
        weather: "clear sky",

    });
    let updateInfo = (newInfo)=> {
        setWeatherInfo(newInfo);
    };
    return(
       <div style={{textAlign:"center"}}>
       <h2>Weather App by Nepal</h2>
       <SearchBox updateInfo ={updateInfo}/>
       <InfoBox info={weatherInfo}/>
       </div>
    );
}