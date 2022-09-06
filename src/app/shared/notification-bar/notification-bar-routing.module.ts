import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationBarComponent } from './notification-bar.component';

const routes: Routes = [{ path: '', component: NotificationBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationBarRoutingModule { }
