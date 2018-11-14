import {Injectable} from '@angular/core';
import {Routes} from '@angular/router';
import {AreaConfigurationComponent} from './area-configuration.component';
import {AreaConfigurationDialogComponent} from './area-configuration-dialog.component';
import {AreaConfigurationDetailComponent} from './area-configuration-detail.component';

@Injectable()
export class AreaConfigurationResolvePagingParams {

    constructor(
    ) { }
}
export const routes: Routes = [
  {path: 'area-configuration', component: AreaConfigurationComponent },
  {path: 'area-configuration-new', component: AreaConfigurationDialogComponent},
  {path: 'area-configuration/:id', component: AreaConfigurationDetailComponent},
  {path: 'area-configuration/edit/:id', component: AreaConfigurationDialogComponent}

];
