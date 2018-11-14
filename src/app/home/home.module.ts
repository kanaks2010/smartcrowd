import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {homeRoutes} from './home.route';
import {RouterModule} from '@angular/router';

const ENTITY_STATES = [
  ...homeRoutes
];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ENTITY_STATES)
  ]
})
export class HomeModule { }
