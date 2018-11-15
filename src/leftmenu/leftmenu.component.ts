import {Component, OnInit} from '@angular/core';
// import {UserUtil} from '../app/shared/user/user-util';
import {Router} from '@angular/router';

@Component({
    selector: 'app-leftmenu',
    templateUrl: './leftmenu.component.html',
    styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
    isNavbarCollapsed: boolean;
    constructor(
        // public userUtil: UserUtil,
        private router: Router
    ) {

    }

    ngOnInit() {

    }
    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }
    changeRoute() {
        console.log('changing rout');
        this.router.navigate(['/']);
        // this.router.navigateByUrl(...)
    }
}
