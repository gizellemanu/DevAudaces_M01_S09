import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IMovie } from '../../models/imovie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private readonly _http: HttpClient,
  ) { }

  getMovie(id: string): Observable<IMovie> {
    // eslint-disable-next-line no-underscore-dangle
    return this._http
      .get<IMovie>(`${environment.API_URL}/${id}`)
      .pipe(catchError(
        () => {
          throw new Error('Failed to reach the server');
        },
      ), retry({ count: 2, delay: 500 }));
  }

  getAllMovies(): Observable<IMovie[]> {
    // eslint-disable-next-line no-underscore-dangle
    return this._http
      .get<IMovie[]>(environment.API_URL)
      .pipe(catchError(
        () => {
          throw new Error('Failed to reach the server');
        },
      ), retry({ count: 2, delay: 500 }));
  }
}
