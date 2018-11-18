import {Injectable} from '@angular/core';
// import {Http, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SERVER_API_URL} from '../../app.constants';

import {JhiDateUtils} from 'ng-jhipster';

import {Notifications} from './notifications.model';
import {ResponseWrapper, createRequestOption} from '../../shared';
import {catchError, map} from 'rxjs/operators';
import {User} from '../../shared/user/user.model';

@Injectable()
export class NotificationsService {

    private resourceUrl = SERVER_API_URL + 'api/notifications';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/notifications';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) {
    }

    /*create(notifications: Notifications): Observable<Notifications> {
        const copy = this.convert(notifications);
        return this.http.post(this.resourceUrl, copy).pipe(
          map(responce => responce),
          catchError(this.handleError)
        );
    }*/

  /*create(notifications: Notifications): Observable<Notifications> {
    return this.http.post(this.resourceUrl, notifications).pipe(
      map(responce => responce),
      catchError(this.handleError)
    );
  }*/

    /*update(notifications: Notifications): Observable<Notifications> {
        const copy = this.convert(notifications);
        return this.http.put(this.resourceUrl, copy).pipe(
          map(responce => responce),
          catchError(this.handleError)
        );
    }*/
 /* find(id: number) {
    return this.http.get<Notifications>(this.resourceUrl + '/' + id).pipe(
      map(responce => responce),
      catchError(this.handleError)
    );
  }*/

  find(id: number): Observable<Notifications> {
    return this.http.get<Notifications>(this.resourceUrl + '/' + id);
  }
    /*find(id: number): Observable<Notifications> {
        return this.http.get(`${this.resourceUrl}/${id}`).pipe(
          map(responce => responce),
          catchError(this.handleError)
        );
    }*/

/*
    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }
*/

    delete(id: number) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
/*
    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }*/

    /**
     * Convert a returned JSON object to Notifications.
     */
    private convertItemFromServer(json: any): Notifications {
        const entity: Notifications = Object.assign(new Notifications(), json);
        entity.notifyDate = this.dateUtils
            .convertLocalDateFromServer(json.notifyDate);
        entity.createDate = this.dateUtils
            .convertLocalDateFromServer(json.createDate);
        entity.updateDate = this.dateUtils
            .convertLocalDateFromServer(json.updateDate);
        return entity;
    }

    /**
     * Convert a Notifications to a JSON which can be sent to the server.
     */
    private convert(notifications: Notifications): Notifications {
        const copy: Notifications = Object.assign({}, notifications);
        copy.notifyDate = this.dateUtils
            .convertLocalDateToServer(notifications.notifyDate);
        copy.createDate = this.dateUtils
            .convertLocalDateToServer(notifications.createDate);
        copy.updateDate = this.dateUtils
            .convertLocalDateToServer(notifications.updateDate);
        return copy;
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
