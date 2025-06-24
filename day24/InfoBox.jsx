import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
//import BeachAccessIcon from '@mui/icons-material/BeachAccess';
//import WbSunnyIcon from '@mui/icons-material/WbSunny';
//import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1669583816948-eed491f26aaa?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1683120756675-ecbaf13af510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW4lMjBkYXklMjAlMjB3aXRoJTIwY291cGxlfGVufDB8fDB8fHww";
    return (
        <div className="InfoBox">

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                           
                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity ={info.humidity}</p>
                            <p>Min_Temp={info.temp_min}&deg;C</p>
                            <p>Max_Temp={info.temp_max}&deg;C</p>
                            <p>The Weather can be describe as <b>{info.weather} </b> and  Feels_Like={info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}