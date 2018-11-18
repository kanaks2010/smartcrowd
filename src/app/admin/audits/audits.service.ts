import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuditsService {
    constructor(private http: HttpClient) {
    }

    query(req: any) {
        return this.http.get('management/audits', req);
    }
}
