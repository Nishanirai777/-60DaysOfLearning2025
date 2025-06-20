import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';
export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "75c3712af188d52f35edb18a33ba5010";
    let getWeatherInfo = async () => {


        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);

    };


    let handelChange = (evt) => {
        setCity(evt.target.value);
    };
    let handelSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };
    return (
        <div className='searchBox'>
            <h3>Search for the  Weather </h3>
            <form onSubmit={handelSubmit}>
                <TextField id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handelChange}
                />
                <br></br><br></br>
                <Button variant="contained" type='submit'> Search </Button>

            </form>
        </div>
    );
}