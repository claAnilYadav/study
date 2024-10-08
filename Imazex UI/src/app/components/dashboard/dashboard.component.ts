import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentActiveTab: string = 'credit';
  constructor() {

  }

  changeTab(tab: string) {
    this.currentActiveTab = tab;
  }

}
