import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import MealPlanningPage from './MealPlanningPage';
import GoalsPreferencesPage from './GoalsPreferencesPage';
import Navigation from "../Navigation"

function App() {
  return (
    <Router>
      <div>
        <Navigation/>

      <Routes>
        <Route path="/GoalsPreferencesPage" element={<GoalsPreferencesPage />} />
        <Route path="/MealPlanningPage" element={<MealPlanningPage />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
