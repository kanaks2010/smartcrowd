import './vendor.ts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AreaConfigurationModule} from './entities/area-configuration/area-configuration.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import {HomeModule} from './home/home.module';
import {FooterComponent, ProfileService} from './layouts';
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PageRibbonComponent} from './layouts/profiles/page-ribbon.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {AdminModule} from './admin/admin.module';
import {AccountModule} from './account/account.module';
import {LeftmenuModule} from '../leftmenu/leftmenu.module';
import {GlobalValues} from './shared/model/global-values';
import {UserUtil} from './shared/user/user-util';
import {SmartcrowdEntityModule} from './entities/entity.module';
@NgModule({
  declarations: [
    AppComponent, FooterComponent, MainComponent, NavbarComponent,
    PageRibbonComponent, SidebarComponent
  ],
  imports: [
    SmartcrowdEntityModule,
    BrowserModule,
    AppRoutingModule,
    AreaConfigurationModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    HomeModule,
    NgbModule,
    AdminModule,
    AccountModule,
    LeftmenuModule
  ],
  providers: [
    ProfileService,
    GlobalValues,
    UserUtil],
  bootstrap: [MainComponent]
})
export class AppModule { }
