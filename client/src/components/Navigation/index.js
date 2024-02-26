import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const pages1 = ['Goals & Preferences'];
const pages2 = ['Meal Planning']

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Button
          onClick={() => navigate('/')}
          variant="text"
          color="inherit"
          sx={{ textTransform: 'capitalize' }}
        >
          Home
        </Button>
        {pages1.map((page) => (
          <Button
            key={page}
            onClick={() => navigate(`/GoalsPreferencesPage`)}
            variant="text"
            color="inherit"
            sx={{ textTransform: 'capitalize' }}
          >
            {page}
          </Button>
        ))}
        {pages2.map((page) => (
          <Button
            key={page}
            onClick={() => navigate(`/MealPlanningPage`)}
            variant="text"
            color="inherit"
            sx={{ textTransform: 'capitalize' }}
          >
            {page}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
