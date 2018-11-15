import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Log} from './log.model';

@Injectable()
export class LogsService {
    constructor(private http: HttpClient) {
    }

    changeLevel(log: Log) {
        return this.http.put('management/logs', log);
    }

    findAll() {
        return this.http.get('management/logs').map((res) => res);
    }
}
