import React from 'react';
import { Button } from '@mui/material';
import { withFirebase } from '/workspaces/course-project-team-30/client/src/components/Firebase/context.js';

const SignOut = ({ firebase }) => {
  const handleSignOut = async () => {
    try {
      await firebase.doSignOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default withFirebase(SignOut);
