import {Injectable} from '@angular/core';
import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';

@Injectable()
export class HomeResolvePagingParams {

  constructor() {
  }
}

export const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
  }
];
