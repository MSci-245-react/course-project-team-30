import React from 'react';
import { Container, Grid, TextField, Button, Card, CardContent, Typography} from '@mui/material';

const MealPlanningPage = () => {
    return (
        <Container>
            <Typography variant = "h4" gutterBottom>
                Meal Planning and Recipes
            </Typography>
            <TextField
                label = "Search for recipes"
                variant = "outlined"
                fullWidth
                margin = "normal"
            />
            <Button variant ="contained" color = "primary">
                Search
            </Button>
            <Grid container spacing ={3} style = {{ marginTop: '20px'}}>
                {/* Example recipe cards */}
                {[1,2,3,4].map((recipe)=> (
                    <Grid item xs={12} sm ={6} md = {4} lg = {3} key = {recipe}>
                        <Card>
                            <CardContent>
                                <Typography variant = "h5" > Recipe {recipe}</Typography>
                                <Typography variant = "body2" color = "textSecondary">
                                    Recipe details here
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default MealPlanningPage;