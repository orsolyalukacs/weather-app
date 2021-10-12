// WeatherIcon.jsx
import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import getDayLight from '../utils/utils.js';

const WeatherIcon = ({ weatherData }) => {
    let timeOfDay = getDayLight(weatherData);

    // Create weather icon class
    const weatherIcon = 'wi wi-owm';
    let weatherIconID = `${weatherIcon}-${timeOfDay}-${weatherData.weather[0].id}`;

    return (
        <Grid container justifyContent="center">
            <Box sx={{ p: 2 }}>
                <Typography variant="h1"><i className={weatherIconID}></i></Typography>
            </Box>
        </Grid>
    )
}

export default WeatherIcon;