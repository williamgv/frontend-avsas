import { Component, OnInit } from '@angular/core';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public lang:any;
  ngOnInit(): void {

    this.lang = navigator.language;
    if (this.lang.slice(0,2) == 'es') {
      this.lang = dataEs
    } else {
      this.lang = dataEn
    }
  }
}
