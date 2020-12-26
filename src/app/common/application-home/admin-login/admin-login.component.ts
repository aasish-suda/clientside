import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminLoginService } from './admin-login.service';
import { User } from '../../../shared/models/user';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  tryToLogin: boolean = false;
  constructor(private fb: FormBuilder, private loginService: AdminLoginService,
      private router: Router) {

  }

  ngOnInit() {
      this.user = new User();
      this.createForm();

  }
  createForm() {

      this.loginForm = this.fb.group({
          username: [this.user.username, [Validators.required], null],
          password: [this.user.password, [Validators.required], null]
      });
  }



  login() {
      this.tryToLogin = true;
      this.errorMessage = null;
      this.successMessage = null;
      this.user = this.loginForm.value as User;

      this.loginService.login(this.user).subscribe(
        (response) => {
            this.user = response;
            sessionStorage.setItem("admin", JSON.stringify(this.user));
            console.log(this.user.username);
            this.tryToLogin = false;
            this.router.navigate(['/adminHome']);
        },
        (error) => {
            this.tryToLogin = false;
            this.errorMessage = error as any;
        }
    );


  }

}
