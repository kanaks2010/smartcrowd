import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {SERVER_API_URL} from '../../app.constants';
import {User} from './user.model';
import {ResponseWrapper} from '..';
import {createRequestOption} from '..';
import {forkJoin, Observable} from 'rxjs';

@Injectable()
export class UserService {
  private resourceUrl = SERVER_API_URL + 'api/users';
  private findUsersUrl = SERVER_API_URL + 'api/find-users';
  private resourceUrlGetUser = SERVER_API_URL + 'api/users/getuser';
  private resouceUrlUserCellNumberDuplicacyCheck = SERVER_API_URL + 'api/users/userCellNumberDuplicacyCheck';
  private resouceUrlUserEmailNumberDuplicacyCheck = SERVER_API_URL + 'api/users/userEmailNumberDuplicacyCheck';
  private resouceUrlFindFirstTimeLoginCheck = SERVER_API_URL + 'api/users/findFirstTimeLoginCheck';

  constructor(private http: HttpClient) {
  }

  create(user: User) {
    return this.http.post(this.resourceUrl, user)
      .pipe(
        map(responce => responce),
        catchError(this.handleError)
      );
  }

  update(user: User) {
    return this.http.put(this.resourceUrl, {user})
      .pipe(
        map(responce => responce),
        catchError(this.handleError)
      );
  }
  /*find(login: string) {
    return this.http.post(this.findUsersUrl, login)
      .pipe(
        map(responce => responce),
        catchError(this.handleError)
      );
  }*/
  find(login: string) {
    return (
      this.http.post(this.findUsersUrl, login).pipe(
        map(responce => responce),
        catchError(this.handleError)
      )
    );
  }

  /*findbyid(id: number) {
    return this.http.get(`${this.resourceUrlGetUser}/${id}`).pipe(
      map(responce => responce),
      catchError(this.handleError)
    );
  }*/

  findbyid(id: number): Observable<User> {
    return this.http.get<User>(this.resourceUrlGetUser + '/' + id);
  }

  findFirstTimeLoginCheck() {
    return this.http.get(`${this.resouceUrlFindFirstTimeLoginCheck}`).pipe(
      map(responce => responce),
      catchError(this.handleError)
    );
  }
  /*query(req?: any) {
    // const options = createRequestOption(req);
    return this.http.get(`${this.resourceUrl}`, req).pipe(
      map(responce => responce),
      catchError(this.handleError)
    );
  }*/

  query(req?: any): Observable<User[]> {
    // const headers = new HttpHeaders({'Content-Type': 'text/uri-list'});
    return this.http.get<User[]>(this.resourceUrl);
  }

  delete(login: string) {
    return this.http.delete(`${this.resourceUrl}/${login}`);
  }
  userCellNumberDuplicacyCheck(phoneNo: string) {
    return this.http.get(`${this.resouceUrlUserCellNumberDuplicacyCheck}/${phoneNo}`).pipe(
      map(responce => responce),
      catchError(this.handleError)
    );
  }
  userEmailNumberDuplicacyCheck(email: string) {
    return this.http.get(`${this.resouceUrlUserEmailNumberDuplicacyCheck}/${email}`)
      .pipe(
        map(responce => responce),
        catchError(this.handleError)
      );
  }
  authorities() {
    return this.http.get(SERVER_API_URL + 'api/users/authorities').map((res) => {
      const json = res;
      return <string[]> json;
    });
  }
  private convertResponse(res): ResponseWrapper {
    const jsonResponse = res.json();
    return new ResponseWrapper(res.headers, jsonResponse, res.status);
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
