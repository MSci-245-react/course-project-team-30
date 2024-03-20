import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container } from '@mui/material';
import { withFirebase } from '../Firebase/context.js';
import {useNavigate} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';

const SignUp = ({ firebase }) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    if(name === 'email') setEmail(value);
    else if(name === 'password') setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    firebase
      .doCreateUserEmailAndPassword(email, password)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
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
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default withFirebase(SignUp);
