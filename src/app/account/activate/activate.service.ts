import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Rx';
import {SERVER_API_URL} from '../../app.constants';
import {catchError, map} from 'rxjs/operators';
import {UserService} from '../../shared';

@Injectable()
export class ActivateService {

    constructor(
      private http: HttpClient,
      private userService: UserService,
    ) {
    }

/*
    get(key: string) {
        const params: URLSearchParams = new URLSearchParams();
        params.set('key', key);
        return this.http.get(SERVER_API_URL + 'api/activate', {
            search: params
        }).map((res) => res);
    }
*/

  get(key: string) {
    return this.http.get(SERVER_API_URL + 'api/activate/' + key).pipe(
      map(responce => responce),
      catchError(this.handleError)
    );
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
