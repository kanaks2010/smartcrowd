import {Route} from '@angular/router';
import {JhiHealthCheckComponent} from './health.component';

export const healthRoute: Route = {
    path: 'app-health',
    component: JhiHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
