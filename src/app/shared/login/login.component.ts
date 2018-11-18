import {Component, AfterViewInit, Renderer, ElementRef} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {JhiEventManager} from 'ng-jhipster';
import {LoginService} from './login.service';
import {StateStorageService} from '..';
import {GlobalValues} from '../model/global-values';
import {Principal} from '..';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html'
})
export class JhiLoginModalComponent implements AfterViewInit {
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;

  constructor(
    private eventManager: JhiEventManager,
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private elementRef: ElementRef,
    private renderer: Renderer,
    private router: Router,
    public activeModal: NgbActiveModal,
    private globalValues: GlobalValues
  ) {
    this.credentials = {};
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
  }

  cancel() {
    this.credentials = {
      username: null,
      password: null,
      rememberMe: true
    };
    this.authenticationError = false;
    this.activeModal.dismiss('cancel');
  }

  login() {
    console.log('login function calling');
    this.loginService.login({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    }).then(() => {
      console.log(this.globalValues.propertyIdFromLandingPageToViewDetails);
      this.authenticationError = false;
      this.activeModal.dismiss('login success');
      console.log(this.globalValues.firstTimeLogin);
      if (this.globalValues.firstTimeLogin === true) {
        console.log('first time login from login component TRUE');
        this.router.navigate(['/password']);
      }
      if (this.globalValues.firstTimeLogin === false || this.globalValues.firstTimeLogin == null) {
        console.log('first time login from login component FALSE');
        this.router.navigate(['/']);
      }
      if (this.router.url === '/register' || (/^\/activate\//.test(this.router.url)) || (/^\/reset\//.test(this.router.url))) {
        if (this.globalValues.firstTimeLogin === true) {
          console.log('first time login from login component TRUE');
          this.router.navigate(['/password']);
        } else if (this.globalValues.propertyIdFromLandingPageToViewDetails !== 0) {
          this.router.navigate(['property', this.globalValues.propertyIdFromLandingPageToViewDetails]);
        } else {
          console.log('navigating to home');
          this.router.navigate(['/']);
        }
      } else if ((/^\/activate\//.test(this.router.url))) {
        this.router.navigate(['/home']);
      }
      console.log(':::::::::::::::::::flag 1');
      this.eventManager.broadcast({
        name: 'authenticationSuccess',
        content: 'Sending Authentication Success'
      });
      console.log(':::::::::::::::::::flag 2');
      this.globalValues.getUserRole();
      // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
      // // since login is succesful, go to stored previousState and clear previousState
      const redirect = this.stateStorageService.getUrl();
      if (redirect) {
        console.log(':::::::::::::::::::flag 3');
        this.stateStorageService.storeUrl(null);
        if (this.globalValues.propertyIdFromLandingPageToViewDetails !== 0) {
            this.router.navigate(['property', this.globalValues.propertyIdFromLandingPageToViewDetails]);
        } else {
          this.router.navigate([redirect]);
        }
        this.router.navigate(['/']);
      }
      console.log(':::::::::::::::::::flag 4');
    }).catch((err) => {
      console.log('error', err);
      this.authenticationError = true;
    });
  }

  register() {
    this.activeModal.dismiss('to state register');
    this.router.navigate(['/register']);
  }

  requestResetPassword() {
    this.activeModal.dismiss('to state requestReset');
    this.router.navigate(['/reset', 'request']);
  }
}
