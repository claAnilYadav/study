import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'project';
  name: string = 'Anil Yadav';

  allowNewServer = false;

  constructor() {
    
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    
  }


}
