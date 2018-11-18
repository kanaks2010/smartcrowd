import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AdminLoginComponent} from './admin-login.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        AdminLoginComponent
    ],
    entryComponents: [
        AdminLoginComponent,
    ],
    providers: [
    ],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SmartcrowdSharedModule {
}

