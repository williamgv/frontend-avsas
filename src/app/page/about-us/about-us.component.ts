import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
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
