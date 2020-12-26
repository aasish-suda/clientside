import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationHomeComponent } from './application-home.component';
import { ApplicationHomeRoutingModule } from './application-home-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginService } from './login/login.service';
import { RegistrationService } from './registration/registration.service';
import { AdminLoginService } from './admin-login/admin-login.service';
// import { LoginComponent } from '../login/login.component';
// import { LoginService } from '../login/login.service';
// import { RegistrationComponent } from '../registration/registration.component';
// import { RegistrationService } from '../registration/registration.service';
// import { AdminLoginComponent } from '../admin-login/admin-login.component';
// import { AdminLoginService } from '../admin-login/admin-login.service';

@NgModule(
    {
        declarations: [
            ApplicationHomeComponent,
            LoginComponent,
            RegistrationComponent,
            AdminLoginComponent
        ],
        imports: [
            BrowserModule,
            ApplicationHomeRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,

        ],
        providers: [LoginService, RegistrationService, AdminLoginService],
        exports: []
    }
)
export class ApplicationHomeModule {

}
