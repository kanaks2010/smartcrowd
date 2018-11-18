import {Injectable, Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Notifications} from './notifications.model';
import {NotificationsService} from './notifications.service';

@Injectable()
export class NotificationsPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private notificationsService: NotificationsService
    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                /*this.notificationsService.find(id).subscribe((notifications) => {
                    if (notifications.notifyDate) {
                        notifications.notifyDate = {
                            year: notifications.notifyDate.getFullYear(),
                            month: notifications.notifyDate.getMonth() + 1,
                            day: notifications.notifyDate.getDate()
                        };
                    }
                    if (notifications.createDate) {
                        notifications.createDate = {
                            year: notifications.createDate.getFullYear(),
                            month: notifications.createDate.getMonth() + 1,
                            day: notifications.createDate.getDate()
                        };
                    }
                    if (notifications.updateDate) {
                        notifications.updateDate = {
                            year: notifications.updateDate.getFullYear(),
                            month: notifications.updateDate.getMonth() + 1,
                            day: notifications.updateDate.getDate()
                        };
                    }
                    this.ngbModalRef = this.notificationsModalRef(component, notifications);
                    resolve(this.ngbModalRef);
                });*/
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.notificationsModalRef(component, new Notifications());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    notificationsModalRef(component: Component, notifications: Notifications): NgbModalRef {
        const modalRef = this.modalService.open(component, {size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.notifications = notifications;
        modalRef.result.then((result) => {
            this.router.navigate([{outlets: {popup: null}}], {replaceUrl: true, queryParamsHandling: 'merge'});
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{outlets: {popup: null}}], {replaceUrl: true, queryParamsHandling: 'merge'});
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
