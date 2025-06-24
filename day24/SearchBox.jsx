
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){

    let [city , setCity ]=useState("");
    let [error ,setError]= useState(false);
const API_URL  = "https://api.openweathermap.org/data/2.5/weather";
const  API_KEY = "75c3712af188d52f35edb18a33ba5010";


let getweatherInfo= async() => {
    try{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
let jsonResponse = await response.json();
console.log(jsonResponse);
let result ={
    city:city,
    temp: jsonResponse.main.temp,
    temp_min: jsonResponse.main.temp_min,
    temp_max: jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feels_like: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].description,
};
console.log(result);
return result;
    } catch(err){
        throw err;
        //seterror("No such place in our ApI..(thank YOu..!");
    }
    };
    

    let handleChange = (event)=>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
              let newInfo = await getweatherInfo();
              updateInfo(newInfo);
        }catch(err){
            setError(true);
        
        }
       
    };
    return(
 <div className='SearchBox'>
    
    <form onSubmit={handleSubmit}>
    <TextField id="City"
     label="City Name" 
    variant="outlined" required
    value={city}
    onChange={handleChange} />
    <br></br>
    <br></br>
    <Button variant="contained" type=" submit">
        Search
      </Button>
      {error && <p style={{color: "red"}}>No such place in our ApI Thank you..!</p>}
    </form>
 </div>
    );
}