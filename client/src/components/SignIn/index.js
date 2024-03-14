import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container } from '@mui/material';
import { withFirebase } from '/workspaces/course-project-team-30/client/src/components/Firebase/context.js';

const SignIn = ({ firebase }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
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
      await firebase.doSignInWithEmailAndPassword(formData.email, formData.password);
      setLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
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
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default withFirebase(SignIn);
