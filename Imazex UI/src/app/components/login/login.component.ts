import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { LocalService } from 'src/app/service/local.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  isErrorMessage: boolean = false;
  errorMessage:string ='';
  constructor(private toastr: ToastrService, private router: Router, private localService: LocalService, private authService: AuthService, public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {

  }

  login(): any {
    if (this.loginForm.invalid) {
      this.isSubmitted = true;
      return false;
    }
    const loginDetails = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.authService.login(loginDetails).subscribe(res => {
      // this.spinner.hide();
      if (res.status_code == 200) {
        this.toastr.success('Login Successfully!');
        this.router.navigate(['/client-dashboard']);
      } else {
        this.isErrorMessage = true;
        this.errorMessage = 'Invalid UserID and Password!';
      }
    }, (err) => {
       this.isErrorMessage = true;
       this.errorMessage = 'Invalid UserID and Password!';
    });
  }
}
