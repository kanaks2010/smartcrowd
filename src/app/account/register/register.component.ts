import {Component, OnInit, AfterViewInit, Renderer, ElementRef, HostListener, Input} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
// import {JhiLanguageService} from 'ng-jhipster';
import {NgForm} from '@angular/forms';
import {Register} from './register.service';
// import {UserService} from '../../../app/shared/user/user.service';
// import {LoginModalService, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE} from '../../shared';
import * as $ from 'jquery';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register-component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
    @Input('form') form: NgForm;
    confirmPassword: String;
    doNotMatch: String;
    error: string;
    errorEmailExists: String;
    errorUserExists: String;
    registerAccount: any;
    errorMessage: any;
    success: Boolean;
    modalRef: NgbModalRef;
    iAgree: Boolean;
    loginName: String;
    viewTermsnCondition: boolean;
    notMatched: Boolean;
    mainCaptcha: String;
    matchCaptcha: String;
    captchaString1: String;
    captchaString2: String;
    phoneNoDuplicate: boolean;
    emailDuplicate: boolean;
    // notMatched: any;
    pass: String;
    conPass: String;

    constructor(
        // private languageService: JhiLanguageService,
        // private loginModalService: LoginModalService,
        // private userService: UserService,
        private registerService: Register,
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {
    }

    /* Captcha */
    public captchaInit() {
      const alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*');
        let i;
        let code = '';
        for (i = 0; i < 6; i++) {
            code = code + alpha[Math.floor(Math.random() * alpha.length)] + ' ';
        }
        // var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
        this.mainCaptcha = code;
    }

    public removeSpaces(stringVar: String) {
        return stringVar.split(' ').join('');
    }

    public resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }

    ngOnInit() {
        this.success = false;
        this.viewTermsnCondition = false;
        this.notMatched = true;
        this.pass = '';
        this.conPass = '';
        this.errorMessage = '';
        this.registerAccount = {};
        this.phoneNoDuplicate = false;
        this.emailDuplicate = false;
        this.captchaInit();
        window.scrollTo(0, 0);
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    }

    enterPrevent(event) {
        if (event.keyCode === 13) {
            console.log('enter pressed');
            return false;
        }
    }

    @HostListener('submit', ['$event'])
    onSubmit(event) {
        event.preventDefault();
        let target;
        target = this.elementRef.nativeElement.querySelector('input.ng-invalid');
        if (target) {
            $(target).addClass('errorMessage');
            $('html,body').animate({scrollTop: $(target).offset().top}, 'slow');
            target.focus();

        }
    }

    phoneNumberDuplicacyCheck(phoneNumber) {
        console.log(phoneNumber);
        /*this.userService.userCellNumberDuplicacyCheck(phoneNumber).subscribe(res => {
            console.log(res);
            if (res.json == true) {
                this.phoneNoDuplicate = true;
            } else if (res.json == false) {
                this.phoneNoDuplicate = false;
            }
        });*/
    }

    emailDuplicacyCheck(email) {
        console.log(email);
        /*this.userService.userEmailNumberDuplicacyCheck(email).subscribe(res => {
            console.log(res);
            if (res.json == true) {
                this.emailDuplicate = true;
            } else if (res.json == false) {
                this.emailDuplicate = false;
            }
        });*/
    }


    register() {
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        } else {
            if (this.iAgree === true) {
                this.matchPass(this.confirmPassword);
                if (this.notMatched === true) {
                    this.captchaString1 = this.removeSpaces(this.mainCaptcha);
                    this.captchaString2 = this.removeSpaces(this.matchCaptcha);
                    if (this.captchaString1 === this.captchaString2) {
                        console.log('Success');
                        this.doNotMatch = null;
                        this.error = null;
                        this.errorUserExists = null;
                        this.errorEmailExists = null;
                        /*this.languageService.getCurrent().then((key) => {
                            this.registerAccount.langKey = key;
                            // this.registerAccount.firstName = this.registerAccount.login.trim();
                            // this.loginName = this.registerAccount.login.trim();
                            this.registerAccount.login = this.registerAccount.email.trim();
                            // console.log(this.loginName);
                            console.log(this.registerAccount);
                            this.registerService.save(this.registerAccount).subscribe(() => {
                                this.success = true;
                                window.scrollTo(0, 0);
                            }, (response) => this.processError(response));
                        });*/
                    } else {
                        alert('Sorry, Captcha is not valid!');
                    }
                }
            }
        }
    }

    openLogin() {
        // this.modalRef = this.loginModalService.open();
    }

    private processError(response) {
        this.success = null;
        this.registerAccount.login = this.loginName;
        console.log('processError : ' + this.registerAccount.login);
        /*if (response.status === 400 && response.json().type === LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = 'ERROR';
        } else if (response.status === 400 && response.json().type === EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = 'ERROR';
        } else {
            this.error = 'ERROR';
        }*/
    }

    enableTermsNCondition() {
        if (this.viewTermsnCondition === true) {
            this.viewTermsnCondition = false;
            this.iAgree = false;
        } else {
            this.viewTermsnCondition = true;
            // this.iAgree = true;
        }
    }

    enableIagree() {
        if (this.iAgree === true) {
            this.iAgree = false;
        } else {
            this.iAgree = true;
        }
    }


    passwordErrorChecker(newPass) {
        if (!newPass) {
            this.errorMessage = '';
        } else {
            const pattern = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}');
            if (newPass.length < 8) {
                this.errorMessage = 'Your password is required to be at least 8 characters.';
            } else if (newPass.length > 50) {
                this.errorMessage = 'Your password cannot be longer than 50 characters.';
            } else if (('' + pattern.test(newPass)) === 'false') {
                this.errorMessage = 'Password must contain at least one number, one uppercase letter , one lowercase letter and at least 8 or more characters.'
                if (this.confirmPassword) {
                    this.matchPass(this.confirmPassword);
                }
            } else {
                if (this.confirmPassword) {
                    this.matchPass(this.confirmPassword);
                }
            }
        }
    }


    matchPass(confirmPassword) {
        this.pass = this.registerAccount.password;
        this.conPass = this.confirmPassword;
        if (!confirmPassword) {
            this.notMatched = true;
        } else {
            if (this.pass !== this.conPass) {
                this.notMatched = false;
            } else {
                this.notMatched = true;
            }
        }
    }

}
