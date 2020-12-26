import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApplicationHomeModule} from './common/application-home/application-home.module';
import { EKartRoutingGuard } from './app.routing-guard';
import { AuthorisationErrorComponent } from './errors/authorisation-error.component';
import { UserHomeComponent } from './common/user-home/user-home.component';
import { AdminHomeComponent } from './common/admin/admin-home/admin-home.component';
// import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
// import { AdminLoginComponent } from './admin/admin-login/src/app/admin/admin-login/admin-login/admin-login.component';
// import { SellerModule } from './seller/seller.module';
// import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthorisationErrorComponent,
    AdminHomeComponent,
    UserHomeComponent
    // AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ApplicationHomeModule
  ],
  providers: [EKartRoutingGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
