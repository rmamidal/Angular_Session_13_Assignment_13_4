// Importing required libraries.
import { Component, Injectable } from "@angular/core"
import { Movie, IRating } from "../Service/movie"
import { MovieService, RatingService } from "../Service/movie.service"
import { FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
    selector: "movie-list",
    templateUrl: "../View/list-movie.component.html",
    providers: [MovieService, RatingService]
})
export class ListMovieComponent {
    // List of Movies.
    listOfMovies: Movie [];

    // Search Field variable,
    private searchMovie: string;

    // Injecting services into constructor. 
    constructor(private _movieService: MovieService) {}

    // Initialising  Form Grpup, drop down and movies
    ngOnInit(): void {
      this._movieService.getMovieList()
      .then(listOfMovies => this.listOfMovies = listOfMovies);

      this.searchMovie = ""; // Initialising search field value.
    }
}
