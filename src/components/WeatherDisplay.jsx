// WeatherDisplay.jsx
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WeatherIcon from './WeatherIcon';

const WeatherDisplay = ({ weatherData }) => {
    const [selected, setSelected] = useState(false);

    return (
        <Grid container justifyContent="center" marginTop={10}>
            {weatherData &&
                <Box textAlign="center">
                    {/* City Name, country code */}
                    <Typography variant="h4">
                        {weatherData.name} , {weatherData.sys.country}
                    </Typography>
                    <Box sx={{ p: 2 }}>
                        {/* Temperature */}
                        <Typography variant="h4">
                            {!selected ? weatherData.main.temp : ((Math.floor(weatherData.main.temp * 1.8) + 32))
                            }
                            {/* Switch °C/°F */}
                            <Button type="submit"
                                size="large"
                                onClick={() => {
                                    setSelected(!selected);
                                }}>
                                <Typography variant="h4">
                                    {selected ?
                                        "°F" : "°C"}
                                </Typography>
                            </Button>
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2 }}>
                        {/* Weather */}
                        <Typography variant="h2">
                            {weatherData.weather[0].main}
                        </Typography>
                    </Box>
                     {/* Icon */}
                    <WeatherIcon weatherData={weatherData}/>
                </Box>
            }
        </Grid>
    )
}

export default WeatherDisplay;