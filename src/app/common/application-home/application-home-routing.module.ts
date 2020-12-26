import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationHomeComponent } from './application-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



const routes: Routes = [

     { path: 'applicationHome', component: ApplicationHomeComponent},
     { path: 'admin', component: AdminLoginComponent},
    //  { path: 'adminHome', component: AdminHomeComponent},
     {path: '', redirectTo: '/applicationHome', pathMatch: 'full'}
 ];
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class ApplicationHomeRoutingModule { }
