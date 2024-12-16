import { Component, OnInit } from '@angular/core';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';

@Component({
  selector: 'app-how-service-works',
  templateUrl: './how-service-works.component.html',
  styleUrls: ['./how-service-works.component.css']
})
export class HowServiceWorksComponent implements OnInit {
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
