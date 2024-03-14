import React, { useEffect, useState } from 'react'; 
import {Container, Typography, TextField, Button, FormControlLabel, Checkbox, Alert} from '@mui/material';
import MealPlanningPage from './MealPlanningPage';

const serverURL = "";

const GoalsPreferencesPage =()=> { 
    const[weightGoal, setWeightGoal] = useState('');
    const[currentWeight, setCurrentWeight] = useState('');
    const[startingWeight, setStartingWeight] = useState ('');
    const[carbIntake, setCarbIntake] = useState('');
    const [excludedIngredients, setExcludedIngredients] = useState('');
    const[dietaryPreferences, setDietaryPreferences] = useState({
        vegan : false,
        vegetarian : false,
        halal: false,
    }); 
    const [error, setError] = useState('')
    const [progress, setProgress] = useState(0);
    const [savedPreferences, setSavedPreferences] = useState({});
    const [initialSubmissionDone, setInitialSubmissionDone] = useState(false)
    const [formError, setFormError]= useState('');

const handleCheckboxChange = (event) => {
    setDietaryPreferences({
        ...dietaryPreferences,
        [event.target.name]: event.target.checked,
    });

    return <MealPlanningPage preferencesData={GoalsPreferencesPage} />;
};

const handleSavePreferences = () => {
    setFormError('');
    setError('');

    const sw = parseFloat(startingWeight || savedPreferences.startingWeight);
    const cw = parseFloat(currentWeight|| savedPreferences.currentWeight);
    const wg = parseFloat(weightGoal|| savedPreferences.weightGoal);

    if (!initialSubmissionDone){
        if (!weightGoal || !currentWeight || !startingWeight|| !carbIntake || !excludedIngredients){
        setFormError('Please fill all fields before saving');
        return;
    }
    setInitialSubmissionDone(true);
    }

    if (sw===wg){
        setError("Weight Goal can't be the same as starting weight");
        return;
    }

    if ((wg >sw && (cw < sw || cw > wg)) || (wg <sw && (cw > sw ||cw<wg))){
        setError("Current weight must be between starting weight and weight goal");
        return;
    }
    
    setSavedPreferences(prev =>({
        weightGoal: weightGoal || prev.weightGoal,
        currentWeight: currentWeight || prev.currentWeight,
        startingWeight: startingWeight || prev.startingWeight,
        carbIntake: carbIntake || prev.carbIntake,
        excludedIngredients: excludedIngredients|| prev.excludedIngredients,
        dietaryPreferences: {...prev.dietaryPreferences, ...dietaryPreferences}      
    }));

    setWeightGoal('');
    setCurrentWeight('');
    setStartingWeight('');
    setCarbIntake('');
    setExcludedIngredients('');
    Object.keys(dietaryPreferences).forEach(key => {
        setDietaryPreferences(prev => ({ ...prev, [key]: false}));
    });
    };
useEffect(() => {
    const getWeightLossProgress = () => {
        setError('')
        const sw = parseFloat(startingWeight);
        const cw = parseFloat(currentWeight);
        const wg = parseFloat(weightGoal);
        if (!sw || !cw || !wg) return 0;
        
        if (sw === wg){
            setError("Weight goal can't be the same as starting weight");
            return;
        }
        
        if ((wg >sw && (cw < sw || cw > wg)) || (wg <sw && (cw > sw ||cw<wg))){
            setError("Current weight must be between starting weight and weight goal");
            return;
        }
        
        let calculatedProgress = wg > sw
            ? ((cw-sw)/(wg-sw))*100
            : ((sw-cw)/(sw-wg))*100;
    
        setProgress(Math.max(0, Math.min(calculatedProgress, 100)));
   };
   
   getWeightLossProgress();
}, [startingWeight, currentWeight, weightGoal]);

const handleNumericChange = (e, setter) => {
    const value = e.target.value;
    if(!value || /^[0-9]*\.?[0-9]*$/.test(value)){
        setter(value);
    }
};

return(
    <Container>
        <Typography variant ="h4" gutterBottom>
            Set Your Goals and Preferences
        </Typography>
        <TextField
            label = "Weight Goal (kg)"
            variant = "outlined"
            fullWidth
            margin ="normal"
            value = {weightGoal}
            onChange = {(e) => handleNumericChange(e, setWeightGoal)}
        />
        <TextField
            label = "Current Weight (kg)"
            variant = "outlined"
            fullWidth
            margin ="normal"
            value = {currentWeight}
            onChange = {(e) => handleNumericChange(e, setCurrentWeight)}
        />
        <TextField
            label = "Starting Weight (kg)"
            variant = "outlined"
            fullWidth
            margin ="normal"
            value = {startingWeight}
            onChange = {(e) => handleNumericChange(e, setStartingWeight)}
        />
        <Typography variant = "h6" gutterBottom>
            Weight Goal Progress
        </Typography>
        {error ?(
            <Alert severity ="error" style ={{marginTop: '10px'}}>{error}</Alert>
        ):(
            <Typography variant = "body1" style ={{marginTop: "10px"}}>
                {progress.toFixed(2)}% Complete
            </Typography>
        )}
        <TextField
            label = "Carb Intake (g per day)"
            variant ="outlined"
            fullWidth
            margin = "normal"
            value = {carbIntake}
            onChange = {(e) => handleNumericChange(e, setCarbIntake)}
        />
        <TextField
            label = "Excluded Ingredients"
            variant ="outlined"
            fullWidth
            multiline
            margin = "normal"
            value = {excludedIngredients}
            onChange = {(e) => setExcludedIngredients(e.target.value)}
        />
        <Typography varaint = "h6" gutterBottom>
            Dietary Preferences
        </Typography>
        <FormControlLabel
            control = {<Checkbox checked = {dietaryPreferences.vegan} onChange ={ handleCheckboxChange} name = "vegan" />}
            label="Vegan"
        />
        <FormControlLabel
            control = {<Checkbox checked = {dietaryPreferences.vegetarian} onChange ={ handleCheckboxChange} name = "vegetarian" />}
            label="Vegetarian"
        />
        <FormControlLabel
            control = {<Checkbox checked = {dietaryPreferences.halal} onChange ={ handleCheckboxChange} name = "halal" />}
            label="Halal"
        />
        <Button variant = "contained" color = "primary" style = {{marginTop: '20px'}} onClick = {handleSavePreferences}>
            Save Preferences
        </Button>
        {formError && (
            <Alert severity ="error" style ={{marginTop: "10px"}}>
                {formError}
            </Alert>
        )}
        <Typography variant = "h6" style ={{ marginTop: '20px'}}> Current Settings:</Typography>
            <Typography>Weight Goal: {savedPreferences.weightGoal}</Typography>
            <Typography>Current Weight: {savedPreferences.currentWeight}</Typography>
            <Typography>Starting Weight: {savedPreferences.startingWeight}</Typography>
            <Typography>Carb Intake: {savedPreferences.carbIntake}</Typography>
            <Typography>Excluded Ingredients: {savedPreferences.excludedIngredients}</Typography>
            <Typography>Dietary Preferences: {Object.entries(savedPreferences.dietaryPreferences || {})
            .filter(([key,value])=> value)
            .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1)).join(', ')}
            </Typography>
    </Container>
);
};
export default GoalsPreferencesPage;