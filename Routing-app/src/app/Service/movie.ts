// Class Movie.
export class Movie {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    rating: number;
    releaseDate: string;
}

// Ratings Interface.
export interface IRating {
    id: number;
    title: string;
}
