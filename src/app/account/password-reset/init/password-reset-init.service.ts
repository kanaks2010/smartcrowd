import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../../../app.constants';

@Injectable()
export class PasswordResetInitService {

    constructor(private http: HttpClient) {
    }

    save(mail: string) {
        return this.http.post(SERVER_API_URL + 'api/account/reset-password/init', mail);
    }
}
