import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {LeftmenuComponent} from './leftmenu.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [RouterModule],
    exports: [LeftmenuComponent],
    declarations: [LeftmenuComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LeftmenuModule {
}
