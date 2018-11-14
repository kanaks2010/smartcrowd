import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
// import {JhiLanguageService} from 'ng-jhipster';

import {ProfileService} from '../profiles/profile.service';
// import {JhiLanguageHelper, Principal, LoginModalService, LoginService} from '../../shared';

import {VERSION} from '../../app.constants';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [
        'sidebar.scss'
    ]
})
export class SidebarComponent implements OnInit {
    inProduction: boolean;
    isSidebarCollapsed: boolean;
    version: string;

    constructor(
        private router: Router
    ) {
        this.version = VERSION ? 'v' + VERSION : '';
        this.isSidebarCollapsed = true;
    }

    ngOnInit() {

    }

    collapseSidebar() {
        this.isSidebarCollapsed = true;
    }


    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }

}
