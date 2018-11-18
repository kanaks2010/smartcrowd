import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AreaConfigurationModule} from './area-configuration/area-configuration.module';
import {NotificationsModule} from './notifications/notifications.module';

@NgModule({
    imports: [
      AreaConfigurationModule,
      NotificationsModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmartcrowdEntityModule {
}
