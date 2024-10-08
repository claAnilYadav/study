import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fish soup', 'Cook a hearty fish soup packed with potatoes, carrots and peppers, and flavoured with leeks, dill and lemon.', 'https://images.immediate.co.uk/production/volatile/sites/30/2023/12/211220231703163123.jpeg?quality=90&webp=true&resize=300,272'),
    new Recipe('Paneer makhani', 'Hosting a dinner party? No Indian-themed meal or celebration is complete without paneer.', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Paneer-makhani-58d47fd.jpg?quality=90&webp=true&resize=300,272'),
  ];
  
  ngOnInit(): void {
    
  }
}
