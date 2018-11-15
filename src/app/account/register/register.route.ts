import {Route} from '@angular/router';

import {RegisterComponent} from './register.component';

export const registerRoute: Route = {
    path: 'register',
    // path: 'abcd12344',
    component: RegisterComponent,
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'register.title'
    }
};
