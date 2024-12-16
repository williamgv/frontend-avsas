import { Component, OnInit } from '@angular/core';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public lang:any;
  public showServicesMenu:boolean = false;
  public showMobileMenu:boolean = false;
  ngOnInit(): void {
    this.lang = navigator.language;
    if (this.lang.slice(0,2) == 'es') {
      this.lang = dataEs
    } else {
      this.lang = dataEn

    }
  }


  closeModal(event:any){
    if (!event) {
      this.showMobileMenu = event
    }
  }
}
