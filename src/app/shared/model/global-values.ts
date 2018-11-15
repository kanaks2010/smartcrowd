import {Injectable} from '@angular/core';
import {Principal} from '..';

@Injectable()
export class GlobalValues {
    role: string;
    propertyIdFromLandingPageToViewDetails: number;
    showSingUp: boolean;
    firstTimeLogin: boolean;

    constructor(
        private principal: Principal
    ) {
        this.showSingUp = true;
        this.firstTimeLogin = false;
    }

    getUserRole() {
        this.principal.identity().then((account) => {
            if (account && account.authorities) {
                const i = account.authorities.indexOf('ROLE_ADMIN');
                if (i) {
                    this.role = account.authorities[i];
                } else {
                    this.role = account.authorities[0];
                }
            } else {
                this.role = 'none';
            }
        });
    }
}
