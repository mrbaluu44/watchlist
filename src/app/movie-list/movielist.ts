import { Component } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
    imports: [],
    selector: 'app-movie-list',
    styleUrl: './movielist.css',
    templateUrl: './movielist.html',
})

export class MovieListComponent {

    movies: Movie[] = [
  {
    id: 1,
    title: 'Interstellar',
    genre: 'Science Fiction'
  },
  {
    id: 2,
    title: 'Rache der Sith',
    genre: 'Science Fiction',
    rating: 5
  }
];

    deleteMovie(id: number) {
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

}