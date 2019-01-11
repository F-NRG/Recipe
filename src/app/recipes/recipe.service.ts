import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe ('Uova di bolognese', 'This Italian specialty will provide a tornado of flavours in your mouth. ',
    'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d',
    [
      new Ingredient('eggs', 4),
      new Ingredient('tomatoes', 6),
      new Ingredient('spaghetti pack', 1),
      new Ingredient('lettuce', 1),
      new Ingredient('leak', 1),

    ]),
    new Recipe ('Masaman curry', 'This a fantastic Thai recipe is one of the must haves for every home cook',
    'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg',
    [
      new Ingredient('Can of coconut milk', 1),
      new Ingredient('Tomatoes', 3),
      new Ingredient('Patatoes', 6),
      new Ingredient('Bag of curry powder', 6),
      new Ingredient('Chicken filet', 2),

    ])
    ];

  getRecipes() {
    return this.recipes.slice();
  }
}
