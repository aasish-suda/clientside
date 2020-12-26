import {NgModule, Component} from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { AuthorisationErrorComponent } from './errors/authorisation-error.component';
import { UserHomeComponent } from './common/user-home/user-home.component';
import { AdminHomeComponent } from './common/admin/admin-home/admin-home.component';

const routes:Routes=[
    {path:'error',component:AuthorisationErrorComponent},
    {path:'',redirectTo:'/applicationHome',pathMatch:'full'},
    {path:'adminHome', component: AdminHomeComponent},
    {path:'userHome', component: UserHomeComponent }
]

@NgModule(
    {
        declarations:[],
        imports:[
            RouterModule.forRoot(routes)
        ],
        exports:[RouterModule]
    }
)
export class AppRoutingModule {

}
