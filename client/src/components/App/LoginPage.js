import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container } from '@mui/material';

const LoginPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
            //onClick={() =>}
            variant="contained"
            color="primary"
            fullWidth
          >
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
