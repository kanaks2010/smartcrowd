import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {NotificationsDetailComponent} from './notifications-detail.component';
import {NotificationsDialogComponent, NotificationsPopupComponent} from './notifications-dialog.component';
import {NotificationsDeleteDialogComponent, NotificationsDeletePopupComponent} from './notifications-delete-dialog.component';
import {NotificationsService} from './notifications.service';
import {NotificationsPopupService} from './notifications-popup.service';
import {notificationsPopupRoute, NotificationsResolvePagingParams, notificationsRoute} from './notifications.route';
import {SmartcrowdSharedModule} from '../../shared/admin-login/admin-login.module';
import {RouterModule} from '@angular/router';
import {AdminModule} from '../../admin/admin.module';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const ENTITY_STATES = [
  ...notificationsRoute,
  ...notificationsPopupRoute,
];

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationsDetailComponent,
    NotificationsDialogComponent,
    NotificationsDeleteDialogComponent,
    NotificationsPopupComponent,
    NotificationsDeletePopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SmartcrowdSharedModule,
    AdminModule,
    RouterModule.forChild(ENTITY_STATES),
    NgbModule
  ],
  entryComponents: [
    NotificationsComponent,
    NotificationsDialogComponent,
    NotificationsPopupComponent,
    NotificationsDeleteDialogComponent,
    NotificationsDeletePopupComponent,
  ],
  providers: [
    NotificationsService,
    NotificationsPopupService,
    NotificationsResolvePagingParams,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationsModule { }
