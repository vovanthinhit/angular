/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AuthenService } from './@core/authen.service';
// import { UtilityService } from './@core/utility.service';
// import { NotificationService } from './@core/notification.service';

 import { HttpService } from './@core/http.service';
import { AuthGuard } from './@core/guards/auth.guard';
import { NotificationService } from './@core/notification.service';
import { HttpModule } from '@angular/http';
//import { ToasterNotificationService } from './@core/toaster.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import { NbAuthModule } from '@nebular/auth';

@NgModule({
  declarations: [ AppComponent],
  imports: [
    NbAuthModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    //UtilityService,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
 
    
    
  ],
  exports:[],
  bootstrap: [AppComponent],
  providers: [ToasterService,AuthGuard,AuthenService,HttpService,NotificationService],
})
export class AppModule {
}
