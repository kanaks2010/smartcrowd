import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {JhiEventManager} from 'ng-jhipster';
import {Notifications} from './notifications.model';
import {NotificationsService} from './notifications.service';
import {User, UserService} from '../../shared';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-notifications-detail',
    templateUrl: './notifications-detail.component.html'
})
export class NotificationsDetailComponent implements OnInit, OnDestroy {

    notifications: any;
    private subscription: Subscription;
    private eventSubscriber: Subscription;
    userCreateBy: any;
    userUpdateBy: any;

    constructor(
        private eventManager: JhiEventManager,
        private notificationsService: NotificationsService,
        private route: ActivatedRoute,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.userCreateBy = {};
        this.userUpdateBy = {};
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInNotifications();
    }

    load(id) {
        /*this.notificationsService.find(id).subscribe((notifications) => {
            this.notifications = notifications;
            this.getUserDetailCreateBy(this.notifications.createBy);
            this.getUserDetailUpdateBy(this.notifications.updateBy);
        });*/
    }

    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInNotifications() {
        this.eventSubscriber = this.eventManager.subscribe(
            'notificationsListModification',
            (response) => this.load(this.notifications.id)
        );
    }

    getUserDetailCreateBy(id: number) {
        console.log('id');
        console.log(id);
        this.userService.findbyid(id).subscribe((userCreateBy) => {
            this.userCreateBy = userCreateBy;
            console.log('hi');
            console.log(this.userCreateBy);
        });
    }

    getUserDetailUpdateBy(id: number) {
        console.log('id');
        console.log(id);
        /*const findUser = new Observable(this.userService.findbyid(id));*/
        this.userService.findbyid(id).subscribe((userUpdateBy) => {
            this.userUpdateBy = userUpdateBy;
            console.log('hi');
            console.log(this.userUpdateBy);
        });
    }
}
