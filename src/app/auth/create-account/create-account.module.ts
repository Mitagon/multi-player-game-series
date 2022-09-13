import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { NotificationBarModule } from 'src/app/shared/notification-bar/notification-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElipseLoaderModule } from 'src/app/shared/elipse-loader/elipse-loader.module';


@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    NotificationBarModule,
    FormsModule,
    ReactiveFormsModule,
    ElipseLoaderModule
  ]
})
export class CreateAccountModule { }
