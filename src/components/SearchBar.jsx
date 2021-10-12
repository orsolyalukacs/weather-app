// SearchBar.jsx
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearchSubmit }) => {
    const [cityName, setCityName] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        setCityName('');
        onSearchSubmit(cityName);
    }

    const onInputChange = (event) => {
        setCityName(event.target.value)
    }

    return (
        <Grid container justifyContent="center" marginTop={10}>
            <Box>
                <form onSubmit={onFormSubmit}>
                    <Grid container justifyContent="center">
                        <TextField required label="Enter city name" value={cityName} onChange={onInputChange} />
                        <Button variant="contained" type="submit" size="large">Search</Button>
                    </Grid>
                </form>
            </Box>
        </Grid>
    );
}

export default SearchBar;