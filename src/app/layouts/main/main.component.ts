import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRouteSnapshot, NavigationEnd} from '@angular/router';

// import {JhiLanguageHelper} from '../../shared';
import {GlobalValues} from '../../shared/model/global-values';
import * as $ from 'jquery';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./paper-dashboard.css']
})

// Admin Template Can be added, by changing the template url value as main-admin.component.html
// in the admin template, side bar outlet has been added.

export class MainComponent implements OnInit {

    constructor(
        // private jhiLanguageHelper: JhiLanguageHelper,
        private router: Router,
        // public globalValues: GlobalValues
    ) {
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'smartcrowdApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        /*$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                console.log("active class added");
                $('#sidebar').toggleClass('active');
            });
        });*/
        // this.globalValues.getUserRole();
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
               // this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
        console.log('user');
    }

    toggoleLeftMenu() {
        $(document).ready(function () {
            $('#sidebar').toggleClass('active');
        });
    }
}
