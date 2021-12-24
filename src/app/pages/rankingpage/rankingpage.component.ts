import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-rankingpage',
  templateUrl: './rankingpage.component.html',
  styleUrls: ['./rankingpage.component.css'],
})
export class RankingpageComponent implements OnInit {
  movies: Movie[] = [];
  userRating: any;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getMovies().subscribe((movies) => (this.movies = movies));
  }

  rateMovie() {
    this.userRating = null;
  }
  changeRating(currentRating: number) {
    this.userRating = currentRating;
  }
}
