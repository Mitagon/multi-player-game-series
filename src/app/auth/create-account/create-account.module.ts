import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { NotificationBarModule } from 'src/app/shared/notification-bar/notification-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    NotificationBarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateAccountModule { }
