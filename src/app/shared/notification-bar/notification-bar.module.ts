import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationBarRoutingModule } from './notification-bar-routing.module';
import { NotificationBarComponent } from './notification-bar.component';
import { NotificationBarService } from './notification-bar.service';


@NgModule({
  declarations: [
    NotificationBarComponent
  ],
  imports: [
    CommonModule,
    NotificationBarRoutingModule
  ],
  providers: [NotificationBarService],
  exports: [NotificationBarComponent],
})
export class NotificationBarModule { }
