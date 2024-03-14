import React from 'react';
import { Container, Grid, TextField, Button, Card, CardContent, Typography} from '@mui/material';

const MealPlanningPage = () => {
    // Define an array of recipe objects
    const recipes = [
        {
            name: 'Spaghetti Carbonara',
            dietary: 'Halal',
            cuisine: 'Italian',
            ingredients: ['spaghetti', 'eggs', 'beef bacon', 'parmesan cheese', 'black pepper'],
            instructions: '[1.] Cook spaghetti according to package instructions. [2.] In a separate pan, fry bacon until crispy. [3.] In a bowl, whisk together eggs and Parmesan cheese. [4.] Drain spaghetti and add it to the pan with bacon. [5.] Quickly stir in the egg and cheese mixture. [6.] Season with black pepper and serve.'
        },
        {
            name: 'Chicken Stir-Fry',
            dietary: 'Halal',
            cuisine: 'Asian',
            ingredients: ['chicken breast', 'bell peppers', 'onion', 'soy sauce', 'sesame oil'],
            instructions: '[1.] Slice chicken breast into thin strips. [2.] Heat sesame oil in a pan over medium-high heat. [3.] Add chicken and stir-fry until cooked through. [4.] Add sliced bell peppers and onion to the pan. [5.] Stir in soy sauce and cook until vegetables are tender. [6.] Serve hot.'
        },
        {
            name: 'Vegetable Curry',
            dietary: 'Vegetarian',
            cuisine: 'Indian',
            ingredients: ['potatoes', 'carrots', 'peas', 'onion', 'tomatoes', 'coconut milk', 'curry powder'],
            instructions: '[1.] Heat oil in a pan and sauté onions until golden brown. [2.] Add chopped tomatoes and cook until soft. [3.] Add diced potatoes, carrots, and peas. [4.] Stir in curry powder and cook for a few minutes. [5.] Pour in coconut milk and simmer until vegetables are tender. [6.] Serve hot with rice or bread.'
        },
        {
            name: 'Quinoa Salad',
            dietary: 'Vegan',
            cuisine: 'International',
            ingredients: ['quinoa', 'cucumber', 'tomatoes', 'red onion', 'parsley', 'lemon juice', 'olive oil'],
            instructions: '[1.] Rinse quinoa under cold water. [2.] Cook quinoa according to package instructions and let it cool. [3.] Chop cucumber, tomatoes, and red onion. [4.] In a large bowl, combine cooked quinoa with chopped vegetables. [5.] Add chopped parsley, lemon juice, and olive oil. [6.] Toss everything together and serve chilled.'
        },
        {
            name: 'Mushroom Risotto',
            dietary: 'Vegetarian',
            cuisine: 'Italian',
            ingredients: ['arborio rice', 'mushrooms', 'vegetable broth', 'onion', 'garlic', 'parmesan cheese', 'butter'],
            instructions: '[1.] In a large saucepan, heat vegetable broth over medium heat. [2.] In another pan, sauté chopped onion and minced garlic until soft. [3.] Add arborio rice to the pan and cook, stirring constantly, for a few minutes. [4.] Gradually add warm vegetable broth to the rice, stirring frequently until absorbed. [5.] Continue adding broth and cooking until the rice is tender and creamy. [6.] Stir in sliced mushrooms, parmesan cheese, and butter. [7.] Cook until mushrooms are tender and the risotto is creamy. [8.] Serve hot.'
        },
        {
            name: 'Grilled Salmon with Lemon Butter Sauce',
            dietary: 'Halal',
            cuisine: 'International',
            ingredients: ['salmon fillets', 'lemon', 'butter', 'garlic', 'fresh parsley', 'salt', 'black pepper'],
            instructions: '[1.] Preheat grill to medium-high heat. [2.] Season salmon fillets with salt and pepper. [3.] Grill salmon for 4-5 minutes on each side or until cooked through. [4.] In a small saucepan, melt butter over medium heat. [5.] Add minced garlic and cook until fragrant. [6.] Stir in lemon juice and chopped parsley. [7.] Drizzle lemon butter sauce over grilled salmon. [8.] Serve hot.'
        },
        {
            name: 'Spinach and Feta Stuffed Chicken Breast',
            dietary: 'Halal',
            cuisine: 'Mediterranean',
            ingredients: ['chicken breast', 'spinach', 'feta cheese', 'garlic powder', 'black pepper', 'olive oil'],
            instructions: '[1.] Preheat oven to 375°F (190°C). [2.] Butterfly chicken breasts and season with garlic powder and black pepper. [3.] In a bowl, mix together chopped spinach and crumbled feta cheese. [4.] Stuff each chicken breast with the spinach and feta mixture. [5.] Secure with toothpicks. [6.] Heat olive oil in a skillet over medium-high heat. [7.] Sear stuffed chicken breasts for 2-3 minutes on each side. [8.] Transfer chicken to a baking dish and bake for 20-25 minutes or until cooked through. [9.] Remove toothpicks before serving.'
        },
        {
            name: 'Caprese Salad',
            dietary: 'Vegetarian',
            cuisine: 'Italian',
            ingredients: ['tomatoes', 'fresh mozzarella cheese', 'fresh basil leaves', 'balsamic glaze', 'extra virgin olive oil', 'salt', 'black pepper'],
            instructions: '[1.] Slice tomatoes and fresh mozzarella cheese into equal-sized rounds. [2.] Arrange alternating slices of tomatoes and mozzarella on a serving platter. [3.] Tuck fresh basil leaves between the tomato and mozzarella slices. [4.] Drizzle balsamic glaze and extra virgin olive oil over the salad. [5.] Season with salt and black pepper to taste. [6.] Serve immediately.'
        },
        {
            name: 'Beef Tacos',
            dietary: 'Halal',
            cuisine: 'Mexican',
            ingredients: ['beef mince', 'taco seasoning', 'tortillas', 'lettuce', 'tomatoes', 'cheddar cheese', 'sour cream'],
            instructions: '[1.] In a skillet, cook beef mince over medium heat until browned. [2.] Stir in taco seasoning and cook according to package instructions. [3.] Warm tortillas in a separate skillet or in the microwave. [4.] Assemble tacos by filling tortillas with cooked beef, shredded lettuce, diced tomatoes, and grated cheddar cheese. [5.] Top with a dollop of sour cream. [6.] Serve immediately.'
        },
        {
            name: 'Thai Green Curry',
            dietary: 'Vegetarian',
            cuisine: 'Thai',
            ingredients: ['green curry paste', 'coconut milk', 'tofu', 'bell peppers', 'eggplant', 'bamboo shoots', 'basil leaves'],
            instructions: '[1.] In a large pot, heat green curry paste over medium heat until fragrant. [2.] Pour in coconut milk and stir until combined. [3.] Add diced tofu, sliced bell peppers, cubed eggplant, and bamboo shoots. [4.] Simmer until vegetables are tender. [5.] Stir in fresh basil leaves. [6.] Serve hot with rice.'
        },
        {
            name: 'Beef and Broccoli Stir-Fry',
            dietary: 'Halal',
            cuisine: 'Asian',
            ingredients: ['beef sirloin', 'broccoli florets', 'soy sauce', 'oyster sauce', 'garlic', 'ginger', 'cornstarch'],
            instructions: '[1.] Slice beef sirloin into thin strips and marinate in a mixture of soy sauce, oyster sauce, minced garlic, and grated ginger. [2.] In a wok or large skillet, heat oil over high heat. [3.] Stir-fry marinated beef until browned. [4.] Add broccoli florets and continue to stir-fry until tender-crisp. [5.] Mix cornstarch with water to make a slurry and add it to the wok to thicken the sauce. [6.] Serve hot with steamed rice.'
        },
        {
            name: 'Vegetarian Pad Thai',
            dietary: 'Vegetarian',
            cuisine: 'Thai',
            ingredients: ['rice noodles', 'tofu', 'bean sprouts', 'green onions', 'carrots', 'peanuts', 'lime wedges'],
            instructions: '[1.] Cook rice noodles according to package instructions and set aside. [2.] In a wok or large skillet, stir-fry diced tofu until golden brown. [3.] Add sliced carrots and cook until tender. [4.] Push vegetables to one side of the wok and scramble eggs on the other side. [5.] Add cooked rice noodles, bean sprouts, and sliced green onions to the wok. [6.] Stir in pad Thai sauce and toss everything together until heated through. [7.] Serve hot garnished with crushed peanuts and lime wedges.'
        },
        {
            name: 'Eggplant Parmesan',
            dietary: 'Vegetarian',
            cuisine: 'Italian',
            ingredients: ['eggplant', 'flour', 'eggs', 'breadcrumbs', 'marinara sauce', 'mozzarella cheese', 'parmesan cheese'],
            instructions: '[1.] Slice eggplant into rounds and sprinkle with salt. Let sit for 30 minutes to draw out moisture. [2.] Rinse eggplant slices and pat dry with paper towels. [3.] Dredge eggplant slices in flour, dip in beaten eggs, and coat with breadcrumbs. [4.] Heat oil in a skillet over medium heat and fry eggplant slices until golden brown on both sides. [5.] Preheat oven to 375°F (190°C). [6.] Spread marinara sauce in the bottom of a baking dish. [7.] Arrange fried eggplant slices in the dish and top with mozzarella cheese and parmesan cheese. [8.] Bake for 25-30 minutes or until cheese is bubbly and golden. [9.] Serve hot.'
        },
        {
            name: 'Butter Chicken',
            dietary: 'Halal',
            cuisine: 'Indian',
            ingredients: ['chicken thighs', 'yogurt', 'tomato puree', 'butter', 'cream', 'garam masala', 'ground coriander'],
            instructions: '[1.] Marinate chicken thighs in a mixture of yogurt, garam masala, and ground coriander for at least 30 minutes. [2.] In a large skillet, melt butter over medium heat. [3.] Add marinated chicken and cook until browned. [4.] Stir in tomato puree and simmer for 15-20 minutes. [5.] Pour in cream and cook until sauce thickens. [6.] Serve hot with rice or naan.'
        },
        {
            name: 'Caesar Salad',
            dietary: 'Vegetarian',
            cuisine: 'International',
            ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing', 'lemon juice', 'garlic', 'Dijon mustard'],
            instructions: '[1.] Wash and chop romaine lettuce into bite-sized pieces. [2.] In a small bowl, whisk together Caesar dressing, lemon juice, minced garlic, and Dijon mustard. [3.] Toss romaine lettuce with dressing until evenly coated. [4.] Top with croutons and shaved parmesan cheese. [5.] Serve immediately.'
        },
        {
            name: 'Vegetable Lasagna',
            dietary: 'Vegetarian',
            cuisine: 'Italian',
            ingredients: ['lasagna noodles', 'spinach', 'zucchini', 'mushrooms', 'ricotta cheese', 'marinara sauce', 'mozzarella cheese'],
            instructions: '[1.] Preheat oven to 375°F (190°C). [2.] Cook lasagna noodles according to package instructions and set aside. [3.] In a skillet, sauté chopped spinach, sliced zucchini, and sliced mushrooms until tender. [4.] In a bowl, mix together ricotta cheese and cooked vegetables. [5.] Spread marinara sauce in the bottom of a baking dish. [6.] Layer cooked lasagna noodles, ricotta mixture, and mozzarella cheese in the dish. [7.] Repeat layers until all ingredients are used, ending with a layer of mozzarella cheese on top. [8.] Cover with foil and bake for 30 minutes. [9.] Remove foil and bake for an additional 10 minutes or until cheese is bubbly and golden. [10.] Let cool slightly before serving.'
        },
        {
            name: 'Beef Wellington',
            dietary: 'Halal',
            cuisine: 'British',
            ingredients: ['beef fillet', 'puff pastry', 'mushrooms', 'shallots', 'prosciutto', 'Dijon mustard', 'egg wash'],
            instructions: '[1.] Season beef fillet with salt and black pepper. [2.] Sear beef fillet in a hot skillet until browned on all sides. [3.] Let beef cool completely. [4.] Sauté finely chopped mushrooms and shallots until softened. [5.] Spread Dijon mustard over the cooled beef fillet. [6.] Wrap beef fillet with prosciutto slices. [7.] Spread cooked mushrooms and shallots over prosciutto. [8.] Roll out puff pastry and wrap beef fillet in pastry, sealing edges with egg wash. [9.] Brush pastry with egg wash. [10.] Bake in a preheated oven at 400°F (200°C) for 25-30 minutes or until pastry is golden brown and beef is cooked to desired doneness. [11.] Let rest for 10 minutes before slicing and serving.'
        },
        {
            name: 'Chicken Alfredo Pasta',
            dietary: 'Halal',
            cuisine: 'Italian',
            ingredients: ['chicken breast', 'fettuccine pasta', 'heavy cream', 'parmesan cheese', 'butter', 'garlic', 'parsley'],
            instructions: '[1.] Cook fettuccine pasta according to package instructions and set aside. [2.] Season chicken breast with salt and black pepper. [3.] In a skillet, melt butter over medium heat and sauté minced garlic until fragrant. [4.] Add seasoned chicken breast and cook until golden brown and cooked through. [5.] Pour in heavy cream and simmer until slightly thickened. [6.] Stir in grated parmesan cheese until melted and smooth. [7.] Toss cooked fettuccine pasta with Alfredo sauce until evenly coated. [8.] Serve hot garnished with chopped parsley.'
        },
        {
            name: 'Shrimp Scampi',
            dietary: 'Halal',
            cuisine: 'Italian',
            ingredients: ['shrimp', 'linguine pasta', 'butter', 'olive oil', 'garlic', 'lemon juice', 'white wine'],
            instructions: '[1.] Cook linguine pasta according to package instructions and set aside. [2.] In a large skillet, melt butter with olive oil over medium heat. [3.] Add minced garlic and cook until fragrant. [4.] Add shrimp to the skillet and cook until pink and opaque. [5.] Pour in white wine and lemon juice. [6.] Simmer until sauce is slightly reduced. [7.] Toss cooked linguine pasta with shrimp and sauce until evenly coated. [8.] Serve hot garnished with chopped parsley.'
        },
        {
            name: 'Mediterranean Couscous Salad',
            dietary: 'Vegetarian',
            cuisine: 'Mediterranean',
            ingredients: ['couscous', 'cucumber', 'tomatoes', 'red onion', 'kalamata olives', 'feta cheese', 'fresh parsley', 'lemon juice', 'extra virgin olive oil'],
            instructions: '[1.] Cook couscous according to package instructions and let it cool. [2.] Chop cucumber, tomatoes, red onion, and parsley. [3.] In a large bowl, combine cooked couscous with chopped vegetables. [4.] Add pitted kalamata olives and crumbled feta cheese. [5.] Drizzle with lemon juice and extra virgin olive oil. [6.] Toss everything together until evenly combined. [7.] Serve chilled.'
        },
        {
            name: 'Veggie Pizza',
            dietary: 'Vegetarian',
            cuisine: 'Italian',
            ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'bell peppers', 'red onion', 'mushrooms', 'black olives'],
            instructions: '[1.] Preheat oven to 450°F (230°C). [2.] Roll out pizza dough on a baking sheet. [3.] Spread tomato sauce evenly over the dough. [4.] Sprinkle shredded mozzarella cheese over the sauce. [5.] Arrange sliced bell peppers, red onion, mushrooms, and black olives on top. [6.] Bake in the preheated oven for 12-15 minutes or until crust is golden brown and cheese is bubbly. [7.] Slice and serve hot.'
        },
        {
            name: 'Tofu and Vegetable Stir-Fry',
            dietary: 'Vegetarian',
            cuisine: 'Asian',
            ingredients: ['tofu', 'bell peppers', 'broccoli florets', 'carrots', 'snow peas', 'soy sauce', 'sesame oil'],
            instructions: '[1.] Press tofu to remove excess moisture and cut into cubes. [2.] In a wok or large skillet, heat sesame oil over medium-high heat. [3.] Add cubed tofu to the skillet and cook until golden brown on all sides. [4.] Add sliced bell peppers, broccoli florets, julienned carrots, and snow peas to the skillet. [5.] Stir in soy sauce and cook until vegetables are tender-crisp. [6.] Serve hot over steamed rice.'
        },
        {
            name: 'Hawaiian Chicken Skewers',
            dietary: 'Halal',
            cuisine: 'International',
            ingredients: ['chicken thighs', 'pineapple chunks', 'bell peppers', 'red onion', 'barbecue sauce'],
            instructions: '[1.] Cut chicken thighs into bite-sized pieces. [2.] Thread chicken pieces onto skewers, alternating with pineapple chunks, sliced bell peppers, and red onion. [3.] Brush skewers with barbecue sauce. [4.] Preheat grill to medium-high heat. [5.] Grill skewers for 10-12 minutes, turning occasionally, or until chicken is cooked through and vegetables are tender. [6.] Serve hot with extra barbecue sauce.'
        },
        {
            name: 'Beef and Vegetable Stir-Fry',
            dietary: 'Halal',
            cuisine: 'Asian',
            ingredients: ['beef sirloin', 'broccoli florets', 'carrots', 'bell peppers', 'snap peas', 'soy sauce', 'hoisin sauce', 'garlic', 'ginger'],
            instructions: '[1.] Slice beef sirloin into thin strips. [2.] In a bowl, mix together soy sauce, hoisin sauce, minced garlic, and grated ginger. [3.] Marinate beef strips in the sauce mixture for at least 30 minutes. [4.] Heat oil in a wok or large skillet over high heat. [5.] Stir-fry marinated beef until browned. [6.] Add broccoli florets, julienned carrots, sliced bell peppers, and snap peas to the wok. [7.] Continue to stir-fry until vegetables are tender-crisp. [8.] Serve hot over steamed rice.'
        },
        {
            name: 'Vegetarian Chili',
            dietary: 'Vegetarian',
            cuisine: 'Mexican',
            ingredients: ['black beans', 'kidney beans', 'corn', 'bell peppers', 'onion', 'tomatoes', 'chili powder', 'cumin', 'paprika'],
            instructions: '[1.] In a large pot, heat oil over medium heat. [2.] Add diced onion and sliced bell peppers to the pot. [3.] Cook until vegetables are soft. [4.] Add canned black beans, canned kidney beans, and corn kernels to the pot. [5.] Stir in diced tomatoes, chili powder, cumin, and paprika. [6.] Simmer for 20-25 minutes, stirring occasionally. [7.] Serve hot garnished with shredded cheese, sour cream, and chopped cilantro.'
        },
        {
            name: 'Chicken Parmesan',
            dietary: 'Halal',
            cuisine: 'Italian',
            ingredients: ['chicken breasts', 'breadcrumbs', 'parmesan cheese', 'egg', 'marinara sauce', 'mozzarella cheese', 'spaghetti'],
            instructions: '[1.] Preheat oven to 375°F (190°C). [2.] Pound chicken breasts to an even thickness. [3.] In a shallow dish, mix together breadcrumbs and grated parmesan cheese. [4.] In another dish, beat egg. [5.] Dip chicken breasts in beaten egg, then coat with breadcrumb mixture. [6.] Heat oil in a skillet over medium-high heat. [7.] Fry breaded chicken until golden brown on both sides. [8.] Transfer chicken to a baking dish and top with marinara sauce and mozzarella cheese. [9.] Bake for 20-25 minutes or until cheese is bubbly and chicken is cooked through. [10.] Serve hot over cooked spaghetti.'
        },
        {
            name: 'Pasta Primavera',
            dietary: 'Vegetarian',
            cuisine: 'Italian',
            ingredients: ['linguine pasta', 'broccoli florets', 'bell peppers', 'carrots', 'zucchini', 'yellow squash', 'cherry tomatoes', 'garlic', 'olive oil', 'parmesan cheese', 'fresh basil'],
            instructions: '[1.] Cook linguine pasta according to package instructions and set aside. [2.] In a large skillet, heat olive oil over medium heat. [3.] Sauté minced garlic until fragrant. [4.] Add broccoli florets, sliced bell peppers, julienned carrots, diced zucchini, diced yellow squash, and halved cherry tomatoes to the skillet. [5.] Cook until vegetables are tender-crisp. [6.] Toss cooked linguine pasta with sautéed vegetables. [7.] Serve hot garnished with grated parmesan cheese and chopped fresh basil.'
        },
        {
            name: 'Beef Tenders with Mushroom Sauce',
            dietary: 'Halal',
            cuisine: 'International',
            ingredients: ['beef tenderloin', 'mushrooms', 'beef broth', 'heavy cream', 'butter', 'garlic', 'thyme'],
            instructions: '[1.] Season beef tenderloin with salt and black pepper. [2.] In a skillet, heat butter over medium-high heat. [3.] Sear beef tenderloin until browned on all sides. [4.] Transfer beef to a baking dish and roast in a preheated oven at 400°F (200°C) until cooked to desired doneness. [5.] In the same skillet, sauté sliced mushrooms and minced garlic until softened. [6.] Pour in beef broth and simmer until reduced by half. [7.] Stir in heavy cream and fresh thyme. [8.] Cook until sauce thickens. [9.] Serve beef tenderloin with mushroom sauce.'
        },
        {
            name: 'Vegetable Paella',
            dietary: 'Vegetarian',
            cuisine: 'Spanish',
            ingredients: ['rice', 'vegetable broth', 'bell peppers', 'tomatoes', 'onion', 'garlic', 'green beans', 'peas', 'saffron'],
            instructions: '[1.] In a large paella pan, heat olive oil over medium heat. [2.] Sauté diced onion and minced garlic until soft. [3.] Add diced bell peppers, chopped tomatoes, and sliced green beans to the pan. [4.] Cook until vegetables are tender. [5.] Stir in rice and saffron. [6.] Pour in vegetable broth and bring to a simmer. [7.] Reduce heat to low and cook until rice is tender and liquid is absorbed. [8.] Stir in peas. [9.] Serve hot.'
        },
        {
            name: 'Lentil Soup',
            dietary: 'Vegetarian',
            cuisine: 'International',
            ingredients: ['lentils', 'carrots', 'celery', 'onion', 'garlic', 'vegetable broth', 'tomato paste', 'bay leaves'],
            instructions: '[1.] Rinse lentils under cold water and drain. [2.] In a large pot, heat olive oil over medium heat. [3.] Sauté diced onion, minced garlic, sliced carrots, and chopped celery until softened. [4.] Add lentils, vegetable broth, tomato paste, and bay leaves to the pot. [5.] Bring to a boil, then reduce heat and simmer for 25-30 minutes or until lentils are tender. [6.] Season with salt and black pepper to taste. [7.] Serve hot garnished with chopped parsley.'
        },
        {
            name: 'Stuffed Bell Peppers',
            dietary: 'Halal',
            cuisine: 'International',
            ingredients: ['bell peppers', 'ground beef', 'rice', 'onion', 'garlic', 'tomato sauce', 'cheddar cheese'],
            instructions: '[1.] Preheat oven to 375°F (190°C). [2.] Cut the tops off bell peppers and remove seeds and membranes. [3.] In a skillet, cook ground beef, diced onion, and minced garlic until beef is browned. [4.] Stir in cooked rice and tomato sauce. [5.] Spoon beef and rice mixture into bell peppers. [6.] Top each bell pepper with shredded cheddar cheese. [7.] Place stuffed bell peppers in a baking dish and cover with foil. [8.] Bake for 25-30 minutes or until peppers are tender. [9.] Serve hot.'
        }
    ];
    

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Meal Planning and Recipes
            </Typography>
            <TextField
                label="Search for Recipes"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary">
                Search
            </Button>
            <Grid container spacing={3} style={{ marginTop: '20px'}}>
                {/* Map through the recipes array to generate recipe cards */}
                {recipes.map((recipe, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{recipe.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Dietary Preference:</strong> {recipe.dietary}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Cuisine:</strong> {recipe.cuisine}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Instructions:</strong> {recipe.instructions}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MealPlanningPage;