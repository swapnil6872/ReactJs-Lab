import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState('');
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "20fd2c9eae731018bc5544019289196b"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            console.log(jsonResponse)
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            // setError(true);
            return result;
        } catch (err) {
            throw err;
        }

    }


    let handleChange = (event) => {
        setCity(event.target.value)
        console.log(city);
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity('');
            let newInfo = await getWeatherInfo();
            setError(false);
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" required value={city} />
                <br /><br />
                <Button variant="outlined" type='Submit'>Search</Button>
                <br />
                {error && <p style={{ color: 'red' }}>No Such place Exists in Our Api</p>}
            </form>

        </div>
    )
}