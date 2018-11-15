import {Injectable} from '@angular/core';
import {JhiLanguageService} from 'ng-jhipster';

// import {Principal} from './auth/principal.service';
import {Principal} from '..';
import {AuthServerProvider} from '..';
import {JhiTrackerService} from '..';
import {Router} from '@angular/router';

@Injectable()
export class AdminLoginService {

    constructor(
        private languageService: JhiLanguageService,
        private principal: Principal,
        private trackerService: JhiTrackerService,
        private authServerProvider: AuthServerProvider,
        private router: Router,
    ) {
    }

    login(credentials, callback?) {
        const cb = callback || function () {
        };

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe((data) => {
                this.principal.identity(true).then((account) => {
                    // After the login the language will be changed to
                    // the language selected by the user during his registration
                    if (account !== null) {

                        if (account.authorities.indexOf('ROLE_ADMIN') !== -1) {
                            this.languageService.changeLanguage(account.langKey);
                            this.trackerService.sendActivity();
                            console.log('account login service');
                            console.log(account);
                            resolve(data);
                            // this.router.navigate(['/']);
                        } else {
                            this.logout();
                            reject('i');
                        }
                    }

                });
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
    }
}
