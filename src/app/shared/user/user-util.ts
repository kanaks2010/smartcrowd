import {Injectable} from '@angular/core';
import {LoginService, Principal} from '..';
import {Router} from '@angular/router';
import {GlobalValues} from '../model/global-values';

@Injectable()
export class UserUtil {
    constructor(
        private loginService: LoginService,
        private router: Router,
        private principal: Principal,
        private globalValues: GlobalValues
    ) {
    }

    logout() {
        this.loginService.logout();
        this.globalValues.getUserRole();
        this.router.navigate(['']);
    }
}
