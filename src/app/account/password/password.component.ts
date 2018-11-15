import {Component, OnInit} from '@angular/core';

// import {Principal, ResponseWrapper} from '../../shared';
import {PasswordService} from './password.service';
import {ForgetPasswordDtoModel} from './forget-password-dto.model';
// import {GlobalValues} from '../../shared/model/global-values';
// import {AdminLoginService} from '../../shared/admin-login/admin-login.service';
import {Router} from '@angular/router';
// import {InvestorRegistration, InvestorRegistrationService} from '../../entities/investor-registration';
import {Response} from '@angular/http';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent implements OnInit {
    doNotMatch: string;
    error: string;
    success: string;
    account: any;
    password: string;
    confirmPassword: string;
    passwordold: string;
    passwordChangedOnFirstTimeLogin: boolean;
    exceptionError: string;
    ForgetPasswordDTO: ForgetPasswordDtoModel;
    passwordDuplicate: boolean;

    constructor(
        private passwordService: PasswordService,
        // private principal: Principal,
        // private globalValues: GlobalValues,
        private router: Router,
        // private adminLoginService: AdminLoginService,
        // private  investorRegistrationService: InvestorRegistrationService
    ) {
    }


    // this.ForgetPasswordDTO.newPassword = this.newPass;
    // this.ForgetPasswordDTO.oldPassword = this.oldPass;


    ngOnInit() {
        this.ForgetPasswordDTO = {};
        this.passwordChangedOnFirstTimeLogin = false;
        /*this.principal.identity().then((account) => {
            this.account = account;
        });*/
    }

    changePassword() {

        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.exceptionError = null;
            this.doNotMatch = 'ERROR';
        } else {
            this.exceptionError = null;
            this.doNotMatch = null;
            this.ForgetPasswordDTO.newPassword = this.password;
            this.ForgetPasswordDTO.oldPassword = this.passwordold;
            /*this.passwordService.save(this.ForgetPasswordDTO).subscribe(() => {
                this.error = null;
                this.success = 'OK';

                // this.passwordChangedOnFirstTimeLogin = true;
                // if (this.globalValues.firstTimeLogin == true) {
                /!*setTimeout(() => {
                    //     this.adminLoginService.logout();
                    this.investorRegistrationService.isDobSavedForCurrentInvestor().subscribe((res) => {
                        if (res.dob == true) {
                            // TODO: as the user has already investor registered. then we will move into the home
                            this.router.navigate(['/dashboard-smart-crowd']);
                        }
                        else if (res.dob == null) {
                            this.onError(res.json);
                        }
                    }, (res: ResponseWrapper) => this.onError(res.json));


                }, 3000);*!/


                // }
            }, (res) => {
                // this.exceptionError = this.convertResponse(res).json.title;
                this.success = null;
                //   this.error = 'ERROR';
            });*/

        }

    }

    oldAndNewPasswordDuplicacyCheck(oldPassword, newPassword) {
        if (oldPassword != null && newPassword != null) {
          if (oldPassword === newPassword) {
            this.passwordDuplicate = true;
          } else {
            this.passwordDuplicate = false;
          }
        }
    }

    /*private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }*/

    private onError(error: any) {
        // as there is error then we will redirect the user to do you want to invest page
        // this.globalValues.firstTimeLogin = false;
        this.router.navigate(['/do-you-want-to-invest']);
    }
}
