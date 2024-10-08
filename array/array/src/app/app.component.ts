import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nameArray: Array<any> = [
    {
      name: 'John',
      img: ['https://picsum.photos/200', 'https://picsum.photos/201', 'https://picsum.photos/202']
    },
    {
      name: 'Jane',
      img: ['https://picsum.photos/203', 'https://picsum.photos/204', 'https://picsum.photos/205']
    },
    {
      name: 'Mary',
      img: ['https://picsum.photos/206']
    }
  ];
  
  

}


