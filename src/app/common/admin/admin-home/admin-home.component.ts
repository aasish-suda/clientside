import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  loggedInUser: User;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.loggedInUser.username)
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
}

}
