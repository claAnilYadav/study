import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Butter tbsp', 2),
    new Ingredient('Vegetable Oil tbsp', 1),
    new Ingredient('Tomatoes chopped, or use a 400g can chopped tomatoes', 4),
    new Ingredient('Garlic cloves, roughly chopped', 7),
    new Ingredient('Cardamom pods, roughly bashed', 4),
    new Ingredient('Bay leaf', 1),
    new Ingredient('Cinnamon stick small', 1),
  ];

}
