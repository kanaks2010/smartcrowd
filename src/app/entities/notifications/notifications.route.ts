import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from '@angular/router';
import {JhiPaginationUtil} from 'ng-jhipster';

import {UserRouteAccessService} from '../../shared';
import {NotificationsComponent} from './notifications.component';
import {NotificationsDetailComponent} from './notifications-detail.component';
import {NotificationsPopupComponent} from './notifications-dialog.component';
import {NotificationsDeletePopupComponent} from './notifications-delete-dialog.component';

@Injectable()
export class NotificationsResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }
}

export const notificationsRoute: Routes = [
    {
        path: 'notifications',
        component: NotificationsComponent,
        resolve: {
            'pagingParams': NotificationsResolvePagingParams
        },
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER'],
            pageTitle: 'smartcrowdApp.notifications.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'notifications/:id',
        component: NotificationsDetailComponent,
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER'],
            pageTitle: 'smartcrowdApp.notifications.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const notificationsPopupRoute: Routes = [
    {
        path: 'notifications-new',
        component: NotificationsPopupComponent,
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER'],
            pageTitle: 'smartcrowdApp.notifications.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'notifications/:id/edit',
        component: NotificationsPopupComponent,
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER'],
            pageTitle: 'smartcrowdApp.notifications.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'notifications/:id/delete',
        component: NotificationsDeletePopupComponent,
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER'],
            pageTitle: 'smartcrowdApp.notifications.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
