import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  user: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    isAdmin: false,
  };

  verifyCredentials(loginForm: NgForm) {
    this.user.email = loginForm.value.email;
    this.user.password = loginForm.value.password;

    this.httpService.verifyCredentials(this.user);
  }
}
