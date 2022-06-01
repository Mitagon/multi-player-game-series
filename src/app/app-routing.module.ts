import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) }, { path: 'create-room', loadChildren: () => import('./create-room/create-room.module').then(m => m.CreateRoomModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
