import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthenService } from '../@core/authen.service';
import { NotificationService } from '../@core/notification.service';

import { NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

  
export const routes: Routes = [
   { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    NbCheckboxModule,
    NbCardModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NbAuthModule
  ],
  providers: [AuthenService,NotificationService],
  declarations: [LoginComponent]
})
export class LoginModule { }
