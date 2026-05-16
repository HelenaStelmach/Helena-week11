const express = require('express');
const recipeRouter = require('./routes/recipes.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullRecipes.routes');
const randomRouter = require('./routes/randomRecipe.routes');

const app = express();

app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);
app.use('/fullRecipes', fullRecipesRouter);
app.use('/random', randomRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}.`);
});
