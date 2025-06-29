import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function WeatherApp(){

     const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike:23.5,
        temp:22.45,
        tempMin:24.05,
        tempMax:23.44,
        humidity:45,
        weather:'haze',
     });

     let updateInfo = (newInfo)=>{
         setWeatherInfo(newInfo);
     }
     
    return (
        <div style={{textAlign:"center"}}>
            <h2> Weather App by NonX </h2>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
        </div>
    )
}