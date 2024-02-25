import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const pages = ['GoalsPreferencesPage', 'MealPlanningPage'];

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
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => navigate(`/${page}`)}
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
