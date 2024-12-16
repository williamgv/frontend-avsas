import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path:"administrative/:id",
    component: ServicesComponent
  },
  {
    path:"personal/:id",
    component: ServicesComponent
  },
  {
    path:"callCenter/:id",
    component: ServicesComponent
  },
  {
    path:"professional/:id",
    component: ServicesComponent
  },
  {
    path:"sales/:id",
    component: ServicesComponent
  },
  {
    path:"digitalMarketing/:id",
    component: ServicesComponent
  },
  {
    path:"eccomerce/:id",
    component: ServicesComponent
  },
  {
    path:"**",
    redirectTo:"administrative/1",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
