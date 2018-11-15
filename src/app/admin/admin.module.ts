import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {AuditsComponent} from './audits/audits.component';
import {AuditsService} from './audits/audits.service';
import {JhiDocsComponent} from './docs/docs.component';
import {JhiConfigurationComponent} from './configuration/configuration.component';
import {JhiHealthCheckComponent} from './health/health.component';
import {JhiHealthModalComponent} from './health/health-modal.component';
import {LogsComponent} from './logs/logs.component';
import {LogsService} from './logs/logs.service';
import {JhiMetricsMonitoringComponent} from './metrics/metrics.component';
import {JhiMetricsService} from './metrics/metrics.service';
import {JhiMetricsMonitoringModalComponent} from './metrics/metrics-modal.component';
import {JhiTrackerComponent} from './tracker/tracker.component';
import {UserMgmtComponent} from './user-management/user-management.component';
import {UserResolve, UserResolvePagingParams} from './user-management/user-management.route';
import {JhiConfigurationService} from './configuration/configuration.service';
import {JhiHealthService} from './health/health.service';
import {UserModalService} from './user-management/user-modal.service';
import {UserDialogComponent, UserMgmtDialogComponent} from './user-management/user-management-dialog.component';
import {UserDeleteDialogComponent, UserMgmtDeleteDialogComponent} from './user-management/user-management-delete-dialog.component';
import {UserMgmtDetailComponent} from './user-management/user-management-detail.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import {adminState} from './admin.route';
import {SharedModule, UserService} from '../shared';

const ENTITY_STATES = [
  ...adminState
];


@NgModule({
  declarations: [
    AuditsComponent,
    UserMgmtComponent,
    UserDialogComponent,
    UserDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    JhiConfigurationComponent,
    JhiHealthCheckComponent,
    JhiHealthModalComponent,
    JhiDocsComponent,
    JhiTrackerComponent,
    JhiMetricsMonitoringComponent,
    JhiMetricsMonitoringModalComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule, NgxPaginationModule, HttpClientModule, SharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  entryComponents: [
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    JhiHealthModalComponent,
    JhiMetricsMonitoringModalComponent,
  ],
  providers: [
    AuditsService,
    JhiConfigurationService,
    JhiHealthService,
    JhiMetricsService,
    LogsService,
    UserResolvePagingParams,
    UserResolve,
    UserModalService,
    UserService
  ]
})
export class AdminModule { }
