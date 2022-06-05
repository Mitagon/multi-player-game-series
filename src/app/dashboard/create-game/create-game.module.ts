import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGameRoutingModule } from './create-game-routing.module';
import { CreateGameComponent } from './create-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateGameComponent
  ],
  imports: [
    CommonModule,
    CreateGameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateGameModule { }
