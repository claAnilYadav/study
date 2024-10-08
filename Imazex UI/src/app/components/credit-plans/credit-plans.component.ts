import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { CLIENT_ID } from 'src/app/constant/constant';

@Component({
  selector: 'app-credit-plans',
  templateUrl: './credit-plans.component.html',
  styleUrls: ['./credit-plans.component.scss']
})
export class CreditPlansComponent implements OnInit {
  constructor(private dashboardService: DashboardService) { }
  public clientPackageDetail: any;
  public accountDetail: any;
  public creditHealthPercentage: any = 0;
  public totalAvailableCreditsPercentage: any = 0;
  ngOnInit(): void {
    this.getClientPackages();
  }

  totalAvailableCreditsCalculation() {
    const remainingBalance = this.clientPackageDetail?.balance - this.accountDetail?.success_record;
    this.totalAvailableCreditsPercentage = ((remainingBalance / this.clientPackageDetail?.credits) * 100).toFixed(2);
  }

  getClientPackages() {
    let client_data: any = sessionStorage.getItem('client_data');   
    client_data = JSON.parse(client_data);
    this.dashboardService.getClientPackages(client_data?.id).subscribe((res: any) => {
      if (res?.status_code == 200) {
        this.clientPackageDetail = res.data[0];
        this.getAccountDetail();
      }
    });
  }

  getAccountDetail() {
    let client_data: any = sessionStorage.getItem('client_data');
    client_data = JSON.parse(client_data);
    console.log(client_data)
    this.dashboardService.getAccountDetail(client_data?.id).subscribe((res: any) => {
      if (res?.status_code == 200) {
        this.accountDetail = res?.data;
        this.creditHealthPercentage = ((this.accountDetail?.success_record / this.clientPackageDetail?.credits) * 100).toFixed(2);
        this.totalAvailableCreditsCalculation();
      }
    });
  }

}
