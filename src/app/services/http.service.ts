import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000';

  getMovies() {
    return this.http.get<Movie[]>(this.apiUrl + '/movies');
  }

  getMovie(id: string) {
    return this.http.get<Movie>(this.apiUrl + '/movies/' + id);
  }

  addMovie(movie: Movie) {
    return this.http.post<Movie>(this.apiUrl + '/movies', movie);
  }

  deleteMovie(id: string) {
    return this.http.delete(this.apiUrl + '/movies/' + id);
  }

  getUsers() {
    return this.http.get<User[]>(this.apiUrl + '/users');
  }

  getUser(id: string) {
    return this.http.get<User>(this.apiUrl + '/users/' + id);
  }

  addUser(user: User) {
    return this.http.post<User>(this.apiUrl + '/users', user);
  }

  updateUser(user: User) {
    return this.http.put<User>(this.apiUrl + '/users', user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.apiUrl + '/users/' + id);
  }

  verifyCredentials(user: User) {
    return this.http.post<User>(this.apiUrl + '/login', user);
  }
}
