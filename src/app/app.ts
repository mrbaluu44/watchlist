import { Component, signal } from '@angular/core';

import { MovieListComponent } from './movie-list/movielist';

@Component({
  imports: [MovieListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('watchlist');
}
