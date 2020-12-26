import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { User } from '../../shared/models/user';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  loggedInUser: User;
  activity: String = 'login';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.loggedInUser.username)
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
}
    // userActivity(option: string){
    //     this.activity = option;
    // }
}
