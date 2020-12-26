import { Movie } from './movie';

export class Theatre {
    theatreId: number;
    theatreName: string;
    location: string;
    price: number;
    errorMessage: string;
    movie: Movie;
    seatCapacity: number;
}
