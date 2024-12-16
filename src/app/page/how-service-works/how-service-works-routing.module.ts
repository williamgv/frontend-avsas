import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowServiceWorksComponent } from './how-service-works.component';

const routes: Routes = [
  {
    path:'',
    component: HowServiceWorksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowServiceWorksRoutingModule { }
