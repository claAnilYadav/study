import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Basic Form';

/* Form data */
  userData:any = {};
  getUserData(data:NgForm) {
    console.log(data);
    this.userData=data;
  }


/* Toggle element */
  display=true;
  toggleElement() {
    this.display=!this.display;
  }



}
