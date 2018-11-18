import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {JhiEventManager, JhiAlertService} from 'ng-jhipster';

import {Notifications} from './notifications.model';
import {NotificationsPopupService} from './notifications-popup.service';
import {NotificationsService} from './notifications.service';
import {User, UserService} from '../../shared';
import {ResponseWrapper} from '../../shared';

@Component({
    selector: 'app-notifications-dialog',
    templateUrl: './notifications-dialog.component.html'
})
export class NotificationsDialogComponent implements OnInit {

    notifications: any;
    isSaving: boolean;

    users: any;
    notifyDateDp: any;
    createDateDp: any;
    updateDateDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private notificationsService: NotificationsService,
        private userService: UserService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.userService.query()
            .subscribe((res) => {
                this.users = res;
            }, (res) => this.onError(res));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.notifications.id !== undefined) {
            /*this.subscribeToSaveResponse(
                this.notificationsService.update(this.notifications));*/
        } else {
            /*this.subscribeToSaveResponse(
                this.notificationsService.create(this.notifications));*/
        }
    }

    private subscribeToSaveResponse(result) {
        result.subscribe((res) =>
            this.onSaveSuccess(res), (res) => this.onSaveError());
    }

    private onSaveSuccess(result: Notifications) {
        this.eventManager.broadcast({name: 'notificationsListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackUserById(index: number, item: User) {
        return item.id;
    }
}

@Component({
    selector: 'app-notifications-popup',
    template: ''
})
export class NotificationsPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private notificationsPopupService: NotificationsPopupService
    ) {
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.notificationsPopupService
                    .open(NotificationsDialogComponent as Component, params['id']);
            } else {
                this.notificationsPopupService
                    .open(NotificationsDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
