import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent{
    selectedRecipe: Recipe;
    
}