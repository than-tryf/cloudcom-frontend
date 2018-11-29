import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  username: string;
  password: string;

  ngOnInit() {
  }


  onLogin() {
    this.authenticationService.login(this.username, this.password).subscribe(
      data => {
        console.log(data.body);
      },
      error => {
        console.log(error);
      }
    );
  }

}
