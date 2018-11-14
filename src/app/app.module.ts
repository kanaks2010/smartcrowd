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
import {FooterComponent} from './layouts';
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PageRibbonComponent} from './layouts/profiles/page-ribbon.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {AdminModule} from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent, FooterComponent, MainComponent, NavbarComponent,
    PageRibbonComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AreaConfigurationModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    HomeModule,
    NgbModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
