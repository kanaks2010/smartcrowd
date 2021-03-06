import {Observable} from 'rxjs';
import {RequestOptionsArgs, Response} from '@angular/http';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
// import {JhiHttpInterceptor} from 'ng-jhipster';

/*export class AuthInterceptor extends JhiHttpInterceptor {*/
export class AuthInterceptor {
    constructor(
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService
    ) {
        // super();
    }

    requestIntercept(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (!options || !options.url || /^http/.test(options.url)) {
            return options;
        }

        // const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        /*if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;*/
    }

    responseIntercept(observable: Observable<Response>): Observable<Response> {
        return observable; // by pass
    }

}
