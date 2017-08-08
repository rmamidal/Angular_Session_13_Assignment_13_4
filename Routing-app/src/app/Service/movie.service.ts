// Importing required libraries.
import { Injectable } from "@angular/core"
import { Movie, IRating } from "./movie"
import { MOVIES } from "./movie-list"

@Injectable()
export class MovieService {
    
    // Get movie data.
    getMovieList(): Promise<Movie[]> {
        return Promise.resolve(MOVIES);
    }

    // Get Movie Details by selected Id.
    getMovieDetails(id: number): Promise<Movie> {
        return this.getMovieList()
        .then(movies => movies.find(movie => movie.id === id));
    }

    // Add movie data.
    addMovie(currentMovie: Movie) {
        this.getMovieList().then(movieList => {
            let maxIndex = movieList.length - 1;
            let movieWithMaxIndex = movieList[maxIndex];
            currentMovie.id = movieWithMaxIndex.id + 1;
            movieList.push(currentMovie);
        })
    }
}

@Injectable()
export class RatingService {
    movieRatings: IRating[] = [];

    // Get Ratings.
    getRatings() {
       return this.movieRatings = [
            {id: 1, title: "*"},
            {id: 2, title: "**"},
            {id: 3, title: "***"},
            {id: 4, title: "****"},
            {id: 5, title: "*****"},
        ]
    }
}
