import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElipseLoaderComponent } from './elipse-loader.component';

const routes: Routes = [{ path: '', component: ElipseLoaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElipseLoaderRoutingModule { }
