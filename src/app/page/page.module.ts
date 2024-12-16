import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { NoticeComponent } from './notice/notice.component';


@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
