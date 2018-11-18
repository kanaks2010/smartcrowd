import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
// import {JhiAlertService, JhiLanguageService} from 'ng-jhipster';

import {Observable} from 'rxjs';

import {ProfileService} from '../profiles/profile.service';
import {
  Account,
  LoginModalService,
  LoginService,
  Principal,
  ResponseWrapper,
  User,
  UserService
} from '../../shared';

import {VERSION} from '../../app.constants';
import {Notifications} from '../../entities/notifications/notifications.model';
import {NotificationsService} from '../../entities/notifications/notifications.service';
// import {InvestorRegistration, InvestorRegistrationService} from '../../entities/investor-registration';
import {GlobalValues} from '../../shared/model/global-values';
import {UserUtil} from '../../shared/user/user-util';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    'navbar.scss'
  ]
})
export class NavbarComponent implements OnInit {
  inProduction: boolean;
  isNavbarCollapsed: boolean;
  languages: any[];
  swaggerEnabled: boolean;
  modalRef: NgbModalRef;
  version: string;
  account: Account;
  uname: String;
  adminLoginFlag: boolean;
  notifications: Notifications[];
  notification: Notifications;
  notificationSize: any;
  // investorRegistrationCheck: InvestorRegistration;
  user: User;
  checkAdmin: boolean;


  constructor(
    private loginService: LoginService,
    // private languageService: JhiLanguageService,
    // private languageHelper: JhiLanguageHelper,
    private principal: Principal,
    private loginModalService: LoginModalService,
    private profileService: ProfileService,
    private notificationsService: NotificationsService,
    // private jhiAlertService: JhiAlertService,
    private router: Router,
    // private investorRegistrationService: InvestorRegistrationService,
    private userService: UserService,
    // public globalValues: GlobalValues,
    public userUtil: UserUtil
  ) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
  }

  ngOnInit() {
    console.log('this.principal.hasAnyAuthorityDirect(["ROLE_ADMIN"])');
    // console.log(this.principal.hasAnyAuthorityDirect(['ROLE_ADMIN']));
    if (!this.principal.isAuthenticated()) {
      console.log('not authenticated');
      // this.globalValues.showSingUp = true;
    } else if (this.principal.isAuthenticated() && this.principal.hasAnyAuthorityDirect(['ROLE_ADMIN'])) {
      console.log('isAuthenticated and admin');
      // this.globalValues.showSingUp = true;
    } else if (this.principal.isAuthenticated() && !this.principal.hasAnyAuthorityDirect(['ROLE_ADMIN'])) {
      // this.globalValues.showSingUp = false;
    }
    this.notifications = [];

    // this.notification = {};
    this.notificationSize = 0;
    // this.investorRegistrationCheck = {};
    this.checkAdmin = false;
    /*this.languageHelper.getAll().then((languages) => {
      this.languages = languages;
    });*/

    /*this.profileService.getProfileInfo().then((profileInfo) => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });*/
    this.principal.identity().then((account) => {
      this.account = account;
      console.log(this.account);
      if (account) {
        this.uname = account.login;
      }
      this.getNotification();
    });
  }

  changeLanguage(languageKey: string) {
    // this.languageService.changeLanguage(languageKey);
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  /*investmentPageRoute() {
    this.userService.findFirstTimeLoginCheck().subscribe((data) => {
      if (data.status) {
        this.router.navigate(['/password']);
      } else {
        this.router.navigate(['/property-browse']);
      }
    });
  }*/

  smoothLoading() {
    // this.routeCheck('/wallet-investor-client');
  }

  smoothLoadingForDashboard() {
    // this.routeCheck('/dashboard-smart-crowd');
  }

  /*private routeCheck(url) {
    this.investorRegistrationService.findinvestordetails().subscribe((investorRegistration) => {
      this.investorRegistrationCheck = investorRegistration;
      if (this.investorRegistrationCheck.id) {
        this.userService.find(this.investorRegistrationCheck.userId.login).subscribe((user: ResponseWrapper) => {
          this.user = user.json;
          for (let role of this.user.authorities) {
            if (role == 'ROLE_ADMIN') {
              this.checkAdmin = true;
            }
          }
          if (this.investorRegistrationCheck.approveStatus == 'Approved' || this.checkAdmin) {
            this.router.navigate([url]);
          } else {
            if (this.investorRegistrationCheck.employmentStatusId == null || this.investorRegistrationCheck.dob == null || this.investorRegistrationCheck.isAgree == null || this.investorRegistrationCheck.proofOfId == null) {
              this.router.navigate(['/investor-registration-client']);
            } else if (
              this.investorRegistrationCheck.firstName != null
              && this.investorRegistrationCheck.employmentStatusId != null
              && this.investorRegistrationCheck.proofOfId != null
              && this.investorRegistrationCheck.isAgree != null
              && this.investorRegistrationCheck.isAcknowledgement != null
              && this.investorRegistrationCheck.approveStatus != 'Approved'
              && this.user.authorities.indexOf('ROLE_ADMIN') < 0
            ) {
              this.router.navigate(['/investor-registration-client'], {queryParams: {pendingUser: true}});
            } else {
              this.router.navigate(['/investor-registration-client']);
            }
          }
        });
      } else {
        this.userService.findFirstTimeLoginCheck().subscribe((data) => {
          if (data.status) {
            this.router.navigate(['/password']);
          } else {
            this.router.navigate(['/do-you-want-to-invest']);
          }
        });
      }
    });
  }*/

  isAuthenticated() {
     return this.principal.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  getImageUrl() {
     return this.isAuthenticated() ? this.principal.getImageUrl() : null;
  }

  getNotification() {
    // this.notificationsService.query()
    //   .subscribe((res: ResponseWrapper) => {
    //     this.notifications = res.json;
    //     this.notificationSize = this.notifications.length;
    //   }, (res: ResponseWrapper) => this.onError(res.json));
    /*let i: number = 0;
    let j: number = 0;
    for (i = 0; i < 10; i++) {
        this.notificationsService.query()
        .subscribe((res: ResponseWrapper) => {
            this.notifications = res.json;
        }, (res: ResponseWrapper) => this.onError(res.json));
        for (j = 0; j < 100000; j++) {
            i = i;
        }
        i = i-1;
    }*/

  }

  routeToNotifications(id: number) {
    if (id !== undefined) {
      this.notificationsService.find(id).subscribe((res) => {
        this.notification = res;
        this.notification.status = false;
        /*this.subscribeToSaveResponse(
          this.notificationsService.update(this.notification));*/
      });

    }
  }

  // private subscribeToSaveResponse(result: Observable<Notifications>) {
  //   result.subscribe((res: Notifications) =>
  //     this.onSaveSuccess(res), (res: Response) => this.onSaveError());
  // }

  // private onSaveSuccess(result: Notifications) {
  //   // this.router.navigate([result.stateUrl]);
  // }

  changeRoute() {
    console.log('changing rout');
    this.router.navigate(['/']);
  }

  private onSaveError() {
  }

  // private onError(error: any) {
  //   this.jhiAlertService.error(error.message, null, null);
  // }
}
