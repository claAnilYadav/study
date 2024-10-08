import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  clientid: string;
  location: string;
  contact: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {clientid: 'sgsg-dsfsdfs', name: 'DEI GLOBAL', location: 'Bhurj Khalifa', contact: 'H'},
  
];

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent {

  displayedColumns: string[] = ['clientid', 'name', 'location', 'contact'];
  dataSource = ELEMENT_DATA;

}
