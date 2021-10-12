import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchBar from './components/SearchBar';
import WeatherDisplay from "./components/WeatherDisplay";
import { API_KEY } from "../config";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  // TO-DO: background-toggle, and change upon daytime
  // const [bgToggle, setBgToggle] = useState(''); 
  const apiKey = API_KEY;

  const fetchWeatherData = async (city) => {
    try {
      // Fetch weather data from OpenWeatherMap API
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`, {
        mode: 'cors',
      })
        .then(res => {
          // Error message
          if (res.status == 404) {
            setErrorMessage('City not found!');
          } else {
            setErrorMessage('');
            // Reset error message to default
            return res.json()
          }
        })
        .then(result => {
          setWeatherData(result)
        })
    } catch (err) {
      console.log('err', err);
    }
  }

  return (
    <>
      <CssBaseline />
      <Grid container justifyContent="center" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <Box marginTop={10}>
          {/* App title  */}
          <Typography variant="h1" component="h2">
            Weather App</Typography>
          <Grid container justifyContent="center">
            {/* Searchbar */}
            <SearchBar onSearchSubmit={fetchWeatherData} />
            {/* Error message */}
            {errorMessage ?
              <Typography marginTop={5} color="#D8000C" fontWeight="bold" variant="p">{errorMessage}</Typography>
              : null}
          </Grid>
          <Container>
            {/* Weather display */}
            {weatherData &&
              <>
                <WeatherDisplay weatherData={weatherData} />
              </>
            }
          </Container>
        </Box>
      </Grid>
    </>
  )
}

export default App;