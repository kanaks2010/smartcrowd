import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {UserService} from './user/user.service';
import {SmartcrowdSharedLibsModule} from './shared-libs.module';
import {SmartcrowdSharedCommonModule} from './shared-common.module';
import {JhiSocialComponent} from './social/social.component';
import {JhiLoginModalComponent} from './login/login.component';
import {HasAnyAuthorityDirective} from './auth/has-any-authority.directive';
import {LoginService} from './login/login.service';
import {LoginModalService} from './login/login-modal.service';
import {AccountService} from './auth/account.service';
import {StateStorageService} from './auth/state-storage.service';
import {Principal} from './auth/principal.service';
import {CSRFService} from './auth/csrf.service';
import {JhiTrackerService} from './tracker/tracker.service';
import {AuthServerProvider} from './auth/auth-jwt.service';
import {SocialService} from './social/social.service';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
@NgModule({
  declarations: [
    JhiSocialComponent,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
  ],
  imports: [
    CommonModule,
    SmartcrowdSharedLibsModule,
    SmartcrowdSharedCommonModule
  ],
  providers: [
    LoginService,
    LoginModalService,
    AccountService,
    StateStorageService,
    LocalStorageService,
    SessionStorageService,
    Principal,
    CSRFService,
    JhiTrackerService,
    AuthServerProvider,
    SocialService,
    UserService
  ],
  entryComponents: [JhiLoginModalComponent],
  exports: [
    SmartcrowdSharedCommonModule,
    JhiSocialComponent,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective,
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }
