import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) { }

  signOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
    // this.authService.signOut().subscribe((res:any) => {
    //   if (res.status_code == 200) {
    //     sessionStorage.clear();
    //     this.router.navigate(['/login']);
    //   }
    // });
  }

  userProfile(): void {
    const dialogRef = this.dialog.open(UserProfileDialog, {
      data: {},
      height: '350px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }
}

@Component({
  selector: 'client-profile-popup',
  templateUrl: 'client-profile-popup.html',
})

export class UserProfileDialog implements OnInit, OnDestroy {
  client_contact: any = null;
  constructor(
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<UserProfileDialog>,
  ) { }
  ngOnDestroy(): void {
    this.onNoClick();
  }
  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.dashboardService.getUserProfile().subscribe((res: any) => {
      console.log(res)
      if (res?.status_code == 200) {
        this.client_contact = res.data.client_contact;
      }
    });
  };

  onNoClick(): void {
    this.dialogRef.close();
  }
}
