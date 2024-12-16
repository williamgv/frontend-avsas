import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
