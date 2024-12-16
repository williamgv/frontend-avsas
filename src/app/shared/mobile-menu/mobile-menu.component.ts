import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent  implements OnInit{
  public showServicesMenu:boolean = false;
  public show:boolean = true;
  @Output() close = new EventEmitter<boolean>();
  public lang:any;

  ngOnInit(): void {
    this.lang = navigator.language;
    if (this.lang.slice(0,2) == 'es') {
      this.lang = dataEs
    } else {
      this.lang = dataEn

    }
  }
  closeModal() {
    this.show = false;
    setTimeout(() => {
      this.close.emit(false);
    }, 600);
  };
}
