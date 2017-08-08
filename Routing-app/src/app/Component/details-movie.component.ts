// Importing required libraries.
import { Component } from "@angular/core"
import { Movie, IRating } from "../Service/movie"
import { MovieService, RatingService } from "../Service/movie.service"
import { Router, Params, ActivatedRoute } from "@angular/router"
import { Location } from "@angular/common"
import "rxjs/add/operator/SwitchMap"

// Component Decorator.
@Component({
    selector:"details-movie",
    templateUrl: "../View/details-movie.component.html",
    providers: [MovieService]
})
export class DetailsMovieComponent {
    // Movie instance created to store select movie.
    detailsMovie: Movie = new Movie();

    constructor(private _movieServeice: MovieService, 
    private _router: Router, 
    private _route: ActivatedRoute,
    private _location: Location) {

    }

    // On Init getting movie details based on Parama id
    ngOnInit() {
        this._route.params
        .switchMap((params:Params) =>  this._movieServeice.getMovieDetails(+params['id']))
        .subscribe(movie => this.detailsMovie = movie);
    }

    // Going back to list page.
    goBack() {
        this._location.back();
    }
    
}
