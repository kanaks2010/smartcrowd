import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivateService} from './activate/activate.service';
import {ActivateComponent} from './activate/activate.component';
import {PasswordComponent} from './password/password.component';
import {PasswordStrengthBarComponent} from './password/password-strength-bar.component';
import {PasswordService} from './password/password.service';
import {PasswordResetInitService} from './password-reset/init/password-reset-init.service';
import {PasswordResetFinishService} from './password-reset/finish/password-reset-finish.service';
import {PasswordResetInitComponent} from './password-reset/init/password-reset-init.component';
import {PasswordResetFinishComponent} from './password-reset/finish/password-reset-finish.component';
import {RegisterComponent} from './register/register.component';
import {Register} from './register/register.service';
import {SettingsComponent} from './settings/settings.component';
import {SocialRegisterComponent} from './social/social-register.component';
import {SocialAuthComponent} from './social/social-auth.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SocialRegisterComponent,
    SocialAuthComponent,
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [
    Register,
    ActivateService,
    PasswordService,
    PasswordResetInitService,
    PasswordResetFinishService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule { }
