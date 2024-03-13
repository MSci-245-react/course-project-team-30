// LoginPage.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container } from '@mui/material';
import { withFirebase } from '/workspaces/course-project-team-30/client/src/components/Firebase/context.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GoalsPreferencesPage from './GoalsPreferencesPage';

const LoginPage = ({ firebase }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.doSignInWithEmailAndPassword(formData.username, formData.password);
      setLoggedIn(true);
    } catch (error) {
      // Handle sign in error
      console.log(error.message);
    }
  };

  //if (signedUp) {
    //return <Redirect to="/" />; // Redirect to the Home page upon successful signup
  //}
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            //onClick={setLoggedIn(true)}
          >
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default withFirebase(LoginPage);
