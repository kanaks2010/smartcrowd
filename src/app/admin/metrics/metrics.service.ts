import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JhiMetricsService {

    constructor(private http: HttpClient) {
    }

    getMetrics() {
        return this.http.get('management/metrics').map((res: Response) => res.json());
    }

    threadDump() {
        return this.http.get('management/dump').map((res: Response) => res.json());
    }
}
