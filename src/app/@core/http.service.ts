import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Router} from '@angular/router';
import { AuthenService } from './authen.service';
import { SystemConstants } from './common/system.constants';
//import { NotificationService } from './notification.service';
//import { UtilityService } from './utility.service';
import { MessageContstants } from './common/message.constants';
import { Observable } from 'rxjs/Observable';
SystemConstants

@Injectable()
export class HttpService{
   headers:Headers;
   constructor(private _http:Http,private _router:Router,private _authenService:AuthenService) {
           this.header();
    }
   header(){
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
   }
   get(uri: string) {
 
    return this._http.get(SystemConstants.BASE_API + uri, { headers: this.headers }).map(this.extractData);
  }
  post(uri: string, data?: any) {
   
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  put(uri: string, data?: any) {
   
    return this._http.put(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  delete(uri: string, key: string, id: string) {
   
    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, { headers: this.headers })
      .map(this.extractData);
  }
  deleteWithMultiParams(uri: string, params) {
   
    var paramStr: string = '';
    for (let param in params) {
      paramStr += param + "=" + params[param] + '&';
    }
    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + paramStr, { headers: this.headers })
      .map(this.extractData);

  }
  postFile(uri: string, data?: any) {
 
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers })
      .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      //this._notificationService.printErrorMessage(MessageContstants.LOGIN_AGAIN_MSG);
     // this._utilityService.navigateToLogin();
    }
    else if (error.status == 403) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
    //  this._notificationService.printErrorMessage(MessageContstants.FORBIDDEN);
   //   this._utilityService.navigateToLogin();
    }
    else {
      let errMsg = JSON.parse(error._body).Message;
     //// this._notificationService.printErrorMessage(errMsg);

      return Observable.throw(errMsg);
    }


  }

}