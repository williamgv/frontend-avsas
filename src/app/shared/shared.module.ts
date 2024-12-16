import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FloatingBtnComponent } from './floating-btn/floating-btn.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MobileMenuComponent,
    FooterComponent,
    FloatingBtnComponent,
    TestimonialsComponent,
  ],
  exports: [
    HeaderComponent,
    MobileMenuComponent,
    FooterComponent,
    FloatingBtnComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
