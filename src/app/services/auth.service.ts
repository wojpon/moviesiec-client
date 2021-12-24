import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { User } from '../models/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginRequest: LoginRequest = {
    nickname: '',
    password: '',
  };
  errorMessage: string;
  currentUser: User;

  constructor(private httpService: HttpService, private router: Router) {}

  login(nickname: string, password: string) {
    this.loginRequest.nickname = nickname;
    this.loginRequest.password = password;
    this.httpService.authenticate(this.loginRequest).subscribe(
      (loginResponse: LoginResponse) => {
        if (loginResponse.success == true) {
          this.errorMessage = '';
          this.httpService
            .getUser(loginResponse.userId)
            .subscribe((user: User) => {
              this.currentUser = user;
              this.setUserInSesion(this.currentUser);
              this.router.navigate(['/home']);
            });
        } else {
          this.errorMessage = 'BAD PASSWORD';
        }
      },
      (error) => {
        this.errorMessage = 'BAD LOGIN';
      }
    );
  }
  setUserInSesion(user: User) {
    sessionStorage.setItem('currentUserId', user.id);
    sessionStorage.setItem('isAdmin', String(user.isAdmin));
  }
}
