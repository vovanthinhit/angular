
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpModule , Http, Headers, RequestOptions, Response } from '@angular/http';
import { UrlConstants} from '../@core/common/url.constants';
import { AuthenService } from '../@core/authen.service';

import { MessageContstants } from '../@core/common/message.constants';

import 'style-loader!angular2-toaster/toaster.css';
import { Injectable } from '@angular/core';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { NotificationService } from './../@core/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']






  
})

@Injectable()
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  user:any = {};
  loading:any=false;
  constructor(private routes:Router,private authenService:AuthenService,private _http: Http,private notificationService:NotificationService) {
     
    }
    
  ngOnInit() {
    //
   
    }
  login() {
   
    this.loading = true;
 
     this.authenService.login(this.user.email, this.user.password).subscribe(data => {
     this.notificationService.printErrorMessage("test");
     this.loading=false;
      this.routes.navigate([UrlConstants.HOME]);
    }, error => {
     // 
     /// this.loading = false;
    });
  }

}
