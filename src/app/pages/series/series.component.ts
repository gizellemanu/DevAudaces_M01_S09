import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IMovie } from '../../models/imovie';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit, OnDestroy {
  public movie!: IMovie;

  public delSub!: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly _moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.delSub = this.route.params
      .pipe(
        switchMap(
          // eslint-disable-next-line no-underscore-dangle
          (params) => this._moviesService.getMovie(params['id']),
        ),
      )
      .subscribe({
        next: (movie) => { this.movie = movie; },
        error: (err) => { alert(err.message); },
      });
  }

  ngOnDestroy() {
    this.delSub.unsubscribe();
  }
}
