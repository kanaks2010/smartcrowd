import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {JhiEventManager} from 'ng-jhipster';
import {Notifications} from './notifications.model';
import {NotificationsPopupService} from './notifications-popup.service';
import {NotificationsService} from './notifications.service';

@Component({
    selector: 'app-notifications-delete-dialog',
    templateUrl: './notifications-delete-dialog.component.html'
})
export class NotificationsDeleteDialogComponent {
    notifications: Notifications;

    constructor(
        private notificationsService: NotificationsService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        /*this.notificationsService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'notificationsListModification',
                content: 'Deleted an notifications'
            });
            this.activeModal.dismiss(true);
        });*/
    }
}

@Component({
    selector: 'app-notifications-delete-popup',
    template: ''
})
export class NotificationsDeletePopupComponent implements OnInit, OnDestroy {
    routeSub: any;
    constructor(
        private route: ActivatedRoute,
        private notificationsPopupService: NotificationsPopupService
    ) {
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.notificationsPopupService
                .open(NotificationsDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
