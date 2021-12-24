import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  login: string;
  password: string;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  loginUser(loginForm: NgForm) {
    this.authService.login(loginForm.value.login, loginForm.value.password);
  }
}
