import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../../services/movies/movies.service';
import { IMovie } from '../../models/imovie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public delSub!: Subscription;

  public moviesList!: IMovie[];

  constructor(
    private readonly _moviesService: MoviesService,
  ) { }

  public ngOnInit() {
    // eslint-disable-next-line no-underscore-dangle
    this.delSub = this._moviesService
      .getAllMovies()
      .subscribe((movies) => {
        this.moviesList = movies;
      });
  }

  public ngOnDestroy() {
    this.delSub.unsubscribe();
  }
}
