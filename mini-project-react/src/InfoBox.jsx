import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css"
export default function InfoBox({ info }) {
    let INC_URL = "https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const Hot_URL =
        "https://images.interestingengineering.com/2022/08/01/image/jpeg/DRzWAc3LpXVPb2SpnYQKc6AeJrWUJSuHTyUrpAeV.jpg"
    const COLD_URL =
        "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg"
    const RAIN_URL =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYxrlklZ6nDT1fnj8OAMy-jsCZti8gPZLZw&s";
    return (

        <div className="InfoBox">
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? Hot_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                                info.humidity > 80
                                    ? <ThunderstormIcon />
                                    : info.temp > 15
                                        ? <WbSunnyIcon />
                                        : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>tempreture ={info.temp}&deg;C</p>
                            <p>Humidity ={info.humidity}</p>
                            <p>Min Temp= {info.tempMin}&deg;C</p>
                            <p>Max Temp ={info.tempMax}&deg;C</p>
                            <p>The weather can be described as {info.weather} and fells like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>

    )
}