import React, { useState } from 'react'; 
import {Container, Typography, TextField, Button, FormControlLabel, Checkbox} from '@mui/material';

const GoalsPreferencesPage =()=> { 
    const[weightGoal, setWeightGoal] = useState('');
    const[dietaryPreferences, setDietaryPreferences] = useState({
        vegan : false,
        vegetarian : false,
        halal: false,
    }); 
const handleCheckboxChange = (event) => {
    setDietaryPreferences({
        ...dietaryPreferences,
        [event.target.name]: event.target.checked,
    });
};

return(
    <Container>
        <Typography variant ="h4" gutterBottom>
            Set Your Goals and Preferences
        </Typography>
        <TextField
            label = "Weight Goal"
            variant = "outlined"
            fullWidth
            margin ="normal"
            value = {weightGoal}
            onChange = {(e) => setWeightGoal(e.target.value)}
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
        <Button variant = "contained" color = "primary" style = {{marginTop: '20px'}}>
            Save Preferences
        </Button>
    </Container>
);
};  

export default GoalsPreferencesPage;
