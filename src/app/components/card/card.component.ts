import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../../models/imovie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('movie') public movie!:IMovie;

  constructor(private readonly _router: Router) {
  }

  public redirectToMovie(): void {
    const { id } = this.movie;
    // eslint-disable-next-line no-underscore-dangle
    this._router.navigate([`/series/${id}`]);
  }
}
