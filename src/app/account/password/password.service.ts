import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Rx';
import {SERVER_API_URL} from '../../app.constants';
import {ForgetPasswordDtoModel} from './forget-password-dto.model';
// import {ResponseWrapper} from '../../shared';

@Injectable()
export class PasswordService {

    constructor(private http: HttpClient) {
    }

    save(forgetpasswordto: ForgetPasswordDtoModel) {
        return this.http.post(SERVER_API_URL + 'api/account/change-password', forgetpasswordto);
    }
}
