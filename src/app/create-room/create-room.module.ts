import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoomRoutingModule } from './create-room-routing.module';
import { CreateRoomComponent } from './create-room.component';


@NgModule({
  declarations: [
    CreateRoomComponent
  ],
  imports: [
    CommonModule,
    CreateRoomRoutingModule
  ]
})
export class CreateRoomModule { }
