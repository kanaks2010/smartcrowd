import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DatePipe} from '@angular/common';
import {AdminLoginComponent} from './admin-login.component';


@NgModule({
    imports: [],
    declarations: [
        AdminLoginComponent
    ],
    entryComponents: [
        AdminLoginComponent,
    ],
    providers: [
        DatePipe
    ],
    exports: [
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SmartcrowdSharedModule {
}

