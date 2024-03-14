import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const pages1 = ['Goals & Preferences'];
const pages2 = ['Meal Planning'];
const pages3 = ['Sign Out'];

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div>
          <Button
            onClick={() => navigate('/')}
            variant="text"
            color="inherit"
            sx={{ textTransform: 'capitalize', marginRight: 2 }}
          >
            Home
          </Button>
          {pages1.map((page) => (
            <Button
              key={page}
              onClick={() => navigate(`/GoalsPreferencesPage`)}
              variant="text"
              color="inherit"
              sx={{ textTransform: 'capitalize', marginRight: 2 }}
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
              sx={{ textTransform: 'capitalize', marginRight: 2 }}
            >
              {page}
            </Button>
          ))}
        </div>
        <div>
          {pages3.map((page) => (
            <Button
              key={page}
              onClick={() => navigate('/')}
              variant="outlined"
              color="inherit"
              sx={{ textTransform: 'capitalize', marginRight: 2 }}
            >
              {page}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
