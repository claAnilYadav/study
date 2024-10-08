import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  products = [...products];
  fruits: any = ['Apple', 'Banana', 'Orange', 'Grapes'];
  name4 = 'Anil Yadav';
  myName5: any;
todayDateField: any;

  constructor() {
    //console.log(this.products.slice(1));
    //console.log(this.fruits[1].toUpperCase());
  }

  getName () {
    return this.name4;
  }

  add(a:number, b:number) {
    return a - b;
  }

  printDate(): any {
    this.todayDateField = new Date();
  }
  
}

let myName = new ProductListComponent();
console.log(myName.getName());
let myName5 = myName.getName();

console.log(myName5);

console.log(myName.add(100, 10));

export class childItem extends ProductListComponent {
    childname = 'Child Name';
    setName () {
      return this.childname;
    }
}

let childName = new childItem();
console.log(myName.todayDateField);







