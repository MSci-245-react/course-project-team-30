import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import MealPlanningPage from '../App/MealPlanningPage.js';
import GoalsPreferencesPage from '../App/GoalsPreferencesPage.js';
import SignUp from "../SignUp/index.js"
import SignIn from '../SignIn/index.js';
import LandingPage from '../Landing/index.js';
import HomePage from '../Home/index.js';

const PrivateRoute = ({authenticated}) => {
    return (
        <Routes>

        <Route 
        path="/"
        element= {authenticated ? <HomePage/> : <LandingPage />}
        />
        <Route
        path="/SignIn"
        element={authenticated ? <Navigate replace to="/" /> : <SignIn /> }
        />


        <Route path="/GoalsPreferencesPage" element={<GoalsPreferencesPage />} />
        <Route path="/MealPlanningPage" element={<MealPlanningPage />} />
        <Route path="/SignOut element={<>}"/>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />


        </Routes>
    );
};

export default PrivateRoute;