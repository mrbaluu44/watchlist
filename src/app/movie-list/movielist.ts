import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-movie-list',
    styleUrl: './movielist.css',
    templateUrl: './movielist.html',
})

export class MovieListComponent {

    newTitle = '';
    newGenre = '';
    newRating?: number;

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

    addMovie(movie: Movie) {
      this.movies.push(movie);
    }

    getMoviesByGenre(genre: string) {
      return this.movies.filter(movie => movie.genre === genre);

    }

    getMovieById(id: number) {
      return this.movies.find(movie => movie.id === id);
    }

    getMoviesByMinRating(minRating: number) {
      return this.movies.filter(movie =>
    movie.rating !== undefined && movie.rating >= minRating
  );
    }

  

}