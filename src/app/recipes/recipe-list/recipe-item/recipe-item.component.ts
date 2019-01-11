import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  // @Output () passingDetails: EventEmitter <Recipe> = new EventEmitter();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onSelectedRecipe() {
    this.recipesService.recipeSelected.emit(this.recipeItem);
  }
}
