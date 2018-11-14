import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaConfigurationComponent } from './area-configuration.component';
import {RouterModule} from '@angular/router';
import {routes} from './area-configuration.route';
import {NgxPaginationModule} from 'ngx-pagination';
import {AreaConfigurationDialogComponent} from './area-configuration-dialog.component';
import { FormsModule } from '@angular/forms';
import {AreaConfigurationDetailComponent} from './area-configuration-detail.component';
const ENTITY_STATES = [
  ...routes
];

@NgModule({
  imports: [
    CommonModule, NgxPaginationModule, FormsModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [AreaConfigurationComponent, AreaConfigurationDialogComponent, AreaConfigurationDetailComponent]
})
export class AreaConfigurationModule { }
