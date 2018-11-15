import {Route} from '@angular/router';
import {LeftmenuComponent} from './leftmenu.component';

export const leftmenuRoute: Route = {
    path: '',
    component: LeftmenuComponent,
    outlet: 'leftmenu'
};
