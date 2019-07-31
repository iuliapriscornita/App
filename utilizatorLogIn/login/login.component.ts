import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Route, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  loginUser(event)  {
    event.preventDefault();
    console.log(event);
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    this.router.navigate(['Welcome']);
    console.log(username, password);

     }

}
