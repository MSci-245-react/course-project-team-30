import React from 'react';
import { Button } from '@mui/material';
import { withFirebase } from '../Firebase';

const SignOut = ({ firebase }) => {
  const handleSignOut = () => {
    firebase
      .doSignOut()
      .then(() => console.log('Signed out successfully'))
      .catch(error => console.error('Sign out error:', error));
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default withFirebase(SignOut);
