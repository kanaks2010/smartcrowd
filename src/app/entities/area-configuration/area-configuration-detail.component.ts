import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
// import {JhiEventManager} from 'ng-jhipster';

import {AreaConfiguration} from './area-configuration.model';
import {AreaConfigurationService} from './area-configuration.service';

@Component({
    selector: 'app-area-configuration-detail',
    templateUrl: './area-configuration-detail.component.html'
})
export class AreaConfigurationDetailComponent implements OnInit, OnDestroy {

    areaConfiguration: AreaConfiguration;
    private subscription: Subscription;
    private eventSubscriber: Subscription;
    // userCreateBy: User;
    // userUpdateBy: User;
    private userName: String;

    constructor(
        // private eventManager: JhiEventManager,
        private areaConfigurationService: AreaConfigurationService,
        private route: ActivatedRoute,
        // private userService: UserService
    ) {
    }

    ngOnInit() {
       // this.userCreateBy = {};
       // this.userUpdateBy = {};
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInAreaConfigurations();
    }

    load(id) {
      this.areaConfigurationService.find(id).subscribe((data: {}) => {
        console.log(data);
        this.areaConfiguration = data;
      });
    }

    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        // this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInAreaConfigurations() {
        /*this.eventSubscriber = this.eventManager.subscribe(
            'areaConfigurationListModification',
            (response) => this.load(this.areaConfiguration.id)
        );*/
    }
}
