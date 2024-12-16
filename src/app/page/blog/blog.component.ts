import { Component, OnInit } from '@angular/core';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
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
