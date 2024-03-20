import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to HealthyPlate
      </Typography>
      <Typography variant="h5">
        Plan your meals, track your nutrition, and achieve your dietary goals!
      </Typography>
      <Box mt={4}>
        
        {/* Render Sign Up button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/SignUp')}
          style={{ marginLeft: '20px' }}
        >
          Sign Up
        </Button>
        {/* Render Log In button */}
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/SignIn')}
          style={{ marginLeft: '20px' }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
