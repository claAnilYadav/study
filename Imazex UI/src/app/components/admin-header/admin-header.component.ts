import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Email } from '../../model/email';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { EmailService } from '../../service/email.service';
// import { routes } from '../../../../consts';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  @Input() isMenuOpened: boolean | undefined;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<User>
  public emails$: Observable<Email[]>
  public routers: typeof Router = Router;

  constructor(
    private userService: AuthService,
    private emailService: EmailService,
    private router: Router
  ) {
    this.user$ = this.userService.getUser();
    this.emails$ = this.emailService.loadEmails();
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.userService.signOut();

    //this.router.navigate([this.routers.LOGIN]);
  }
}
