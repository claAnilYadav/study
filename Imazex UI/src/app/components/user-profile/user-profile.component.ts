import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LocalService } from 'src/app/service/local.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  isSubmitted: boolean = false;
  constructor(private router: Router, private localService: LocalService, private authService: AuthService, public fb: FormBuilder) {

  }
  ngOnInit(): void {

  }

  // getClientProfile() {
  //   this.dashboardService.getClientProfile('CLIENT_ID').subscribe((res: any) => {
  //     if (res?.status_code == 200) {
        
  //     }
  //   });
  // }
}
