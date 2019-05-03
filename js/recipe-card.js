/* eslint-env browser */

// GUACAMOLE RECIPE

var Recipe = function (title, servings, ingredients) {
    "use strict";
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
    
    this.showRecipe = function () {
        window.console.log(title + "\n\n" + "Serves: " + servings + "\n\n");
        window.console.log("Ingredients:\n\n");
        for (var i in ingredients) {
            window.console.log("- " + ingredients[i] + "\n\n");
        }
    };
};

var Guacamole = new Recipe(
    "Gertie´s Groovy Guacamole", 
    4, 
    [
    "3 Avocados", 
    "1 Lime", 
    "1 Teaspon Salt", 
    "1/2 Cup Onion", 
    "3 Tablespoons Cilantro", 
    "2 Diced Tomatoes", 
    "1 Teaspoon Garlic", 
    "1 Pinch Ground Pepper"]);

Guacamole.showRecipe();