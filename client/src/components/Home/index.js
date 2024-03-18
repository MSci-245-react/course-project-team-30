import React, {useEffect, useState, useContext} from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const HomePage = () => {
  const [userID, setuserID] = useState(null);
  const firebase = useContext(FirebaseContext);
  const [idToken, setIdToken] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try{
        const user = firebase.auth.currentUser;
        if(user){
          const token = await user.getIdToken();
          setIdToken(token);
          setuserID(user.uid);
        }
      }catch(error){
        console.error('Error fetching details:',
        error);
      }
    };
    fetchUserDetails();
  }, [firebase]);


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

export default HomePage;