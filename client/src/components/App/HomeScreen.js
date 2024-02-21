import React from 'react';
import {Container, Typography, Button, Box} from '@mui/material';

const HomeScreen = () => { 
    return (
        <Container>
            <Typography variant = "h2" gutterBottom>
                Welcome to HealthyPlate
            </Typography>
            <Typography variant = "h5">
                Plan your meals, track your nutrition, and achieve your dietary goals!
            </Typography>
            <Box mt= {4}>
                <Button varaint = "contained" color="primary" href="/signup">
                    Sign Up
                </Button>
                <Button variant = "outlined" color="primary" href = "/login" style = {{marginLeft:'20px'}}>
                    Log In
                </Button>
            </Box>
        </Container>
    );
};

export default HomeScreen;