import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  

  title = 'study';

  userData: any = { 
    'name':'Anil Yadav',
    'mobile':8108754969,
    'email':'anil.yadav@creativelandasia.com',
    'address': '123, Main Street, Mumbai, India',
  };
  
  showHello: boolean = true;
  showGoodbye: boolean = true;
  fruits: any = ["Banana", "Orange", "Apple", "Mango"];
  
  ngOnInit() {
    console.log('Address - ' + this.userData.address);
    this.userData.nationality = "Indian";

    console.log(this.userData);

    let person = {
      firstName: "John",
      lastName : "Doe",
      id       : 5566,
      fullName : function() {
        return this.firstName + " " + this.lastName;
      }
    };

    console.log('Perrson Name - ' + person.fullName());

    this.fruits = ["Banana", "Orange", "Apple", "Mango"];
    this.fruits.splice(2, 0, "Kiwi", "Grapes");
    //console.log(this.fruits);
    //this.fruits.splice(0, this.fruits.length);
    //this.fruits.push('test');
    console.log(this.fruits);

    console.log(Object.entries(person));
    
  }
  

  
  

}

