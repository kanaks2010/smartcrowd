import {Routes} from '@angular/router';

import {
  auditsRoute,
  configurationRoute,
  docsRoute,
  healthRoute,
  logsRoute,
  metricsRoute,
  trackerRoute,
  userMgmtRoute,
  userDialogRoute, UserMgmtComponent
} from './';

// import {UserRouteAccessService} from '../shared';
// import {InvestorPropertyComponent, InvestorPropertyResolvePagingParams} from "../entities/investor-property";
// import {AdminLoginComponent} from "../shared/admin-login/admin-login.component";

const ADMIN_ROUTES = [
    auditsRoute,
    configurationRoute,
    docsRoute,
    healthRoute,
    logsRoute,
    trackerRoute,
    ...userMgmtRoute,
    metricsRoute
];

export const adminState: Routes = [
  {
    path: 'user-management',
    component: UserMgmtComponent,
    data: {
      authorities: [],
      pageTitle: 'Admin'
    }
  }
];
/*
export const subAdminState: Routes = [{
    path: 'admin',
    component: AdminLoginComponent,
    resolve: {
        'pagingParams': InvestorPropertyResolvePagingParams
    },
    data: {
        authorities: [],
        pageTitle: 'Admin'
    },
    canActivate: [UserRouteAccessService]
}
];
*/
