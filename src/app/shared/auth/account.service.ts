import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {catchError, map} from 'rxjs/operators';
import {UserService} from '..';

@Injectable()
export class AccountService {
    constructor(
      private http: HttpClient
    ) {
    }

    get() {
        return this.http.get(SERVER_API_URL + 'api/account').pipe(
          map(responce => responce),
          catchError(this.handleError)
        );
    }

    save(account: any) {
        return this.http.post(SERVER_API_URL + 'api/account', account);
    }
  private handleError(error: any) {
    let errMsg: string;
    if (error) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }
}
