import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
// import {Observable} from 'rxjs/Rx';
import {SERVER_API_URL} from '../../app.constants';
import {ForgetPasswordDtoModel} from './forget-password-dto.model';
// import {ResponseWrapper} from '../../shared';

@Injectable()
export class PasswordService {

    constructor(private http: Http) {
    }

    /*save(forgetpasswordto: ForgetPasswordDtoModel): Observable<ResponseWrapper> {
        return this.http.post(SERVER_API_URL + 'api/account/change-password', forgetpasswordto);
    }*/
}
