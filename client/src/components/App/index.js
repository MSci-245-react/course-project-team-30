import React, {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from '../Navigation/PrivateRoute';
import {FirebaseContext} from '../Firebase';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  //....
})

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    if(firebase){
      const listener = firebase.auth.onAuthStateChanged(user => {
        if(user){
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
      return () => listener();
    }
  }, [firebase]);

  const authenticated = !!authUser;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <PrivateRoute authenticated={authenticated} authUser={authUser} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
