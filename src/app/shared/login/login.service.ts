import {Injectable} from '@angular/core';
import {JhiLanguageService} from 'ng-jhipster';

import {Principal} from '../auth/principal.service';
import {AuthServerProvider} from '../auth/auth-jwt.service';
import {JhiTrackerService} from '../tracker/tracker.service';
import {GlobalValues} from '../model/global-values';

@Injectable()
export class LoginService {
    logginAccount: any;

    constructor(
        private languageService: JhiLanguageService,
        private principal: Principal,
        private trackerService: JhiTrackerService,
        private authServerProvider: AuthServerProvider,
        private globalValues: GlobalValues
    ) {
    }
    login(credentials, callback?) {
        const cb = callback || function () {
        };

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe((data) => {
                this.principal.identity(true).then((account) => {
                    console.log(account);
                    this.logginAccount = account;
                    console.log(this.logginAccount);
                    if (this.principal.isAuthenticated() === true && this.logginAccount.firstTimeLoginFlag === true) {
                        console.log('First time login TRUE');
                        this.globalValues.firstTimeLogin = true;
                    }
                    if (this.principal.isAuthenticated() === true && this.logginAccount.firstTimeLoginFlag === false) {
                        console.log('First time login FALSE');
                        this.globalValues.firstTimeLogin = false;
                    }
                    if (account !== null) {
                        this.languageService.changeLanguage(account.langKey);
                    }
                    this.trackerService.sendActivity();
                    resolve(data);
                });
                if (this.principal.isAuthenticated() === false) {
                    console.log('not authenticated');
                    this.globalValues.showSingUp = true;
                } else if (this.principal.isAuthenticated() && this.principal.hasAnyAuthorityDirect(['ROLE_ADMIN'])) {
                    console.log('isAuthenticated and admin');
                    this.globalValues.showSingUp = true;
                } else if (this.principal.isAuthenticated() && this.principal.hasAnyAuthorityDirect(['ROLE_ADMIN']) === false) {
                    this.globalValues.showSingUp = false;
                }
                return cb();
            }, (err) => {
                this.logout();
                reject(err);
                return cb();
            });
        });
    }

    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

    logout() {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
        this.globalValues.showSingUp = true;
        this.globalValues.firstTimeLogin = true;
    }
}
