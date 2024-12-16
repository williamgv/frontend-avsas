import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowServiceWorksRoutingModule } from './how-service-works-routing.module';
import { HowServiceWorksComponent } from './how-service-works.component';


@NgModule({
  declarations: [
    HowServiceWorksComponent
  ],
  imports: [
    CommonModule,
    HowServiceWorksRoutingModule
  ]
})
export class HowServiceWorksModule { }
