import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElipseLoaderRoutingModule } from './elipse-loader-routing.module';
import { ElipseLoaderComponent } from './elipse-loader.component';


@NgModule({
  declarations: [
    ElipseLoaderComponent
  ],
  imports: [
    CommonModule,
    ElipseLoaderRoutingModule
  ],
  exports: [
    ElipseLoaderComponent
  ]
})
export class ElipseLoaderModule { }
