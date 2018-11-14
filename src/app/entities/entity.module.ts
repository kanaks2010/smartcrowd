import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AreaConfigurationModule} from './area-configuration/area-configuration.module';

@NgModule({
    imports: [
      AreaConfigurationModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmartcrowdEntityModule {
}
